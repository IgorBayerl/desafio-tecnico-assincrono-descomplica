import { gql } from '@apollo/client'

export const GET_ALL_STUDENTS = gql`
  query ($where: GetStudentsInput) {
    getStudents(where: $where) {
      id
      name
      email
      cpf
    }
  }
`

export const CREATE_STUDENT = gql`
  mutation create($input: CreateInput!) {
    create(input: $input) {
      message
      success
      id
      name
      email
      cpf
    }
  }
`

export const DELETE_STUDENT = gql`
  mutation delete($input: DeleteInput!) {
    delete(input: $input) {
      message
      success
    }
  }
`

export const UPDATE_STUDENT = gql`
  mutation update($input: UpdateInput!) {
    update(input: $input) {
      message
      success
      id
      name
      email
      cpf
    }
  }
`
