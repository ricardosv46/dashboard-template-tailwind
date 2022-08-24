import {
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useGetAllBlogsQuery,
  useUpdateBlogMutation,
  useUpdateDestacadoBlogMutation,
  useUpdateEstadoBlogMutation
} from '../generated/graphql'

interface ICreateBlog {
  titulo: string
  descripcionCorta: string
  descripcionLarga: string
  imagenPrincipal: number
  imagenSecundaria: number
  keywords: string
  categoriaBlogId: number
}

interface IUpdateBlog {
  blogId: string
  titulo: string
  descripcionCorta: string
  descripcionLarga: string
  imagenPrincipal: number
  imagenSecundaria: number
  keywords: string
  categoriaBlogId: number
}

export interface IUpdateEstadoBlog {
  blogId: number
  estado: string
}

export interface IUpdateDestacadoBlog {
  blogId: number
  destacado: string
}

export interface IDeleteBlog {
  blogId: number
}

// Obtenemos todas los blogs
export const useBlogs = (
  input = { pagina: 1, estado: '', numeroPagina: 10 }
) => {
  const { data, loading, refetch } = useGetAllBlogsQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const db = data?.GetAllBlogs?.data ?? []
  const nTotal = data?.GetAllBlogs?.numeroTotal ?? 0

  const [CreateBlog, { loading: loadingCreate }] = useCreateBlogMutation()

  const createBlog = async ({
    titulo,
    descripcionCorta,
    descripcionLarga,
    imagenPrincipal,
    imagenSecundaria,
    keywords,
    categoriaBlogId
  }: ICreateBlog) => {
    try {
      const res = await CreateBlog({
        variables: {
          input: {
            titulo,
            descripcionCorta,
            descripcionLarga,
            imagenPrincipal,
            imagenSecundaria,
            keywords,
            categoriaBlogId
          }
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo crear el blog' }
    }
  }

  const [UpdateBlog, { loading: loadingUpdate }] = useUpdateBlogMutation()

  const updateBlog = async ({
    blogId,
    titulo,
    descripcionCorta,
    descripcionLarga,
    imagenPrincipal,
    imagenSecundaria,
    keywords,
    categoriaBlogId
  }: IUpdateBlog) => {
    try {
      const res = await UpdateBlog({
        variables: {
          input: {
            blogId,
            titulo,
            descripcionCorta,
            descripcionLarga,
            imagenPrincipal,
            imagenSecundaria,
            keywords,
            categoriaBlogId
          }
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo actualizar el blog' }
    }
  }

  const [UpdateEstadoBlog, { loading: loadingUpdateEstado }] =
    useUpdateEstadoBlogMutation()

  const updateEstadoBlog = async ({ blogId, estado }: IUpdateEstadoBlog) => {
    try {
      const res = await UpdateEstadoBlog({
        variables: {
          input: {
            blogId,
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

  const [UpdateDestacadoBlog, { loading: loadingUpdateDestacado }] =
    useUpdateDestacadoBlogMutation()

  const updateDestacadoBlog = async ({
    blogId,
    destacado
  }: IUpdateDestacadoBlog) => {
    try {
      const res = await UpdateDestacadoBlog({
        variables: {
          input: {
            blogId,
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

  const [DeleteBlog, { loading: loadingDelete }] = useDeleteBlogMutation()

  const deleteBlog = async ({ blogId }: IDeleteBlog) => {
    try {
      const res = await DeleteBlog({
        variables: {
          blogId
        }
      })
      refetch()
      return { ok: true }
    } catch (error: any) {
      return { ok: false, error: 'Error no se pudo eliminar el blog' }
    }
  }

  return {
    loading,
    db,
    nTotal,
    createBlog,
    loadingCreate,
    updateBlog,
    loadingUpdate,
    deleteBlog,
    loadingDelete,
    updateEstadoBlog,
    loadingUpdateEstado,
    updateDestacadoBlog,
    loadingUpdateDestacado
  }
}
