// import { Imagenes } from '../../generated/graphql'
import useToggle from '@hooks/useToggle'
import { IconPlus } from '@icons'
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
}

const InputImage = ({ label, ...props }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle()
  const [innerValue, setInnerValue] = useState<Imagenes | null>(null)

  const value = props.value ?? innerValue
  const handleSelect = props.onChange ?? setInnerValue

  /**
   * Con el value podran renderizar la imagen que deberia estar seteada en el
   * formulario padre.
   */

  const hasImage = !!value?.id

  return (
    <>
      <ModalImage {...{ isOpen, onClose }} onSelect={handleSelect} />
      <button type="button" className="w-full" onClick={onOpen}>
        <div className="relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer max-w-96 border-slate-300">
          {!hasImage && (
            <>
              <div className="flex justify-center items-center  rounded-full w-[50px] h-[50px] bg-primary-500">
                <IconPlus className="w-5 h-5 " />
              </div>
              <p className="pt-2 font-semibold text-slate-400">{label}</p>
            </>
          )}

          {hasImage && (
            <Image
              className="absolute inset-0 z-10 object-contain w-full h-full"
              src={value?.url!}
              alt={value?.titulo!}
            />
          )}
        </div>
      </button>
    </>
  )
}

export default InputImage
