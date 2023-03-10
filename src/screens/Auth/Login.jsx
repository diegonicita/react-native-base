import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import { Text } from '@rneui/themed'
import { useThemeMode } from '@rneui/themed'
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native'

import { Formik } from 'formik'
import * as yup from 'yup'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMessageStore } from '../../redux/hooks/useMessage'

import usersFromJSON from './helpers/dataJSON/users.json'
const images = [
  require('../../assets/background-001.png'),
  require('../../assets/background-001-dark.png')
]

const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(
      3,
      ({ min }) =>
        `Nombre de usuario muy corto. Debe tener al menos ${min} caracteres!`
    )
    .required('El campo no debe estar vacio'),
  password: yup
    .string()
    .min(7, ({ min }) => `Tu password debe tener al menos ${min} caracteres`)
    .required('El campo no debe estar vacio')
})

const config = {
  title: 'Iniciar Sesión'
}

export const Login = ({ navigation }) => {
  const [isSubmmiting, setIsSubmmiting] = useState(false)
  const [isLoadingData, setIsLoadingData] = useState(true)
  const [userList, setUserList] = useState([])
  const [serverStatus, setServerStatus] = useState(0)
  const { login, setLogin, setMyClub } = useMessageStore()
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
  }, [setUserList])

  // console.log(userList)

  const handleSubmit = async (values) => {
    setIsSubmmiting(true)
    const listaFiltrada = userList.filter(
      (item) => item.user.username === values.username
    )
    if (listaFiltrada.length !== 0) {
      if (listaFiltrada[0].user.password === values.password) {
        setLogin(true)
        setMyClub(listaFiltrada[0].user.club)
        setServerStatus(200) // Ok
      } else {
        setLogin(false)
        setMyClub(null)
        setServerStatus(401)
        setTimeout(() => setServerStatus(0), 1000) // unauthorized
      }
    } else {
      setLogin(false)
      setMyClub(null)
      setServerStatus(401) // unauthorized
      setTimeout(() => setServerStatus(0), 1000) // unauthorized
    }
    setIsSubmmiting(false)
  }

  const handleNavigateToRegister = () => {
    navigation.navigate('Register')
  }

  const handleLogout = () => {
    setLogin(null)
  }

  return (
    <View style={styles.containerBackground}>
      {/* <ImageBackground
        source={mode === 'dark' ? images[1] : images[0]}
        resizeMode="cover"
        style={styles.imageBackground}
      > */}
        <ScrollView style={styles.scrollView}>
          <Text style={styles.subHeader}>
            {' '}
            {login ? 'Bienvenido' : config.title}{' '}
          </Text>
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
                {!isSubmmiting && !login && (
                  <>
                    <View style={styles.labelContainer}>
                      <Text style={styles.label}>Usuario</Text>
                    </View>
                    <TextInput
                      name="username"
                      placeholder="Escribe tu nombre de usuario"
                      style={styles.textInput}
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
                {!isSubmmiting && !login && (
                  <>
                    <View style={styles.labelContainer}>
                      <Text style={styles.label}>Contraseña</Text>
                    </View>
                    <TextInput
                      name="password"
                      placeholder="Ingresa tu contraseña"
                      style={styles.textInput}
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
                  <Text style={styles.error}>
                    Usuario o Contraseña inválida
                  </Text>
                )}
                {!isSubmmiting && !login && (
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={(values) => handleSubmit(values)}
                  >
                    <Text style={styles.button}>Ingresar</Text>
                  </TouchableOpacity>
                )}
                {!isSubmmiting && !login && (
                  <View>
                    <Text> </Text>
                    <Text> </Text>
                  </View>
                )}

                {!isSubmmiting && !login && (
                  <TouchableOpacity onPress={handleNavigateToRegister}>
                    <Text style={styles.registrate}>
                      ¿No tienes una cuenta? Registrate{' '}
                    </Text>
                  </TouchableOpacity>
                )}
                {!isSubmmiting && !login && (
                  <View style={styles.footer}>
                    <Text style={styles.copyright}>Copyright Diego Nicita</Text>
                    <Text style={styles.alcance}>Alcance Tech 2023</Text>
                  </View>
                )}
                {!isSubmmiting && login && (
                  <>
                    <Text style={styles.success}>Logueo Exitoso.</Text>
                    <TouchableOpacity onPress={handleLogout}>
                      <Text>¿ Quieres cerrar sesion ? Haz clic aqui</Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            )}
          </Formik>
        </ScrollView>
      {/* </ImageBackground> */}
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    ...Platform.select({
      ios: {
        alignSelf: 'auto'
      },
      android: {
        alignSelf: 'auto'
      },
      default: {
        width: '100%',
        maxWidth: 1024,
        alignSelf: 'center'
      }
    })
  },
  subHeader: {
    fontSize: 20,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  textInput: {
    maxWidth: 640,
    height: 40,
    width: '90%',
    marginTop: 10,
    marginBotton: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    padding: 10
  },
  buttonContainer: {
    width: '90%',
    marginTop: 30,
    maxWidth: 640,
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
    maxWidth: 640,
  },
  label: {
    paddingTop: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
    
  },
  registrate: {
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  success: {
    marginTop: 20,
    color: 'green',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  logout: {
    marginTop: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  containerBackground: {
    flex: 1
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center'
  },
  footer: {
    paddingTop: 16,
    flexDirection: 'row'
  },
  copyright: {
    padding: 16,
    fontSize: 12
  },
  alcance: {
    padding: 16,
    fontSize: 12
  }
})
