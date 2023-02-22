import React from 'react'
import { Platform, View, ScrollView, StyleSheet, Image } from 'react-native'
import { Text, Card, Button, withTheme } from '@rneui/themed'
import { BigCard } from './BigCard'
import { LittleCard } from './LittleCard'
import { CardList } from './CardList'
import { ThemeButton } from '../../components/ThemeButton'

import { configHome as config } from '../_config/config'

export const Home = () => {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.subHeader}> {config.title} </Text>
        <View style={styles.subcontainer}>
          {config.bigCard.map((item) => (
            <BigCard
              title={item.title.english}
              newsTitle={item.news.text.english}
              author={item.news.author}
              minutes={item.news.time.english}
              image={item.news.image}
            />
          ))}
          {config.bigCard.map((item) => (
            <LittleCard
              title={item.title.english}
              newsTitle={item.news.text.english}
              author={item.news.author}
              minutes={item.news.time.english}
              image={item.news.image}
            />
          ))}          
          <CardList list={config.list} />
        </View>
      </ScrollView>
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
        width: config.webWidth,
        maxWidth: config.webMaxWidth,
        alignSelf: config.webAlignSelf
      }
    })
  },
  buttonStyle: {
    borderRadius: 3,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5
  },
  subHeader: {
    fontSize: 20,
    backgroundColor: '#2089dc',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
    fontWeight: 'bold'
  }
})
