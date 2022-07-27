import MyCard from './MyCard'
import { gql, useQuery } from '@apollo/client'
import { IFilter, IStudent, IStudentsData } from '../graphql/interfaces'
import Stack from '@mui/material/Stack';


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

const mockData:any = {
  getStudents: [
    {
      id: 1,
      name: 'igor',
      email: 'igor@gmail.com',
      cpf: '12152521960',
    },
    {
      id: 2,
      name: 'aaa',
      email: 'aaa@gmail.com',
      cpf: '111111111',
    },
    {
      id: 1,
      name: 'igor',
      email: 'igor@gmail.com',
      cpf: '12152521960',
    },
    {
      id: 2,
      name: 'aaa',
      email: 'aaa@gmail.com',
      cpf: '111111111',
    },
    {
      id: 1,
      name: 'igor',
      email: 'igor@gmail.com',
      cpf: '12152521960',
    },
    {
      id: 2,
      name: 'aaa',
      email: 'aaa@gmail.com',
      cpf: '111111111',
    },
    {
      id: 1,
      name: 'igor',
      email: 'igor@gmail.com',
      cpf: '12152521960',
    },
    {
      id: 2,
      name: 'aaa',
      email: 'aaa@gmail.com',
      cpf: '111111111',
    },
    {
      id: 1,
      name: 'igor',
      email: 'igor@gmail.com',
      cpf: '12152521960',
    },
    {
      id: 2,
      name: 'aaa',
      email: 'aaa@gmail.com',
      cpf: '111111111',
    }
  ]
} 

export default function CardsList(props: IProps) {
  const { filters } = props

  // const { loading, error, data } = useQuery(GET_ALL_STUDENTS, {
  //   variables: { where: filters },
  // })

  // if (loading) return <>'Loading...'</>
  // if (error) return <>`Error! ${error.message}`</>

  const data = mockData

  const deleteItem = () => {
    console.log('deleteItem')
  }

  const editItem = () => {
    console.log('editItem')
  }

  return (
    <div className="board">
      {data.getStudents.map((student: IStudent) => (
        <MyCard deleteItem={deleteItem} editItem={editItem} key={student.id} student={student} />
      ))}
    </div>
  )
}
