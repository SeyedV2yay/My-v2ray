export default {
  async fetch(request) {
    return new Response("My V2Ray Worker is running!", {
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    });
  }
}
