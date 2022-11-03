import { useGetAllPedidosQuery } from '../generated/graphql'

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
  pedidoId: string
  visto: string
}

export interface IUpdateEstadoPedido {
  pedidoId: string
  estado: string
}
export const usePedidos = (input = { pagina: 1, numeroPagina: 10 }) => {
  const { data, loading } = useGetAllPedidosQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const db = data?.GetAllPedidos?.data ?? []
  const nTotal = data?.GetAllPedidos?.numeroTotal ?? 0

  /*

   const [UpdateProducto, { loading: loadingUpdate }] = useUpdateProductoMutation()

   const updateProducto = async ({
     productoId,
     titulo,
     descripcionCorta,
     descripcionLarga,
     precioReal,
     precioOferta,
     stockMinimo,
     stockReal,
     imagenPrincipal,
     imagenSecundaria,
     galeria,
     keywords,
     categoriaProductoId
   }: IUpdateProducto) => {
     try {
       await UpdateProducto({
         variables: {
           input: {
             productoId,
             titulo,
             descripcionCorta,
             descripcionLarga,
             precioReal,
             precioOferta,
             stockMinimo,
             stockReal,
             imagenPrincipal,
             imagenSecundaria,
             galeria,
             keywords,
             categoriaProductoId
           }
         }
       })
       refetch()
       return { ok: true }
     } catch (error: any) {
       return { ok: false, error: 'Error no se pudo actualizar el producto' }
     }
   }

   const [UpdateDestacadoProducto, { loading: loadingUpdateDestacado }] = useUpdateDestacadoProductoMutation()

   const updateDestacadoProducto = async ({
     productoId,
     destacado
   }: IUpdateDestacadoProducto) => {
     try {
       await UpdateDestacadoProducto({
         variables: {
           input: {
             productoId,
             destacado
           }
         }
       })
       refetch()
       return { ok: true }
     } catch (error: any) {
       return { ok: false, error: 'Error no se pudo actualizar el destacado' }
     }
   }

   const [DeleteProducto, { loading: loadingDelete }] = useDeleteProductoMutation()

   const deleteProducto = async ({ productoId }: IDeleteProducto) => {
     try {
       await DeleteProducto({
         variables: {
           productoId
         }
       })
       refetch()
       return { ok: true }
     } catch (error: any) {
       return { ok: false, error: 'Error no se pudo eliminar el Producto' }
     }
   } */

  return {
    loading,
    db,
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
