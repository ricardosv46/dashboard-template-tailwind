import { isEmpty } from '@utils/isEmpty'
import { isNumber } from '@utils/isNumber'
import { FormikErrors, FormikValues } from 'formik'

export const validateCreateCash = (values: FormikValues) => {
  let errors: FormikErrors<FormikValues> = {}

  if (isEmpty(values.titulo)) {
    errors.titulo = 'El titulo es requerido'
  }

  if (isEmpty(values.numeroCelular)) {
    errors.numeroCelular = 'El número de celular es requerido'
  }

  if (!isNumber(values.numeroCelular)) {
    errors.numeroCelular = 'Debe ser un numero válido'
  }

  if (isEmpty(values.imagenPrincipal?.url)) {
    errors.imagenPrincipal = 'La imagen principal es requerida'
  }

  if (isEmpty(values.imagenQr?.url)) {
    errors.imagenQr = 'La imagen Qr es requerida'
  }

  return errors
}
