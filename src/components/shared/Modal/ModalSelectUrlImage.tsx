import { useState, useEffect } from 'react'
import Modal from './Modal'

import useImagenes from '../../../services/useImagenes'
import { IconClose } from '@icons'
import { classNames } from '@utils/classNames'
import Image from '../Img/Image'
import { toast } from 'react-toastify'
import Paginator from '@components/shared/Paginator/Paginator'

export interface Imagenes {
  id?: string | null | undefined
  titulo?: string | null | undefined
  url?: string | null | undefined
}
interface Props {
  isOpen: boolean
  onClose: () => void
}

const ModalSelectUrlImage = ({ isOpen, onClose }: Props) => {
  const [paginationValues, setPaginationValues] = useState({
    pagina: 1,
    numeroPagina: 10
  })

  const { db: images, nTotal } = useImagenes(paginationValues)

  const generatedTotal = (items: number, itemporpage: number) => {
    const n = Math.ceil(items / itemporpage)
    return Array(n)
      .fill(null)
      .map((_, i) => i + 1)
  }
  const paginas = generatedTotal(nTotal, paginationValues.numeroPagina)

  const copyUrl = (url: string) => {
    toast.success('Imagen añadida exitosamente.', {
      theme: 'colored',
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
    onClose()
    // navigator.clipboard
    //   .writeText(url)
    //   .then(() => {
    //     toast.success('Imagen añadida exitosamente.', {
    //       theme: 'colored',
    //       position: 'top-right',
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined
    //     })
    //     setUrl(url)
    //     onClose()
    //   })
    //   .catch((err) => {
    //     toast.error('Error al copiar la url.', {
    //       theme: 'colored',
    //       position: 'top-right',
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined
    //     })
    //   })
  }

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
          </div>
          <Paginator state={paginationValues} setState={setPaginationValues} paginas={paginas} />
          <div className="flex-1 mt-5 overflow-auto">
            {/* GALERIA */}

            <div className="grid w-full gap-8 auto-rows-[200px] grid-cols-auto-fit py-5">
              {images &&
                images.map((image) => {
                  return (
                    <button
                      className={classNames([
                        'rounded-lg relative border cursor-pointer overflow-hidden hover:shadow-md transition-shadow duration-300 ease-linear'
                      ])}
                      key={image?.id}
                      onClick={() => {
                        copyUrl(image?.url!)
                        let imgSelector: any = document.querySelector('.jodit-wysiwyg')
                        imgSelector.innerHTML += `<p><img src="${image?.url}" style="width: 200px;"/></p>`
                      }}>
                      <Image
                        className="absolute inset-0 z-10 object-contain w-full h-full"
                        src={image?.url!}
                        alt={image?.titulo!}
                      />
                    </button>
                  )
                })}
            </div>
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
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ModalSelectUrlImage
