import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card } from '@rneui/themed'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const LogoClubCard = ({name, logo}) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const handleFavorite = () => {
    setIsFavorite((previous) => setIsFavorite(!previous))
  }

  return (
    <Card wrapperStyle={styles.wrapper} containerStyle={styles.container}>
      <Ionicons
        style={styles.iconFavorite}
        name={isFavorite ? 'heart' : 'heart-outline'}
        color="black"
        size={32}
        onPress={handleFavorite}
      />
      <Card.Title style={styles.title}>{name}</Card.Title>
      <View style={styles.imageView}>
        <Card.Image style={styles.image} source={{ uri: logo }} />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({    
    container: {    
      borderColor: '#2089dc55',
      borderRadius: 5
    },
    wrapper: {
      
    },
    iconFavorite: {
      padding: 5,
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 100
    },
    image: { width: 100, height: 100, margin: 10 },
    imageView: {
      justifyContent: 'center',
      alignItems: 'center'
    }    
  })
  
