const { sendTelegramLead } = require("../server/telegram");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    await sendTelegramLead(req.body || {});
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message || "Lead delivery failed" });
  }
};
