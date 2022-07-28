import { useState, useCallback } from 'react'
import { IStudent } from '../graphql/interfaces'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import { Check, Cancel } from '@mui/icons-material'
import Tooltip from '@mui/material/Tooltip'
import Input from '@mui/material/Input'

interface IProps {
  student: IStudent
  onConfirm: (student: IStudent) => void
  onClose: () => void
}

export default function EditModalCard(props: IProps) {
  const { student, onConfirm, onClose } = props

  const [name, setName] = useState<string>(student.name)
  const [email, setEmail] = useState<string>(student.email)
  const [cpf, setCpf] = useState<string>(student.cpf)

  const handleClickConfirm = useCallback(() => {
    onConfirm({
      id: student.id,
      name,
      email,
      cpf,
    })
  }, [student, name, email, cpf, onConfirm])

  return (
    <Card
      sx={{
        minWidth: 275,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
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
        <Tooltip title="Cancel Edit">
          <IconButton onClick={() => onClose()} color="error" component="label">
            <Cancel />
          </IconButton>
        </Tooltip>
        <Tooltip title="Confirm Edit">
          <IconButton
            onClick={() => handleClickConfirm()}
            color="primary"
            component="label"
          >
            <Check />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  )
}
