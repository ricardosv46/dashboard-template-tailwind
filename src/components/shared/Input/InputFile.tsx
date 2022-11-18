import useToggle from '@hooks/useToggle'
import { IconPlus } from '@icons'
import { classNames } from '@utils/classNames'
import { isEmpty } from '@utils/isEmpty'

import { useState } from 'react'
import Image from '../Img/Image'

interface Props {
  label: string
  onChange: (file: any) => void
  error?: any
  value: any
  touched?: boolean
}

const InputFile = ({ label, error, onChange, value, touched }: Props) => {
  const { isOpen, onOpen, onClose } = useToggle()
  const hasError = error?.toString() && !isEmpty(error.toString()) && touched
  const [newImage, setnewImage] = useState(null)
  const [imagePrevios, setImagePrevios] = useState(null)

  const changeImage = (e?: any) => {
    onChange(e.target.files[0])

    if (e.target.files[0]) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (e: any) => {
        e.preventDefault()
        setImagePrevios(e?.target?.result)
      }
    }
  }

  return (
    <div className="relative w-full ">
      <button
        onClick={onOpen}
        type="button"
        className={classNames([
          `${
            imagePrevios ? '' : value?.length ? '' : 'border-2'
          } relative flex flex-col items-center justify-center w-full h-48 border-dashed rounded-lg`,
          hasError ? 'border-red-600 dark:border-red-400' : 'border-slate-300'
        ])}>
        <input
          className="absolute z-50 w-full h-full p-0 m-0 bg-blue-300 outline-none opacity-0 "
          type="file"
          accept="image/*"
          onChange={(e) => changeImage(e)}
        />

        {!imagePrevios && !value?.length && (
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

        {value?.length ? (
          <>
            <h1 className="mb-5 text-lg font-semibold text-gray-600">{label}</h1>
            <Image
              className="w-full max-w-[250px] shadow-lg h-[150px]  inset-0 z-0 object-contain"
              src={value}
              alt={value}
            />
          </>
        ) : (
          <>
            {imagePrevios && (
              <>
                <h1 className="mb-5 text-lg font-semibold text-gray-600">{label}</h1>
                <Image
                  className="w-full max-w-[250px] shadow-lg h-[150px]  inset-0 z-0 object-contain"
                  src={imagePrevios}
                  alt={imagePrevios}
                />
              </>
            )}
          </>
        )}
      </button>
      <div className="absolute w-full -bottom-5">
        <p
          className={classNames([
            hasError ? '' : 'opacity-0',
            'text-sm text-red-600 dark:text-red-400 text-center'
          ])}>
          {hasError ? error : 'error'}
        </p>
      </div>
    </div>
  )
}

export default InputFile
