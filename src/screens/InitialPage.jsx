import React from 'react'
import { View, ImageBackground, Dimensions, ScrollView } from 'react-native'
import { makeStyles, Text, Button, useThemeMode, Image, ActivityIndicator} from '@rneui/themed'
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux'
import { useMessageStore } from '../redux/hooks/useMessage'

const image = require("../assets/checklist-small.jpg")
const imageDark = require("../assets/checklist-small-dark.jpg")
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const halfWidth = width / 2;
const halfHeight = height / 2;

export const InitialPage = ({ navigation }) => {

  const styles = useStyles()
  const { message, setMessage } = useMessageStore()
  const { setMode, mode } = useThemeMode()
  

  const handleNavigateMenu = () => {
    setMessage('Yendo a Main Menu')
    navigation.navigate('Dialogs')
  }
  const handleNavigateBadges = () => {
    setMessage('Yendo a Badges')
    navigation.navigate('Badges')
  }
  const handleNavigateCards = () => {
    setMessage('Yendo a Cards')
    navigation.navigate('Cards')
  }
  const commonProps = {
    buttonStyle: styles.button,
    containerStyle: styles.buttonContainer,
    titleStyle: styles.buttonTitle
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={mode==='dark'?imageDark:image} style={styles.imageBackground}>            
        <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
          <Text style={styles.title}></Text>      
          <Text h3>Test</Text>
          <Text>versión 0.22</Text>
          <Text></Text>
          <Text style={styles.subtitle}>Test App</Text>
          <Text style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          <Text h6> </Text>
          {/* <LinearGradient
          colors={styles.linearGradientColors}
          style={styles.linearGradient}/>           */}
          <Text style={styles.description} h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sunt temporibus officia aperiam, totam ab non in inventore quo possimus, sint expedita reiciendis rerum praesentium delectus maiores, molestias magni quod?
          </Text>
          <Text h6> </Text>
          <Button title="Dialogs"
              {...commonProps}
              onPress={handleNavigateMenu}
          />          
          <Button title="Badges"
              {...commonProps}
              onPress={handleNavigateBadges}
          />    
          <Button title="Cards"
              {...commonProps}
              onPress={handleNavigateCards}
          />  
        </ScrollView>
      </ImageBackground> 
    </View>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {  
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContentContainer: {         
    margin: 'auto',
    backgroundColor: theme.colors.background,
    justifyContent: 'flex-start',
    alignItems: 'center',    
    maxWidth: 400,
    marginTop: 10,
    width: "100%",    
    borderRadius: 5

  },  
  title: {    
    justifyContent: 'center',
    zIndex: 1
  },
  subtitle: {    
    justifyContent: 'center',    
    marginLeft: 10,
    marginRight: 20,    
    zIndex: 1
  },
  description: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 20,  
    zIndex: 1  
  },
  imageBackground: {           
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%"
  },
  linearGradient: 
  { height: "100%", 
    width: "100%", 
    position: "absolute", 
    top: 0,
    borderRadius: 5
  },
  linearGradientColors:
  [theme.colors.secondary, theme.colors.primary]
  ,  
  button: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,  
    width: 200
  },
  buttonContainer: 
  {      
      marginHorizontal: 50,
      marginVertical: 10,
  },
  buttonTitle:  
  { 
    fontWeight: 'bold'
  }  
}))
