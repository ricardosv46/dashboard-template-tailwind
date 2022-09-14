import { classNames } from '@utils/classNames'
import React, { ImgHTMLAttributes, useState } from 'react'
import Spinner from '../Spinner/Spinner'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  className?: string
}

const Image = ({ src, alt, className, ...props }: Props) => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <img
        className={classNames([loading ? 'hidden' : '', className])}
        src={src}
        alt={alt}
        onLoad={() => {
          setLoading(false)
        }}
        {...props}
      />

      <Spinner
        className={classNames([loading ? 'block' : 'hidden', 'w-10 h-10 mx-auto border-4'])}
      />
    </>
  )
}

export default Image
