import type { Session, SupabaseClient, User } from "@supabase/supabase-js";

declare global {
	namespace App {
		interface Error {}
		interface Locals {
			supabase: SupabaseClient;
		}
		interface PageData {
			supabase: SupabaseClient;
		}
		interface PageState {}
		interface Platform {}
	}
}
