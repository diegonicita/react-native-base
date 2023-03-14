import React from 'react'
import { Platform, View, ScrollView, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { Text, Card, Button, withTheme } from '@rneui/themed'
import { ThemeButton } from '../../components/ThemeButton'
import { useExplorePlayerByID } from '../../screens/Explore/useExplorePlayerByID'

export const HorizontalCard = () => {
  const { isLoading, player } = useExplorePlayerByID(30)

  return (
    <TouchableWithoutFeedback>
    <ScrollView style={{ marginBottom: 20 }} horizontal scrollEnabled>
      {!isLoading && (
        <>         
          <Card containerStyle={styles.card}>
            <Card.Image style={styles.image} source={player.photo}>              
            </Card.Image>
            <Text style={styles.text}>{player.name}</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Image style={styles.image} source={player.photo}>              
            </Card.Image>
            <Text style={styles.text}>{player.name}</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Image style={styles.image} source={player.photo}>              
            </Card.Image>
            <Text style={styles.text}>{player.name}</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Image style={styles.image} source={player.photo}>              
            </Card.Image>
            <Text style={styles.text}>{player.name}</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Image style={styles.image} source={player.photo}>              
            </Card.Image>
            <Text style={styles.text}>{player.name}</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Image style={styles.image} source={player.photo}>              
            </Card.Image>
            <Text style={styles.text}>{player.name}</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Image style={styles.image} source={player.photo}>              
            </Card.Image>
            <Text style={styles.text}>{player.name}</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Image style={styles.image} source={player.photo}>              
            </Card.Image>
            <Text style={styles.text}>{player.name}</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Image style={styles.image} source={player.photo}>              
            </Card.Image>
            <Text style={styles.text}>{player.name}</Text>
          </Card>
        </>
      )}
    </ScrollView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {    
    flexDirection: 'row',
    width: 150,
    height: 150,
    justifyContent: 'center',    
    padding: 10,
    borderRadius: 15,
  },
  text: {        
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center' 
  },
  image: {
    width: 130,
    height: 115
  }
})
