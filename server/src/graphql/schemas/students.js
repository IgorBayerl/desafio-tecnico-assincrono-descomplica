const { gql } = require('apollo-server-express')

module.exports = gql`
  type Student {
    id: Int
    name: String
    email: String
    cpf: String
  }

  extend type Mutation {
    create(input: CreateInput!): CreateResponse
    update(input: UpdateInput!): UpdateResponse
    delete(input: DeleteInput!): DeleteResponse
  }

  extend type Query {
    # getStudents: [Student]
    getStudents(where: GetStudentsInput): [Student]
  }

  input GetStudentsInput {
    id: Int
    name: String
    email: String
    cpf: String
  }

  input CreateInput {
    name: String!
    email: String!
    cpf: String!
  }
  type CreateResponse {
    success: Boolean!
    message: String!
    id: Int
    name: String
    email: String
    cpf: String
  }

  input UpdateInput {
    id: Int!
    name: String
    email: String
    cpf: String
  }

  type UpdateResponse {
    success: Boolean!
    message: String!
    id: Int
    name: String
    email: String
    cpf: String
  }

  input DeleteInput {
    id: Int!
  }

  type DeleteResponse {
    success: Boolean!
    message: String!
    id: Int
    name: String
    email: String
    cpf: String
  }
`
