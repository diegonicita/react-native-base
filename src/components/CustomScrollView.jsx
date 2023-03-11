import React from 'react'
import { StyleSheet, ScrollView, Platform } from 'react-native'

export const CustomScrollView = ({children}) => {
  return (
    <ScrollView style={styles.scrollView}>
        {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    scrollView: {
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
          maxWidth: '100%',
          alignSelf: 'center',          
        }
      })
    }
  })
  
