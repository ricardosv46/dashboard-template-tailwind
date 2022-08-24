import { useGetBlogSlugQuery } from '../generated/graphql'

// Obtenemos todas los blogs
export const useBlogSlug = (input = { slug: '' }) => {
  const { data, loading, refetch } = useGetBlogSlugQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const db = data?.GetBlogSlug ?? {}

  return {
    loading,
    db
  }
}
