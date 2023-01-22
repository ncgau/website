import type { RequestEvent } from './$types';

type RequestBody = {
	name: string;
	email: string;
	message: string;
	page: string;
};
type DataWrappedRequestBody = {
	data: RequestBody;
};

const slackWebhookUrl =
	'https://hooks.slack.com/services/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';

function contactRequestToText(requestBody: RequestBody): string {
	return (
		`*Website Contact* \n` +
		`*From*: ${requestBody.name}\n` +
		`*Regarding*: ${requestBody.page}\n` +
		`*Contact*: ${requestBody.email}\n` +
		`*Message*: ${requestBody.message}`
	);
}

function asResponse(status: number, data: any): Response {
	return new Response(JSON.stringify(data), { status });
}

async function POST({ request }: RequestEvent) {
	const { data } = (await request.json()) as DataWrappedRequestBody;

	const slackResponse = await fetch(slackWebhookUrl, {
		method: 'POST',
		body: JSON.stringify({
			text: contactRequestToText(data)
		})
	});
	return asResponse(slackResponse.status, {
		data: {
			msg: 'done'
		}
	});
}

function notFound(): Response {
	return new Response('NotFound', { status: 404 });
}

const PUT = notFound;
const PATCH = notFound;
const DELETE = notFound;
const GET = notFound;

export { PUT, PATCH, POST, DELETE, GET };
