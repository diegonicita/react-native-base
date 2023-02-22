import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Card } from '@rneui/themed'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const LittleCard = (props) => {
  return (
    <Card>
    <View style={styles.container}>
    <View style={styles.item1}>    
      <Text style={{ marginTop: 5, fontSize: 18 }}>
        <Ionicons name="triangle" color="green" size={18} /> {props.newsTitle}
      </Text>
    </View>
    <View style={styles.item2}>
      <Card.Image style={styles.image} source={props.image} />
    </View>
    </View>
      <Text style={styles.author}>
        <Ionicons name="shapes" color="green" size={14} /> {props.author} -{" "} 
        {props.minutes}
      </Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  image: {
    marginTop: 10,
    borderRadius: 3,
    width: 80,
    height: 80
  },
  newsTitle: {
    fontSize: 20,
    marginTop: 10
  },
  author: { marginTop: 10, fontSize: 14 },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item1: {
    width: '70%'
  },
  item2: {
    width: '20%',
    alignSelf: 'flex-end',
    marginLeft: 5,
    borderRadius: 5
  }
})
