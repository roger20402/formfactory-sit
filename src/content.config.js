import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.object({
      zh: z.string(),
      en: z.string().optional(),
    }),

    client: z.string(),

    date: z.date(),

    disciplines: z.array(z.string()),
    categories:  z.array(z.string()),

    shortDescription: z.object({
      zh: z.string(),
      en: z.string().optional(),
    }),

    credits: z.object({
      zh: z.string().optional(),
      en: z.string().optional(),
    }).optional(),

    heroImage: z.string(),
    revealImage: z.string().optional(),

    // Four media categories — all optional, all arrays
    showreel: z.array(z.object({
      type: z.enum(["image", "video", "instagram"]),
src: z.string(),
orientation: z.enum(["horizontal", "vertical", "square"]).optional(),
caption: z.string().optional(),
    })).optional(),

    stills: z.array(z.object({
      type: z.enum(["image", "video", "instagram"]),
src: z.string(),
orientation: z.enum(["horizontal", "vertical", "square"]).optional(),
caption: z.string().optional(),
    })).optional(),

    finalWork: z.array(z.object({
      type: z.enum(["image", "video", "instagram"]),
src: z.string(),
orientation: z.enum(["horizontal", "vertical", "square"]).optional(),
caption: z.string().optional(),
    })).optional(),

    rnd: z.array(z.object({
      type: z.enum(["image", "video", "instagram"]),
src: z.string(),
orientation: z.enum(["horizontal", "vertical", "square"]).optional(),
caption: z.string().optional(),
    })).optional(),

    links: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
    })).optional(),

    featured: z.boolean().default(false),
    popularity: z.number().default(0),
    
    published: z.boolean().default(true),

     testField: z.string().optional(),
  }),
});

export const collections = { projects };