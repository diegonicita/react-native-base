import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Card } from '@rneui/themed'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const StadiumClubCard = ({ name, image, capacity, surface, city }) => {
  
  return (
    <Card wrapperStyle={styles.wrapper} containerStyle={styles.container}>
      <Card.Title style={styles.title}>Estadio</Card.Title>
      <View style={styles.imageView}>
        <Card.Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.view}>
        <Text style={styles.text}>
          <Ionicons
            style={styles.icon}
            name="football-outline"
            color="green"
            size={16}
          />
          Estadio: {name}
        </Text>
        <Text style={styles.text}>
          <Ionicons
            style={styles.icon}
            name="earth-outline"
            color="green"
            size={16}
          />
          Ciudad: {city}
        </Text>
        <Text style={styles.text}>
          <Ionicons
            style={styles.icon}
            name="people-outline"
            color="green"
            size={16}
          />
          Capacidad: {capacity} personas
        </Text>
        <Text style={styles.text}>
          <Ionicons
            style={styles.icon}
            name="planet-outline"
            color="green"
            size={16}
          />
          Superficie: {surface}
        </Text>
        <Text style={{ padding: 10 }}></Text>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#2089dc55',
    borderRadius: 5
  },
  wrapper: {},
  iconFavorite: {
    padding: 5,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 100
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    margin: 25,
    marginTop: 10,
    borderRadius: 5
  },
  text: {
    textAlign: 'center',
    lineHeight: 25
  }
})
