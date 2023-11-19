import { defineCollection, z } from 'astro:content';

const neues = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		src: z.string().optional(),
		width: z.string(),
		height: z.string(),
	}),
});

export const collections = { neues };
