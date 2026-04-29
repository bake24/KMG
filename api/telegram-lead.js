const { sendTelegramLead } = require("../server/telegram");

const allowedOrigins = [
  process.env.ALLOWED_ORIGIN,
  "http://localhost:3000",
  "http://localhost",
].filter(Boolean);

const setCorsHeaders = (req, res) => {
  const origin = req.headers.origin || "";
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
};

const parseBody = (body) => {
  if (!body) return {};
  if (typeof body === "object") return body;
  if (typeof body === "string") return JSON.parse(body);
  return {};
};

module.exports = async (req, res) => {
  setCorsHeaders(req, res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    await sendTelegramLead(parseBody(req.body));
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Telegram lead error:", error.message);
    res.status(error.statusCode ?? 500).json({
      error: "Lead delivery failed",
    });
  }
};
