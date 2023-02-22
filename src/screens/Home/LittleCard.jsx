import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Card } from '@rneui/themed'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const LittleCard = (props) => {
  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.item1}>
          {props.newsTitle.length > 144 && <Text style={styles.text}>
            <Ionicons name="triangle" color="green" size={18} />{' '}
            {props.newsTitle.substring(0, 145)}...
          </Text>
          }
          {props.newsTitle.length < 145 && <Text style={styles.text}>
            <Ionicons name="triangle" color="green" size={18} />{' '}
            {props.newsTitle}
          </Text>
          }
        </View>
        <View style={styles.item2}>
          <Card.Image style={styles.image} source={props.image} />
        </View>
      </View>
      <Text style={styles.author}>
        <Ionicons name="shapes" color="green" size={14} /> {props.author} -{' '}
        {props.minutes}
      </Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 15,
    minHeight: 80,
    minWidth: 80
  },
  newsTitle: {
    fontSize: 20
  },
  author: { marginTop: 10, fontSize: 14 },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item1: {
    width: '69%',
    alignItems: 'center',
    marginRight: '1%'
  },
  item2: {
    width: '29%',
    alignSelf: 'flex-end',
    borderRadius: 5,
    marginLeft: '1%'
  },
  text: {
    fontSize: 18
  }
})
