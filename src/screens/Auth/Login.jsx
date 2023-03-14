import React, { useState, useEffect } from 'react'
import { useThemeMode, Text } from '@rneui/themed'
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native'

import { Formik } from 'formik'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMessageStore } from '../../redux/hooks/useMessage'
import usersFromJSON from './helpers/dataJSON/users.json'
import { loginValidationSchema } from './loginValidation'

// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CustomScrollView } from '../../components/CustomScrollView'
import { CustomBackgroundView } from '../../components/CustomBackgroundView'

const images = [
  require('../../assets/soccer-player-001.png'),
  require('../../assets/soccer-player-001-dark.png')
]

const config = {
  title: 'Iniciar Sesión'
}

export const Login = ({ navigation }) => {
  const [isSubmmiting, setIsSubmmiting] = useState(false)
  const [isLoadingData, setIsLoadingData] = useState(true)
  const [userList, setUserList] = useState([])
  const [serverStatus, setServerStatus] = useState(0)
  const { isLogged, setIsLogged, setMyClub, userCounter, setUserLogged } =
    useMessageStore()
  const { mode } = useThemeMode()

  useEffect(() => {
    const addUserList = async () => {
      await setUserList(usersFromJSON.response)
    }

    addUserList()

    const addDataFromStorage = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_user')
        if (value !== null) {
          setUserList((p) => [...p, { user: JSON.parse(value) }])
        }
      } catch (e) {}
    }
    addDataFromStorage()
    setIsLoadingData(false)
  }, [userCounter])  

  const handleSubmit = async (values) => {
    setIsSubmmiting(true)
    const listaFiltrada = userList.filter(
      (item) => item.user.username === values.username
    )
    if (listaFiltrada.length !== 0) {
      if (listaFiltrada[0].user.password === values.password) {
        setIsLogged(true)
        setUserLogged([
          listaFiltrada[0].user.id,
          listaFiltrada[0].user.username,
          listaFiltrada[0].user.firstname,
          listaFiltrada[0].user.lastname,
          listaFiltrada[0].user.club,          
        ])
        setMyClub(listaFiltrada[0].user.club)
        setServerStatus(200) // Ok
      } else {
        setIsLogged(false)
        setMyClub(null)
        setServerStatus(401)
        setTimeout(() => setServerStatus(0), 1000) // unauthorized
      }
    } else {
      setIsLogged(false)
      setMyClub(null)
      setServerStatus(401) // unauthorized
      setTimeout(() => setServerStatus(0), 1000) // unauthorized
    }
    setIsSubmmiting(false)
  }

  const handleNavigateToRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <CustomBackgroundView mode={mode}>
      {/* <CustomBackgroundView image1={images[1]} image2={images[0]} mode={mode}> */}
      <CustomScrollView>
        <Header title={config.title} />

        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ username: '', password: '' }}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid
          }) => (
            <View style={{ alignItems: 'center' }}>
              {!isSubmmiting && !isLogged && (
                <>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Usuario</Text>
                  </View>
                  <TextInput
                    name="username"
                    placeholder="Escribe tu nombre de usuario"
                    style={styles.input}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    keyboardType="default"
                    autoCapitalize="none"
                  />
                </>
              )}
              {errors.username && touched.username && (
                <Text style={{ fontSize: 16, color: 'red', padding: 5 }}>
                  {errors.username}
                </Text>
              )}
              {!isSubmmiting && !isLogged && (
                <>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Contraseña</Text>
                  </View>
                  <TextInput
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    autoCapitalize="none"
                    secureTextEntry
                  />
                </>
              )}
              {errors.password && touched.password && (
                <Text style={{ fontSize: 16, color: 'red', padding: 5 }}>
                  {errors.password}
                </Text>
              )}
              {serverStatus === 401 && (
                <Text style={styles.error}>Usuario o Contraseña inválida</Text>
              )}
              {!isSubmmiting && !isLogged && (
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={(values) => handleSubmit(values)}
                >
                  <Text style={styles.button}>Ingresar</Text>
                </TouchableOpacity>
              )}
              {!isSubmmiting && !isLogged && (
                <View>
                  <Text> </Text>
                  <Text> </Text>
                </View>
              )}

              {!isSubmmiting && !isLogged && (
                <TouchableOpacity onPress={handleNavigateToRegister}>
                  <Text style={styles.registrate}>
                    ¿No tienes una cuenta? Registrate{' '}
                  </Text>
                </TouchableOpacity>
              )}              
            </View>
          )}
        </Formik>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={mode === 'dark' ? images[1] : images[0]}
          />
        </View>
        <Footer />
      </CustomScrollView>
    </CustomBackgroundView>
  )
}

const styles = StyleSheet.create({
  input: {
    maxWidth: 640,
    height: 40,
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  buttonContainer: {
    width: '90%',
    marginTop: 30,
    maxWidth: 640
  },
  button: {
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    textAlign: 'center'
  },
  labelContainer: {
    width: '90%',
    maxWidth: 640
  },
  label: {
    paddingTop: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  registrate: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 40
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  imageContainer: {
    alignContent: 'flex-start',
    justifyContent: 'flex-start'
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'cover'
  }
})
