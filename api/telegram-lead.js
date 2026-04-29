const { sendTelegramLead } = require("../server/telegram");

const parseBody = (body) => {
  if (!body) return {};
  if (typeof body === "object") return body;
  if (typeof body === "string") return JSON.parse(body);
  return {};
};

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method === "GET") {
    res.status(200).json({
      ok: true,
      service: "telegram-lead",
      botTokenConfigured: Boolean(process.env.TELEGRAM_BOT_TOKEN),
      chatIdConfigured: Boolean(process.env.TELEGRAM_CHAT_ID),
    });
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
    res.status(error.statusCode || 500).json({
      error: error.message || "Lead delivery failed",
      code: error.code || "LEAD_DELIVERY_FAILED",
    });
  }
};
