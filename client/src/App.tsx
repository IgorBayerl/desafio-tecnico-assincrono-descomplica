import { useState } from 'react'
import { IFilter } from './graphql/interfaces'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Filter from './components/Filter'
import CardsList from './components/CardsList'

export default function App() {
  const [filters, setFilters] = useState<IFilter>({})
  return (
    <Container className="containerMaster" maxWidth="lg">
      <Box sx={{ my: 4 }}>
        {/* <Add /> */}
        <Filter cbFilters={setFilters} />
        <CardsList filters={filters} />
      </Box>
    </Container>
  )
}
