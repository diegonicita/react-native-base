import React, { useState } from 'react'
import { Platform, View, ScrollView, StyleSheet, Image } from 'react-native'
import {
  Avatar,
  Text,
  Card,
  Button,
  withTheme,
  Skeleton,
  ListItem
} from '@rneui/themed'
import { useMessageStore } from '../../redux/hooks/useMessage'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useExplore } from './useExplore'
import { ClubSkeleton } from './ClubSkeleton'

const d = {
  id: 0,
  nombre: 1,
  escudo: 2,
  pais: 3,
  fundacion: 4,
  estadioId: 5,
  estadioNombre: 6,
  estadioCiudad: 8,
  estadioCapacidad: 9,
  estadioSuperficie: 10,
  estadioFoto: 11
}

export const Club = ({ navigation }) => {
  const { club, setPlayer } = useMessageStore()
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const {
    isLoading,
    teamList,
    playerList,
    teamListFiltered,
    playerListFiltered
  } = useExplore(club[d.nombre])

  const handleFavorite = () => {
    setIsFavorite((previous) => setIsFavorite(!previous))
  }

  const handleLoaded = () => {
    setIsLoaded(true)
    console.log('Image Loaded')
  }

  const handleNavigateToPlayer = (item) => {
    setPlayer([
      item.player.id,
      item.player.name,
      item.player.firstname,
      item.player.lastname,
      item.player.age,
      item.player.birth.date,
      item.player.birth.place,
      item.player.birth.country,
      item.player.nationality,
      item.player.height,
      item.player.weight,
      item.player.injured,
      item.player.photo,
      item.statistics[0].team.name,
      item.statistics[0].team.logo
    ])
    navigation.navigate('Player')
  }

  const playerListByPosition = (position, posicion) => {
    const p = playerListFiltered.filter(
      (item) => item.statistics[0].games.position === position
    )

    return (
      <Card>
        <Card.Title style={styles.cardTitle}>{posicion}s</Card.Title>
        {p.map((item, index) => (
          <ListItem
            key={index}
            bottomDivider
            onPress={() => handleNavigateToPlayer(item)}
          >
            <Avatar source={{ uri: item.player.photo }} />
            <ListItem.Content>
              <ListItem.Title>{item.player.name}</ListItem.Title>
              <ListItem.Subtitle>
                {item.player.firstname} {item.player.lastname}
              </ListItem.Subtitle>
              {/* <ListItem.Subtitle>Posicion: {posicion}</ListItem.Subtitle> */}
            </ListItem.Content>
          </ListItem>
        ))}
        {p.length === 0 && (
          <Text> No se encontraron {posicion.toLowerCase()}s</Text>
        )}
      </Card>
    )
  }

  return (
    <ScrollView style={styles.scrollView}>
      {isLoaded && (
        <>
          <Card>
            <Ionicons
              style={styles.iconFavorite}
              name={isFavorite ? 'heart' : 'heart-outline'}
              color="black"
              size={32}
              onPress={handleFavorite}
            />
            <Card.Title style={styles.cardTitle}>{club[d.nombre]}</Card.Title>
            <View style={styles.view}>
              <Card.Image
                style={styles.escudoFoto}
                source={{ uri: club[d.escudo] }}
              />
            </View>
          </Card>
          <Card>
            <Card.Title style={styles.cardTitle}>Estadio</Card.Title>
            <View style={styles.view}>
              <Card.Image
                style={styles.estadioFoto}
                source={{ uri: club[d.estadioFoto] }}
              />
            </View>
            <View style={styles.view}>
              <Text style={styles.text}>
                <Ionicons
                  style={styles.icon}
                  name="football-outline"
                  color="green"
                  size={16}
                />
                Estadio: {club[d.estadioNombre]}
              </Text>
              <Text style={styles.text}>
                <Ionicons
                  style={styles.icon}
                  name="earth-outline"
                  color="green"
                  size={16}
                />
                Ciudad: {club[d.estadioCiudad]}
              </Text>
              <Text style={styles.text}>
                <Ionicons
                  style={styles.icon}
                  name="people-outline"
                  color="green"
                  size={16}
                />
                Capacidad: {club[d.estadioCapacidad]} personas
              </Text>
              <Text style={styles.text}>
                <Ionicons
                  style={styles.icon}
                  name="planet-outline"
                  color="green"
                  size={16}
                />
                Superficie: {club[d.estadioSuperficie]}
              </Text>
            </View>
          </Card>
          <>
            {playerListByPosition('Goalkeeper', 'Portero')}
            {playerListByPosition('Defender', 'Defensa')}
            {playerListByPosition('Midfielder', 'Mediocampista')}
            {playerListByPosition('Attacker', 'Atacante')}
          </>
        </>
      )}
      <>
        {!isLoaded && <ClubSkeleton />}
        <Image
          style={{ width: 1, height: 1, marginTop: 20 }}
          source={{ uri: club[d.estadioFoto] }}
          onLoad={handleLoaded}
        />
      </>
    </ScrollView>
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
  estadioFoto: { width: 200, height: 200, margin: 25, borderRadius: 70 },
  escudoFoto: { width: 100, height: 100, margin: 10 },
  mainView: {
    flex: 1
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewTop: { marginTop: 25 },
  viewBottom: { flex: 1 },
  icon: { padding: 5 },
  iconFavorite: {
    padding: 5,
    position: 'absolute',
    top: -10,
    right: -10,
    zIndex: 100
  },
  cardTitle: {
    marginTop: 20,
    alignSelf: 'center'
  }
})

export default Club
