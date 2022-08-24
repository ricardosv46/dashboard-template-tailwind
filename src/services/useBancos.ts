import {
  useCreateBancosMutation,
  useDeleteBancosMutation,
  useGetAllBancosQuery,
  useUpdateBancosMutation,
  useUpdateEstadoBancoMutation
} from '../generated/graphql'

interface CrearBanco {
  titulo: string
  numeroCuenta: string
  imagenPrincipal: number | null
}

interface ActualizarEstadoBanco {
  bancoId: string
  estado: string
}
export const useBancos = () => {
  const { data, loading, refetch } = useGetAllBancosQuery({
    fetchPolicy: 'network-only',
    variables: {
      estado: ''
    }
  })
  const db = data?.GetAllBancos?.data ?? []

  // actualizar estado banco

  const [updateEstadoBancoMutation] = useUpdateEstadoBancoMutation({
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    }
  })

  const actualizarEstadoBanco = async (datos: ActualizarEstadoBanco) => {
    try {
      const resp = await updateEstadoBancoMutation({
        variables: {
          input: datos
        }
      })
      if (resp.data?.UpdateEstadoBanco) {
        refetch()
        return {
          ok: true,
          error: null
        }
      }
    } catch (error) {
      console.log(error)
      return {
        ok: false,
        error: 'Error al actualizar el banco'
      }
    }
  }

  // actualizar banco

  const [updateBancoMutation] = useUpdateBancosMutation({
    onError: (err) => console.log(err.graphQLErrors[0].message)
  })

  const actualizarBanco = async (datos: any) => {
    try {
      const resp = await updateBancoMutation({
        variables: {
          input: { ...datos }
        }
      })
      if (resp.data?.UpdateBancos) {
        refetch()
        return {
          ok: true,
          error: null
        }
      }
    } catch (error) {
      return {
        ok: false,
        error: 'Error al actualizar el banco'
      }
    }
  }

  // eliminar un banco
  const [deleteBancoMutation, { loading: loadingDelete }] = useDeleteBancosMutation()

  const eliminarBanco = async (id: number) => {
    try {
      await deleteBancoMutation({
        variables: {
          bancoId: id
        }
      })
      refetch()
      return {
        ok: true,
        error: null
      }
    } catch (err: any) {
      return {
        ok: false,
        error: 'Error al eliminar el banco'
      }
    }
  }

  // crear un banco

  const [createBancoMutation, { loading: loadingCreate }] = useCreateBancosMutation({
    onError: (err) => {
      console.log('Error al crear el banco', err.graphQLErrors[0].message)
    }
  })

  const crearBanco = async (
    datos: CrearBanco
  ): Promise<{ ok: boolean; error: null | string } | undefined> => {
    try {
      const resp = await createBancoMutation({
        variables: {
          input: datos
        }
      })
      if (resp.data?.CreateBancos) {
        refetch()
        return {
          ok: true,
          error: null
        }
      }
    } catch (error: any) {
      return {
        ok: false,
        error: 'Error al crear el banco'
      }
    }
  }

  return {
    db,
    loading,
    loadingDelete,
    loadingCreate,
    eliminarBanco,
    actualizarEstadoBanco,
    actualizarBanco,
    crearBanco,
    refetch
  }
}
