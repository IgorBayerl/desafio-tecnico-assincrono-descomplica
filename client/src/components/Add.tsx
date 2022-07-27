import { Typography, Input } from '@mui/material'

export default function Add() {
  return (
    <div>
      <Input placeholder="Name"></Input>
      <br />
      <Input placeholder="Email"></Input>
      <br />
      <Input placeholder="CPF"></Input>
      <Typography variant="h4" component="h1" gutterBottom>
        Add
      </Typography>
      <Typography variant="body1" component="p">
        Add a new student.
      </Typography>
    </div>
  )
}
