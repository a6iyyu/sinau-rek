import { defineCollection, z } from "astro:content";

export const collections = {
  "blog": defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().trim().min(1, { message: "Title must be at least 1 character!" }).max(200, { message: "Title must be at most 125 characters!" }),
      description: z.string().trim().min(1, { message: "Description must be at least 1 character!" }).max(300, { message: "Description must be at most 200 characters!" }),
      image: z.string().optional(),
      date: z.date({ message: "Invalid date!" }).refine(date => date <= new Date(), { message: "Date can't be in the future!" }),
      author: z.string().trim().min(1, { message: "Author must be at least 1 character!" }).max(125, { message: "Author must be at most 125 characters!" }).regex(/^[A-Za-z\s]+$/, { message: "Author can only contain letters!" }),
    }),
  }),
};