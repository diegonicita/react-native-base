import React, { useState, useEffect } from 'react'
import { Platform, Image, Text, View, ScrollView, StyleSheet } from 'react-native'
import { Avatar, SearchBar, ListItem } from '@rneui/themed'
import { ThemeButton } from '../../components/ThemeButton'
import { useThemeMode } from '@rneui/themed'
import { useDebounce } from 'use-debounce'
import { useMessageStore } from '../../redux/hooks/useMessage'
import { useExplore } from '../Explore/useExplore'

const config = {
  title: 'Mi Club'
}

export const MyClub = ({ navigation }) => {
  const [search, updateSearch] = useState('')
  const [searchDebounced] = useDebounce(search, 500)
  const { isLoading, teamList, teamListFiltered, playerListFiltered } =
    useExplore(searchDebounced)
  const { myClub, setMyClub, setClub } = useMessageStore()
  const { mode } = useThemeMode()

  const handleNavigateToClub = (item) => {
    setMyClub([
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

  return (
    <>
      {myClub === null && (
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
            placeholder="Buscar un Club..."
          />
          {!isLoading && (
            <>
              <View>
                {teamListFiltered &&
                  teamListFiltered.length > 0 &&
                  teamListFiltered.map((item) => (
                    <ListItem
                      key={item.team.id}
                      bottomDivider
                      onPress={() => handleNavigateToClub(item)}
                    >
                      <Avatar source={{ uri: item.team.logo }} />
                      <ListItem.Content>
                        <ListItem.Title>
                          {item.team.name} ({item.team.code})
                        </ListItem.Title>
                        <ListItem.Subtitle>
                          Country: {item.team.country}. Founded{' '}
                          {item.team.founded}
                        </ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                  ))}
              </View>
              <View>
                {teamListFiltered &&
                  teamListFiltered.length === 0 &&
                  search.length < 2 &&
                  teamList &&
                  teamList.length > 0 &&
                  teamList.map((item) => (
                    <ListItem
                      key={item.team.id}
                      bottomDivider
                      onPress={() => handleNavigateToClub(item)}
                    >
                      <Avatar source={{ uri: item.team.logo }} />
                      <ListItem.Content>
                        <ListItem.Title>
                          {item.team.name} ({item.team.code})
                        </ListItem.Title>
                        <ListItem.Subtitle>
                          Country: {item.team.country}. Founded{' '}
                          {item.team.founded}
                        </ListItem.Subtitle>
                      </ListItem.Content>
                    </ListItem>
                  ))}
              </View>
              {teamListFiltered &&
                teamListFiltered.length < 1 &&
                searchDebounced.length > 1 && (
                  <>
                    <Text style={{ textAlign: 'center', marginTop: 10 }}>
                      {search != ''
                        ? `No se encontraron clubes con el termino '${search}'`
                        : ''}
                    </Text>
                  </>
                )}
            </>
          )}
          {isLoading && (
            <Text style={{ textAlign: 'center' }}>
              Leyendo Informacion... Espero por favor
            </Text>
          )}
        </ScrollView>
      )}
      {myClub !== null && (
        <ScrollView style={styles.scrollView}>
          <Text style={styles.subHeader}> {config.title} </Text>          
          <Text> {myClub[1]} </Text>
          <Image style={styles.escudoFoto} source={{ uri: myClub[2] }} />          
        </ScrollView>
      )}
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
        width: 412,
        maxWidth: 640,
        alignSelf: 'center'
      }
    })
  },
  cardTitle: {
    alignSelf: 'center'
  },
  escudoFoto: { width: 100, height: 100, margin: 10 },
  subHeader: {
    backgroundColor: '#2089dc',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
    fontWeight: 'bold'
  }
})
