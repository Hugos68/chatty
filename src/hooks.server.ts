import {
	PUBLIC_SUPABASE_ANON_KEY,
	PUBLIC_SUPABASE_URL,
} from "$env/static/public";
import { i18n } from "$lib/i18n";
import { createServerClient } from "@supabase/ssr";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

export const handle_auth: Handle = async (request) => {
	request.event.locals.supabase = createServerClient(
		PUBLIC_SUPABASE_URL,
		PUBLIC_SUPABASE_ANON_KEY,
		{
			cookies: {
				getAll() {
					return request.event.cookies.getAll();
				},
				setAll(cookies) {
					for (const cookie of cookies) {
						request.event.cookies.set(cookie.name, cookie.value, {
							...cookie.options,
							path: "/",
						});
					}
				},
			},
		},
	);

	request.event.locals.safeGetSession = async () => {
		const session = await request.event.locals.supabase.auth.getSession();

		if (!session.data.session) {
			return {
				session: null,
				user: null,
			};
		}

		const user = await request.event.locals.supabase.auth.getUser();

		if (user.error) {
			return {
				session: null,
				user: null,
			};
		}

		return {
			session: session.data.session,
			user: user.data.user,
		};
	};

	return request.resolve(request.event, {
		filterSerializedResponseHeaders(name) {
			return name === "content-range" || name === "x-supabase-api-version";
		},
	});
};

export const handle_i18n: Handle = i18n.handle();

export const handle = sequence(handle_auth, handle_i18n);
