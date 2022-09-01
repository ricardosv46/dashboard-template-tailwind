import { classNames } from '@utils/classNames'
import React, { useState } from 'react'
import Spinner from '../Spinner/Spinner'

interface Props {
  src: string
  alt: string
  className?: string
}

const Image = ({ src, alt, className }: Props) => {
  const [loading, setLoading] = useState(true)

  return (
    <div>
      <img
        className={classNames([loading ? 'hidden' : '', className])}
        src={src}
        alt={alt}
        onLoad={() => {
          setLoading(false)
        }}
      />

      <Spinner
        className={classNames([
          loading ? 'block' : 'hidden',
          'w-10 h-10 mx-auto border-4'
        ])}
      />
    </div>
  )
}

export default Image
