import React from 'react'
import { View } from 'react-native'
import { Tab, TabView, makeStyles, Text, Button, useThemeMode } from '@rneui/themed'
import Icon from 'react-native-vector-icons/FontAwesome'

export const Profile = ({navigation}) => {
  const styles = useStyles()
  const { setMode, mode } = useThemeMode()
  const handleOnPress = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }
  const [index, setIndex] = React.useState(0);
  
  const handleNavigate = () => {
    navigation.navigate('Start')
    }

  return (
    <>
    <View style={styles.container}>
      <Text h4>PROFILE</Text>      
      <Text h4></Text>      
      <Button onPress={handleOnPress}>Cambiar Tema</Button>      
      <Text h4></Text>      
      <Button type="solid" onPress={handleNavigate}>
        Start
        <Icon name="home" color="white" />
      </Button>
    </View>          
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: 'white',
            height: 3,
          }}
          variant="primary"
        >
          <Tab.Item
            title="Recent"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            title="favorite"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
          />
          <Tab.Item
            title="cart"
            titleStyle={{ fontSize: 12 }}
            icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
          />
        </Tab>
    
        <TabView value={index} onChange={setIndex} animationType="spring">
          <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
            <Text h1>Recent</Text>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
            <Text h1>Favorite</Text>
          </TabView.Item>
          <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
            <Text h1>Cart</Text>
          </TabView.Item>
        </TabView>      
      </>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginVertical: theme.spacing.lg
  }
}))