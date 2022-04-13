const fastify = require('fastify')({ logger: true })
const { faker } = require('@faker-js/faker');

fastify.register(require('fastify-cors'), { 
    origin: '*'
})

fastify.get('/numberbox', async (request, reply) => {
    return { 
        title: faker.lorem.words(faker.datatype.number({ min: 1, max: 5 })),
        currentvalue: faker.datatype.number({ min: 0, max: 9 * Math.pow(10, Math.round(Math.random() * 10))}),
        targetvalue: faker.datatype.number({ min: 0, max: 9 * Math.pow(10, Math.round(Math.random() * 10))}),
    }
})

const start = async () => {
    try {
        await fastify.listen(3333)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start();