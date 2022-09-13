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
  console.log('viendo que enviamos value:', props.value)
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
      <button type="button" className="w-full" onClick={onOpen}>
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
        <p
          className={classNames([
            hasError ? '' : 'opacity-0',
            'text-sm text-red-600 dark:text-red-400'
          ])}>
          {hasError ? props.error : 'error'}
        </p>
      </button>
      <div>
        {!(props.value?.length === 0) && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-flow-col-5 w-full">
            {props.value?.map((img) => (
              <Image
                key={img.id}
                className=" inset-0 z-0 object-contain"
                src={img?.url!}
                alt={img?.titulo!}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default InputSelectImages
