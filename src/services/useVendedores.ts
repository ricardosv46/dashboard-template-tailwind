/*  import {
  useCreateVendedoraMutation,
  useDeleteVendedoraMutation,
  useGetAllVendedorasQuery,
  useGetBancoIdQuery,
  useGetVendedoraIdQuery,
  useUpdateEstadoBancoMutation,
  useUpdateEstadoVendedoraMutation,
  useUpdateVendedoraMutation
} from '../generated/graphql'

interface ICreateVendedora {
  nombres: string
  apellidos: string
  link: string
  imagenPrincipal: number
}

interface IUpdateVendedora {
  vendedoraId: string
  nombres: string
  apellidos: string
  link: string
  imagenPrincipal: number
}

export interface IUpdateEstadoVendedora {
  vendedoraId: string
  estado: string
}

export interface IDeleteVendedora {
  vendedoraId: number
}

export interface IProps {
  estado?: string
  vendedoraId?: string
}

export const useVendedoras = ({ estado = '', vendedoraId }: IProps) => {
  const { data, loading, refetch } = useGetAllVendedorasQuery({
    fetchPolicy: 'network-only',
    variables: {
      estado
    }
  })

  const { data: dataVendedoraId, loading: loadingVendedoraId } = useGetVendedoraIdQuery({
    fetchPolicy: 'network-only',
    variables: {
      vendedoraId: Number(vendedoraId)
    }
  })

  const db = data?.GetAllVendedoras?.data ?? []
  const dbVendedoraId = dataVendedoraId?.GetVendedoraId ?? {}

  const [CreateVendedora, { loading: loadingCreate }] = useCreateVendedoraMutation()

  const createVendedora = async ({
    nombres,
    apellidos,
    link,
    imagenPrincipal
  }: ICreateVendedora) => {
    try {
      const res = await CreateVendedora({
        variables: {
          input: {
            nombres,
            apellidos,
            link,
            imagenPrincipal
          }
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo crear el vendedor' }
    }
  }

  const [UpdateVendedora, { loading: loadingUpdate }] = useUpdateVendedoraMutation()

  const updateVendedora = async ({
    vendedoraId,
    nombres,
    apellidos,
    link,
    imagenPrincipal
  }: IUpdateVendedora) => {
    try {
      const res = await UpdateVendedora({
        variables: {
          input: {
            vendedoraId,
            nombres,
            apellidos,
            link,
            imagenPrincipal
          }
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo actualizar el vendedor' }
    }
  }

  const [UpdateEstadoVendedora, { loading: loadingUpdateEstado }] =
    useUpdateEstadoVendedoraMutation()

  const updateEstadoVendedora = async ({ vendedoraId, estado }: IUpdateEstadoVendedora) => {
    try {
      const res = await UpdateEstadoVendedora({
        variables: {
          input: {
            vendedoraId,
            estado
          }
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo actualizar el estado' }
    }
  }

  const [DeleteVendedora, { loading: loadingDelete }] = useDeleteVendedoraMutation()

  const deleteVendedora = async ({ vendedoraId }: IDeleteVendedora) => {
    try {
      const res = await DeleteVendedora({
        variables: {
          vendedoraId
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo eliminar el vendedor' }
    }
  }

  return {
    loading,
    db,
    createVendedora,
    loadingCreate,
    deleteVendedora,
    loadingDelete,
    UpdateEstadoVendedora,
    loadingUpdate,
    updateVendedora,
    loadingUpdateEstado,
    dbVendedoraId,
    loadingVendedoraId,
    updateEstadoVendedora
  }
} */
