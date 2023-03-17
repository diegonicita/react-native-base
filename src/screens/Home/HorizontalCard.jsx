import React from 'react'
import {
  Platform,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import { Text, Card, Button, withTheme } from '@rneui/themed'
import { ThemeButton } from '../../components/ThemeButton'
import { useExplorePlayerByArrayID } from '../../screens/Explore/useExplorePlayerByArrayID'
import { useMessageStore } from '../../redux/hooks/useMessage'

export const HorizontalCard = ({navigation}) => {
  const { setPlayer } = useMessageStore()

  const { isLoading, playerListFiltered: players } = useExplorePlayerByArrayID([
    1830, 30, 52, 119
  ])  
  
  const handleNavigate = (item) =>
  {    
    navigation.navigate('HomePlayer', {id: item.id})    
  }

  return (
    <ScrollView style={styles.scrollView} horizontal scrollEnabled>
      {!isLoading &&
        players.length > 0 &&
        players.map((p) => (
          <TouchableOpacity key={p.id} onPress={() => handleNavigate(p)}>
            <Card containerStyle={styles.card}>
              <Card.Image
                style={styles.image}
                source={{ uri: p.photo }}
              ></Card.Image>
              <Text style={styles.text}>{p.name}</Text>
            </Card>
          </TouchableOpacity>
        ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    width: 150,
    height: 150,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 15
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
