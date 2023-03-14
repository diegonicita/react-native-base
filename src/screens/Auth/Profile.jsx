import React from 'react'
import { useThemeMode, Text } from '@rneui/themed'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'

import { useMessageStore } from '../../redux/hooks/useMessage'

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CustomScrollView } from '../../components/CustomScrollView'
import { CustomBackgroundView } from '../../components/CustomBackgroundView'

const images = [
  require('../../assets/soccer-player-001.png'),
  require('../../assets/soccer-player-001-dark.png'),
  require('../../assets/profile-color.png')
]

const config = {
  title: 'Bienvenido'
}

export const Profile = ({ navigation }) => {
  const { setUserLogged, userLogged, isLogged, setIsLogged } = useMessageStore()
  const { mode } = useThemeMode()

  const handleLogout = () => {
    setIsLogged(null)
    setUserLogged(null)
  }

  return (
    <CustomBackgroundView mode={mode}>
      <CustomScrollView>
        {!userLogged ? (
          <Header title={config.title} />
        ) : (
          <Header title={"Bienvenido " + userLogged[1]} />
        )}

        <View style={styles.imageContainer}>
          <Image style={styles.imageProfile} source={images[2]} />
        </View>
        <View style={styles.containerText}>
          {userLogged ? (
            <>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.textLabel}>Usuario:</Text>
                <Text> {userLogged[1]}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.textLabel}>Nombre y Apellido:</Text>
                <Text>
                  {' '}
                  {userLogged[2]} {userLogged[3]}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.textLabel}>Club ID:</Text>
                <Text> {userLogged[4]}</Text>
              </View>
            </>
          ) : (
            <>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.textLabel}>Usuario:</Text>
                <Text> Test</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.textLabel}>Usuario:</Text>
                <Text> Test</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.textLabel}>Usuario:</Text>
                <Text> Test</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.textLabel}>Usuario:</Text>
                <Text> Test</Text>
              </View>
            </>
          )}
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.textCerrarSesion}>
              ¿ Quieres cerrar sesion ? Haz clic aqui
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Footer /> */}
      </CustomScrollView>
    </CustomBackgroundView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
  imageProfile: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 15
  },
  imageBottom: {
    width: '100%',
    height: 350,
    resizeMode: 'cover'
  },
  containerText: {
    marginTop: 20,
    marginBottom: 40,
    textAlign: 'center'
  },
  text: {
    alignSelf: 'center'
  },
  textLabel: {
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  textCerrarSesion: {
    marginTop: 10,
    alignSelf: 'center',
    fontWeight: 'bold'
  }
})
