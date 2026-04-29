const TELEGRAM_API = "https://api.telegram.org";
const fs = require("node:fs");
const path = require("node:path");

const loadLocalEnv = () => {
  const envPath = path.join(__dirname, "..", ".env");

  if (!fs.existsSync(envPath)) {
    return;
  }

  fs.readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .forEach((line) => {
      const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
      if (!match) return;

      const [, key, rawValue] = match;
      if (!process.env[key]) {
        process.env[key] = rawValue.replace(/^["']|["']$/g, "");
      }
    });
};

loadLocalEnv();

const escapeHtml = (value = "") =>
  String(value)
    .slice(0, 900)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const buildTelegramLeadMessage = (payload = {}) => {
  const firstName = escapeHtml(payload.firstName);
  const lastName = escapeHtml(payload.lastName);
  const email = escapeHtml(payload.email);
  const phone = escapeHtml(payload.phone);
  const experience = escapeHtml(payload.experience);
  const language = escapeHtml(payload.language || "en");
  const page = escapeHtml(payload.page || "Website");

  return {
    firstName,
    phone,
    text: [
      "<b>Website Lead</b>",
      "",
      `<b>Name:</b> ${`${firstName} ${lastName}`.trim()}`,
      `<b>Phone:</b> ${phone}`,
      `<b>Email:</b> ${email || "Not provided"}`,
      `<b>Experience:</b> ${experience || "Not provided"}`,
      `<b>Language:</b> ${language}`,
      `<b>Page:</b> ${page}`,
    ].join("\n"),
  };
};

const sendTelegramLead = async (payload = {}, env = process.env) => {
  const botToken = env.TELEGRAM_BOT_TOKEN || "replace_me";
  const chatId = env.TELEGRAM_CHAT_ID || "replace_me";

  if (payload.company) {
    return { ok: true, skipped: true };
  }

  if (botToken === "replace_me" || chatId === "replace_me") {
    const error = new Error("Telegram credentials are not configured");
    error.statusCode = 500;
    error.code = "TELEGRAM_ENV_MISSING";
    throw error;
  }

  const { firstName, phone, text } = buildTelegramLeadMessage(payload);

  if (!firstName || !phone) {
    const error = new Error("First name and phone are required");
    error.statusCode = 400;
    error.code = "LEAD_REQUIRED_FIELDS_MISSING";
    throw error;
  }

  const response = await fetch(`${TELEGRAM_API}/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    let details = "";
    try {
      const data = await response.json();
      details = data.description ? `: ${data.description}` : "";
    } catch {
      details = "";
    }

    const error = new Error(`Telegram delivery failed${details}`);
    error.statusCode = 502;
    error.code = "TELEGRAM_DELIVERY_FAILED";
    throw error;
  }

  return { ok: true };
};

module.exports = { sendTelegramLead };
