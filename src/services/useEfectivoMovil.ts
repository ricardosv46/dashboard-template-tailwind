import {
  useCreateEfectivoMovilMutation,
  useDeleteEfectivoMovilMutation,
  useGetAllEfectivoMovilQuery,
  useUpdateEfectivoMovilMutation,
  useUpdateEstadoEfectivoMovilMutation
} from '../generated/graphql'

interface CrearEfectivoMovil {
  titulo: string
  numeroCelular: string
  imagenPrincipal: number | null
  imagenQr: number | null
}

interface ActualizarEstadoEfectivoMovil {
  efectivoMovilId: string
  estado: string
}
export const useEfectivoMovil = () => {
  const { data, loading, refetch } = useGetAllEfectivoMovilQuery({
    fetchPolicy: 'network-only',
    variables: {
      estado: ''
    }
  })
  const db = data?.GetAllEfectivoMovil.data ?? []

  // actualizar estado del efectivo movil

  const [updateEstadoEfectivoMovil] = useUpdateEstadoEfectivoMovilMutation({
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    }
  })

  const actualizarEstadoEfectivoMovil = async (datos: ActualizarEstadoEfectivoMovil) => {
    try {
      const resp = await updateEstadoEfectivoMovil({
        variables: {
          input: datos
        }
      })
      if (resp.data?.UpdateEstadoEfectivoMovil) {
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

  // actualizar efectivo movil

  const [updateEfectivoMovilMutation] = useUpdateEfectivoMovilMutation({
    onError: (err) => console.log(err.graphQLErrors[0].message)
  })

  const actualizarEfectivoMovil = async (datos: any) => {
    try {
      const resp = await updateEfectivoMovilMutation({
        variables: {
          input: { ...datos }
        }
      })
      if (resp.data?.UpdateEfectivoMovil) {
        refetch()
        return {
          ok: true,
          error: null
        }
      }
    } catch (error) {
      return {
        ok: false,
        error: 'Error al actualizar el efectivo movil'
      }
    }
  }

  // eliminar efectivo movil
  const [deleteEfectivoMutation, { loading: loadingDelete }] = useDeleteEfectivoMovilMutation()

  const eliminarEfectivoMovil = async (id: number) => {
    try {
      await deleteEfectivoMutation({
        variables: {
          efectivoMovilId: id
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
        error: 'Error al eliminar el efectivo movil'
      }
    }
  }

  // crear efectivo movil

  const [createEfectivoMovilMutation, { loading: loadingCreate }] = useCreateEfectivoMovilMutation({
    onError: (err) => {
      console.log('Error al crear el efectivo movil', err.graphQLErrors[0].message)
    }
  })

  const crearEfectivoMovil = async (
    datos: CrearEfectivoMovil
  ): Promise<{ ok: boolean; error: null | string } | undefined> => {
    try {
      const resp = await createEfectivoMovilMutation({
        variables: {
          input: datos
        }
      })
      if (resp.data?.CreateEfectivoMovil) {
        refetch()
        return {
          ok: true,
          error: null
        }
      }
    } catch (error: any) {
      return {
        ok: false,
        error: 'Error al crear el efectivo movil'
      }
    }
  }

  return {
    db,
    loading,
    loadingDelete,
    loadingCreate,
    eliminarEfectivoMovil,
    actualizarEstadoEfectivoMovil,
    actualizarEfectivoMovil,
    crearEfectivoMovil,
    refetch
  }
}
