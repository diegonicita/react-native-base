import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Card } from '@rneui/themed'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const LittleCard = (props) => {
  function modificarTexto(texto, large) {
    if (texto.length <= large) {
      return texto
    } else {
      let nuevaLongitud = texto.lastIndexOf(' ', large)
      if (nuevaLongitud === -1) {
        return texto.substring(0, large)
      } else {
        return texto.substring(0, nuevaLongitud) + '(Continue reading...)'
      }
    }
  }

  return (
    <Card style={{justifyContent: 'center'}}>
      <View style={styles.cardTitleContainer}>
        <Card.Title style={styles.cardTitle}>
          <Ionicons name="bonfire" color="red" size={16} /> {props.title}
        </Card.Title>
    
      </View>
      <Card.Divider color="gray" />
      <View style={styles.container}>
        <Text style={styles.text}>
          <Ionicons name="triangle" color="green" size={16} />{' '}
          {modificarTexto(props.text, 90)}
        </Text>
        <Card.Image style={styles.image} source={props.image} />
      </View>
      <Text style={styles.author}>
        <Ionicons name="shapes" color="green" size={16} /> {props.author} -{' '}
        {props.minutes}
      </Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardTitleContainer: {    
    flexDirection: 'row',    
    backgroundColor: 'darkgreen',     
    flexWrap: 'wrap'     
  },
  cardTitleEmpty: {    
    flexBasis: 60,
    backgroundColor: 'darkgreen', 
    color: 'white',
    flexGrow: 0,  
  },
  cardTitle: {     
    flexGrow: 1,   
    backgroundColor: 'lightgreen',       
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  image: {
    marginTop: 25,
    marginBottom: 0,
    padding: 0,
    borderRadius: 25,
    width: 120,
    height: 120,
    flexBasis: 120,
    resizeMode: 'cover',
    alignSelf: 'flex-start',
    flexGrow: 9999
  },
  text: {
    padding: 2,
    fontSize: 20,
    flexBasis: 250,
    justifyContent: 'center',
    textAlign: 'left',
    alignSelf: 'center',
    flexGrow: 1,
    maxWidth: 340
  },
  author: { marginTop: 10, fontSize: 14, alignSelf: 'center' }
})
