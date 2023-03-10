import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StackRoutesHome, StackRoutesExplore, StackRoutesMyClub, StackRoutesAuth } from './StackRoutes'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native'
import { useThemeMode } from '@rneui/themed'

const Tab = createBottomTabNavigator()

export const TabRoutes = () => {

  const { setMode, mode } = useThemeMode()
  useEffect(() => {
   setMode('default')
   }, [])


  return (
    <NavigationContainer theme={mode === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator 
      screenOptions={{
        tabBarStyle: {  },
        }}>      
        <Tab.Screen          
          name="Inicio"
          component={StackRoutesHome}
          options={{
            headerShown: false,
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            )
            }}            
        />
        <Tab.Screen
          name="Explorar"
          component={StackRoutesExplore}
          options={{       
            headerShown: false,                
            tabBarLabel: 'Explorar',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" color={color} size={size} />
            ),            
          }}
        />
        <Tab.Screen
          name="Mi Club"
          component={StackRoutesMyClub}
          options={{
            headerShown: false,
            tabBarLabel: 'Mi Club',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-circle" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={StackRoutesAuth}
          options={{
            headerShown: false,
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>   
    </NavigationContainer>
  )
}
