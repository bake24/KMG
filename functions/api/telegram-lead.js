// Cloudflare Pages Function — served at POST /api/telegram-lead
// Self-contained (the Workers runtime has no Node fs/process.env, so we do NOT
// import server/telegram.js here). Secrets come from the Pages "env" binding,
// configured in the Cloudflare dashboard (Settings -> Environment variables).

const TELEGRAM_API = "https://api.telegram.org";

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

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

// CORS preflight (same-origin form does not need it, but keep it robust).
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function onRequestPost({ request, env }) {
  let payload;
  try {
    const raw = await request.text();
    if (raw.length > 12_000) return json(413, { error: "Lead delivery failed" });
    payload = raw ? JSON.parse(raw) : {};
  } catch {
    return json(400, { error: "Lead delivery failed" });
  }

  // Honeypot: bots fill the hidden "company" field. Pretend success, send nothing.
  if (payload.company) return json(200, { ok: true });

  const botToken = env.TELEGRAM_BOT_TOKEN;
  const chatId = env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) {
    // Detail stays in logs only — never leak internal state to the client.
    console.error("Telegram credentials are not configured");
    return json(500, { error: "Lead delivery failed" });
  }

  const { firstName, phone, text } = buildTelegramLeadMessage(payload);
  if (!firstName || !phone) {
    return json(400, { error: "Lead delivery failed" });
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
    console.error("Telegram delivery failed", response.status);
    return json(502, { error: "Lead delivery failed" });
  }

  return json(200, { ok: true });
}
