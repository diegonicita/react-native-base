import React from 'react'
import { createTheme, ThemeProvider, Button } from '@rneui/themed'
import { Provider } from 'react-redux'
import { store } from './src/redux/store/store'
import { Routes } from './src/routes/Routes'

const theme = createTheme({
  lightColors: {},
  darkColors: {},  
})

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}
