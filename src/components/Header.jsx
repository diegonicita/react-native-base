import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from '@rneui/themed'

export const Header = ({ title }) => {
  return <Text style={styles.text}> {title} </Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
    fontWeight: 'bold'
  }
})
