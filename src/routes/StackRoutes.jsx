import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home/Home'
import { ExploreV2 } from '../screens/Explore/ExploreV2'
import { Club } from '../screens/Explore/Club'
import { Player } from '../screens/Explore/Player'
import { MyClub } from '../screens/MyClub/MyClub'
import { Login } from '../screens/Auth/Login'
import { Register } from '../screens/Auth/Register'
import { ThemeButton } from '../components/ThemeButton'

const Stack = createNativeStackNavigator()

const options = { headerStyle: {}, headerRight: () => <ThemeButton /> }

export const StackRoutesHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={options} name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export const StackRoutesExplore = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={options}
        name="Explore"
        component={ExploreV2}
      />
      <Stack.Screen
        options={options}
        name="Player"
        component={Player}
      />
      <Stack.Screen
        options={options}
        name="Club"
        component={Club}
      />
    </Stack.Navigator>
  )
}

export const StackRoutesMyClub = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={options}
        name="MyClub"
        component={MyClub}
      />
      <Stack.Screen
        options={options}
        name="Player"
        component={Player}
      />
      <Stack.Screen
        options={options}
        name="Club"
        component={Club}
      />
    </Stack.Navigator>
  )
}

export const StackRoutesAuth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={options}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={options}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  )
}