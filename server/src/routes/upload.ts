import { randomUUID } from 'crypto'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { createWriteStream } from 'fs'
import { extname, resolve } from 'path'
import { pipeline } from 'node:stream'
import { promisify } from 'util'

const pump = promisify(pipeline)

export async function uploadRoutes(app: FastifyInstance) {
  app.post('/upload', async (request: FastifyRequest, reply: FastifyReply) => {
    const upload = await request.file({
      limits: {
        fileSize: 5_242_880, // 5MB
      },
    })

    if (!upload) {
      return reply.status(400).send()
    }

    const mimeTypeRegex = /^image\/.+|video\/.+$/g
    const isValidFileFormat = mimeTypeRegex.test(upload.mimetype)

    if (!isValidFileFormat) {
      return reply.status(400).send()
    }

    const fileId = randomUUID()
    const extension = extname(upload.filename)

    const fileName = fileId.concat(extension)

    // Aqui entraria em uma ambiente real um serviço de armazenamento de arquivos
    // como o S3 da AWS, gcloud da Google ou o Blob Storage da Azure

    const writeStream = createWriteStream(
      resolve(__dirname, '../../uploads/', fileName),
    )

    await pump(upload.file, writeStream)

    const fullUrl = request.protocol.concat('://').concat(request.hostname)
    const fileUrl = fullUrl.concat('/uploads/').concat(fileName).toString()

    return { fileUrl }
  })
}
