// Cloudflare Worker entry (static assets + lead API).
// /api/telegram-lead is handled here; everything else is served from the
// static assets binding (HTML/CSS/JS), with 404.html for unknown routes.
//
// Lead logic is reused from functions/api/telegram-lead.js (single source of
// truth). esbuild bundles that import at build time — the raw file itself stays
// out of the public site via .assetsignore.
import { onRequestPost, onRequestOptions } from "./functions/api/telegram-lead.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/telegram-lead") {
      if (request.method === "OPTIONS") return onRequestOptions();
      if (request.method === "POST") return onRequestPost({ request, env });
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
