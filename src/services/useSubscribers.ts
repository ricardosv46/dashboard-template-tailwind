import { useGetAllSuscriptoresQuery, useGetAllVentasAnioQuery } from '../generated/graphql'

export interface IProps {
  fechaInicio: string
  fechaFin: string
  pagina: number
  numeroPagina: number
}

// Obtenemos todas las ventas del año
export const useSubscribers = ({
  numeroPagina = 10,
  pagina = 1,
  fechaInicio = '',
  fechaFin = ''
}: IProps) => {
  const { data, loading, refetch } = useGetAllSuscriptoresQuery({
    fetchPolicy: 'network-only',
    variables: {
      numeroPagina,
      pagina,
      fechaInicio,
      fechaFin
    }
  })

  const ventasAnio = data?.GetAllSuscriptores?.data ?? []

  const ntotal = data?.GetAllSuscriptores?.numeroTotal ?? 0

  return {
    loading,
    ventasAnio,
    ntotal
  }
}
