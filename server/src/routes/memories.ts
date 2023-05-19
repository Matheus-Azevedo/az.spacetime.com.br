import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function memoriesRoutes(app: FastifyInstance) {
  app.addHook('preHandler', async (request: FastifyRequest) => {
    await request.jwtVerify()
  })

  app.get('/memories', async (request: FastifyRequest) => {
    const memories = await prisma.memory.findMany({
      where: {
        userId: request.user.sub,
      },
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

  app.get(
    '/memories/:id',
    async (request: FastifyRequest, reply: FastifyReply) => {
      const paramsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = paramsSchema.parse(request.params)

      const memory = await prisma.memory.findUniqueOrThrow({
        where: {
          id,
        },
      })

      if (!memory.isPublic && memory.userId !== request.user.sub) {
        return reply.status(401).send()
      }

      return memory
    },
  )

  app.post('/memories', async (request: FastifyRequest) => {
    const bodySchema = z.object({
      coverUrl: z.string().url(),
      content: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { coverUrl, content, isPublic } = bodySchema.parse(request.body)

    const memory = await prisma.memory.create({
      data: {
        userId: request.user.sub,
        coverUrl,
        content,
        isPublic,
      },
    })
    return memory
  })

  app.put(
    '/memories/:id',
    async (request: FastifyRequest, reply: FastifyReply) => {
      const paramsSchema = z.object({
        id: z.string().uuid(),
      })
      const bodySchema = z.object({
        coverUrl: z.string().url(),
        content: z.string(),
        isPublic: z.coerce.boolean().default(false),
      })

      const { id } = paramsSchema.parse(request.params)
      const { coverUrl, content, isPublic } = bodySchema.parse(request.body)

      let memory = await prisma.memory.findUniqueOrThrow({
        where: {
          id,
        },
      })

      if (!memory.isPublic && memory.userId !== request.user.sub) {
        return reply.status(401).send()
      }

      memory = await prisma.memory.update({
        where: {
          id,
        },
        data: {
          userId: request.user.sub,
          coverUrl,
          content,
          isPublic,
        },
      })
      return memory
    },
  )

  app.delete(
    '/memories/:id',
    async (request: FastifyRequest, reply: FastifyReply) => {
      const paramsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = paramsSchema.parse(request.params)

      const memory = await prisma.memory.findUniqueOrThrow({
        where: {
          id,
        },
      })

      if (!memory.isPublic && memory.userId !== request.user.sub) {
        return reply.status(401).send()
      }

      await prisma.memory.delete({
        where: {
          id,
        },
      })
    },
  )
}
