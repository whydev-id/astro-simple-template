import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Define a `loader` and `schema` for each collection
const blogs = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blogs" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		published: z.date().optional(),
		edited: z.date().optional(),
	}),
});

// Export a single `collections` object to register your collection(s)
export const collections = { blogs };
