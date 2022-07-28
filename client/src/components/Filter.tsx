import { Button, Input } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useCallback, useState } from 'react'
import { IStudentFilter } from '../graphql/interfaces'

interface IProps {
  cbFilters: (filter: IStudentFilter) => void
}

export default function Filter(props: IProps) {
  const { cbFilters } = props

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')

  const handleSubmit = useCallback(() => {
    cbFilters({
      name,
      email,
      cpf,
    })
  }, [cbFilters, name, email, cpf])

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h6" component="h6">
        Filters
      </Typography>
      <Input
        sx={{ mb: 1.5, width: '100%' }}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSubmit()
          }
        }}
      ></Input>
      <br />
      <Input
        sx={{ mb: 1.5, width: '100%' }}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSubmit()
          }
        }}
      ></Input>
      <br />
      <Input
        sx={{ mb: 1.5, width: '100%' }}
        placeholder="CPF"
        onChange={(e) => setCpf(e.target.value)}
        value={cpf}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSubmit()
          }
        }}
      ></Input>
      <Button variant="contained" onClick={handleSubmit} color="primary">
        Filter
      </Button>
    </Box>
  )
}
