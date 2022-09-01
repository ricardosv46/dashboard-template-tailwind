import { isEmpty } from '@utils/isEmpty'
import { FormikErrors, FormikValues } from 'formik'

import { isEmail } from '../utils/isEmail'

export const validateRecoveryPassword = (values: FormikValues) => {
  let errors: FormikErrors<FormikValues> = {}

  if (isEmpty(values.email)) {
    errors.email = 'El Email es requerido'
  }
  if (!isEmpty(values.email) && !isEmail(values.email)) {
    errors.email = 'Debe ser un Email valido'
  }

  return errors
}
