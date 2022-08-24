import {
  useCreateProductoMutation,
  useDeleteProductoMutation,
  useGetAllProductosQuery,
  useUpdateDestacadoProductoMutation,
  useUpdateEstadoProductoMutation,
  useUpdateProductoMutation
} from '../generated/graphql'

interface ICreateProducto {
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

export interface IUpdateEstadoProducto {
  productoId: string
  estado: string
}

export interface IUpdateDestacadoProducto {
  productoId: string
  destacado: string
}

export interface IDeleteProducto {
  productoId: number
}

export const useProductos = (
  input = { pagina: 1, estado: '', numeroPagina: 10 }
) => {
  const { data, loading, refetch } = useGetAllProductosQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const db = data?.GetAllProductos?.data ?? []
  const nTotal = data?.GetAllProductos?.numeroTotal ?? 0

  const [CreateProducto, { loading: loadingCreate }] = useCreateProductoMutation()

  const createProducto = async ({
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
  }: ICreateProducto) => {
    try {
      await CreateProducto({
        variables: {
          input: {
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
      return { ok: false, error: 'Error no se pudo crear el producto' }
    }
  }

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

  const [UpdateEstadoProducto, { loading: loadingUpdateEstado }] = useUpdateEstadoProductoMutation()

  const updateEstadoProducto = async ({ productoId, estado }: IUpdateEstadoProducto) => {
    try {
      await UpdateEstadoProducto({
        variables: {
          input: {
            productoId,
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
  }

  return {
    loading,
    db,
    nTotal,
    createProducto,
    loadingCreate,
    deleteProducto,
    loadingDelete,
    updateEstadoProducto,
    loadingUpdateEstado,
    updateDestacadoProducto,
    loadingUpdateDestacado,
    updateProducto,
    loadingUpdate
  }
}
