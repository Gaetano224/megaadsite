import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

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

export const submitInterest = createServerFn({ method: "POST" })
  .inputValidator((input) => inputSchema.parse(input))
  .handler(async ({ data }) => {
    if (!data.consent) {
      return { ok: false as const, error: "Devi accettare di ricevere comunicazioni." };
    }

    const { error } = await supabaseAdmin.from("news_interest").insert({
      name: data.name ?? null,
      email: data.email,
      consent: data.consent,
    });

    if (error) {
      console.error("[news_interest] insert error", error);
      return { ok: false as const, error: "Impossibile salvare la richiesta. Riprova." };
    }

    return { ok: true as const };
  });
