import Paginator from '@components/shared/Paginator/Paginator'
import Spinner from '@components/shared/Spinner/Spinner'
import { Suspense, useState } from 'react'

import UploadFiles from '../../components/shared/UploadFiles'
import {
  useCreateImagenMutation
  // useGetAllImagenesQuery
} from '../../generated/graphql'
import useImagenes from '../../services/useImagenes'

const ImagesPage = () => {
  // const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [isUploadImage, setIsUploadImage] = useState(false)
  const [createImage] = useCreateImagenMutation()
  const [state, setState] = useState({
    page: 2,
    numberPaginate: 10
  })

  const {
    db: images,
    refetch,
    loading: getLoading,
    nTotal
  } = useImagenes({ pagina: state.page, numeroPagina: state.numberPaginate })

  const handleUpload = async (files: File[]) => {
    let hasError = false
    setIsLoading(true)

    for (const file of files) {
      try {
        await createImage({ variables: { imagen: file } })
      } catch (error) {
        hasError = true
        console.log('Error al subir imagenes: ', error)
      }
    }

    if (hasError) {
      setIsLoading(false)
      // toast({
      //   status: 'error',
      //   title: 'Error en la subida de imagenes',
      //   description: 'Ha ocurrido un error en la subida de imagenes.'
      // })
      return false
    }

    // toast({
    //   status: 'success',
    //   title: 'Subida de imagenes exitosa',
    //   description: 'Todas las imagenes se han subido con exito'
    // })

    setIsLoading(false)
    return true
  }
  const generatedTotal = (items: number, itemporpage: number) => {
    const n = Math.ceil(items / itemporpage)
    return Array(n)
      .fill(null)
      .map((_, i) => i + 1)
  }
  const paginas = generatedTotal(nTotal, state.numberPaginate)
  console.log(paginas)

  return (
    <div className="flex flex-col flex-1 h-full p-10 ">
      <div className="mb3 md:mb-8">
        <h1 className="text-[22px]">Imagenes</h1>
        <p className="mt-3 text-[14px] text-blue-600 dark:text-gray-400">
          Desde aquí podrás visualizar todas tus imagenes.
        </p>
      </div>

      <div className="flex justify-end mb-3 md:mb-8">
        <button
          className="self-end w-full mb-3 btn btn-solid-primary sm:w-max"
          onClick={() => {
            refetch()
            setIsUploadImage((prev) => !prev)
          }}
        >
          {isUploadImage ? 'Ver Galeria' : 'Subir Imagen'}
        </button>
      </div>

      {getLoading && (
        <div className="mt-8 text-center">
          <Spinner />
        </div>
      )}

      {!isUploadImage && (
        <div className="grid gap-8 auto-rows-[200px] grid-cols-auto-fit">
          {images?.map(({ id, url, titulo }) => (
            <button
              key={id}
              className="relative transition-all duration-300 ease-linear border border-gray-300 rounded-lg cursor-pointer dark:border-gray-700 hover:shadow-sm"
              onClick={() => {}}
            >
              <Suspense fallback={<Spinner />}>
                <img
                  className="absolute inset-0 object-contain w-full h-full"
                  src={url!}
                  alt={titulo!}

                  // fallback={
                  //   <Center>
                  //     <Spinner colorScheme="primary" size="lg" />
                  //   </Center>
                  // }
                />
              </Suspense>
            </button>
          ))}
        </div>
      )}

      {isUploadImage && (
        <UploadFiles isLoading={isLoading} onUpload={handleUpload} />
      )}

      <Paginator state={state} setState={setState} paginas={paginas} />
    </div>
  )
}

export default ImagesPage
