import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native'
import { InitialPage, Badges, Cards, Profile, Dialogs } from '../'
import { useThemeMode, Button } from '@rneui/themed'
// import { ThemeButton, NavbarButtons } from '../'

const Stack = createNativeStackNavigator()

export const Routes = () => {
  const { setMode, mode } = useThemeMode()

  return (
    <NavigationContainer theme={mode === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={InitialPage}
          options={{
            title: 'Test App',
            headerRight: () => {
              // return (
              //   // <>
              //   //   <NavbarButtons />
              //   // </>
              // )
            }
          }}
        />
        <Stack.Screen
          name="Dialogs"
          component={Dialogs}
          // options={{ title: 'Dialogs', headerRight: () => <ThemeButton /> }}
        />
        <Stack.Screen name="Badges" component={Badges} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Cards" component={Cards} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
