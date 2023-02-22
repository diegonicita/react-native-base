import React from 'react'
import { Text, Card, Button, withTheme } from '@rneui/themed'
import { View, ScrollView, StyleSheet, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const CardList = (props) => {
  return (
    <Card>
      <Card.Title>{props.list.title}</Card.Title>
      {props.list.news.map((u, i) => {
        return (
          <View style={styles.container} key={i}>
            <View style={styles.item1}>
              <Image style={styles.image} resizeMode="cover" source={u.image} />
            </View>
            <View style={styles.item2}>
              {u.text.english.length < 100 ? (
                <Text style={styles.text}>{u.text.english}</Text>
              ) : (
                <Text style={styles.text}>{u.text.english.substring(0, 100)}...</Text>
              )}
            </View>
          </View>
        )
      })}
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item1: {},
  item2: {
    width: '80%'
  },
  fonts: {
    marginBottom: 8
  },
  image: {
    width: 50,
    height: 50,
    margin: 5
  },
  text: {
    fontSize: 16,
    marginTop: 0
  }
})
