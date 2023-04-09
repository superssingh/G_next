import * as z from 'zod'

export const PostValidator = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  content: z.array(
    z.object({
      html: z.string(),
    })
  ),
  featured_image: z.array(
    z.object({
      url: z.string(),
    })
  ),
  createdAt: z.string(),
  author: z
    .object({
      id: z.string(),
      name: z.string(),
      picture: z
        .object({
          url: z.string(),
        })
        .optional(),
      bio: z.string().optional(),
    })
    .optional(),
})

export type Post = z.infer<typeof PostValidator>
export type Posts = z.infer<typeof PostValidator>[]

const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  featured_image: z.array(
    z.object({
      url: z.string(),
      alt: z.string().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
    })
  ),
  description: z.string(),
})
