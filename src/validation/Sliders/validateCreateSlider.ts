import { isEmpty } from '@utils/isEmpty'
import { FormikErrors, FormikValues } from 'formik'

export const validateCreateSlider = (values: FormikValues) => {
  let errors: FormikErrors<FormikValues> = {}

  if (isEmpty(values.link)) {
    errors.link = 'El link es requerido'
  }

  if (isEmpty(values.tipoLink)) {
    errors.tipoLink = 'El tipo de link es requerido'
  }

  if (isEmpty(values.titulo)) {
    errors.titulo = 'El titulo es requerido'
  }
  return errors
}
