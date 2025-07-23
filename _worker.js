export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const dataUrl = new URL('/data.txt', url);
    
    // Fetch `data.txt` regardless of what path is requested
    const response = await fetch(dataUrl.toString(), request);

    // If data.txt exists, serve it as plain text
    if (response.ok) {
      return new Response(await response.text(), {
        headers: { "Content-Type": "text/plain" }
      });
    }

    return new Response("data.txt not found", { status: 404 });
  }
}
