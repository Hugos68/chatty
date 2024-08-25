import { error, redirect } from "@sveltejs/kit";

export const GET = async (event) => {
	const code = event.url.searchParams.get("code");

	if (!code) {
		error(400, "Missing code");
	}

	const exchange_code_response =
		await event.locals.supabase.auth.exchangeCodeForSession(code);

	console.log(exchange_code_response);

	if (exchange_code_response.error !== null) {
		error(
			exchange_code_response.error.status ?? 400,
			exchange_code_response.error.message,
		);
	}

	redirect(303, "/");
};
