import { useUpdatePasswordUsuarioMutation, useUpdateUsuarioMutation } from '../generated/graphql'

interface IUpdatePasword {
  id: string
  passwordNuevo: string
  passwordAntiguo: string
}

interface IUpdateProfile {
  id: string
  tipoDocumento: string
  numeroDocumento: string
  genero: string
  nombres: string
  apellidos: string
  celular: string
  fechaNacimiento: string
  email: string
  photo: any
}

export const useProfile = () => {
  const [UpdatePassword, { loading: loadingUpdatePassword }] = useUpdatePasswordUsuarioMutation()

  const updatePassword = async ({ id, passwordAntiguo, passwordNuevo }: IUpdatePasword) => {
    try {
      const res = await UpdatePassword({
        variables: {
          input: {
            id,
            passwordAntiguo,
            passwordNuevo
          }
        }
      })
      if (res.data?.UpdatePasswordUsuario) {
        return { ok: true }
      }
      return { ok: false }
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }
  }

  const [UpdateProfile, { loading: loadingUpdateProfile }] = useUpdateUsuarioMutation()

  const updateProfile = async ({ id, apellidos,celular,email,fechaNacimiento,genero,nombres,numeroDocumento,photo,tipoDocumento }: IUpdateProfile) => {
    try {
      const res = await UpdateProfile({
        variables: {
          input: {
            id, apellidos,celular,email,fechaNacimiento,genero:+genero,nombres,numeroDocumento,tipoDocumento
          },
          foto:photo
        }
      })
      if (res.data?.UpdateUsuario) {
        return { ok: true }
      }
      return { ok: false }
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }
  }

  return {
    updatePassword,
    loadingUpdatePassword,
    updateProfile,
    loadingUpdateProfile
  }
}
