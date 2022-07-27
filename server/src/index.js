const express = require('express')
const cors = require('cors')
const { createServer } = require('http')
const { ApolloServer } = require('apollo-server-express')
// const { graphqlHTTP } = require('express-graphql')
const { createConnection } = require('typeorm')

const typeDefs = require('./graphql/schemas')
const resolvers = require('./graphql/resolvers')
const context = require('./graphql/context')

require('dotenv').config()
const port = process.env.PORT || 3001
// const server = require('./api/server')

async function main() {
  const app = express()
  app.use(cors())
  app.use(express.json())

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    introspection: true,
    playground: {
      settings: {
        'schema.polling.enable': false,
      },
    },
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({ app, path: '/api' })

  // app.use('/graphql', graphqlHTTP({
  //     schema: await require('./graphql/schema'),
  //     graphiql: true
  // }));

  app.listen(port, () => console.log(`🚀 Listening on port ${port}`))
}

main().catch((err) => console.error(err))
