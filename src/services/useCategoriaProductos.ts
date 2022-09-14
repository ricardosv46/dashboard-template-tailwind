import {
  useCreateCategoriaProductoMutation,
  useDeleteCategoriaProductoMutation,
  useGetAllCategoriaProductosQuery,
  useGetCategoriaProductoSlugQuery,
  useUpdateCategoriaProductoMutation,
  useUpdateDestacadoCategoriaProductoMutation,
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

export interface IUpdateDestacadoCategoriaProducto {
  categoriaProductoId: string
  destacado: string
}
export interface IDeleteCategoriaProducto {
  categoriaProductoId: number
}

export interface IProps {
  destacado?: string
  estado?: string
  slug?: string
}

// Obtenemos todas las categorias
export const useCategoriaProductos = ({ estado = '', destacado = '', slug }: IProps) => {
  const { data, loading, refetch } = useGetAllCategoriaProductosQuery({
    fetchPolicy: 'network-only',
    variables: {
      estado,
      destacado
    }
  })

  const { data: dataCategoriaProductoSlug, loading: loadingCategoriaProductoSlug } =
    useGetCategoriaProductoSlugQuery({
      fetchPolicy: 'network-only',
      variables: {
        slug
      }
    })

  const db = data?.GetAllCategoriaProductos?.data ?? []
  const dbCategoriaProductoSlug = dataCategoriaProductoSlug?.GetCategoriaProductoSlug ?? {}

  const [CreateCategoriaProducto, { loading: loadingCreate }] = useCreateCategoriaProductoMutation()

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

  const [UpdateCategoriaProducto, { loading: loadingUpdate }] = useUpdateCategoriaProductoMutation()

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

  const [UpdateDestacadoCategoriaProducto, { loading: loadingUpdateDestacado }] =
    useUpdateDestacadoCategoriaProductoMutation()

  const updateDestacadoCategoriaProducto = async ({
    categoriaProductoId,
    destacado
  }: IUpdateDestacadoCategoriaProducto) => {
    try {
      const res = await UpdateDestacadoCategoriaProducto({
        variables: {
          input: {
            categoriaProductoId,
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

  const [DeleteCategoriaProducto, { loading: loadingDelete }] = useDeleteCategoriaProductoMutation()

  const deleteCategoriaProducto = async ({ categoriaProductoId }: IDeleteCategoriaProducto) => {
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
    loadingUpdateDestacado,
    updateDestacadoCategoriaProducto,
    loadingUpdateEstado,
    dbCategoriaProductoSlug,
    loadingCategoriaProductoSlug
  }
}
