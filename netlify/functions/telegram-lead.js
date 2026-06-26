const { sendTelegramLead } = require("../../server/telegram");

const allowedOrigins = [
  process.env.ALLOWED_ORIGIN,
  "https://kayilimgroup.com",
  "https://www.kayilimgroup.com",
].filter(Boolean);

const buildHeaders = (origin) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
  if (allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Vary"] = "Origin";
  }
  return headers;
};

const json = (statusCode, body, origin) => ({
  statusCode,
  headers: buildHeaders(origin),
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  const origin = (event.headers && (event.headers.origin || event.headers.Origin)) || "";

  if (event.httpMethod === "OPTIONS") {
    return json(204, {}, origin);
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" }, origin);
  }

  try {
    await sendTelegramLead(JSON.parse(event.body || "{}"));
    return json(200, { ok: true }, origin);
  } catch (error) {
    // Keep detail in the function logs only — never leak internal state to the client.
    console.error("Telegram lead error:", error.message);
    return json(error.statusCode || 500, { error: "Lead delivery failed" }, origin);
  }
};
