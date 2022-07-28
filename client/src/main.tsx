import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { SnackbarProvider } from 'notistack'

const client = new ApolloClient({
  uri: 'http://localhost:3001/api',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </ThemeProvider>
    </SnackbarProvider>
  </React.StrictMode>
)
