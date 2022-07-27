import { IStudent } from '../graphql/interfaces'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
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
        {/* <Button size="small">Edit</Button> */}
        <Tooltip title="Delete">
          <IconButton
            onClick={() => deleteItem(student.id)}
            color="error"
            aria-label="upload picture"
            component="label"
          >
            {/* <input hidden accept="image/*" type="file" /> */}
            <Delete />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton
            onClick={() => editItem(student.id)}
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <Edit />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  )
}

// <div>
/* <Typography variant="h5" component="h2">
        {student.name}
      </Typography>
      <Typography variant="body1">{student.email}</Typography>
      <Typography variant="body1">{student.cpf}</Typography> */
// </div>
