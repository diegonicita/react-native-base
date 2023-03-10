import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Text, Card, ListItem } from '@rneui/themed'
import { useMessageStore } from '../../redux/hooks/useMessage'

export const PlayerListCard = ({ list, position, posicion, handleNavigateToPlayer }) => {      

  const p = list.filter((item) => item.statistics[0].games.position === position) 

    return (
      <Card wrapperStyle={styles.wrapper} containerStyle={styles.container}>
        <Card.Title style={styles.title}>{posicion}s</Card.Title>
        {p.map((item, index) => (
          <ListItem
            containerStyle={{}}
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
            </ListItem.Content>
          </ListItem>
        ))}
        {p.length === 0 && (
          <Text> No se encontraron {posicion.toLowerCase()}s</Text>
        )}
      </Card>
    )  
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#2089dc55',
    borderRadius: 5
  },
  wrapper: {},
  iconFavorite: {
    padding: 5,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 100
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    margin: 25,
    marginTop: 10,
    borderRadius: 5
  },
  text: {
    textAlign: 'center',
    lineHeight: 25
  }
})
