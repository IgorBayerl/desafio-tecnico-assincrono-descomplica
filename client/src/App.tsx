import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import Filter from './components/Filter'
import CardsList from './components/CardsList'

import { IFilter } from './graphql/interfaces'

export default function App() {
  const [filters, setFilters] = useState<IFilter>({})

  return (
    <Container className="containerMaster" maxWidth="lg">
      <Box sx={{ my: 4 }}>
        {/* <Add /> */}
        <Filter />
        <CardsList filters={filters} />
      </Box>
    </Container>
  )
}
