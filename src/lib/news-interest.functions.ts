import { createClient } from "@supabase/supabase-js";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const inputSchema = z.object({
  name: z
    .string()
    .trim()
    .max(100, "Il nome deve essere inferiore a 100 caratteri")
    .optional()
    .or(z.literal("").transform(() => undefined)),
  email: z
    .string()
    .trim()
    .email("Email non valida")
    .max(255, "Email troppo lunga"),
  consent: z.boolean(),
});

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  throw new Error(
    "Missing Supabase environment variable(s): SUPABASE_URL and/or SUPABASE_PUBLISHABLE_KEY",
  );
}

const supabaseServer = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export const submitInterest = createServerFn({ method: "POST" })
  .inputValidator((input) => inputSchema.parse(input))
  .handler(async ({ data }) => {
    if (!data.consent) {
      return { ok: false as const, error: "Devi accettare di ricevere comunicazioni." };
    }

    const { error } = await supabaseServer.from("news_interest").insert({
      name: data.name ?? null,
      email: data.email,
      consent: data.consent,
    });

    if (error) {
      console.error("[news_interest] insert error", error);
      return {
        ok: false as const,
        error: "Non siamo riusciti a salvare la tua richiesta. Riprova tra qualche minuto.",
      };
    }

    return { ok: true as const };
  });
