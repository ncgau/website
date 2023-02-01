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

async function POST({ request, platform }: RequestEvent) {
	const url = platform?.env?.SLACK_URL;
	const { data } = (await request.json()) as DataWrappedRequestBody;
	if (!url) {
		console.log(data);
		return asResponse(200, {
			data: {
				msg: 'done'
			}
		});
	}

	const slackResponse = await fetch(url, {
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
