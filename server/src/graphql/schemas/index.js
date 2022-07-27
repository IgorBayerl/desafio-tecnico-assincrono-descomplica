const { gql } = require('apollo-server-express')

const students = require('./students')

const rootType = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`

module.exports = [rootType, students]
