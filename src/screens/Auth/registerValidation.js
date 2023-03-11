import * as yup from 'yup'

export const registerValidationSchema = yup.object().shape({
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