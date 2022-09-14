import { isEmpty } from '@utils/isEmpty'
import { isNumberDecimal } from '@utils/isNumberDecimal'
import { isNumberEntero } from '@utils/isNumberEntero'

import { FormikErrors, FormikValues } from 'formik'

export const validateCreateProducto = (values: FormikValues) => {
  let errors: FormikErrors<FormikValues> = {}

  if (isEmpty(values.titulo)) {
    errors.titulo = 'El titulo es requerido'
  }

  if (isEmpty(values.keywords)) {
    errors.keywords = 'Los keywords son requeridos'
  }

  if (!isNumberDecimal(values.precioReal)) {
    errors.precioReal = 'El precio real deber ser un número válido'
  }

  if (!isNumberDecimal(values.precioOferta)) {
    errors.precioOferta = 'El precio oferta deber ser un número válido'
  }

  if (!isNumberEntero(values.stockMinimo)) {
    errors.stockMinimo = 'El stock Mínimo  deber ser un número válido'
  }

  if (!isNumberEntero(values.stockReal)) {
    errors.stockReal = 'El stock real  deber ser un número válido'
  }

  if (isEmpty(values.descripcionCorta)) {
    errors.descripcionCorta = 'La descripción Corta es requerida'
  }

  if (isEmpty(values.descripcionLarga)) {
    errors.descripcionLarga = 'La descripción Larga es requerida'
  }

  if (isEmpty(values.categoriaProductoId)) {
    errors.categoriaProductoId = 'La categoría es requerida'
  }

  if (isEmpty(values.imagenPrincipal?.url)) {
    errors.imagenPrincipal = 'La imagen principal es requerida'
  }

  if (isEmpty(values.imagenSecundaria?.url)) {
    errors.imagenSecundaria = 'La imagen secundaria es requerida'
  }

  if (isEmpty(values.imagenSecundaria?.url)) {
    errors.imagenSecundaria = 'La imagen secundaria es requerida'
  }

  if (isEmpty(values.galeria[0]?.url)) {
    errors.galeria = 'La galeria debe tener al menos una imagen'
  }

  // if (values.galeria?.length > 0) {
  //   errors?.galeria[0]?.url = ''
  // }

  return errors
}
