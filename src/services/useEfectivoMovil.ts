import {
  useCreateEfectivoMovilMutation,
  useDeleteEfectivoMovilMutation,
  useGetAllEfectivoMovilQuery,
  useGetBancoIdQuery,
  useGetEfectivoMovilIdQuery,
  useUpdateEfectivoMovilMutation,
  useUpdateEstadoBancoMutation,
  useUpdateEstadoEfectivoMovilMutation
} from '../generated/graphql'

interface ICrearEfectivoMovil {
  titulo: string
  numeroCelular: string
  imagenPrincipal: number
  imagenQr: number
}

interface IUpdateEfectivoMovil {
  efectivoMovilId: string
  titulo: string
  numeroCelular: string
  imagenPrincipal: number
  imagenQr: number
}

export interface IUpdateEstadoEfectivoMovil {
  efectivoMovilId: string
  estado: string
}

export interface IDeleteEfectivoMovil {
  efectivoMovilId: number
}

export interface IProps {
  estado?: string
  efectivoMovilId?: string
}

export const useEfectivoMovil = ({ estado = '', efectivoMovilId }: IProps) => {
  const { data, loading, refetch } = useGetAllEfectivoMovilQuery({
    fetchPolicy: 'network-only',
    variables: {
      estado
    }
  })

  const { data: dataBancoId, loading: loadingEfectivoMovilId } = useGetEfectivoMovilIdQuery({
    fetchPolicy: 'network-only',
    variables: {
      efectivoMovilId: Number(efectivoMovilId)
    }
  })

  const db = data?.GetAllEfectivoMovil?.data ?? []
  const dbEfectivoMovilId = dataBancoId?.GetEfectivoMovilId ?? {}

  const [CreateEfectivoMovil, { loading: loadingCreate }] = useCreateEfectivoMovilMutation()

  const createEfectivoMovil = async ({
    titulo,
    imagenQr,
    numeroCelular,
    imagenPrincipal
  }: ICrearEfectivoMovil) => {
    try {
      const res = await CreateEfectivoMovil({
        variables: {
          input: {
            titulo,
            imagenQr,
            numeroCelular,
            imagenPrincipal
          }
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo crear el efectivo movil' }
    }
  }

  const [UpdateEfectivoMovil, { loading: loadingUpdate }] = useUpdateEfectivoMovilMutation()

  const updateEfectivoMovil = async ({
    efectivoMovilId,
    titulo,
    imagenQr,
    numeroCelular,
    imagenPrincipal
  }: IUpdateEfectivoMovil) => {
    try {
      const res = await UpdateEfectivoMovil({
        variables: {
          input: {
            efectivoMovilId,
            titulo,
            imagenQr,
            numeroCelular,
            imagenPrincipal
          }
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo actualizar el efectivo movil' }
    }
  }

  const [UpdateEstadoEfectivoMovil, { loading: loadingUpdateEstado }] =
    useUpdateEstadoEfectivoMovilMutation()

  const updateEstadoEfectivoMovil = async ({
    efectivoMovilId,
    estado
  }: IUpdateEstadoEfectivoMovil) => {
    try {
      const res = await UpdateEstadoEfectivoMovil({
        variables: {
          input: {
            efectivoMovilId,
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

  const [DeleteEfectivoMovil, { loading: loadingDelete }] = useDeleteEfectivoMovilMutation()

  const deleteEfectivoMovil = async ({ efectivoMovilId }: IDeleteEfectivoMovil) => {
    try {
      const res = await DeleteEfectivoMovil({
        variables: {
          efectivoMovilId
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo eliminar el efectivo movil' }
    }
  }

  return {
    loading,
    db,
    createEfectivoMovil,
    loadingCreate,
    deleteEfectivoMovil,
    loadingDelete,
    updateEstadoEfectivoMovil,
    loadingUpdate,
    updateEfectivoMovil,
    loadingUpdateEstado,
    loadingEfectivoMovilId,
    dbEfectivoMovilId
  }
}
