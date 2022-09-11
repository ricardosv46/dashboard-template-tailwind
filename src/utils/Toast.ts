import React from 'react'
import { toast } from 'react-toastify'

interface Props {
  message: string
  type: 'error' | 'success'
}

export const Toast = ({ message, type }: Props) => {
  return type === 'success'
    ? toast.success(message, {
        theme: 'colored',
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    : toast.error(message, {
        theme: 'colored',
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
}
