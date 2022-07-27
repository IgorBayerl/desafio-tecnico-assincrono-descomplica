const express = require('express')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./graphql/schemas')
const resolvers = require('./graphql/resolvers')
const context = require('./graphql/context')

require('dotenv').config()
const port = process.env.PORT || 3001

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

  app.listen(port, () => console.log(`🚀 Listening on port ${port}`))
}

main().catch((err) => console.error(err))
