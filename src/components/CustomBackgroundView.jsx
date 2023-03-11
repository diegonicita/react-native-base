import React from 'react'
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native'

export const CustomBackgroundView = ({ image1, image2, mode, children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={mode === 'dark' ? image1 : image2}
        resizeMode="cover"
        style={styles.background}
      >
        {children}
      </ImageBackground>      
    </View>
  )
}

const styles = StyleSheet.create({    
    container: {
      flex: 1,            
    },
    background: {
      flex: 1,
      justifyContent: 'center'
    }
})
