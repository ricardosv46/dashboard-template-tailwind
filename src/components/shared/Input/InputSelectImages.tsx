// import { Imagenes } from '../../generated/graphql'
import useToggle from '@hooks/useToggle'
import { IconClose, IconPlus } from '@icons'
import { classNames } from '@utils/classNames'
import { isEmpty } from '@utils/isEmpty'
import { useEffect, useState } from 'react'
import Image from '../Img/Image'
import ModalSelectedImages from '../Modal/ModalSelectedImages'
export interface Imagenes {
  id?: string | null | undefined
  titulo?: string | null | undefined
  url?: string | null | undefined
}

interface Props {
  label: string
  value?: Imagenes[]
  onChange: (image: Imagenes[]) => void
  error?: any
  touched?: any
}

const InputSelectImages = ({ label, touched, ...props }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle()

  const [imgs, setImgs] = useState<Imagenes[]>([])

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
      <ModalSelectedImages {...{ isOpen, onClose }} onSelect={handleSelect} imgs={imgs} />
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
          <h1 className="text-gray-600 font-semibold text-center text-lg mb-5">{label}</h1>
          <div className="w-full shadow-lg py-4 flex flex-wrap gap-3 justify-center">
            {imgs?.map((img) => (
              <div
                className=" relative overflow-hidden border border-gray-300 rounded-lg dark:border-gray-700"
                key={img.id}>
                <button
                  type="button"
                  className="absolute top-0 right-0 z-50 h-6 w-5 btn-solid-red "
                  onClick={() => {
                    const arrayNew = imgs.filter((value) => value.id !== img.id)
                    setImgs((prev) => [...arrayNew])
                  }}>
                  x
                </button>
                <Image
                  onClick={onOpen}
                  className="inset-0 z-10 object-cover w-[100px] cursor-pointer h-[80px]"
                  src={img?.url!}
                  alt={img?.titulo!}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default InputSelectImages
