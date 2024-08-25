import type { Provider } from "@supabase/supabase-js";
import * as v from "valibot";

export const ProviderSchema = v.picklist([
	"discord",
	"google",
	"github",
]) satisfies v.GenericSchema<Provider>;
