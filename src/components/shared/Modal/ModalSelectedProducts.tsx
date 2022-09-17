import { useEffect, useRef, useState } from 'react'
import Modal from './Modal'
// import { FocusableElement } from '@chakra-ui/utils'
import useImagenes from '../../../services/useImagenes'
import { IconCheckbox, IconClose } from '@icons'
import { classNames } from '@utils/classNames'
import Image from '../Img/Image'
import Paginator from '@components/shared/Paginator/Paginator'
import { useProductos } from '../../../services/useProductos'

interface Props {
  isOpen: boolean
  onClose: () => void
  onSelect?: (imagen: any) => void
  imgs: any
}

const ModalSelectedProducts = ({ isOpen, onClose, onSelect, imgs }: Props) => {
  const [paginationValues, setPaginationValues] = useState({
    pagina: 1,
    numeroPagina: 10
  })

  const { db: products, nTotal } = useProductos(paginationValues)
  const [isUploadImage, setIsUploadImage] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState<any>([])

  const generatedTotal = (items: number, itemporpage: number) => {
    const n = Math.ceil(items / itemporpage)
    return Array(n)
      .fill(null)
      .map((_, i) => i + 1)
  }
  const paginas = generatedTotal(nTotal, paginationValues.numeroPagina)

  const handleClose = () => {
    onClose()
    setIsUploadImage(false)
  }

  const handleSelect = () => {
    if (typeof onSelect === 'function') {
      onSelect(selectedProducts)
    }
    handleClose()
  }
  useEffect(() => {
    setSelectedProducts(imgs)
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

          <h2 className="text-3xl text-center font-bold">Productos</h2>

          <Paginator state={paginationValues} setState={setPaginationValues} paginas={paginas} />
          <div className="flex-1 mt-5 overflow-auto">
            {/* GALERIA */}
            {!isUploadImage && (
              <div className="grid w-full gap-8 auto-rows-[200px] grid-cols-auto-fit py-5">
                {products &&
                  products.map((product: any) => {
                    const isSelected = selectedProducts.find(
                      (resp: any) => resp?.id === product?.productoId
                    )
                    return (
                      <div className="w-full mb-6">
                        <p className="text-center font-semibold text-gray-700 mb-1">
                          {product?.titulo}
                        </p>
                        <button
                          className={classNames([
                            isSelected
                              ? 'border-primary-500'
                              : 'border-gray-300 dark:border-gray-700',
                            'rounded-lg relative border cursor-pointer overflow-hidden w-full h-full  hover:shadow-md transition-shadow duration-300 ease-linear'
                          ])}
                          key={product?.productoId}
                          onClick={() => {
                            const value = selectedProducts.find(
                              (value: any) => value?.id === product?.productoId
                            )
                            if (value) {
                              const newArray = selectedProducts.filter(
                                (value: any) => value?.id !== product.productoId
                              )
                              setSelectedProducts([...newArray])
                            } else {
                              setSelectedProducts([
                                ...selectedProducts,
                                {
                                  id: product?.productoId,
                                  url: product?.imagenPrincipal?.url,
                                  titulo: product?.titulo
                                }
                              ])
                            }
                          }}>
                          {isSelected && (
                            <div className="absolute top-0 right-0 z-20 flex items-center justify-center w-5 h-5 text-black bg-primary-500">
                              <IconCheckbox className="w-3" />
                            </div>
                          )}
                          <Image
                            className="absolute inset-0 z-10 object-contain w-full h-full"
                            src={product?.imagenPrincipal?.url}
                            alt={product?.imagenPrincipal?.titulo}
                          />
                        </button>
                      </div>
                    )
                  })}
              </div>
            )}
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
              disabled={selectedProducts.length === 0}>
              Seleccionar
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ModalSelectedProducts
