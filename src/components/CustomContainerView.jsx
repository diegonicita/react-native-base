import React from 'react'
import { SafeAreaView, StyleSheet, Platform } from 'react-native'

export const CustomContainerView = ({children}) => {
  return (
    <SafeAreaView style={styles.view}>
        {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    view: {
      flex: 1,
      ...Platform.select({
        ios: {
          alignSelf: 'auto'
        },
        android: {
          alignSelf: 'auto'
        },
        default: {
          width: '100%',
          maxWidth: 640,
          alignSelf: 'center'
        }
      })
    }
  })
  
