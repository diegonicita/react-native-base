import { Platform } from 'react-native'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { useThemeMode } from '@rneui/themed'
import { Text } from '@rneui/themed'
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
import { useMessageStore } from '../../redux/hooks/useMessage'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useExploreByID } from '../Explore/useExploreByID'

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
    .required('El campo no debe estar vacío'),
  firstname: yup
    .string()
    .min(
      3,
      ({ min }) => `Nombre muy corto. Debe tener al menos ${min} caracteres!`
    )
    .required('El campo no debe estar vacío'),
  lastname: yup
    .string()
    .min(
      3,
      ({ min }) => `Apellido muy corto. Debe tener al menos ${min} caracteres!`
    )
    .required('El campo no debe estar vacío'),
  password: yup
    .string()
    .min(7, ({ min }) => `Tu password debe tener al menos ${min} caracteres`)
    .required('El campo no debe estar vacío'),
  password2: yup
    .string()
    .min(7, ({ min }) => `Tu password debe tener al menos ${min} caracteres`)
    .required('El campo no debe estar vacío')
    .oneOf([yup.ref('password'), null], 'Tus passwords no coinciden'),
  miclub: yup
    .string()
    .min(
      3,
      ({ min }) => `Club muy corto. Debe tener al menos ${min} caracteres!`
    )
    .required('El campo no debe estar vacío')
})

const config = {
  title: 'Regístrate'
}

export const Register = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedClub, setSelectedClub] = useState('Barca')
  const { login, setLogin, setMyClub } = useMessageStore()
  const { isLoading: isLoadingTeams, teamList } = useExploreByID(null)
  const { mode } = useThemeMode()

  const handleSubmit = async (values) => {
    setIsLoading(true)
    const storeData = async (data) => {
      try {
        const jsonData = JSON.stringify(data)
        await AsyncStorage.setItem('@storage_user', jsonData)
      } catch (e) {
        console.log(e)
      }
    }
    storeData({
      id: 3,
      username: values.username,
      firstname: values.firstname,
      password: values.password,
      lastname: values.lastname,
      club: values.miclub
    })
    setLogin(true)
    setMyClub(values.miclub)
    setIsLoading(false)
    handleNavigateToLogin()
  }

  const handleNavigateToLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={styles.containerBackground}>
      {/* <ImageBackground
        source={mode === 'dark' ? images[1] : images[0]}
        resizeMode="cover"
        style={styles.imageBackground}
      > */}
        <ScrollView style={styles.scrollView}>
          <Text style={styles.subHeader}> {config.title} </Text>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{
              username: '',
              password: '',
              password2: '',
              firstname: '',
              lastname: '',
              miclub: ''
            }}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
              isValid,
              setFieldValue
            }) => (
              <View style={{ alignItems: 'center' }}>
                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Nombre y Apellido</Text>
                </View>
                {!isLoading && (
                  <TextInput
                    name="firstname"
                    placeholder="Ingresa tu nombre"
                    style={styles.textInput}
                    onChangeText={handleChange('firstname')}
                    onBlur={handleBlur('firstname')}
                    value={values.firstname}
                    autoCapitalize="none"
                  />
                )}
                {errors.firstname && touched.firstname && (
                  <Text style={{ fontSize: 16, color: 'red', padding: 5 }}>
                    {errors.firstname}
                  </Text>
                )}
                {!isLoading && (
                  <TextInput
                    name="lastname"
                    placeholder="Ingresa tu apellido"
                    style={styles.textInput}
                    onChangeText={handleChange('lastname')}
                    onBlur={handleBlur('lastname')}
                    value={values.lastname}
                    autoCapitalize="none"
                  />
                )}
                {errors.lastname && touched.lastname && (
                  <Text style={{ fontSize: 16, color: 'red', padding: 5 }}>
                    {errors.lastname}
                  </Text>
                )}
                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Usuario</Text>
                </View>
                {!isLoading && (
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
                )}
                {errors.username && touched.username && (
                  <Text style={{ fontSize: 16, color: 'red', padding: 5 }}>
                    {errors.username}
                  </Text>
                )}
                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Contraseña</Text>
                </View>
                {!isLoading && (
                  <TextInput
                    name="password"
                    placeholder="Usa 7 caracteres como minimo"
                    style={styles.textInput}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    autoCapitalize="none"
                    secureTextEntry
                  />
                )}
                {errors.password && touched.password && (
                  <Text style={{ fontSize: 16, color: 'red', padding: 5 }}>
                    {errors.password}
                  </Text>
                )}
                {!isLoading && (
                  <TextInput
                    name="password2"
                    placeholder="Repite tu contraseña"
                    style={styles.textInput}
                    onChangeText={handleChange('password2')}
                    onBlur={handleBlur('password2')}
                    value={values.password2}
                    autoCapitalize="none"
                    secureTextEntry
                  />
                )}
                {errors.password2 && touched.password2 && (
                  <Text style={{ fontSize: 16, color: 'red', padding: 5 }}>
                    {errors.password2}
                  </Text>
                )}
                <View style={styles.labelContainer}>
                  <Text style={styles.label}>Tu Club</Text>
                </View>
                {/* {!isLoading && (
                <TextInput
                  name="miclub"
                  placeholder="Elige tu Club"
                  style={styles.textInput}
                  onChangeText={handleChange('miclub')}
                  onBlur={handleBlur('miclub')}
                  value={values.miclub}
                  autoCapitalize="none"
                />
              )} */}

                <Picker
                  style={styles.picker}
                  enabled={true}
                  placeholder="Select City"
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedClub(itemValue)
                    setFieldValue('miclub', itemValue)
                  }}
                  selectedValue={values.miclub}
                >
                  <Picker.Item label="Selecciona un Club" value="" />
                  {teamList.map((item) => (
                    <Picker.Item
                      key={item.team.id}
                      label={item.team.name}
                      value={item.team.id}
                    />
                  ))}
                </Picker>
                {errors.miclub && touched.miclub && (
                  <Text style={{ fontSize: 16, color: 'red', padding: 5 }}>
                    {errors.miclub}
                  </Text>
                )}
                {!isLoading && (
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.button}> Registrarme</Text>
                  </TouchableOpacity>
                )}
                {!isLoading && (
                  <View>
                    <Text> </Text>
                    <Text> </Text>
                  </View>
                )}
                {!isLoading && (
                  <TouchableOpacity onPress={handleNavigateToLogin}>
                    <Text style={styles.iniciaSesion}>
                      ¿Ya tienes una cuenta? ¡Inicia sesion!{' '}
                    </Text>
                  </TouchableOpacity>
                )}
                {!isLoading && (
                  <View style={styles.footer}>
                    <Text style={styles.politica}>Politica de Privacidad</Text>
                    <Text style={styles.terminos}>Terminos y Condiciones</Text>
                  </View>
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
    height: 40,
    width: '90%',   
    maxWidth: 640, 
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
    maxWidth: 640
  },
  label: {
    paddingTop: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  iniciaSesion: {
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  footer: {
    paddingTop: 16,
    flexDirection: 'row'
  },
  politica: {
    padding: 16,
    fontSize: 12
  },
  terminos: {
    padding: 16,
    fontSize: 12
  },
  containerBackground: {
    flex: 1
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center'
  },
  picker: {
    height: 40,
    width: '90%',
    maxWidth: 640,
    marginTop: 10,
    marginBotton: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    padding: 10,
  }
})
