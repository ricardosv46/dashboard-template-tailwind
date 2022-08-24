import {
  useCreateCategoriaProductoMutation,
  useDeleteCategoriaProductoMutation,
  useGetAllCategoriaProductosQuery,
  useUpdateCategoriaProductoMutation,
  useUpdateEstadoCategoriaProductoMutation
} from '../generated/graphql'

interface ICreateCategoriaProducto {
  titulo: string
  keywords: string
  descripcion: string
  imagenPrincipal: number
  imagenSecundaria: number
}

interface IUpdateCategoriaProduct {
  categoriaProductoId: string
  titulo: string
  keywords: string
  descripcion: string
  imagenPrincipal: number
  imagenSecundaria: number
}

export interface IUpdateEstadoCategoriaProducto {
  categoriaProductoId: string
  estado: string
}
export interface IDeleteCategoriaProducto {
  categoriaProductoId: number
}

// Obtenemos todas las categorias
export const useCategoriaProductos = (input = { estado: '' }) => {
  const { data, loading, refetch } = useGetAllCategoriaProductosQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const db = data?.GetAllCategoriaProductos?.data ?? []

  const [CreateCategoriaProducto, { loading: loadingCreate }] =
    useCreateCategoriaProductoMutation()

  const createCategoriaProducto = async ({
    titulo,
    keywords,
    descripcion,
    imagenPrincipal,
    imagenSecundaria
  }: ICreateCategoriaProducto) => {
    try {
      const res = await CreateCategoriaProducto({
        variables: {
          input: {
            titulo,
            keywords,
            descripcion,
            imagenPrincipal,
            imagenSecundaria
          }
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo crear la categoria' }
    }
  }


  const [UpdateCategoriaProducto, { loading: loadingUpdate }] =
    useUpdateCategoriaProductoMutation()

  const updateCategoriaProducto = async ({
    categoriaProductoId,
    titulo,
    keywords,
    descripcion,
    imagenPrincipal,
    imagenSecundaria
  }: IUpdateCategoriaProduct) => {
    try {
      const res = await UpdateCategoriaProducto({
        variables: {
          input: {
            categoriaProductoId,
            titulo,
            keywords,
            descripcion,
            imagenPrincipal,
            imagenSecundaria
          }
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo actualizar la categoria' }
    }
  }

  const [UpdateEstadoCategoriaProducto, { loading: loadingUpdateEstado }] =
    useUpdateEstadoCategoriaProductoMutation()

  const updateEstadoCategoriaProducto = async ({
    categoriaProductoId,
    estado
  }: IUpdateEstadoCategoriaProducto) => {
    try {
      const res = await UpdateEstadoCategoriaProducto({
        variables: {
          input: {
            categoriaProductoId,
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


  const [DeleteCategoriaProducto, { loading: loadingDelete }] = useDeleteCategoriaProductoMutation()

  const deleteCategoriaProducto = async ({
    categoriaProductoId
  }: IDeleteCategoriaProducto) => {
    try {
      const res = await DeleteCategoriaProducto({
        variables: {
          categoriaProductoId
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo eliminar la categoria' }
    }
  }

  return {
    loading,
    db,
    createCategoriaProducto,
    loadingCreate,
    deleteCategoriaProducto,
    loadingDelete,
    updateCategoriaProducto,
    loadingUpdate,
    updateEstadoCategoriaProducto,
    loadingUpdateEstado
  }
}
