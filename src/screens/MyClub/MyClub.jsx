import React, { useState, useEffect } from 'react'
import {
  Platform,
  Image,
  View,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import { Text, Card } from '@rneui/themed'
import { useThemeMode } from '@rneui/themed'
import { useMessageStore } from '../../redux/hooks/useMessage'
import { useExploreByID } from '../Explore/useExploreByID'
import { LogoClubCard } from '../Explore/LogoClubCard'
import { PlayerListCard } from '../Explore/PlayerListCard'
import { StadiumClubCard } from '../Explore/StadiumClubCard'
import { Header } from '../../components/Header'

const config = {
  title: 'Mi Club'
}

const images = [
  require('../../assets/background-002.png'),
  require('../../assets/background-002-dark.png')
]

export const MyClub = ({ navigation }) => {
  const { myClub, setPlayer, login } = useMessageStore()
  const { mode } = useThemeMode()
  const { teamListFiltered, playerListFiltered } = useExploreByID(myClub)

  const handleNavigateToLogin = () => {
    navigation.jumpTo('Perfil')
    navigation.navigate('Login')
  }

  const handleNavigateToPlayer = (item) => {
    setPlayer(item.player.id)
    navigation.navigate('Player')
  }

  return (
    <View style={styles.containerBackground}>
      <ImageBackground
        source={mode === 'dark' ? images[1] : images[0]}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <ScrollView style={styles.scrollView}>
          <Header title={config.title} />
          {!login && (
            <>
              <Text style={styles.text}> No estas logueado </Text>
              <TouchableOpacity onPress={handleNavigateToLogin}>                
                <Text style={styles.textIniciaSesion}>
                  ¿Ya tienes una cuenta? ¡Inicia sesion!{' '}
                </Text>
              </TouchableOpacity>
            </>
          )}
          {login && (
            <>
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
        </ScrollView>
      </ImageBackground>
    </View>
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
  textIniciaSesion: { 
    marginTop: 25,   
    textAlign: 'center',
    lineHeight: 25
  },
  mainView: {
    flex: 1
  },  
  containerBackground: {
    flex: 1
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center'
  }
})
