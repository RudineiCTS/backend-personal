import Fastify from 'fastify'
import { prisma } from './prisma'

const app = Fastify()

app.get('/', async (request, reply) => {
  const professores = await prisma.professor.findMany()
  return professores
})

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`🚀 Server listening at ${address}`)
})
