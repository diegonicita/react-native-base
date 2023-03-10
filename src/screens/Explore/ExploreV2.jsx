import React, { useState, useEffect } from 'react'
import { Platform, FlatList, StyleSheet } from 'react-native'
import { Avatar, Text, SearchBar, ListItem } from '@rneui/themed'

import { useThemeMode } from '@rneui/themed'
import { useDebounce } from 'use-debounce'
import { useMessageStore } from '../../redux/hooks/useMessage'
import { useExploreBySearchTerm } from './useExploreBySearchTerm'

import Ionicons from 'react-native-vector-icons/Ionicons'

const config = {
  title: 'Explorador'
}

const RenderListItem = ({ item, handle }) => {
  return (
    <ListItem key={item.id} bottomDivider onPress={() => handle(item)}>
      <Avatar source={{ uri: item.image }} />
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle1}</ListItem.Subtitle>
        <ListItem.Subtitle>{item.subtitle2}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export const ExploreV2 = ({ navigation }) => {
  const [search, setSearch] = useState(' ')  
  const [searchDebounced] = useDebounce(search, 500)
  const {
    isLoading,    
    listFiltered
  } = useExploreBySearchTerm(searchDebounced)
  const { setPlayer, setClub } = useMessageStore()

  useEffect(() => {
    setSearch('')
  }, [])  
  
  const handleNavigate = (item) => {
    if (item.type === 'player') {
    setPlayer(item.id)    
    navigation.navigate('Player')
    }
    else {
    setClub(item.id)
    navigation.navigate('Club')
    }     
  }

  const handleClear = () => setSearch("")

  const { mode } = useThemeMode()

  return (
    <>
      <Text style={styles.subHeader}> {config.title} </Text>
      <SearchBar
       searchIcon={<Ionicons name="search-outline" color="black" size={32} />}
       clearIcon={<Ionicons name="close-outline" color="black" size={32} onPress={handleClear}/>}             
        lightTheme={true}                
        onChangeText={setSearch}
        value={search}
        round={true}
        inputStyle={{
          color: mode !== 'dark' ? 'black' : 'white',
          paddingLeft: 15,          
        }}
        containerStyle={styles.searchBar}
        placeholderTextColor={mode !== 'dark' ? '#444' : '#BBB'}
        placeholder="Buscar Equipos y Jugadores..."
        style={styles.searchBar}
      />
      {!isLoading && (
        <FlatList
          data={listFiltered}
          renderItem={({ item }) => (
            <RenderListItem item={item} handle={handleNavigate} />
          )}
          style={styles.view}
        ></FlatList>
      )}
      {isLoading && (
        <Text style={{ textAlign: 'center' }}>
          Leyendo Informacion... Espero por favor
        </Text>
      )}     
    </>
  )
}

const stylePlatform = {
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
}

const styles = StyleSheet.create({
  view: {
    ...stylePlatform
  },
  cardTitle: {
    alignSelf: 'center'
  },
  subHeader: {
    fontSize: 20,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  searchBar: {
    borderTopWidth: 0,
    borderBottomWidth: 0,    
    ...stylePlatform
  }
})
