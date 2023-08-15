import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import '@fontsource/poppins';
import '@fontsource-variable/unbounded';
import theme  from './theme'
import { ChakraProvider } from '@chakra-ui/react';


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
