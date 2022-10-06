// import { Imagenes } from '../../generated/graphql'
import useToggle from '@hooks/useToggle'
import { IconClose, IconPlus } from '@icons'
import { classNames } from '@utils/classNames'
import { isEmpty } from '@utils/isEmpty'
import { useEffect, useState } from 'react'
import Image from '../Img/Image'
import ModalSelectedProducts from '../Modal/ModalSelectedProducts'
export interface Imagenes {
  id?: string | null | undefined
  titulo?: string | null | undefined
  url?: string | null | undefined
}

interface Props {
  label: string
  value?: Imagenes[] | any[]
  productsInitial?: any[]
  loadingPR?: boolean
  onChange: (image: Imagenes[]) => void
  error?: any
  touched?: boolean
}

const InputSelectProducts = ({
  label,
  touched,
  productsInitial = [],
  loadingPR,
  ...props
}: Props) => {
  const { error } = props

  const { isOpen, onClose, onOpen } = useToggle()

  const [imgs, setImgs] = useState<any[]>([])

  useEffect(() => {
    if (productsInitial) {
      setImgs(productsInitial)
    }
  }, [loadingPR])

  const handleSelect = (resp: Imagenes[]) => {
    setImgs(resp)
  }

  useEffect(() => {
    props.onChange(imgs)
  }, [imgs])
  const hasError = props.error?.toString() && !isEmpty(props.error.toString()) && touched
  /**
   * Con el value podran renderizar la imagen que deberia estar seteada en el
   * formulario padre.
   */

  return (
    <div>
      <ModalSelectedProducts {...{ isOpen, onClose }} onSelect={handleSelect} imgs={imgs} />
      {imgs?.length === 0 && (
        <button type="button" className="relative w-full" onClick={onOpen}>
          <div
            className={classNames([
              ' flex flex-col items-center justify-center w-full h-48 border border-dashed rounded-lg cursor-pointer  ',
              hasError ? 'border-red-600 dark:border-red-400' : 'border-slate-300'
            ])}>
            <>
              <div
                className={classNames([
                  'flex justify-center items-center  rounded-full w-[50px] h-[50px]',
                  hasError ? 'bg-red-500 dark:bg-red-400 text-white' : 'bg-primary-500 text-white'
                ])}>
                <IconPlus className="w-6 h-6 " />
              </div>
              <p
                className={classNames([
                  hasError ? 'text-red-600 dark:text-red-400' : 'text-slate-400',
                  'pt-2 font-semibold'
                ])}>
                {label}
              </p>
            </>
          </div>
          <div className="absolute w-full -bottom-5">
            <p
              className={classNames([
                hasError ? '' : 'opacity-0',
                'text-sm text-red-600 dark:text-red-400  '
              ])}>
              {hasError ? props.error : 'error'}
            </p>
          </div>
        </button>
      )}

      {!(imgs?.length === 0) && (
        <>
          <h1 className="text-center text-gray-600 text-lg font-semibold mb-5">{label}</h1>
          <div className="w-full shadow-xl py-4 flex flex-wrap gap-3 justify-center">
            {imgs?.map((img) => (
              <div key={img.id}>
                <p className="text-xs mb-2 font-light text-center text-gray-500">{img?.titulo}</p>
                <div className="relative overflow-hidden  min-w-[120px]  border border-gray-300 rounded-lg dark:border-gray-700">
                  <button
                    type="button"
                    className="absolute w-5 h-6 top-0 right-0 z-50  btn-solid-red "
                    onClick={() => {
                      const arrayNew = imgs.filter((value) => value.id !== img.id)
                      setImgs((prev) => [...arrayNew])
                    }}>
                    x
                  </button>
                  <Image
                    className="inset-0 z-10 object-cover w-[120px]  h-[100px]"
                    src={img?.url!}
                    alt={img?.titulo!}
                  />
                </div>
              </div>
            ))}
            <div
              className="w-[120px] cursor-pointer h-[122px] border-primary-600 border rounded-lg flex justify-center items-center text-primary-600 text-2xl"
              onClick={onOpen}>
              +
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default InputSelectProducts
