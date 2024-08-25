import { ProviderSchema } from "$lib/schema/provider";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import * as v from "valibot";

export const actions: Actions = {
	default: async (event) => {
		const form_data = await event.request.formData();
		const provider = v.parse(ProviderSchema, form_data.get("provider"));

		const sign_in_response = await event.locals.supabase.auth.signInWithOAuth({
			provider: provider,
			options: {
				redirectTo: `${event.url.origin}/api/auth/callback`,
			},
		});

		if (sign_in_response.error) {
			return fail(sign_in_response.error.status ?? 400, {
				error: sign_in_response.error.message,
			});
		}

		redirect(303, sign_in_response.data.url);
	},
};
