const http = require("node:http");
const { sendTelegramLead } = require("./telegram");

const port = Number(process.env.PORT || 3000);

const sendJson = (res, statusCode, body) => {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  });
  res.end(JSON.stringify(body));
};

const readJson = (req) =>
  new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 12_000) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });

    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });

    req.on("error", reject);
  });

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    sendJson(res, 204, {});
    return;
  }

  if (req.url === "/api/health") {
    sendJson(res, 200, { ok: true });
    return;
  }

  if (req.url !== "/api/telegram-lead") {
    sendJson(res, 404, { error: "Not found" });
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  try {
    const payload = await readJson(req);
    await sendTelegramLead(payload);
    sendJson(res, 200, { ok: true });
  } catch (error) {
    const statusCode = error.statusCode || (error.message === "Payload too large" ? 413 : 400);
    sendJson(res, statusCode, { error: error.message || "Lead delivery failed" });
  }
});

server.listen(port, () => {
  console.log(`KMG API is running on port ${port}`);
});
