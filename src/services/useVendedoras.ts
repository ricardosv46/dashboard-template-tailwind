import {
  useCreateVendedoraMutation,
  useDeleteVendedoraMutation,
  useGetAllVendedorasQuery,
  useUpdateEstadoVendedoraMutation,
  useUpdateVendedoraMutation
} from '../generated/graphql'

interface CrearVendedora {
  nombres: string
  apellidos: string
  link: string
  imagenPrincipal: number
}

interface ActualizarEstadoVendedora {
  vendedoraId: string
  estado: string
}

export interface IDeleteVendedora {
  vendedoraId: number
}
export const useVendedoras = (input = { estado: '' }) => {
  const { data, loading, refetch } = useGetAllVendedorasQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })
  const db = data?.GetAllVendedoras.data ?? []

  const [createVendedoraMutation, { loading: loadingCreate }] = useCreateVendedoraMutation({
    onError: (err) => {
      console.log('Error al crear el vendedor', err.graphQLErrors[0].message)
    }
  })

  const crearVendedora = async (
    datos: CrearVendedora
  ): Promise<{ ok: boolean; error: null | string } | undefined> => {
    try {
      const resp = await createVendedoraMutation({
        variables: {
          input: datos
        }
      })
      if (resp.data?.CreateVendedora) {
        refetch()
        return {
          ok: true,
          error: null
        }
      }
    } catch (error: any) {
      return {
        ok: false,
        error: 'Error al crear vendedora'
      }
    }
  }

  // actualizar estado del vendedor

  const [updateEstadoVendedora] = useUpdateEstadoVendedoraMutation({
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    }
  })

  const actualizarEstadoVendedora = async (datos: ActualizarEstadoVendedora) => {
    try {
      const resp = await updateEstadoVendedora({
        variables: {
          input: datos
        }
      })
      if (resp.data?.UpdateEstadoVendedora) {
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
        error: 'Error al actualizar el estado de la vendedora'
      }
    }
  }

  // actualizar vendedor

  const [updateVendedoraMutation] = useUpdateVendedoraMutation({
    onError: (err) => console.log(err.graphQLErrors[0].message)
  })

  const actualizarVendedora = async (datos: any) => {
    try {
      const resp = await updateVendedoraMutation({
        variables: {
          input: { ...datos }
        }
      })
      if (resp.data?.UpdateVendedora) {
        refetch()
        return {
          ok: true,
          error: null
        }
      }
    } catch (error) {
      return {
        ok: false,
        error: 'Error al actualizar el vendedor'
      }
    }
  }

  // eliminar vendedor

  const [DeleteVendedora, { loading: loadingDelete }] = useDeleteVendedoraMutation()

  const deleteVendedora = async ({
    vendedoraId
  }: IDeleteVendedora) => {
    try {
      await DeleteVendedora({
        variables: {
          vendedoraId
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo eliminar la categoria' }
    }
  }

  return {
    db,
    loading,
    crearVendedora,
    loadingCreate,
    actualizarEstadoVendedora,
    deleteVendedora,
    loadingDelete,
    actualizarVendedora,
    refetch
  }
}
