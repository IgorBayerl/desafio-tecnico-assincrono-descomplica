export interface IStudent {
  id: number
  name: string
  email: string
  cpf: string
}

export interface IStudentsData {
  students: IStudent[] | []
}

export interface IFilter {
  name?: string
  email?: string
  cpf?: string
}
