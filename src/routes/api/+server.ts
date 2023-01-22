function notFound(): Response {
	return new Response('Not Found', { status: 404 });
}

const POST = notFound;
const PUT = notFound;
const PATCH = notFound;
const DELETE = notFound;
const GET = notFound;

export { PUT, PATCH, POST, DELETE, GET };
