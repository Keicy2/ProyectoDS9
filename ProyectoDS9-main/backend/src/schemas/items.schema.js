import z from "zod";

const itemSchema = z.object({
  name: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  stock: z.number(),
  image: z.string(),
});

export function validateItem(object) {
  return itemSchema.safeParse(object);
}

export function validatePartialItem(object) {
  return itemSchema.partial().safeParse(object);
}
