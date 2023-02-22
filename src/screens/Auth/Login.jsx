import { Platform } from 'react-native'
import { useState } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'

import { Formik } from 'formik'
import * as yup from 'yup'

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
    title: 'Perfil'
  }

export const Login = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (values) => {
    setIsLoading(true)
    setIsLoading(false)
  }

  return (
    <>      
      <ScrollView style={styles.scrollView}>
        <Text style={styles.subHeader}> {config.title} </Text>
        <View>
          {/* <Image style={styles.splashImage} source={require('./login.png')} /> */}
        </View>
        <Text
          style={{
            fontSize: 24,
            color: 'black',
            padding: 24,
            fontWeight: 'bold',
            alignSelf: 'center'
          }}
        >
          Ingresar
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
            <>
              {!isLoading && (
                <TextInput
                  name="username"
                  placeholder="Nombre de Usuario"
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
              {!isLoading && (
                <TextInput
                  name="password"
                  placeholder="Password"
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
                <TouchableOpacity>
                  <Text style={styles.registrate}>
                    ¿No tienes una cuenta? Registrate{' '}
                  </Text>
                </TouchableOpacity>
              )}
              {!isLoading && (
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={{ fontSize: 24 }}>Ingresar</Text>
                </TouchableOpacity>
              )}
            </>
          )}
        </Formik>        
      </ScrollView>
    </>
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
        width: 412,
        maxWidth: 640,
        alignSelf: 'center'
      }
    })
  }
  ,
  subHeader: {
    backgroundColor: '#2089dc',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  splashImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    aspectRatio: 1,
    resizeMode: 'contain'
  },
  textInput: {
    height: 60,
    width: '100%',
    marginTop: 10,
    marginBotton: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    padding: 10,
    fontSize: 24
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 12,
    borderRadius: 10
  },
  registrate: {
    alignItems: 'center',
    color: 'black',
    padding: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})
