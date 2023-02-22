import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, Card } from '@rneui/themed'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const BigCard = (props) => {
  return (
    <Card>
      <Card.Title style={styles.cardTitle}>
        <Ionicons name="bonfire" color="red" size={16} /> {props.title}
      </Card.Title>
      <Card.Divider color="gray" />
      <Card.Image style={styles.image} source={props.image} />
      <Text style={styles.newsTitle}>
        <Ionicons name="triangle" color="green" size={16} />
        {" "}{props.newsTitle}
      </Text>
      <Text style={styles.author}>
        <Ionicons name="shapes" color="green" size={16} />
        {" "}{props.author} - {props.minutes}
      </Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardTitle: {
    alignSelf: 'flex-start'
  },
  image: {
    padding: 0,
    borderRadius: 5,    
    height: 250
  },
  newsTitle: {
    fontSize: 20,
    marginTop: 10
  },
  author: { marginTop: 10, fontSize: 14 }
})
