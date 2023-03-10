import React, { useState, useEffect } from 'react'
import { Platform, View, ScrollView, StyleSheet, Image } from 'react-native'
import { Avatar, Text, Card, ListItem } from '@rneui/themed'
import { useMessageStore } from '../../redux/hooks/useMessage'
import { useExploreByID } from './useExploreByID'
import { ClubSkeleton } from './ClubSkeleton'
import { LogoClubCard } from './LogoClubCard'
import { StadiumClubCard } from './StadiumClubCard'
import { PlayerListCard } from './PlayerListCard'

const config = {
  title: 'Club'
}

export const Club = ({ navigation }) => {
  const { club, setPlayer } = useMessageStore()
  const [isLoaded, setIsLoaded] = useState(false)
  const { teamListFiltered, playerListFiltered } = useExploreByID(club)

  const handleLoaded = () => {
    setIsLoaded(true)
  }

  const handleNavigateToPlayer = (item) => {
    setPlayer(item.player.id)
    navigation.navigate('Player')
  }

  return (
    <ScrollView style={styles.scrollView}>
      {isLoaded && (
        <>
          <Text style={styles.subHeader}> {config.title} </Text>
          <LogoClubCard
            name={teamListFiltered[0]?.team?.name}
            logo={teamListFiltered[0]?.team?.logo}
          />
          <StadiumClubCard
            name={teamListFiltered[0]?.venue.name}
            city={teamListFiltered[0]?.venue.city}
            image={teamListFiltered[0]?.venue?.image}
            capacity={teamListFiltered[0]?.venue.capacity}
            surface={teamListFiltered[0]?.venue.surface}
          />
          <PlayerListCard
            list={playerListFiltered}
            position="Goalkeeper"
            posicion="Portero"
            handleNavigateToPlayer={handleNavigateToPlayer}
          />
          <PlayerListCard
            list={playerListFiltered}
            position="Defender"
            posicion="Defensa"
            handleNavigateToPlayer={handleNavigateToPlayer}
          />
          <PlayerListCard
            list={playerListFiltered}
            position="Midfielder"
            posicion="Mediocampista"
            handleNavigateToPlayer={handleNavigateToPlayer}
          />
          <PlayerListCard
            list={playerListFiltered}
            position="Attacker"
            posicion="Atacante"
            handleNavigateToPlayer={handleNavigateToPlayer}
          />
        </>
      )}
      <>
        {!isLoaded && <ClubSkeleton />}
        <Image
          style={{ width: 1, height: 1, marginTop: 20 }}
          source={{ uri: teamListFiltered[0]?.venue?.image }}
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
  cardWrapper: {},
  text: {
    textAlign: 'center',
    lineHeight: 25
  },
  estadioFoto: {
    width: 200,
    height: 200,
    margin: 25,
    marginTop: 10,
    borderRadius: 5
  },
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
    top: 0,
    right: 0,
    zIndex: 100
  },
  cardTitle: {
    marginTop: 20,
    alignSelf: 'center'
  }
})

export default Club
