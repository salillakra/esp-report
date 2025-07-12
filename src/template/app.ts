// HTML Template
export function htmlPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Plant Monitor System</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            animation: {
              "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              "bounce-slow": "bounce 2s infinite",
              "fade-in": "fadeIn 0.5s ease-in-out",
            },
            keyframes: {
              fadeIn: {
                "0%": { opacity: "0", transform: "translateY(10px)" },
                "100%": { opacity: "1", transform: "translateY(0)" },
              },
            },
          },
        },
      };
    </script>
    <style>
      .glass {
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.18);
      }
      .glass-strong {
        background: rgba(255, 255, 255, 0.4);
        box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.4);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
      .value-animate {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .gradient-text {
        background: linear-gradient(135deg, #10b981, #065f46);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .floating {
        animation: float 3s ease-in-out infinite;
      }
      @keyframes float {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      .status-glow {
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
      }
      .feed-container {
        position: relative;
        overflow: hidden;
      }
      .feed-container::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          45deg,
          transparent 49%,
          rgba(255, 255, 255, 0.1) 50%,
          transparent 51%
        );
        animation: scan 2s linear infinite;
        pointer-events: none;
      }
      @keyframes scan {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
    </style>
  </head>
  <body
    class="min-h-screen bg-gradient-to-br from-emerald-50 via-green-100 to-teal-200 p-4"
  >
    <div class="max-w-6xl mx-auto space-y-8">
      <!-- Header -->
      <div class="text-center py-8">
        <h1 class="text-6xl font-extrabold gradient-text mb-4 floating">
          🌱 Smart Plant Monitor
        </h1>
        <p class="text-xl text-green-700 font-medium">
          Real-time IoT Plant Care System
        </p>
        <div class="mt-4 flex justify-center">
          <div
            class="px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-semibold animate-pulse-slow"
          >
            ● Live Monitoring Active
          </div>
        </div>
      </div>

      <!-- Main Dashboard -->
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Live Feed -->
        <div class="lg:col-span-1">
          <div class="glass-strong rounded-3xl p-6 h-full">
            <h3 class="text-xl font-bold text-green-800 mb-4 text-center">
              📹 Live Plant Feed
            </h3>
            <div
              class="feed-container rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100"
            >
              <img
                id="live-img"
                src="/public/latest.jpg"
                alt="Live ESP32 Feed"
                class="w-full h-64 object-cover transition-all duration-300 hover:scale-105"
                onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDMyMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNjAgMTIwTDE0MCA5MEgxODBMMTYwIDEyMFoiIGZpbGw9IiM2QjdCODAiLz4KPHA+Tm8gSW1hZ2UgQXZhaWxhYmxlPC9wPgo8L3N2Zz4='"
              />
            </div>
            <div class="mt-4 text-center">
              <p class="text-sm text-green-600 font-medium">
                📡 Updating every 300ms
              </p>
            </div>
            <!-- Flash Control Button -->
            <div class="mt-4 flex justify-center">
              <button
                id="flash-btn"
                onclick="toggleFlash()"
                class="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                💡 Flash ON
              </button>
            </div>
          </div>
        </div>

        <!-- Sensor Data -->
        <div class="lg:col-span-2">
          <div class="glass-strong rounded-3xl p-6">
            <h3 class="text-2xl font-bold text-green-800 mb-6 text-center">
              📊 Sensor Readings
            </h3>
            <div class="grid grid-cols-2 gap-6">
              <!-- Temperature -->
              <div
                class="glass rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div class="text-4xl mb-2">🌡️</div>
                <p class="text-sm text-green-600 font-medium mb-2">
                  Temperature
                </p>
                <p
                  id="temp"
                  class="text-3xl font-bold text-green-800 value-animate"
                >
                  -- °C
                </p>
                <div class="mt-2 h-2 bg-gray-200 rounded-full">
                  <div
                    id="temp-bar"
                    class="h-full bg-gradient-to-r from-blue-400 to-red-400 rounded-full transition-all duration-500"
                    style="width: 0%"
                  ></div>
                </div>
              </div>

              <!-- Humidity -->
              <div
                class="glass rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div class="text-4xl mb-2">💧</div>
                <p class="text-sm text-green-600 font-medium mb-2">Humidity</p>
                <p
                  id="hum"
                  class="text-3xl font-bold text-green-800 value-animate"
                >
                  -- %
                </p>
                <div class="mt-2 h-2 bg-gray-200 rounded-full">
                  <div
                    id="hum-bar"
                    class="h-full bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full transition-all duration-500"
                    style="width: 0%"
                  ></div>
                </div>
              </div>

              <!-- Soil Moisture -->
              <div
                class="glass rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div class="text-4xl mb-2">🌿</div>
                <p class="text-sm text-green-600 font-medium mb-2">
                  Soil Moisture
                </p>
                <p
                  id="soil"
                  class="text-3xl font-bold text-green-800 value-animate"
                >
                  -- %
                </p>
                <div class="mt-2 h-2 bg-gray-200 rounded-full">
                  <div
                    id="soil-bar"
                    class="h-full bg-gradient-to-r from-red-400 to-green-400 rounded-full transition-all duration-500"
                    style="width: 0%"
                  ></div>
                </div>
              </div>

              <!-- Light -->
              <div
                class="glass rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div class="text-4xl mb-2">🔆</div>
                <p class="text-sm text-green-600 font-medium mb-2">
                  Light Level
                </p>
                <p
                  id="light"
                  class="text-3xl font-bold text-green-800 value-animate"
                >
                  --
                </p>
                <div class="mt-2 h-2 bg-gray-200 rounded-full">
                  <div
                    id="light-bar"
                    class="h-full bg-gradient-to-r from-gray-400 to-yellow-400 rounded-full transition-all duration-500"
                    style="width: 0%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Control Panel -->
      <div class="glass-strong rounded-3xl p-8">
        <h3 class="text-2xl font-bold text-green-800 mb-6 text-center">
          🎛️ Control Panel
        </h3>
        <div class="flex flex-col items-center space-y-6">
          <!-- Pump Status -->
          <div class="text-center">
            <p class="text-lg font-semibold text-green-700 mb-4">
              Water Pump Status
            </p>
            <div class="flex items-center justify-center space-x-4">
              <div class="text-4xl">💧</div>
              <span
                id="pump"
                class="px-6 py-3 rounded-full font-bold text-lg value-animate bg-gray-200 text-gray-700"
              >
                --
              </span>
              <div class="text-4xl">🔧</div>
            </div>
          </div>

          <!-- Control Buttons -->
          <div class="flex flex-wrap justify-center gap-4">
            <button
              onclick="sendCommand('pump_on')"
              class="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full shadow-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              🟢 Turn Pump ON
            </button>
            <button
              onclick="sendCommand('pump_off')"
              class="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white px-8 py-4 rounded-full shadow-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              🔴 Turn Pump OFF
            </button>
          </div>
        </div>
      </div>

      <!-- Chart Section -->
      <div class="glass-strong rounded-3xl p-8">
        <h3 class="text-2xl font-bold text-green-800 mb-6 text-center">
          📈 Historical Data
        </h3>
        <div class="bg-white/30 rounded-2xl p-4">
          <canvas id="historyChart" class="w-full h-64"></canvas>
        </div>
      </div>
    </div>

    <script>
      const ws = new WebSocket("wss://esp-report.onrender.com/ws/dashboard");

      // Live image feed
      const img = document.getElementById("live-img");
      setInterval(() => {
        img.src = "/public/latest.jpg?t=" + Date.now();
      }, 300);

      function animateValue(id, value, suffix = "") {
        const el = document.getElementById(id);
        if (el.innerText !== value + suffix) {
          el.classList.add("bg-yellow-100", "text-green-700", "scale-110");
          setTimeout(() => {
            el.classList.remove("bg-yellow-100", "text-green-700", "scale-110");
          }, 400);
        }
        el.innerText = value + suffix;
      }

      function updateProgressBar(id, value, max = 100) {
        const bar = document.getElementById(id);
        const percentage = Math.min((value / max) * 100, 100);
        bar.style.width = percentage + "%";
      }

      // Chart.js setup
      let chart;
      let chartData = {
        labels: [],
        datasets: [
          {
            label: "Temperature (°C)",
            data: [],
            borderColor: "#10b981",
            backgroundColor: "rgba(16,185,129,0.1)",
            fill: true,
            tension: 0.4,
            yAxisID: "y",
          },
          {
            label: "Humidity (%)",
            data: [],
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59,130,246,0.1)",
            fill: true,
            tension: 0.4,
            yAxisID: "y1",
          },
          {
            label: "Soil Moisture (%)",
            data: [],
            borderColor: "#8b5cf6",
            backgroundColor: "rgba(139,92,246,0.1)",
            fill: true,
            tension: 0.4,
            yAxisID: "y2",
          },
          {
            label: "Light Level",
            data: [],
            borderColor: "#f59e0b",
            backgroundColor: "rgba(245,158,11,0.1)",
            fill: true,
            tension: 0.4,
            yAxisID: "y3",
          },
        ],
      };

      function addDataToChart(entry) {
        const ts = new Date(entry.timestamp || Date.now());
        const label = ts.toLocaleTimeString();

        chartData.labels.push(label);
        chartData.datasets[0].data.push(entry.temp);
        chartData.datasets[1].data.push(entry.hum);
        chartData.datasets[2].data.push(entry.soil);
        chartData.datasets[3].data.push(entry.light);

        // Keep only last 20 points
        if (chartData.labels.length > 20) {
          chartData.labels.shift();
          chartData.datasets.forEach((ds) => ds.data.shift());
        }

        chart.update("none");
      }

      async function fetchHistory() {
        try {
          const res = await fetch("/api/history");
          const history = await res.json();
          history.forEach(addDataToChart);
          chart.update();
        } catch (e) {
          console.log("History fetch failed:", e);
        }
      }

      window.onload = () => {
        const ctx = document.getElementById("historyChart").getContext("2d");
        chart = new Chart(ctx, {
          type: "line",
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: "index", intersect: false },
            plugins: {
              legend: {
                position: "top",
                labels: {
                  font: { size: 12 },
                  usePointStyle: true,
                  pointStyle: "circle",
                },
              },
              title: { display: false },
            },
            scales: {
              x: {
                grid: { color: "rgba(16,185,129,0.1)" },
                ticks: { color: "#065f46" },
              },
              y: {
                type: "linear",
                display: true,
                position: "left",
                title: {
                  display: true,
                  text: "Temperature (°C)",
                  color: "#065f46",
                },
                grid: { color: "rgba(16,185,129,0.1)" },
                ticks: { color: "#065f46" },
              },
              y1: {
                type: "linear",
                display: true,
                position: "right",
                title: {
                  display: true,
                  text: "Humidity (%)",
                  color: "#065f46",
                },
                grid: { drawOnChartArea: false },
                min: 0,
                max: 100,
                ticks: { color: "#065f46" },
              },
              y2: {
                type: "linear",
                display: false,
                position: "right",
                min: 0,
                max: 100,
              },
              y3: {
                type: "linear",
                display: false,
                position: "right",
              },
            },
          },
        });
        fetchHistory();
      };

      ws.onmessage = (event) => {
        let data;
        try {
          data = JSON.parse(event.data);
        } catch (e) {
          return;
        }

        if (
          data.type === "data" ||
          (typeof data.temp !== "undefined" &&
            typeof data.hum !== "undefined" &&
            typeof data.soil !== "undefined" &&
            typeof data.light !== "undefined" &&
            typeof data.pump !== "undefined")
        ) {
          // Update values with animation
          animateValue("temp", data.temp, " °C");
          animateValue("hum", data.hum, " %");
          animateValue("soil", data.soil, " %");
          animateValue("light", data.light, "");

          // Update progress bars
          updateProgressBar("temp-bar", data.temp, 50); // Assuming max temp 50°C
          updateProgressBar("hum-bar", data.hum, 100);
          updateProgressBar("soil-bar", data.soil, 100);
          updateProgressBar("light-bar", data.light, 1000); // Assuming max light 1000

          // Update pump status
          const pumpEl = document.getElementById("pump");
          pumpEl.innerText = data.pump ? "🟢 ON" : "🔴 OFF";
          pumpEl.className = data.pump
            ? "px-6 py-3 rounded-full font-bold text-lg value-animate bg-gradient-to-r from-green-400 to-emerald-500 text-white status-glow"
            : "px-6 py-3 rounded-full font-bold text-lg value-animate bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700";

          // Add to chart
          addDataToChart({ ...data, timestamp: Date.now() });

          // Update flash button state if present
          if (typeof data.flash !== "undefined") {
            updateFlashBtn(data.flash);
          }
        }
      };

      ws.onopen = () => {
        console.log("Connected to WebSocket");
      };

      ws.onclose = () => {
        console.log("Disconnected from WebSocket");
      };

      function sendCommand(cmd) {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ action: cmd }));
        }
      }

      // Flash control logic
      let flashState = false;
      function toggleFlash() {
        flashState = !flashState;
        sendCommand(flashState ? "flash_on" : "flash_off");
        updateFlashBtn(flashState);
      }
      function updateFlashBtn(state) {
        const btn = document.getElementById("flash-btn");
        if (!btn) return;
        if (state) {
          btn.innerText = "💡 Flash OFF";
          btn.classList.remove("from-yellow-400", "to-yellow-600");
          btn.classList.add("from-gray-400", "to-gray-600");
        } else {
          btn.innerText = "💡 Flash ON";
          btn.classList.remove("from-gray-400", "to-gray-600");
          btn.classList.add("from-yellow-400", "to-yellow-600");
        }
        flashState = !!state;
      }
    </script>
  </body>
</html>
`;
}
