import MyCard from './MyCard'
import AddCard from './AddCard'
import { gql, useQuery } from '@apollo/client'
import {
  IFilter,
  IStudent,
  IStudentsData,
  IStudentAdd,
} from '../graphql/interfaces'
import Stack from '@mui/material/Stack'
import { useCallback } from 'react'

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

  const deleteItem = (id: number) => {
    console.log('deleteItem', id)
  }

  const editItem = (id: number) => {
    console.log('editItem', id)
  }

  const addItem = (student: IStudentAdd) => {
    console.log('editItem', student)
  }

  return (
    <div className="board">
      <AddCard addItem={addItem} />
      {data.getStudents.map((student: IStudent) => (
        <MyCard
          deleteItem={deleteItem}
          editItem={editItem}
          key={student.id}
          student={student}
        />
      ))}
    </div>
  )
}
