import {
  useCreateCategoriaBlogMutation,
  useDeleteCategoriaBlogMutation,
  useGetAllCategoriaBlogsQuery,
  useGetCategoriaBlogSlugQuery,
  useUpdateCategoriaBlogMutation,
  useUpdateDestacadoCategoriaBlogMutation,
  useUpdateEstadoCategoriaBlogMutation
} from '../generated/graphql'

interface ICreateCategoriaBlog {
  titulo: string
  keywords: string
  descripcion: string
  imagenPrincipal: number
  imagenSecundaria: number
}

interface IUpdateCategoriaBlog {
  categoriaBlogId: string
  titulo: string
  keywords: string
  descripcion: string
  imagenPrincipal: number
  imagenSecundaria: number
}

export interface IUpdateEstadoCategoriaBlog {
  categoriaBlogId: string
  estado: string
}

export interface IUpdateDestacadoCategoriaBlog {
  categoriaBlogId: string
  destacado: string
}

export interface IDeleteCategoriaBlog {
  categoriaBlogId: number
}

export interface IProps {
  destacado?: string
  estado?: string
  slug?: string
}

// Obtenemos todas las categorias
export const useCategoriaBlogs = ({ estado = '', destacado = '', slug }: IProps) => {
  const { data, loading, refetch } = useGetAllCategoriaBlogsQuery({
    fetchPolicy: 'network-only',
    variables: {
      estado,
      destacado
    }
  })

  const { data: dataCategoriBlogSlug, loading: loadingCategoriBlogSlug } =
    useGetCategoriaBlogSlugQuery({
      fetchPolicy: 'network-only',
      variables: {
        slug
      }
    })

  const db = data?.GetAllCategoriaBlogs?.data ?? []
  const dbCategoriBlogSlug = dataCategoriBlogSlug?.GetCategoriaBlogSlug ?? {}

  const [CreateCategoriaBlog, { loading: loadingCreate }] = useCreateCategoriaBlogMutation()

  const createCategoriaBlog = async ({
    titulo,
    keywords,
    descripcion,
    imagenPrincipal,
    imagenSecundaria
  }: ICreateCategoriaBlog) => {
    try {
      const res = await CreateCategoriaBlog({
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

  const [UpdateCategoriaBlog, { loading: loadingUpdate }] = useUpdateCategoriaBlogMutation()

  const updateCategoriaBlog = async ({
    categoriaBlogId,
    titulo,
    keywords,
    descripcion,
    imagenPrincipal,
    imagenSecundaria
  }: IUpdateCategoriaBlog) => {
    try {
      const res = await UpdateCategoriaBlog({
        variables: {
          input: {
            categoriaBlogId,
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

  const [UpdateEstadoCategoriaBlog, { loading: loadingUpdateEstado }] =
    useUpdateEstadoCategoriaBlogMutation()

  const updateEstadoCategoriaBlog = async ({
    categoriaBlogId,
    estado
  }: IUpdateEstadoCategoriaBlog) => {
    try {
      const res = await UpdateEstadoCategoriaBlog({
        variables: {
          input: {
            categoriaBlogId,
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

  const [UpdateDestacadoCategoriaBlog, { loading: loadingUpdateDestacado }] =
    useUpdateDestacadoCategoriaBlogMutation()

  const updateDestacadoCategoriaBlog = async ({
    categoriaBlogId,
    destacado
  }: IUpdateDestacadoCategoriaBlog) => {
    try {
      const res = await UpdateDestacadoCategoriaBlog({
        variables: {
          input: {
            categoriaBlogId,
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

  const [DeleteCategoriaBlog, { loading: loadingDelete }] = useDeleteCategoriaBlogMutation()

  const deleteCategoriaBlog = async ({ categoriaBlogId }: IDeleteCategoriaBlog) => {
    try {
      const res = await DeleteCategoriaBlog({
        variables: {
          categoriaBlogId
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
    createCategoriaBlog,
    loadingCreate,
    deleteCategoriaBlog,
    loadingDelete,
    updateCategoriaBlog,
    loadingUpdate,
    updateEstadoCategoriaBlog,
    loadingUpdateEstado,
    dbCategoriBlogSlug,
    loadingCategoriBlogSlug,
    updateDestacadoCategoriaBlog,
    loadingUpdateDestacado
  }
}
