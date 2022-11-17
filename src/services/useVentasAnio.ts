import { useGetAllVentasAnioQuery } from '../generated/graphql'

// Obtenemos todas las ventas del año
export const useVentasAnio = () => {
  const { data, loading, refetch } = useGetAllVentasAnioQuery({
    fetchPolicy: 'network-only'
  })

  const ventasAnio = data?.GetAllVentasAnio ?? []

  return {
    loading,
    ventasAnio
  }
}
