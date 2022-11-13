import { IconChevronUp } from '@icons'
import { useState } from 'react'

const AcordionUser = ({ data }: any) => {
  const [show, setShow] = useState(false)
  return (
    <div className="w-full pb-4">
      <div
        className={`${
          show && 'border-primary-600'
        } py-1 flex justify-between items-center border px-3  rounded-md`}>
        <p className={`${show && 'font-semibold'}  text-xl`}>Datos de usuario</p>
        <p
          className={`${
            show ? 'rotate-0 text-primary-600' : 'text-gray-500 rotate-180'
          }  text-3xl  p-2`}
          onClick={() => setShow(!show)}>
          <IconChevronUp />
        </p>
      </div>
      <div
        className={`${
          show ? 'block' : 'hidden'
        } text-sm text-gray-700 border shadow-md pl-3 mt-3 py-3  rounded-md `}>
        <div className="flex gap-2">
          <p className=" font-bold"> Nombres: </p> <p>{data?.Usuario?.nombres}</p>
        </div>
        <div className="flex gap-2 mt-3">
          <p className=" font-bold"> Apellidos: </p> <p>{data?.Usuario?.apellidos}</p>
        </div>
        <div className="flex gap-2 mt-3">
          <p className=" font-bold"> D.N.I: </p> <p>{data?.Usuario?.numeroDocumento}</p>
        </div>
        <div className="flex gap-2 mt-3">
          <p className=" font-bold"> Correo: </p> <p>{data?.Usuario?.email}</p>
        </div>
        <div className="flex gap-2 mt-3">
          <p className=" font-bold"> Celular: </p> <p>{data?.Usuario?.celular}</p>
        </div>
      </div>
    </div>
  )
}
export default AcordionUser
