import { skeleton } from "@skeletonlabs/skeleton/plugin";
import { catppuccin } from "@skeletonlabs/skeleton/themes";
import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {},
	},

	plugins: [
		skeleton({
			themes: [catppuccin],
		}),
	],
} satisfies Config;
