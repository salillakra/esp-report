import { Hono } from "hono";
import { createBunWebSocket } from "hono/bun";
import type { ServerWebSocket } from "bun";
import { htmlPage } from "./template/app";
import { serveStatic } from "hono/bun";

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

app.use("/public/*", serveStatic({ root: "." }));

app.get("/video", (c) => {
  return c.html(`
    <html>
      <head>
        <title>Live ESP32 Camera Feed</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          body {
            margin: 0;
            background: linear-gradient(135deg, #232526 0%, #414345 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
          }
          .container {
            background: rgba(30, 32, 34, 0.92);
            padding: 2.5rem 2rem 2rem 2rem;
            border-radius: 18px;
            box-shadow: 0 8px 32px 0 #000a, 0 1.5px 8px #0004;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 96vw;
          }
          h1 {
            color: #fff;
            font-size: 2rem;
            margin-bottom: 1.2rem;
            letter-spacing: 1px;
            font-weight: 600;
            text-shadow: 0 2px 8px #0006;
          }
          #live-img {
            max-width: 90vw;
            max-height: 70vh;
            border: 5px solid #3a3a3a;
            border-radius: 12px;
            box-shadow: 0 4px 24px #000b, 0 1.5px 8px #0004;
            background: #181818;
            transition: box-shadow 0.2s;
          }
          #live-img.loading {
            filter: blur(6px) grayscale(0.7) brightness(0.7);
            opacity: 0.7;
          }
          .footer {
            color: #aaa;
            margin-top: 1.5rem;
            font-size: 1rem;
            letter-spacing: 0.5px;
            text-align: center;
            opacity: 0.85;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🌱 ESP32 Live Camera Feed</h1>
          <img id="live-img" src="/public/latest.jpg" alt="Live ESP32 Feed" />
          <div class="footer">
            <span>Last updated: <span id="timestamp">-</span></span>
            <br>
            <span>Powered by ESP32 &amp; Bun 🦄</span>
          </div>
        </div>
        <script>
          const img = document.getElementById('live-img');
          const ts = document.getElementById('timestamp');
          function updateTime() {
            const now = new Date();
            ts.textContent = now.toLocaleTimeString();
          }
          img.addEventListener('load', () => {
            img.classList.remove('loading');
            updateTime();
          });
          img.addEventListener('error', () => {
            img.classList.add('loading');
            ts.textContent = 'No image';
          });
          setInterval(() => {
            img.classList.add('loading');
            img.src = "/public/latest.jpg?t=" + Date.now();
          }, 400);
          updateTime();
        </script>
      </body>
    </html>
  `);
});

// Replace your existing upload-image handler with this:
app.post("/upload-image", async (c) => {
  const contentType = c.req.header("Content-Type");
  const contentLength = c.req.header("Content-Length");

  console.log("📥 Upload request received:");
  console.log("  Content-Type:", contentType);
  console.log("  Content-Length:", contentLength);
  console.log("  Method:", c.req.method);
  console.log("  URL:", c.req.url);

  // Handle direct JPEG upload (from ESP32)
  if (contentType === "image/jpeg") {
    console.log("🔍 Processing as direct JPEG upload...");

    try {
      const buffer = await c.req.arrayBuffer();
      console.log("📊 Received buffer size:", buffer.byteLength);

      // Validate it's actually a JPEG by checking the header
      const uint8Array = new Uint8Array(buffer);
      console.log(
        "🔍 First few bytes:",
        Array.from(uint8Array.slice(0, 10))
          .map((b) => "0x" + b.toString(16).padStart(2, "0"))
          .join(" ")
      );

      if (
        uint8Array.length > 2 &&
        uint8Array[0] === 0xff &&
        uint8Array[1] === 0xd8
      ) {
        console.log("✅ Valid JPEG header detected");

        // Also check for JPEG end marker (optional but good practice)
        if (
          uint8Array[uint8Array.length - 2] === 0xff &&
          uint8Array[uint8Array.length - 1] === 0xd9
        ) {
          console.log("✅ Valid JPEG end marker detected");
        }

        await Bun.write("public/latest.jpg", Buffer.from(buffer));
        console.log("✅ Image saved to public/latest.jpg");
        return c.text("Uploaded!");
      } else {
        console.log("❌ Invalid JPEG header");
        return c.text("Invalid JPEG format", 400);
      }
    } catch (error) {
      console.error("❌ Error processing JPEG:", error);
      return c.text("Server error processing image", 500);
    }
  }

  // Handle multipart form data upload (from web forms)
  else if (contentType && contentType.includes("multipart/form-data")) {
    console.log("🔍 Processing as multipart form data...");

    try {
      const body = await c.req.parseBody({ all: true });
      let file = body["image"];

      // Handle if file is an array (multiple files uploaded)
      if (Array.isArray(file)) {
        file = file[0];
      }

      if (
        !file ||
        typeof file !== "object" ||
        typeof (file as File).type !== "string" ||
        (file as File).type !== "image/jpeg"
      ) {
        console.log("❌ Invalid file in multipart data");
        return c.text("Invalid image", 400);
      }

      const buffer = await (file as File).arrayBuffer();
      await Bun.write("public/latest.jpg", Buffer.from(buffer));
      console.log(
        "✅ Received image from form and saved to /public/latest.jpg"
      );
      return c.text("Uploaded!");
    } catch (error) {
      console.error("❌ Error processing multipart:", error);
      return c.text("Server error processing form", 500);
    }
  } else {
    console.log("❌ Unsupported content type:", contentType);
    return c.text(
      "Unsupported content type. Expected 'image/jpeg' or 'multipart/form-data'",
      400
    );
  }
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
