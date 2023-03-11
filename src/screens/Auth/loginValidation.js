import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
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