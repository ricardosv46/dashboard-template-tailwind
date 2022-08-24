import {
  // useCreateImagenMutation,
  useGetAllImagenesQuery
} from '../generated/graphql'

interface IImagenes {
  pagina: number
  numeroPagina: number
}

const useImagenes = ({ pagina, numeroPagina }: IImagenes) => {
  const { data, loading, refetch } = useGetAllImagenesQuery({
    fetchPolicy: 'network-only',
    variables: {
      pagina,
      numeroPagina
    }
  })
  const db = data?.GetAllImagenes?.data ?? []
  const nTotal = data?.GetAllImagenes?.numeroTotal ?? 0
  const datos = data?.GetAllImagenes

  // const [createImage] = useCreateImagenMutation()
  // let hasError
  // const handleUpload = async (files: File[]) => {
  //   hasError = false
  //   // setIsLoading(true)

  //   for (const file of files) {
  //     try {
  //       await createImage({ variables: { imagen: file } })
  //     } catch (error) {
  //       hasError = true
  //       console.log('Error al subir imagenes: ', error)
  //     }
  //   }
  // }
  return {
    db,
    loading,
    refetch,
    // handleUpload,
    // hasError,
    nTotal,
    datos
  }
}

export default useImagenes
