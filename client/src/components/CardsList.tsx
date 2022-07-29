import { useEffect, useState } from 'react'
import { IFilter, IStudent, IStudentAdd } from '../graphql/interfaces'
import { useQuery, useMutation } from '@apollo/client'
import { VariantType, useSnackbar } from 'notistack'
import MyCard from './MyCard'
import AddCard from './AddCard'
import EditModalCard from './EditModalCard'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import {
  GET_ALL_STUDENTS,
  CREATE_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
} from './../graphql/queries'
import Modal from '@mui/material/Modal'

interface IProps {
  filters: IFilter
}

export default function CardsList(props: IProps) {
  const { filters } = props

  const [listRef] = useAutoAnimate<HTMLDivElement>()

  const { enqueueSnackbar } = useSnackbar()
  const handleClickVariant = (variant: VariantType, message: String) =>
    enqueueSnackbar(`${message}`, { variant })

  const { data, loading, error, refetch } = useQuery(GET_ALL_STUDENTS, {
    variables: { where: filters },
  })

  const [createStudent] = useMutation(CREATE_STUDENT)
  const [deleteStudent] = useMutation(DELETE_STUDENT)
  const [updateStudent] = useMutation(UPDATE_STUDENT)

  const [students, setStudents] = useState<IStudent[]>([])

  const [editModalOpen, setEditModalOpen] = useState<Boolean>(false)
  const [editStudent, setEditStudent] = useState<IStudent | null>(null)

  useEffect(() => {
    if (!loading && data && data.getStudents) {
      setStudents(data.getStudents)
    }
  }, [loading, data])

  if (loading) return <>'Loading...'</>
  if (error) return <>`Error! ${error.message}`</>

  const handleCloseEditModal = () => {
    setEditModalOpen(false)
    console.log('handleCloseEditModal')
  }

  const handleConfirmEditModal = async (student: IStudent) => {
    try {
      const response = await updateStudent({
        variables: { input: student },
      })
      const { success, message } = response.data.update
      handleClickVariant(success ? 'success' : 'error', message)
      setEditModalOpen(false)
      setEditStudent(null)
      refetch()
    } catch (error) {
      handleClickVariant('error', JSON.stringify(error))
    }
  }

  const addItem = async (student: IStudentAdd) => {
    try {
      if (!student.name) {
        handleClickVariant('error', 'Name is required!')
        return
      }
      if (!student.email) {
        handleClickVariant('error', 'Email is required!')
        return
      }
      if (!student.cpf) {
        handleClickVariant('error', 'CPF is required!')
        return
      }
      const response = await createStudent({
        variables: { input: student },
      })
      const { success, message } = response.data.create
      handleClickVariant(success ? 'success' : 'error', message)
      refetch()
    } catch (error) {
      handleClickVariant('error', JSON.stringify(error))
    }
  }

  const deleteItem = async (id: number) => {
    try {
      const response = await deleteStudent({
        variables: { input: { id } },
      })
      const { success, message } = response.data.delete
      handleClickVariant(success ? 'success' : 'error', message)
      refetch()
    } catch (error) {
      handleClickVariant('error', JSON.stringify(error))
    }
  }

  const editItem = (id: number) => {
    const student = students.find((s) => s.id === id)
    if (student) {
      setEditStudent(student)
      setEditModalOpen(true)
    }
  }

  return (
    <div className="board" ref={listRef}>
      <Modal open={!!editModalOpen} onClose={handleCloseEditModal}>
        <>
          {editStudent && (
            <EditModalCard
              student={editStudent}
              onConfirm={handleConfirmEditModal}
              onClose={handleCloseEditModal}
            />
          )}
        </>
      </Modal>
      <AddCard addItem={addItem} />
      {students.map((student: IStudent) => (
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
