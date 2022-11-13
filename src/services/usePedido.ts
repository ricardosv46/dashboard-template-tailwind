import {
  useGetAllPedidosQuery,
  useGetPedidoIdQuery,
  useUpdateEstadoPedidoMutation,
  useUpdateVistoPedidoMutation
} from '../generated/graphql'

// Interface general

interface IGeneralUsePedido {
  pagina?: any
  numeroPagina?: any
  email?: any
  FechaInicio?: any
  FechaFin?: any
  nombreCliente?: any
  pedidoId?: any
}

/* interface ICreateProducto {
  titulo: string
  descripcionCorta: string
  descripcionLarga: string
  precioReal: number
  precioOferta: number
  stockMinimo: number
  stockReal: number
  imagenPrincipal: number
  imagenSecundaria: number
  galeria: string[]
  keywords: string
  categoriaProductoId: number
}

interface IUpdateProducto {
  productoId: string,
  titulo: string,
  descripcionCorta: string,
  descripcionLarga: string,
  precioReal: number,
  precioOferta: number,
  stockMinimo: number,
  stockReal: number,
  imagenPrincipal: number,
  imagenSecundaria: number,
  galeria: string[],
  keywords: string,
  categoriaProductoId: number
}

export interface IDeleteProducto {
  productoId: number
} */

export interface IUpdateVistoPedido {
  pedidoId: string | undefined
  visto: string
}

export interface IUpdateEstadoPedido {
  pedidoId: string
  estado: string
}
export const usePedidos = ({
  pagina = 1,
  numeroPagina = 10,
  email = '',
  FechaInicio = '',
  FechaFin = '',
  nombreCliente = '',
  pedidoId
}: IGeneralUsePedido) => {
  const { data, loading, refetch } = useGetAllPedidosQuery({
    fetchPolicy: 'network-only',
    variables: {
      pagina,
      email,
      FechaFin,
      FechaInicio,
      nombreCliente,
      numeroPagina
    }
  })

  const db = data?.GetAllPedidos?.data ?? []
  const nTotal = data?.GetAllPedidos?.numeroTotal ?? 0

  // actualizar el pedido
  const [updateEstadoPedidoMutation] = useUpdateEstadoPedidoMutation({
    onError: (e) => {
      console.log(e.graphQLErrors[0].message)
    }
  })
  const updateEstadoPedido = async ({ pedidoId, estado }: IUpdateEstadoPedido) => {
    try {
      await updateEstadoPedidoMutation({
        variables: {
          input: {
            pedidoId,
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

  // actualizar visto del pedido
  const [updateVistoPedidoMutation] = useUpdateVistoPedidoMutation({
    onError: (e) => {
      console.log(e.graphQLErrors[0].message)
    }
  })
  const updateVistoPedido = async ({ pedidoId, visto }: IUpdateVistoPedido) => {
    try {
      await updateVistoPedidoMutation({
        variables: {
          input: {
            pedidoId,
            visto
          }
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo actualizar el estado' }
    }
  }

  // obtener detalle del pedido id

  const { data: dataDetalle, loading: loadingDetalle } = useGetPedidoIdQuery({
    fetchPolicy: 'network-only',
    variables: {
      pedidoId
    }
  })

  const dbDetalle = dataDetalle?.GetPedidoId ?? []

  return {
    loading,
    db,
    dbDetalle,
    loadingDetalle,
    updateEstadoPedido,
    updateVistoPedido,
    nTotal
    /*  createProducto,
     loadingCreate,
     deleteProducto,
     loadingDelete,
     loadingUpdateEstado,
     updateDestacadoProducto,
     loadingUpdateDestacado,
     updateProducto,
     loadingUpdate */
  }
}
