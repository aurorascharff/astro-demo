import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      author: z.string(),
      title: z.string(),
    }),
});

export const collections = { blog: blog };
