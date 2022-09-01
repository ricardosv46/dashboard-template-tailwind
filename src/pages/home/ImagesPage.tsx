import Image from '@components/shared/Img/Image'
import Paginator from '@components/shared/Paginator/Paginator'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Spinner from '@components/shared/Spinner/Spinner'
import { IconPlus } from '@icons'
import { Suspense, useState } from 'react'
import { toast } from 'react-toastify'

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
    page: 1,
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
      toast.error('Error en la subida de imagenes', {
        theme: 'colored',
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })

      return false
    }
    toast.success('Subida de imagenes exitosa', {
      theme: 'colored',
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })

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
    <PlantillaPage
      title="Imagenes"
      desc="Desde aquí podrás visualizar todas tus imagenes."
      button={
        <button
          className="self-end w-full mb-3 btn btn-solid-primary sm:w-max"
          onClick={() => {
            refetch()
            setIsUploadImage((prev) => !prev)
          }}
        >
          {isUploadImage ? 'Ver Galeria' : 'Subir Imagen'}
        </button>
      }
    >
      {getLoading && <Spinner className="w-10 h-10 mx-auto mt-8 border-4" />}

      {!isUploadImage && (
        <div className="grid gap-8 auto-rows-[200px] grid-cols-auto-fit">
          {images?.map(({ id, url, titulo }) => (
            <button
              key={id}
              className="relative transition-all duration-300 ease-linear border border-gray-300 rounded-lg cursor-pointer dark:border-gray-700 hover:shadow-sm"
              onClick={() => {}}
            >
              <Image
                className="absolute inset-0 object-contain w-full h-full"
                src={url!}
                alt={titulo!}
              />
            </button>
          ))}
        </div>
      )}

      {isUploadImage && (
        <UploadFiles isLoading={isLoading} onUpload={handleUpload} />
      )}
      {!isUploadImage && (
        <Paginator state={state} setState={setState} paginas={paginas} />
      )}
    </PlantillaPage>
  )
}

export default ImagesPage
