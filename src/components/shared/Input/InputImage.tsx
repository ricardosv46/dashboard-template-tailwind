// import { Imagenes } from '../../generated/graphql'
import useToggle from '@hooks/useToggle'
import { IconPlus } from '@icons'
import { classNames } from '@utils/classNames'
import { isEmpty } from '@utils/isEmpty'
import { useState } from 'react'
import Image from '../Img/Image'
import ModalImage from '../Modal/ModalImages'
export interface Imagenes {
  id?: string | null | undefined
  titulo?: string | null | undefined
  url?: string | null | undefined
}

interface Props {
  label: string
  value?: Imagenes
  onChange?: (image: Imagenes) => void
  error?: any
  touched?: boolean
}

const InputImage = ({ label, touched, ...props }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle()
  const [innerValue, setInnerValue] = useState<Imagenes | null>(null)

  const value = props.value ?? innerValue
  const handleSelect = props.onChange ?? setInnerValue
  const hasError = props.error?.toString() && !isEmpty(props.error.toString()) && touched
  /**
   * Con el value podran renderizar la imagen que deberia estar seteada en el
   * formulario padre.
   */

  const hasImage = !!value?.id

  return (
    <>
      <ModalImage {...{ isOpen, onClose }} onSelect={handleSelect} />
      <button type="button" className="relative w-full" onClick={onOpen}>
        <div
          className={classNames([
            `${
              !value?.url && 'border'
            } relative flex flex-col items-center justify-center w-full h-48 border-dashed rounded-lg cursor-pointer max-w-96`,
            hasError ? 'border-red-600 dark:border-red-400' : 'border-slate-300'
          ])}>
          {!hasImage && (
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
          )}

          {hasImage && (
            <>
              <h1 className="text-gray-600 text-lg font-semibold mb-5">{label}</h1>
              <Image
                className="w-full max-w-[250px] shadow-lg h-[150px]  inset-0 z-0 object-contain"
                src={value?.url!}
                alt={value?.titulo!}
              />
            </>
          )}
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
    </>
  )
}

export default InputImage
