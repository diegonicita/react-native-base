import React, { useEffect } from 'react'
import { Explore } from '../screens/Explore/Explore'
import { Home } from '../screens/Home/Home'
import { Login } from '../screens/Auth/Login'
import { MyClub } from '../screens/MyClub/MyClub'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { configTab } from '../screens/_config/config'

const Tab = createBottomTabNavigator()

export const TabRoutes = () => {

  return (
      <Tab.Navigator>      
        <Tab.Screen          
          name={configTab.name.tab1}
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: configTab.name.tab1,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={configTab.icon.tab1} color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name={configTab.name.tab2}
          component={Explore}
          options={{       
            headerShown: false,                
            tabBarLabel: configTab.name.tab2,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={configTab.icon.tab2} color={color} size={size} />
            ),            
          }}
        />
        <Tab.Screen
          name={configTab.name.tab3}
          component={MyClub}
          options={{
            headerShown: false,
            tabBarLabel: configTab.name.tab3,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={configTab.icon.tab3} color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name={configTab.name.tab4}
          component={Login}
          options={{
            headerShown: false,
            tabBarLabel: configTab.name.tab4,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={configTab.icon.tab4} color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>   
  )
}
