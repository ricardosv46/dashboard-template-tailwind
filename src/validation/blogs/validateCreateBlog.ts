import { isEmpty } from '@utils/isEmpty'
import { FormikErrors, FormikValues } from 'formik'

export const validateCreateBlog = (values: FormikValues) => {
  let errors: FormikErrors<FormikValues> = {}

  if (isEmpty(values.titulo)) {
    errors.titulo = 'El titulo es requerido'
  }

  if (isEmpty(values.keywords)) {
    errors.keywords = 'Los keywords son requeridos'
  }

  if (isEmpty(values.descripcionCorta)) {
    errors.descripcionCorta = 'La descripción Corta es requerida'
  }

  if (isEmpty(values.descripcionLarga)) {
    errors.descripcionLarga = 'La descripción Larga es requerida'
  }

  if (isEmpty(values.categoriaBlogId)) {
    errors.categoriaBlogId = 'La categoría es requerida'
  }

  if (isEmpty(values.imagenPrincipal?.url)) {
    errors.imagenPrincipal = 'La imagen principal es requerida'
  }

  if (isEmpty(values.imagenSecundaria?.url)) {
    errors.imagenSecundaria = 'La imagen secundaria es requerida'
  }

  return errors
}
