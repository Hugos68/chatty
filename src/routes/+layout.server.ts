export const load = async (event) => {
	const session = await event.locals.safeGetSession();

	return {
		session: session.session,
		user: session.user,
		cookies: event.cookies.getAll(),
	};
};
