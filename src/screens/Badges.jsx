import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { Avatar, Badge, withBadge, Icon, Button, useThemeMode } from '@rneui/themed'
// import { ThemeButton } from '..'

export const Badges = ({ navigation }) => {
    
  const BadgedIcon = withBadge(15)(Icon)

  const handleNavigate = () => {
    navigation.navigate('Register')
  }

  return (    
    <>      
      <ScrollView>            
        <Text style={styles.subHeader}>Standard Badge</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
            marginBottom: 40
          }}
        >
          <Badge value="3" status="success" />
          <Badge value="99+" status="error" />
          <Badge value="500" status="primary" />
          <Badge value="10" status="warning" />
        </View>
        <Text style={styles.subHeader}>Mini Badge</Text>
        <Text style={{ textAlign: 'center' }}>
          This type of badge shows when no value prop is provided. This form is
          effective for showing statuses.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
            marginBottom: 20
          }}
        >
          <Badge status="success" />
          <Badge status="error" />
          <Badge status="primary" />
          <Badge status="warning" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20
          }}
        >
          <Text style={{ color: '#397af8', paddingVertical: 10 }}>Success</Text>
          <Text style={{ color: '#397af8', paddingVertical: 10 }}>Error</Text>
          <Text style={{ color: '#397af8', paddingVertical: 10 }}>Primary</Text>
          <Text style={{ color: '#397af8', paddingVertical: 10 }}>Warning</Text>
        </View>

        <Text style={styles.subHeader}>Badge as Indicator</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
            marginBottom: 40
          }}
        >
          <View>
            <Avatar
              rounded
              source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
              size="medium"
            />
            <Badge
              status="success"
              containerStyle={{ position: 'absolute', top: 5, left: 40 }}
            />
          </View>
          <BadgedIcon type="ionicon" name="ios-chatbubbles" />
          <View>
            <Avatar
              rounded
              source={{
                uri: 'https://randomuser.me/api/portraits/women/40.jpg'
              }}
              size="large"
            />
            <Badge
              status="primary"
              value={10}
              containerStyle={{ position: 'absolute', top: 5, left: 60 }}
            />
          </View>          
        </View>
        <Button type="solid" onPress={handleNavigate}>
          Register          
        </Button>
      </ScrollView>
      {/* <ThemeButton />  */}
    </>
  )
}

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: '#2089dc',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10
  }
})
