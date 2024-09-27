import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: z.object({
       title: z.string().trim().min(1, { message: "Title must be at least 1 character!" }).max(125, { message: "Title must be at most 125 characters!" }),
       description: z.string().trim().min(1, { message: "Title must be at least 1 character!" }).max(200, { message: "Title must be at most 200 characters!" }),
       image: z.string().optional(),
       category: z.enum(["Psikologi", "Pendidikan"]),
    }),
  }),
};