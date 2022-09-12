import {
  useCreateBancosMutation,
  useDeleteBancosMutation,
  useGetAllBancosQuery,
  useGetBancoIdQuery,
  useUpdateBancosMutation,
  useUpdateEstadoBancoMutation
} from '../generated/graphql'

interface ICreateBanco {
  titulo: string
  imagenPrincipal: number
  numeroCuenta: string
}

interface IUpdateBanco {
  bancoId: string
  titulo: string
  imagenPrincipal: number
  numeroCuenta: string
}

export interface IUpdateEstadoBanco {
  bancoId: string
  estado: string
}

export interface IDeleteBanco {
  bancoId: number
}

export interface IProps {
  estado?: string
  bancoId?: string
}

export const useBancos = ({ estado = '', bancoId }: IProps) => {
  const { data, loading, refetch } = useGetAllBancosQuery({
    fetchPolicy: 'network-only',
    variables: {
      estado
    }
  })

  const { data: dataBancoId, loading: loadingBancoId } = useGetBancoIdQuery({
    fetchPolicy: 'network-only',
    variables: {
      bancoId: Number(bancoId)
    }
  })

  const db = data?.GetAllBancos?.data ?? []
  const dbBancoId = dataBancoId?.GetBancoId ?? {}

  const [CreateBanco, { loading: loadingCreate }] = useCreateBancosMutation()

  const createBanco = async ({ titulo, numeroCuenta, imagenPrincipal }: ICreateBanco) => {
    try {
      const res = await CreateBanco({
        variables: {
          input: {
            titulo,
            numeroCuenta,
            imagenPrincipal
          }
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo crear el banco' }
    }
  }

  const [UpdateBanco, { loading: loadingUpdate }] = useUpdateBancosMutation()

  const updateBanco = async ({ bancoId, titulo, numeroCuenta, imagenPrincipal }: IUpdateBanco) => {
    try {
      const res = await UpdateBanco({
        variables: {
          input: {
            bancoId,
            titulo,
            numeroCuenta,
            imagenPrincipal
          }
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo actualizar el banco' }
    }
  }

  const [UpdateEstadoBanco, { loading: loadingUpdateEstado }] = useUpdateEstadoBancoMutation()

  const updateEstadoBanco = async ({ bancoId, estado }: IUpdateEstadoBanco) => {
    try {
      const res = await UpdateEstadoBanco({
        variables: {
          input: {
            bancoId,
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

  const [DeleteBanco, { loading: loadingDelete }] = useDeleteBancosMutation()

  const deleteBanco = async ({ bancoId }: IDeleteBanco) => {
    try {
      const res = await DeleteBanco({
        variables: {
          bancoId
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo eliminar el banco' }
    }
  }

  return {
    loading,
    db,
    createBanco,
    loadingCreate,
    deleteBanco,
    loadingDelete,
    updateEstadoBanco,
    loadingUpdate,
    updateBanco,
    loadingUpdateEstado,
    dbBancoId,
    loadingBancoId
  }
}
