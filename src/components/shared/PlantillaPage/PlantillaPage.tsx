import { IconChevronLeft } from '@icons'
import { classNames } from '@utils/classNames'
import React, { ReactElement, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  children: ReactNode
  title: string
  button?: ReactElement
  desc?: string
  goback?: boolean
}

const PlantillaPage = ({
  children,
  title,
  button,
  desc,
  goback = false
}: Props) => {
  const router = useNavigate()
  return (
    <div className="flex flex-col flex-1 h-full px-10 pt-10">
      <div className="flex flex-col">
        <div className={classNames([goback ? 'flex items-center' : ''])}>
          {goback && (
            <button
              className="p-1 mt-1 mr-3 rounded-full btn-icon btn-solid-primary"
              onClick={() => router(-1)}
            >
              <IconChevronLeft />
            </button>
          )}

          <h1 className="text-3xl font-bold dark:text-slate-200">{title}</h1>
        </div>

        <p className="my-3 text-sm md:text-lg text-slate-400">{desc}</p>
        <div className="w-full mb-3 ml-auto sm:w-max">{button}</div>
      </div>
      {children}
      <div className="py-5"></div>
    </div>
  )
}
export default PlantillaPage
