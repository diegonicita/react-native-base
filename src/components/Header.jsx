import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from '@rneui/themed'
import { useThemeMode } from '@rneui/themed'

export const Header = ({ title }) => {

  const { mode } = useThemeMode()

  return <Text style={styles.text(mode)}> {title} </Text>
}

const styles = StyleSheet.create({
  text: (mode) => ({
    fontSize: 20,
    backgroundColor: mode !== 'dark'?'lightblue':'darkgreen',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
    fontWeight: 'bold'
  })
})
