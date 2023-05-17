import { FastifyInstance, FastifyRequest } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })
    return memories.map((memory) => ({
      id: memory.id,
      userId: memory.userId,
      coverUrl: memory.coverUrl,
      resume: memory.content.substring(0, 100).concat('...'),
    }))
  })

  app.get('/memories/:id', async (request: FastifyRequest) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })
    return memory
  })

  app.post('/memories', async (request: FastifyRequest) => {
    const bodySchema = z.object({
      userId: z.string().uuid(),
      coverUrl: z.string().url(),
      content: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { userId, coverUrl, content, isPublic } = bodySchema.parse(
      request.body,
    )

    const memory = await prisma.memory.create({
      data: {
        userId,
        coverUrl,
        content,
        isPublic,
      },
    })
    return memory
  })

  app.put('/memories/:id', async (request: FastifyRequest) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })
    const bodySchema = z.object({
      userId: z.string().uuid(),
      coverUrl: z.string().url(),
      content: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { id } = paramsSchema.parse(request.params)
    const { userId, coverUrl, content, isPublic } = bodySchema.parse(
      request.body,
    )

    const memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        userId,
        coverUrl,
        content,
        isPublic,
      },
    })
    return memory
  })

  app.delete('/memories/:id', async (request: FastifyRequest) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)
    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
