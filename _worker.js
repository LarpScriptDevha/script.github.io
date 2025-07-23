export default {
  async fetch(request) {
    try {
      // Your existing logic here
      return new Response("Hello world", {
        headers: { "Content-Type": "text/plain" },
      });
    } catch (error) {
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};
