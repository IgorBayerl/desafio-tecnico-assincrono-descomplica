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
export interface IStudentUpdate {
  id: number
  name?: string
  email?: string
  cpf?: string
}
export interface IStudentFilter {
  name?: string
  email?: string
  cpf?: string
}

export interface IStudentDelete {
  id: number
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
