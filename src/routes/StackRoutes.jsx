import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TabRoutes } from './TabRoutes';
import { Splash } from '../screens/Splash'
import { Settings } from '../screens/Settings'
import { Club } from '../screens/Explore/Club'
import { Player } from '../screens/Explore/Player'
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme
  } from '@react-navigation/native'
const Stack = createNativeStackNavigator()
import { useThemeMode } from '@rneui/themed'
import { configStack } from '../screens/_config/config'

export const StackRoutes =() => {

    const { setMode, mode } = useThemeMode()
    useEffect( ()=> {
      setMode('default')
    }, [])  

    return (        
    <NavigationContainer theme={mode === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name={configStack.name.stackTabRoutes} component={TabRoutes} />
        <Stack.Screen name="Splash" component={Splash} />        
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Club" component={Club} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }