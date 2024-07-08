import z from "zod";

const authSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  addressSchema: z.object({
    street: z.string({
      invalid_type_error: "movie tittle must be a string",
      required_error: "movie tittle be required",
    }),
    city: z.string(),
    state: z.string(),
    zip: z.number(),
    country: z.string(),
  }),
  phone: z.string(),
});

export function validateAuth(object) {
  return authSchema.safeParse(object);
}

export function validatePartialAuth(object) {
  return authSchema.partial().safeParse(object);
}
