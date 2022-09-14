import { isEmpty } from '@utils/isEmpty'
import { FormikErrors, FormikValues } from 'formik'

export const validateEditPassword = (values: FormikValues) => {
  let errors: FormikErrors<FormikValues> = {}

  if (isEmpty(values.passwordAntiguo)) {
    errors.passwordAntiguo = 'La contraseña antigua es requerida'
  }

  if (isEmpty(values.passwordNuevo)) {
    errors.passwordNuevo = 'La nueva contraseña es requerida'
  }

  if (isEmpty(values.repeatPasswordNuevo)) {
    errors.repeatPasswordNuevo = 'La nueva contraseña es requerida'
  }

  if (values.repeatPasswordNuevo !== values.passwordNuevo) {
    errors.repeatPasswordNuevo = 'Debe ser igual ala nueva contraseña'
  }

  return errors
}
