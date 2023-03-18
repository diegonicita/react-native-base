import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from '@rneui/themed'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const PhotoPlayerCard = ({ name, photo }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <TouchableOpacity onPress={handleFavorite}>
      <Card containerStyle={styles.container}>
        <Card.Title>{name}</Card.Title>
        <Ionicons
          style={styles.iconFavorite}
          name={isFavorite ? 'heart' : 'heart-outline'}
          color={isFavorite ? 'darkred' : 'black'}
          size={32}          
        />
        <View style={styles.imageView}>
          <Card.Image style={styles.image} source={{ uri: photo }} />
        </View>
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#2089dc55',
    borderRadius: 5
  },
  iconFavorite: {
    padding: 5,
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 100
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: { width: 150, height: 150, margin: 25, borderRadius: 25 }
})
