import React from 'react'
import { createTheme, ThemeProvider } from '@rneui/themed'
import { Provider } from 'react-redux'
import { store } from './src/redux/store/store'
import { TabRoutes } from './src/routes/TabRoutes'

const theme = createTheme({
  lightColors: {
    primary: '#ffe4b5',
    secondary: 'red',
    background: '#ffe4b5',
    white: '#fff2c5',
    black: 'black'
  },
  darkColors: {
    primary: '#000',
    secondary: 'blue',
    background: 'black',
    white: 'black',
    black: 'white'
  },
  mode: 'light'
})

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <TabRoutes />
      </ThemeProvider>
    </Provider>
  )
}
