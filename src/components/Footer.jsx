import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '@rneui/themed'

export const Footer = ({ title }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.wrapper}>
        <Text style={styles.copyright}>Copyright Diego Nicita</Text>
        <Text style={styles.alcance}>Alcance Tech 2023</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {    
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 40
  },
  wrapper: { flexDirection: 'row', justifyContent: 'space-between' },
  copyright: {    
    fontSize: 12,
    padding: 10,
  },
  alcance: {    
    fontSize: 12,
    padding: 10,
  }
})
