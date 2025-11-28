export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/^\//, "");
    const apiUrl = `https://api.telegram.org/bot${env.BOT_TOKEN}/${path}${url.search}`;

    const init = {
      method: request.method,
      headers: { "Content-Type": "application/json" },
      body: request.method !== "GET" ? await request.text() : undefined,
    };

    const resp = await fetch(apiUrl, init);
    return new Response(resp.body, {
      status: resp.status,
      headers: resp.headers
    });
  }
};
