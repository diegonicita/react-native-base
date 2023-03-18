import React, { useState, useEffect } from 'react'
import { Platform, FlatList, StyleSheet } from 'react-native'
import { Avatar, Text, SearchBar, ListItem } from '@rneui/themed'

import { useThemeMode } from '@rneui/themed'
import { useDebounce } from 'use-debounce'
import { useMessageStore } from '../../redux/hooks/useMessage'
import { useExploreBySearchTerm } from './useExploreBySearchTerm'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { Header } from '../../components/Header'
import { CustomContainerView } from '../../components/CustomContainerView'

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
  const { isLoading, listFiltered } = useExploreBySearchTerm(searchDebounced)
  const { setPlayer, setClub } = useMessageStore()

  useEffect(() => {
    setSearch('')
  }, [])

  const handleNavigate = (item) => {
    if (item.type === 'player') {
      setPlayer(item.id)
      navigation.navigate('Player', {id: item.id})
    } else {
      setClub(item.id)
      navigation.navigate('Club')
    }
  }

  const handleClear = () => setSearch('')

  const { mode } = useThemeMode()

  return (
    <CustomContainerView>
      <Header title={config.title} />
      <SearchBar
        searchIcon={<Ionicons name="search-outline" color="black" size={32} />}
        clearIcon={
          <Ionicons
            name="close-outline"
            color="black"
            size={32}
            onPress={handleClear}
          />
        }
        lightTheme={true}
        onChangeText={setSearch}
        value={search}
        round={true}
        inputStyle={styles.input(mode)}
        placeholderTextColor={styles.placeholder(mode)}
        placeholder="Buscar Equipos y Jugadores..."
      />
      {!isLoading && (
        <FlatList
          keyboardShouldPersistTaps="always"
          nestedScrollEnabled={true}
          data={listFiltered}
          renderItem={({ item }) => (
            <RenderListItem item={item} handle={handleNavigate} />
          )}
        />
      )}
      {isLoading && (
        <Text style={{ textAlign: 'center' }}>
          Leyendo Informacion... Espero por favor
        </Text>
      )}
    </CustomContainerView>
  )
}

const styles = StyleSheet.create({
  input: (mode) => ({
    color: mode !== 'dark' ? 'black' : 'white',
    paddingLeft: 15
  }),
  placeholder: (mode) => ({
    color: mode !== 'dark' ? '#444' : '#BBB'
  })
})
