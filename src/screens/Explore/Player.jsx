import React, { useState, useMemo } from 'react'
import { Platform, View, ScrollView, StyleSheet, Image } from 'react-native'
import { Text, Card } from '@rneui/themed'
import { useMessageStore } from '../../redux/hooks/useMessage'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useThemeMode } from '@rneui/themed'
import { useExplorePlayerByID } from './useExplorePlayerByID'

const config = {
  title: 'Player'
}

export const Player = ({ navigation }) => {
  const { player: playerID } = useMessageStore()
  const [isFavorite, setIsFavorite] = useState(false)
  const { mode } = useThemeMode()
  const { isLoading, playerListFiltered } = useExplorePlayerByID(playerID)

  const p = {
    id: playerID,
    name: playerListFiltered[0]?.player.name,
    firstname: playerListFiltered[0]?.player.firstname,
    lastname: playerListFiltered[0]?.player.lastname,
    photo: playerListFiltered[0]?.player?.photo,
    club: playerListFiltered[0]?.statistics[0].team.name,
    logo: playerListFiltered[0]?.statistics[0].team.logo,
    age: playerListFiltered[0]?.player.age,
    nationality: playerListFiltered[0]?.player.nationality,
    birthDate: playerListFiltered[0]?.player.birth.date,
    birthPlace: playerListFiltered[0]?.player.birth.place,
    birthCountry: playerListFiltered[0]?.player.birth.country,
    injured: playerListFiltered[0]?.player.injured ? 'Si' : 'No',
    weight: playerListFiltered[0]?.player.weight,
    height: playerListFiltered[0]?.player.height
  }

  const handleFavorite = () => {
    setIsFavorite((previous) => setIsFavorite(!previous))
  }

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.subHeader}> {config.title} </Text>
        <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
          <Card.Title style={styles.cardTitle}>{p.name}</Card.Title>
          <Ionicons
            style={styles.iconFavorite}
            name={isFavorite ? 'heart' : 'heart-outline'}
            color="black"
            size={32}
            onPress={handleFavorite}
          />
          <View style={styles.view}>
            <Image style={styles.image} source={{ uri: p.photo }} />
          </View>
        </Card>
        <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
          <Card.Title style={styles.cardTitle}>Club: {p.club}</Card.Title>
          <View style={styles.view}>
            <Image style={styles.imageEscudo} source={{ uri: p.logo }} />
          </View>
        </Card>
        <Card wrapperStyle={styles.cardWrapper} containerStyle={styles.card}>
          <Text style={styles.text}>Nombres: {p.firstname} </Text>
          <Text style={styles.text}>Apellidos: {p.lastname} </Text>
          <Text style={styles.text}>Edad: {p.age} </Text>
          <Text style={styles.text}>Nacionalidad: {p.nationality}</Text>
          <Text style={styles.text}>Fecha de Nacimiento: {p.birthDate} </Text>
          <Text style={styles.text}>Lugar de Nacimiento: {p.birthPlace} </Text>
          <Text style={styles.text}>Pais de Nacimiento: {p.birthCountry} </Text>
          <Text style={styles.text}>Peso: {p.weight}</Text>
          <Text style={styles.text}>Altura: {p.height}</Text>
          <Text style={styles.text}>Lesionado: {p.injured}</Text>
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
        width: '100%',
        maxWidth: 1024,
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
  subHeader: {
    backgroundColor: '#2089dc',    
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  card: {   
    borderColor: '#2089dc55',
    borderRadius: 5
  },
  cardWrapper: {    
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
