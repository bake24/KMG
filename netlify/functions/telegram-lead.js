const { sendTelegramLead } = require("../../server/telegram");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

const json = (statusCode, body) => ({
  statusCode,
  headers,
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return json(204, {});
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  try {
    await sendTelegramLead(JSON.parse(event.body || "{}"));
    return json(200, { ok: true });
  } catch (error) {
    return json(error.statusCode || 500, { error: error.message || "Lead delivery failed" });
  }
};
