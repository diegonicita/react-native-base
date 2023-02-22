import React from 'react'
import { createTheme, ThemeProvider } from '@rneui/themed'
import { Provider } from 'react-redux'
import { store } from './src/redux/store/store'
import { StackRoutes } from './src/routes/StackRoutes'
// import { TabRoutes } from './src/routes/TabRoutes'

const theme = createTheme({
  lightColors: {},
  darkColors: {},  
})

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StackRoutes />
      </ThemeProvider>
    </Provider>
  )
}
