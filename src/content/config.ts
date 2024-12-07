import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      cover: image(),
      coverAlt: z.string(),
      coverBackground: z.string(),
      tags: z.array(z.string()),
      featured: z.boolean(),
    }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      cover: image(),
      coverAlt: z.string(),
      coverBackground: z.string(),
      tags: z.array(z.string()),
      featured: z.boolean(),
    }),
});

const contactCollection = defineCollection({
  type: "data",
  schema: z.object({
    order: z.number(),
    title: z.string(),
    url: z.string(),
    displayurl: z.string(),
    icon: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
  contact: contactCollection,
};
