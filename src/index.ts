import { Hono } from "hono";
import { createBunWebSocket } from "hono/bun";
import type { ServerWebSocket } from "bun";
import { htmlPage } from "./template/app";

const app = new Hono();

const { upgradeWebSocket, websocket } = createBunWebSocket<ServerWebSocket>();

// Store all connected dashboard clients
const dashboardClients = new Set<ServerWebSocket>();
let esp32Client: ServerWebSocket | null = null;

// Store last 20 data entries
const dataHistory: any[] = [];
const MAX_HISTORY = 20;

app.get("/", async (c) => {
  return c.html(htmlPage());
});

app.post("/echo", async (c) => {
  const body = await c.req.json<{ message: string }>();
  console.log("Received data:", body);
  return c.json({ message: body.message });
});

app.get(
  "/ws/esp32",
  upgradeWebSocket((c) => {
    return {
      onOpen: (event, ws) => {
        console.log("✅ ESP32 connected");
        if (ws.raw) {
          esp32Client = ws.raw;
          ws.raw.send(
            JSON.stringify({
              type: "welcome",
              message: "Welcome ESP32!",
            })
          );
        } else {
          esp32Client = null;
        }
      },
      async onMessage(event, ws) {
        let data: any;
        let msg: string;
        const payload = (event as any).data;
        if (typeof payload === "string") {
          msg = payload;
        } else if (payload instanceof Buffer) {
          msg = payload.toString();
        } else if (typeof Blob !== "undefined" && payload instanceof Blob) {
          msg = await payload.text();
        } else {
          console.error("❌ Unsupported data type from ESP32");
          return;
        }
        try {
          data = JSON.parse(msg);
        } catch (e) {
          console.error("❌ Failed to parse JSON from ESP32");
          return;
        }
        console.log("📥 From ESP32:", data);
        // Save history
        if (
          typeof data.temp !== "undefined" &&
          typeof data.hum !== "undefined" &&
          typeof data.soil !== "undefined" &&
          typeof data.light !== "undefined" &&
          typeof data.pump !== "undefined"
        ) {
          dataHistory.push({ ...data, timestamp: Date.now() });
          if (dataHistory.length > MAX_HISTORY) dataHistory.shift();
        }
        // Forward to all dashboards
        dashboardClients.forEach((client) => {
          if (client.readyState === 1) {
            client.send(JSON.stringify(data));
          }
        });
      },
      onClose: () => {
        console.log("❎ ESP32 disconnected");
        esp32Client = null;
      },
    };
  })
);

app.get(
  "/ws/dashboard",
  upgradeWebSocket((c) => {
    return {
      onOpen: (event, ws) => {
        console.log("✅ Dashboard connected");
        if (ws.raw) {
          dashboardClients.add(ws.raw);
          ws.raw.send(
            JSON.stringify({
              type: "welcome",
              message: "Welcome to the Dashboard!",
            })
          );
        }
      },
      async onMessage(event, ws) {
        let data: any;
        let msg: string;
        const payload = (event as any).data;
        if (typeof payload === "string") {
          msg = payload;
        } else if (payload instanceof Buffer) {
          msg = payload.toString();
        } else if (typeof Blob !== "undefined" && payload instanceof Blob) {
          msg = await payload.text();
        } else {
          console.error("❌ Unsupported data type from dashboard");
          return;
        }
        try {
          data = JSON.parse(msg);
        } catch (e) {
          console.error("❌ Invalid JSON from dashboard");
          return;
        }
        console.log("� From dashboard:", data);
        // 🎯 Relay pump command to ESP32
        if (data.action === "pump_on" || data.action === "pump_off") {
          if (esp32Client && esp32Client.readyState === 1) {
            esp32Client.send(JSON.stringify(data));
            console.log("🔁 Command sent to ESP32:", data);
          } else {
            console.warn("⚠️ ESP32 not connected");
          }
        }
        // You can also broadcast it to all dashboards if needed
        dashboardClients.forEach((client) => {
          if (client.readyState === 1 && ws.raw && client !== ws.raw) {
            client.send(JSON.stringify(data));
          }
        });
      },
      onClose: (event, ws) => {
        if (ws.raw) {
          dashboardClients.delete(ws.raw);
        }
        console.log("❎ Dashboard disconnected");
      },
    };
  })
);

// History API
app.get("/api/history", (c) => {
  return c.json(dataHistory);
});

export default {
  fetch: app.fetch,
  websocket,
};
