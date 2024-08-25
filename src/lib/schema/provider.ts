import * as v from "valibot";
import type { Provider } from "@supabase/supabase-js";

export const ProviderSchema = v.picklist([
	"discord",
	"google",
	"github",
]) satisfies v.GenericSchema<Provider>;
