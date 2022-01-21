<script context="module">
  // Server side, before rendering
  export const prerender = true;

  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ fetch }) {
    const response = await fetch('/api/v1/example');
    const { message } = await response.json();

    return {
      props: {
        message,
      },
    };
  }
</script>

<script>
  // Client side, after rendering
  export let message;
</script>

<h1>{message}</h1>
