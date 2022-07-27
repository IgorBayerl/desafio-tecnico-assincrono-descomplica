export interface IStudent {
  id: number
  name: string
  email: string
  cpf: string
}

export interface IStudentAdd {
  name: string
  email: string
  cpf: string
}

export interface IStudentsData {
  students: IStudent[] | []
}

export interface IFilter {
  id?: number
  name?: string
  email?: string
  cpf?: string
}
