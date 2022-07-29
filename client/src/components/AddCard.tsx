import { useState, useCallback } from 'react'
import { IStudentAdd } from '../graphql/interfaces'
import Card from '@mui/material/Card'
import Input from '@mui/material/Input'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { Delete, Add } from '@mui/icons-material'

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
      data-testid="add-card"
      sx={{
        minWidth: 275,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent>
        <Input
          data-testid="name-input"
          sx={{ mb: 1.5, width: '100%' }}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></Input>
        <br />

        <Input
          data-testid="email-input"
          sx={{ mb: 1.5, width: '100%' }}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></Input>
        <br />

        <Input
          data-testid="cpf-input"
          sx={{ mb: 1.5, width: '100%' }}
          placeholder="CPF"
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleAdd()
            }
          }}
        ></Input>
        <br />
      </CardContent>
      <CardActions>
        <Tooltip title="Clear inputs">
          <IconButton
            data-testid="clear-inputs-button"
            onClick={() => clearInputs()}
            color="error"
            component="label"
          >
            <Delete />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add">
          <IconButton
            data-testid="add-button"
            onClick={() => handleAdd()}
            color="primary"
            component="label"
          >
            <Add />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  )
}
