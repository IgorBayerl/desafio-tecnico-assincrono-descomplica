import Typography from '@mui/material/Typography/Typography'
import { IStudent } from '../graphql/interfaces'

interface IProps {
  student: IStudent
}

export default function Card(props: IProps) {
  const { student } = props
  return (
    <div>
      <Typography variant="h5" component="h2">
        {student.name}
      </Typography>
      <Typography variant="body1">{student.email}</Typography>
      <Typography variant="body1">{student.cpf}</Typography>
    </div>
  )
}
