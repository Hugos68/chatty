import {
	PUBLIC_SUPABASE_ANON_KEY,
	PUBLIC_SUPABASE_URL,
} from "$env/static/public";
import { createServerClient } from "@supabase/ssr";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = (request) => {
	request.event.locals.supabase = createServerClient(
		PUBLIC_SUPABASE_URL,
		PUBLIC_SUPABASE_ANON_KEY,
		{
			cookies: {
				getAll: () => {
					return request.event.cookies.getAll();
				},
				setAll: (cookies) => {
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
	return request.resolve(request.event, {
		filterSerializedResponseHeaders(name) {
			return name === "content-range" || name === "x-supabase-api-version";
		},
	});
};
