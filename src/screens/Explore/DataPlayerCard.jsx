import React from 'react'
import { Card, Text } from '@rneui/themed'
import { StyleSheet } from 'react-native'

export const DataPlayerCard = ({ player }) => {
  return (
    <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
      <Text style={styles.text}>Nombres: {player.firstname} </Text>
      <Text style={styles.text}>Apellidos: {player.lastname} </Text>
      <Text style={styles.text}>Edad: {player.age} </Text>
      <Text style={styles.text}>Nacionalidad: {player.nationality}</Text>
      <Text style={styles.text}>Fecha de Nacimiento: {player.birthDate} </Text>
      <Text style={styles.text}>Lugar de Nacimiento: {player.birthPlace} </Text>
      <Text style={styles.text}>
        Pais de Nacimiento: {player.birthCountry}{' '}
      </Text>
      <Text style={styles.text}>Peso: {player.weight}</Text>
      <Text style={styles.text}>Altura: {player.height}</Text>
      <Text style={styles.text}>Lesionado: {player.injured}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({ 
    text: {
        textAlign: 'center',
        lineHeight: 25
      },
    card: {
      borderColor: '#2089dc55',
      borderRadius: 5
    }  
  })
