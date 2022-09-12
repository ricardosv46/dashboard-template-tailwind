import { isEmpty } from '@utils/isEmpty'
import { isNumber } from '@utils/isNumber'
import { FormikErrors, FormikValues } from 'formik'

export const validateCreateBank = (values: FormikValues) => {
  let errors: FormikErrors<FormikValues> = {}

  if (isEmpty(values.titulo)) {
    errors.titulo = 'El titulo es requerido'
  }

  if (isEmpty(values.numeroCuenta)) {
    errors.numeroCuenta = 'El número de cuenta es requerido'
  }

  if (!isNumber(values.numeroCuenta)) {
    errors.numeroCuenta = 'Debe ser un numero válido'
  }

  if (isEmpty(values.imagenPrincipal?.url)) {
    errors.imagenPrincipal = 'La imagen principal es requerida'
  }

  return errors
}
