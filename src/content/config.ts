import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const neues = defineCollection({
	// Type-check frontmatter using a schema
	loader: glob({ pattern: '**/*.md', base: './src/content/neues' }),
	schema: ({ image }) => z.object({
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
		src: image(),
	}),
});

const veranstaltungen = defineCollection({
	// Type-check frontmatter using a schema
	loader: glob({ pattern: '**/*.md', base: './src/content/veranstaltungen' }),
	schema: z.object({
		title: z.string(),
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		description: z.string().optional(),
	}),
});

const preise = defineCollection({
	// Type-check frontmatter using a schema
	loader: glob({ pattern: '**/*.md', base: './src/content/preise' }),
	schema: z.object({
		title: z.string(),
		pos1: z.string(),
		pos1_num: z.string(),
		pos2: z.string().optional(),
		pos2_num: z.string().optional(),
		pos3: z.string().optional(),
		pos3_num: z.string().optional(),
		badge_top: z.string().optional(),
		badge_bottom: z.string().optional(),
		color: z.string(),
		icon: z.string(),
		index: z.number(),
	}),
});

const zeiten = defineCollection({
	// Type-check frontmatter using a schema
	loader: glob({ pattern: '**/*.md', base: './src/content/zeiten' }),
	schema: z.object({
		title: z.string(),
		pos1: z.string(),
		pos1_num: z.string(),
		pos2: z.string().optional(),
		pos2_num: z.string().optional(),
		pos3: z.string().optional(),
		pos3_num: z.string().optional(),
		badge_top: z.string().optional(),
		badge_bottom: z.string().optional(),
		badge_bottom_link: z.string().optional(),
		color: z.string(),
		icon: z.string(),
		index: z.number(),
	}),
});


export const collections = { neues, veranstaltungen, preise, zeiten };
