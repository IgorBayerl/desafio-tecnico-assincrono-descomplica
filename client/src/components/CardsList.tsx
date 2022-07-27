import Card from './Card'
import { gql, useQuery } from '@apollo/client'
import { IStudent, IStudentsData } from '../graphql/interfaces'

const GET_ALL_STUDENTS = gql`
  query {
    getStudents {
      id
      name
      email
      cpf
    }
  }
`

interface IProps {
  filters: {
    name?: string
    email?: string
    cpf?: string
  }
}

export default function CardsList(props: IProps) {
  const { filters } = props

  const { loading, error, data } = useQuery(GET_ALL_STUDENTS)

  if (loading) return <>'Loading...'</>
  if (error) return <>`Error! ${error.message}`</>

  return (
    <div>
      {data.getStudents.map((student: IStudent) => (
        <Card key={student.id} student={student} />
      ))}
    </div>
  )
}
