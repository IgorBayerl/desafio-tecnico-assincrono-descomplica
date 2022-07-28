import { IStudent } from '../graphql/interfaces'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Edit, Delete } from '@mui/icons-material'
import Tooltip from '@mui/material/Tooltip'

interface IProps {
  student: IStudent
  editItem: (id: number) => void
  deleteItem: (id: number) => void
}

export default function MyCard(props: IProps) {
  const { student, editItem, deleteItem } = props
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
        <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
          {student.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {student.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {student.cpf}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Delete">
          <IconButton
            onClick={() => deleteItem(student.id)}
            color="error"
            component="label"
          >
            <Delete />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton
            onClick={() => editItem(student.id)}
            color="primary"
            component="label"
          >
            <Edit />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  )
}
