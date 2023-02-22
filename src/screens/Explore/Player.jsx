import React, { useState } from 'react'
import { Platform, View, ScrollView, StyleSheet, Image } from 'react-native'
import { Avatar, Divider, Text, Card, Button, withTheme } from '@rneui/themed'
import { useMessageStore } from '../../redux/hooks/useMessage'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useThemeMode } from '@rneui/themed'

const d = {
  id: 0,
  name: 1,
  firstname: 2,
  lastname: 3,
  age: 4,
  birthdate: 5,
  birthplace: 6,
  birthcountry: 7,
  nationality: 8,
  height: 9,
  weight: 10,
  injured: 11,
  photo: 12,
  team: 13,
  logoteam: 14
}

export const Player = ( {navigation}) => {
  const { player } = useMessageStore()
  const [isFavorite, setIsFavorite] = useState(false)
  const { mode } = useThemeMode()
  const handleFavorite = () => {
    setIsFavorite((previous) => setIsFavorite(!previous))
  }

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <Card>
          <Card.Title style={styles.cardTitle}>{player[d.name]}</Card.Title>
          <Ionicons
            style={styles.iconFavorite}
            name={isFavorite ? 'heart' : 'heart-outline'}
            color="black"
            size={32}
            onPress={handleFavorite}
          />
          <View style={styles.view}>
            <Image style={styles.image} source={{ uri: player[d.photo] }} />
          </View>
        </Card>
        <Card>
          <Card.Title style={styles.cardTitle}>Club: {player[d.team]}</Card.Title>
          <View style={styles.view}>
            <Image style={styles.imageEscudo} source={{ uri: player[d.logoteam] }} />
          </View>
        </Card>
        <Card>
          <Text style={styles.text}>Nombres: {player[d.firstname]}</Text>
          <Text style={styles.text}>Apellidos: {player[d.lastname]}</Text>
          <Text style={styles.text}>Edad: {player[d.age]}</Text>
          <Text style={styles.text}>Pais: {player[d.nationality]} </Text>
          <Text style={styles.text}>
            Fecha de Nacimiento: {player[d.birthdate]}
          </Text>
          <Text style={styles.text}>
            Lugar de Nacimiento: {player[d.birthplace]}
          </Text>
          <Text style={styles.text}>
            Pais de Nacimiento: {player[d.birthcountry]}
          </Text>
          <Text style={styles.text}>Peso: {player[d.weight]}</Text>
          <Text style={styles.text}>Altura: {player[d.height]}</Text>
          <Text style={styles.text}>
            Lesionado: {player[d.injured] ? 'Si' : 'No'}
          </Text>
        </Card>
        <View style={styles.viewBottom}></View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    ...Platform.select({
      ios: {
        alignSelf: 'auto'
      },
      android: {
        alignSelf: 'auto'
      },
      default: {
        width: 412,
        maxWidth: 640,
        alignSelf: 'center'
      }
    })
  },
  text: {
    textAlign: 'center',
    lineHeight: 25
  },
  image: { width: 150, height: 150, margin: 25, borderRadius: 25 },
  imageEscudo: { width: 50, height: 50, margin: 5 },
  mainView: {
    flex: 1
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewBottom: { flex: 1 },
  iconFavorite: {
    padding: 5,
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 100
  },
  cardTitle: {
    marginTop: 10,
    alignSelf: 'center'
  }
})

export default Player
