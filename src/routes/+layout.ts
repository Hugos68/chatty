import {
	PUBLIC_SUPABASE_ANON_KEY,
	PUBLIC_SUPABASE_URL,
} from "$env/static/public";
import {
	createBrowserClient,
	createServerClient,
	isBrowser,
} from "@supabase/ssr";

export const load = async (event) => {
	event.depends("supabase:auth");

	const supabase = isBrowser()
		? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
				global: {
					fetch,
				},
			})
		: createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
				global: {
					fetch,
				},
				cookies: {
					getAll() {
						return event.data.cookies;
					},
				},
			});

	const session = await supabase.auth.getSession();

	return {
		supabase: supabase,
		session: session.data.session,
	};
};
