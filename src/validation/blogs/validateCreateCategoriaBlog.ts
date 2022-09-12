import { isEmpty } from '@utils/isEmpty'
import { FormikErrors, FormikValues } from 'formik'

export const validateCreateCategoriaBlog = (values: FormikValues) => {
  let errors: FormikErrors<FormikValues> = {}

  if (isEmpty(values.titulo)) {
    errors.titulo = 'El titulo es requerido'
  }

  if (isEmpty(values.keywords)) {
    errors.keywords = 'Los keywords son requeridos'
  }

  if (isEmpty(values.descripcion)) {
    errors.descripcion = 'La descripción es requerido'
  }

  if (isEmpty(values.imagenPrincipal?.url)) {
    errors.imagenPrincipal = 'La imagen principal es requerida'
  }

  if (isEmpty(values.imagenSecundaria?.url)) {
    errors.imagenSecundaria = 'La imagen secundaria es requerida'
  }

  return errors
}
