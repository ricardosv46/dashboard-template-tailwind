import { isEmail } from '@utils/isEmail'
import { isEmpty } from '@utils/isEmpty'
import { FormikErrors, FormikValues } from 'formik'

export const validateEditProfile = (values: FormikValues) => {
  let errors: FormikErrors<FormikValues> = {}

  const isDNI = values.tipoDocumento === 'DNI'
	const isCE = values.tipoDocumento === 'CE'
  const isPasaporte = values.tipoDocumento === 'Pasaporte'

  if (isEmpty(values.nombres)) {
    errors.nombres = 'El nombre es requerido'
  }

  if (isEmpty(values.apellidos)) {
    errors.apellidos = 'El apellido es requerido'
  }

  if (values.numeroDocumento.length !== 8 && isDNI) {
    errors.numeroDocumento = 'El Documento debe tener 8 dígitos'
  }

  if (isEmpty(values.genero)) {
		errors.genero = 'El genero es requerido'
	}

  if (values.numeroDocumento.length !== 9 && isCE) {
    errors.numeroDocumento = 'El Documento debe tener 9 dígitos'
  }

  if (values.numeroDocumento.length !== 10 && isPasaporte) {
    errors.numeroDocumento = 'El Documento debe tener 10 dígitos'
  }

  if (isEmpty(values.celular)) {
		errors.celular = 'El celular es requerido'
	}

	if (isEmpty(values.email)) {
		errors.email = 'El correo es requerido'
	}

  if (isEmpty(values.fechaNacimiento)) {
		errors.fechaNacimiento = 'La fecha es requerida'
	}

	if (!isEmpty(values.email) && !isEmail(values.email)) {
		errors.email = 'Debe ser un Correo valido'
	}

  if (!isEmpty(values.email) && !isEmail(values.email)) {
		errors.email = 'Debe ser un Correo valido'
	}

  if (!values.photo) {
    errors.photo = 'La foto es requerida'
  }

  return errors
}
