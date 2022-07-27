import { IStudent, IStudentAdd } from '../graphql/interfaces'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Input from '@mui/material/Input'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Edit, Delete, Add } from '@mui/icons-material'
import { useState, useCallback } from 'react'
import Tooltip from '@mui/material/Tooltip'

interface IProps {
  addItem: (student: IStudentAdd) => void
}

export default function AddCard(props: IProps) {
  const { addItem } = props

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')

  const clearInputs = useCallback(() => {
    setName('')
    setEmail('')
    setCpf('')
  }, [setName, setEmail, setCpf])

  const handleAdd = useCallback(() => {
    addItem({
      name,
      email,
      cpf,
    })
    clearInputs()
  }, [name, email, cpf, addItem, clearInputs])

  return (
    <Card
      sx={{
        minWidth: 275,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent>
        <Input
          sx={{ mb: 1.5, width: '100%' }}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></Input>
        <br />

        <Input
          sx={{ mb: 1.5, width: '100%' }}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></Input>
        <br />

        <Input
          sx={{ mb: 1.5, width: '100%' }}
          placeholder="CPF"
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
        ></Input>
        <br />
      </CardContent>
      <CardActions>
        {/* <Button size="small">Edit</Button> */}
        <Tooltip title="Clear inputs">
          <IconButton
            onClick={() => clearInputs()}
            color="error"
            aria-label="upload picture"
            component="label"
          >
            {/* <input hidden accept="image/*" type="file" /> */}
            <Delete />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add">
          <IconButton
            onClick={() => handleAdd()}
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <Add />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  )
}
