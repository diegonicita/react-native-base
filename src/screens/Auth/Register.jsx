import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { useThemeMode, Text } from '@rneui/themed'
import { StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native'

import { Formik } from 'formik'
import { useMessageStore } from '../../redux/hooks/useMessage'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useExploreByID } from '../Explore/useExploreByID'
import { registerValidationSchema } from './registerValidation'
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
  title: 'Regístrate'
}

export const Register = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedClub, setSelectedClub] = useState('Barca')
  const { login, setLogin, setMyClub, setUserCounter } = useMessageStore()
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
    setUserCounter(3)
    setIsLoading(false)
    handleNavigateToLogin()
  }

  const handleNavigateToLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <>
      <CustomBackgroundView mode={mode}>
        {/* </CustomBackgroundView><CustomBackgroundView image1={images[1]} image2={images[0]} mode={mode}> */}
        <CustomScrollView>
          <Header title={config.title} />
          <Formik
            validationSchema={registerValidationSchema}
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
                    style={styles.input}
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
                    style={styles.input}
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
                    style={styles.input}
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
                    style={styles.input}
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
                    style={styles.input}
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
                  style={styles.input}
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
              </View>
            )}
          </Formik>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={mode === 'dark'?images[1]:images[0]} />
          </View>
          <Footer />
        </CustomScrollView>
      </CustomBackgroundView>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '90%',
    maxWidth: 640,
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
  iniciaSesion: {
    marginBottom: 40,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  picker: {
    height: 40,
    width: '90%',
    maxWidth: 640,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    padding: 10
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
