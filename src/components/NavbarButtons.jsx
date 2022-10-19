import React from 'react'
import { View, Text } from 'react-native'
import { makeStyles, useThemeMode, Button } from '@rneui/themed'
import Icon from 'react-native-vector-icons/FontAwesome5'
// import {ThemeButton} from ".."

export const NavbarButtons = () => {
  const styles = useStyles()
  const { setMode, mode } = useThemeMode()
  const handleOnPress = () => {
  }
  
  return (
      <View style={styles.view}>  
        {/* <ThemeButton />
        <Button 
          title="Sign In"     
          onPress={handleOnPress}
          buttonStyle={styles.button}        
          titleStyle={{fontSize: 18}}       
        />      
        <Button 
          title="Sign Up"     
          onPress={handleOnPress}
          buttonStyle={styles.button} 
          titleStyle={{fontSize: 18}}       
        />   */}
    </View> )
}

const useStyles = makeStyles((theme) => ({
    view: {
        flexDirection: "row",        
        height: 60,     
        alignItems: "center",
        justifyContent: "space-between",
        gap: 5,
        marginLeft: 20
    },
    button: 
    {
        borderRadius: 8,
        padding: 10,
        width: 100,        
    }
  }));