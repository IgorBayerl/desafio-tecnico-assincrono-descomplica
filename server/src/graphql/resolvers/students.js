// const { Error } = require('apollo-server-express')

const { Students } = require('../../../database/models')

module.exports = {
  Mutation: {
    async create(root, { input }, context) {
      const responseObj = {
        success: false,
        message: '',
      }
      try {
        const { name, email, cpf } = input

        const newStudents = await Students.create({ name, email, cpf })

        responseObj.message = 'Student created successfully'
        responseObj.success = true
        responseObj.id = newStudents.id
        responseObj.name = newStudents.name
        responseObj.email = newStudents.email
        responseObj.cpf = newStudents.cpf

        return responseObj
      } catch (error) {
        responseObj.message = error.message
        responseObj.success = false

        return responseObj
      }
    },

    async update(root, { input }, context) {
      const responseObj = {
        success: false,
        message: '',
      }
      try {
        const { id, name, email, cpf } = input
        const user = await Students.findOne({ where: { id: id } })

        if (!user) throw Error('User not found')

        const newUser = {
          name: name || user.name,
          email: email || user.email,
          cpf: cpf || user.cpf,
        }

        await Students.update(newUser, {
          where: { id: id },
        })

        responseObj.message = 'User updated successfully'
        responseObj.success = true
        responseObj.id = id
        responseObj.name = newUser.name
        responseObj.email = newUser.email
        responseObj.cpf = newUser.cpf

        return responseObj
      } catch (error) {
        responseObj.message = error.message
        responseObj.success = false

        return responseObj
      }
    },

    async delete(root, { input }, context) {
      const responseObj = {
        success: false,
        message: '',
      }
      try {
        const { id } = input
        const user = await Students.findOne({ where: { id: id } })

        if (!user) throw Error('User not found')

        await user.destroy()

        responseObj.message = 'User deleted successfully'
        responseObj.success = true
        responseObj.id = id
        responseObj.name = user.name
        responseObj.email = user.email
        responseObj.cpf = user.cpf

        return responseObj
      } catch (error) {
        responseObj.message = error.message
        responseObj.success = false

        return responseObj
      }
    },
  },

  Query: {
    async getStudents(root, args, context) {
      if (args && args.where) {
        const { id, name, email, cpf } = args.where

        const where = {}

        if (id) where.id = id
        if (name) where.name = name
        if (email) where.email = email
        if (cpf) where.cpf = cpf

        if (where === {}) return await Students.findAll()

        return await Students.findAll({ where })
      }
      return await Students.findAll()
    },
  },
}
