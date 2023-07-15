import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { PaginationPage } from './PaginationPage'

ReactDOM.render(
  <ThemeProvider>
    <CSSReset />
    <PaginationPage />
  </ThemeProvider>,
  document.getElementById('root')
)
