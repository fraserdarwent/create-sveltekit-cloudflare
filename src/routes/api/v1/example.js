/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ body, params }) {
  return {
    body: { message: 'Hello, My SvelteKit World!!' },
  };
}
