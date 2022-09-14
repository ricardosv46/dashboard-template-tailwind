import { useUpdatePasswordUsuarioMutation } from '../generated/graphql'

interface IUpdatePasword {
  id: string
  passwordNuevo: string
  passwordAntiguo: string
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

  return {
    updatePassword,
    loadingUpdatePassword
  }
}
