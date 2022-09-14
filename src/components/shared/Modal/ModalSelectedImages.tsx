import { useEffect, useRef, useState } from 'react'
import Modal from './Modal'
// import { FocusableElement } from '@chakra-ui/utils'

import {
  // useGetAllImagenesQuery,
  useCreateImagenMutation
} from '../../../generated/graphql'
import useImagenes from '../../../services/useImagenes'
import { IconCheckbox, IconClose } from '@icons'
import UploadFiles from '../UploadFiles'
import { classNames } from '@utils/classNames'
import Image from '../Img/Image'
import { toast } from 'react-toastify'
import useToggle from '@hooks/useToggle'

export interface Imagenes {
  id?: string | null | undefined
  titulo?: string | null | undefined
  url?: string | null | undefined
}
interface Props {
  isOpen: boolean
  onClose: () => void
  onSelect?: (imagen: Imagenes[]) => void
  imgs: Imagenes[]
}

const ModalSelectedImages = ({ isOpen, onClose, onSelect, imgs }: Props) => {
  const [createImage] = useCreateImagenMutation()
  const { db: images, refetch } = useImagenes({ pagina: 1, numeroPagina: 999 })

  const [isLoading, setIsLoading] = useState(false)
  const [isUploadImage, setIsUploadImage] = useState(false)
  const [selectedImages, setSelectedImages] = useState<Imagenes[]>([])

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
      toast.error('Error en la subida de imagenes.', {
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

    refetch()
    toast.success('Subida de imagenes exitosa.', {
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

  const handleClose = () => {
    onClose()
    setIsLoading(false)
    setIsUploadImage(false)
  }

  const handleSelect = () => {
    if (typeof onSelect === 'function') {
      onSelect(selectedImages)
    }
    handleClose()
  }
  useEffect(() => {
    setSelectedImages(imgs)
  }, [imgs])

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose()
        }}
        hasOverlay>
        <div className="w-[90vw] h-[90vh] px-8 py-5 bg-white rounded-lg flex flex-col  dark:bg-gray-800 dark:text-white ">
          {/* HEADER MODAL */}
          <div className="flex justify-end">
            <button
              className="btn-icon btn-ghost-primary"
              onClick={() => {
                onClose()
              }}>
              <IconClose />
            </button>
          </div>
          <div className="flex justify-between mt-3">
            <h2 className="text-3xl font-bold">Imagenes</h2>
            <button
              type="button"
              className="w-full btn btn-outline-primary sm:w-max"
              onClick={() => setIsUploadImage((prev) => !prev)}>
              {isUploadImage ? 'Ver galeria' : 'Subir Imagen'}
            </button>
          </div>
          <div className="flex-1 mt-5 overflow-auto">
            {/* GALERIA */}
            {!isUploadImage && (
              <div className="grid w-full gap-8 auto-rows-[200px] grid-cols-auto-fit py-5">
                {images &&
                  images.map((image) => {
                    const isSelected = selectedImages.find((resp) => resp?.id === image?.id)
                    return (
                      <button
                        className={classNames([
                          isSelected
                            ? 'border-primary-500'
                            : 'border-gray-300 dark:border-gray-700',
                          'rounded-lg relative border cursor-pointer overflow-hidden hover:shadow-md transition-shadow duration-300 ease-linear'
                        ])}
                        key={image?.id}
                        onClick={() => {
                          const value = selectedImages.find((img) => img?.id === image?.id)
                          if (value) {
                            const newArray = selectedImages.filter((value) => value.id !== image.id)
                            setSelectedImages([...newArray])
                          } else {
                            setSelectedImages([...selectedImages, image])
                          }
                        }}>
                        {isSelected && (
                          <div className="absolute top-0 right-0 z-20 flex items-center justify-center w-5 h-5 text-black bg-primary-500">
                            <IconCheckbox className="w-3" />
                          </div>
                        )}

                        <Image
                          className="absolute inset-0 z-10 object-contain w-full h-full"
                          src={image?.url!}
                          alt={image?.titulo!}
                        />
                      </button>
                    )
                  })}
              </div>
            )}
            {/* UPLOAD FILES */}

            {isUploadImage && <UploadFiles isLoading={isLoading} onUpload={handleUpload} />}
          </div>

          {/* FOOTER MODAL */}
          <div className="flex items-center justify-end gap-3 mt-8 ">
            <button
              type="button"
              className="w-full btn btn-ghost-red sm:w-max"
              onClick={() => {
                onClose()
              }}>
              Cerrar
            </button>
            <button
              type="button"
              className="w-full btn btn-solid-primary sm:w-max"
              onClick={handleSelect}
              disabled={selectedImages.length === 0}>
              Seleccionar
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ModalSelectedImages
