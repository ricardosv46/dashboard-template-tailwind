// import { Imagenes } from '../../generated/graphql'
import useToggle from '@hooks/useToggle'
import { IconPlus } from '@icons'
import { classNames } from '@utils/classNames'
import { isEmpty } from '@utils/isEmpty'
import { useState } from 'react'
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
  touched?: boolean
}

const InputSelectImages = ({ label, touched, ...props }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle()
  const handleSelect = (resp: Imagenes[]) => {
    props.onChange(resp)
  }

  const hasError = props.error?.toString() && !isEmpty(props.error.toString()) && touched
  /**
   * Con el value podran renderizar la imagen que deberia estar seteada en el
   * formulario padre.
   */

  return (
    <div>
      <ModalSelectedImages {...{ isOpen, onClose }} onSelect={handleSelect} />
      {props.value?.length === 0 && (
        <button type="button" className="relative w-full" onClick={onOpen}>
          <div
            className={classNames([
              ' flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer  ',
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

      {!(props.value?.length === 0) && (
        <div className="grid w-full grid-cols-1 gap-2 p-2 border-2 border-dashed rounded-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-flow-col-4 xl:grid-flow-col-5 border-slate-300">
          {props.value?.map((img) => (
            <Image
              onClick={onOpen}
              key={img.id}
              className="inset-0 z-10 object-cover w-full cursor-pointer h-44"
              src={img?.url!}
              alt={img?.titulo!}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default InputSelectImages
