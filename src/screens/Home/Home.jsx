import React from 'react'
import { Platform, View, ScrollView, StyleSheet, Image } from 'react-native'
import { Text, Card, Button, withTheme } from '@rneui/themed'
import { BigCard } from './BigCard'
import { LittleCard } from './LittleCard'
import { CardList } from './CardList'
import { ThemeButton } from '../../components/ThemeButton'
import { Header } from '../../components/Header'
import { CustomScrollView } from '../../components/CustomScrollView'
import { HorizontalCard } from './HorizontalCard'
import { configHome as config } from '../_config/config'

export const Home = ({ navigation }) => {
  return (
    <CustomScrollView>
      <View>
        <Header title="Siguiendo" />
        <HorizontalCard navigation={navigation} />
        <Header title={config.title} />
        {config.bigCard.map((item, index) => (
          <BigCard
            key={index}
            title={item.title.english}
            text={item.news.text.english}
            author={item.news.author}
            minutes={item.news.time.english}
            image={item.news.image}
          />
        ))}
        {config.bigCard.map((item, index) => (
          <LittleCard
            key={index}
            title={item.title.english}
            text={item.news.text.english}
            author={item.news.author}
            minutes={item.news.time.english}
            image={item.news.image}
          />
        ))}
        <CardList list={config.list} />
      </View>
    </CustomScrollView>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 3,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5
  }
})
