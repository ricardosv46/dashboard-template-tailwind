import { isEmpty } from '@utils/isEmpty'
import { isNumber } from '@utils/isNumber'
import { FormikErrors, FormikValues } from 'formik'

export const validateCreateVendedor = (values: FormikValues) => {
  let errors: FormikErrors<FormikValues> = {}

  if (isEmpty(values.nombres)) {
    errors.nombres = 'El nombre es requerido'
  }

  if (isEmpty(values.apellidos)) {
    errors.apellidos = 'El apellido es requerido'
  }

  if (isEmpty(values.link)) {
    errors.link = 'El link es requerido'
  }

  if (isEmpty(values.imagenPrincipal?.url)) {
    errors.imagenPrincipal = 'La imagen principal es requerida'
  }

  return errors
}
