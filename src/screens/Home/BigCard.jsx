import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Card } from '@rneui/themed'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const BigCard = (props) => {
  return (
    <Card>
      <Card.Title style={styles.cardTitle}>
        <Ionicons name="bonfire" color="red" size={16} /> {props.title}
      </Card.Title>
      <Card.Divider color="gray" />
      <View style={styles.container}>
        <Card.Image style={styles.image} source={props.image} />
        <Text style={styles.text}>
          <Ionicons name="triangle" color="green" size={16} /> {props.text}
        </Text>
      </View>
      <Text style={styles.author}>
        <Ionicons name="shapes" color="green" size={16} /> {props.author} -{' '}
        {props.minutes}
      </Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardTitle: {
    alignSelf: 'flex-start'
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  image: {
    margin: 10,
    marginBottom: 0,
    padding: 0,
    borderRadius: 5,
    width: 250,
    height: 250,
    flexBasis: 250,
    resizeMode: 'cover',
    alignSelf: 'center',
    flexGrow: 1
  },
  text: {
    margin: 10,
    marginTop: 15,
    fontSize: 20,
    flexBasis: 250,
    justifyContent: 'center',
    textAlign: 'justify',
    alignSelf: 'center',
    flexGrow: 1,
    maxWidth: 440,
  },
  author: { marginTop: 10, fontSize: 14, alignSelf: 'center' }
})
