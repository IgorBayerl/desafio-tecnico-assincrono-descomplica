import Card from './Card'
import { gql, useQuery } from '@apollo/client'
import { IFilter, IStudent, IStudentsData } from '../graphql/interfaces'

interface IProps {
  filters: IFilter
}

const GET_ALL_STUDENTS = gql`
  query ($where: GetStudentsInput) {
    getStudents(where: $where) {
      id
      name
      email
      cpf
    }
  }
`

export default function CardsList(props: IProps) {
  const { filters } = props

  const { loading, error, data } = useQuery(GET_ALL_STUDENTS, {
    variables: { where: filters },
  })

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
