import React, { useState, useEffect, useCallback } from 'react'
import { Platform, Text, View, ScrollView, StyleSheet } from 'react-native'
import {
  Avatar,
  Badge,
  withBadge,
  Icon,
  Button,
  SearchBar,
  ListItem,
  Dialog
} from '@rneui/themed'
import { ThemeButton } from '../../components/ThemeButton'

import { useThemeMode } from '@rneui/themed'
import { useDebounce } from 'use-debounce'
import { useMessageStore } from '../../redux/hooks/useMessage'
import { useExplore } from './useExplore'

const config = {
  title: 'Explorador'
}

export const Explore = ({ navigation }) => {  
  
  const [search, updateSearch] = useState('')
  const [searchDebounced] = useDebounce(search, 500)
  const { isLoading, teamList, playerList, teamListFiltered, playerListFiltered } = useExplore(searchDebounced)
  const { setPlayer, setClub } = useMessageStore()
  const { mode } = useThemeMode()  
 
  const handleNavigateToClub = (item) => {
    setClub([
      item.team.id,
      item.team.name,
      item.team.logo,
      item.team.country,
      item.team.founded,
      item.venue.id,
      item.venue.name,
      item.venue.address,
      item.venue.city,
      item.venue.capacity,
      item.venue.surface,
      item.venue.image
    ])
    navigation.navigate('Club')
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
  
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.subHeader}> {config.title} </Text>
        <SearchBar
          lightTheme={true}
          onChangeText={updateSearch}
          value={search}
          round={true}
          inputStyle={{
            color: mode !== 'dark' ? 'black' : 'white',
            paddingLeft: 15
          }}
          containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}
          placeholderTextColor={mode !== 'dark' ? '#444' : '#BBB'}
          placeholder="Buscar Equipos y Jugadores..."
        />
        {!isLoading && (
          <>
            <View>
              {
              teamListFiltered && teamListFiltered.length > 0 && 
                (teamListFiltered.map((item) => (
                      <ListItem
                        key={item.team.id}
                        bottomDivider
                        onPress={() => handleNavigateToClub(item)}>
                        <Avatar source={{ uri: item.team.logo }} />
                        <ListItem.Content>
                          <ListItem.Title>
                            {item.team.name} ({item.team.code})
                          </ListItem.Title>
                          <ListItem.Subtitle>
                            Country: {item.team.country}. Founded {item.team.founded}
                          </ListItem.Subtitle>
                        </ListItem.Content>
                      </ListItem>
                    )))}
            </View>
            <View>
              {
              teamListFiltered && teamListFiltered.length === 0 && search.length < 2 && teamList && teamList.length > 0 && 
                (teamList.map((item) => (
                      <ListItem
                        key={item.team.id}
                        bottomDivider
                        onPress={() => handleNavigateToClub(item)}>
                        <Avatar source={{ uri: item.team.logo }} />
                        <ListItem.Content>
                          <ListItem.Title>
                            {item.team.name} ({item.team.code})
                          </ListItem.Title>
                          <ListItem.Subtitle>
                            Country: {item.team.country}. Founded {item.team.founded}
                          </ListItem.Subtitle>
                        </ListItem.Content>
                      </ListItem>
                    )))}
            </View>
            <View>
              {
              playerListFiltered && playerListFiltered.length > 0 && 
                (playerListFiltered.map((item, index) => (
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
                          <ListItem.Subtitle>
                            Equipo: {item.statistics[0].team.name}
                          </ListItem.Subtitle>
                        </ListItem.Content>
                      </ListItem>
                    )))}
            </View>
            { playerListFiltered && playerListFiltered.length < 1 &&
              teamListFiltered && teamListFiltered.length < 1 &&
              searchDebounced.length > 1 &&
              <>
                        <Text style={{textAlign: 'center', marginTop: 10}}>                          
                          {search != ''?                          
                            `No se encontraron jugadores o equipos con el termino '${search}'`:""}
                        </Text>
                      </>
            }

          </>
        )}
        {isLoading && (
          <Text style={{ textAlign: 'center' }}>
            Leyendo Informacion... Espero por favor
          </Text>
        )}
      </ScrollView>
      <ThemeButton />
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
      }, 
  })},
  cardTitle: {
    alignSelf: 'center',
  },
  subHeader: {
    backgroundColor: '#2089dc',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
    fontWeight: 'bold'
  }
})
