import React from 'react'

const OptionUser = ({ data }: any) => {
  return (
    <div className="w-full">
      <p className="border text-center sm:text-left sm:pl-10 py-3 shadow-md font-semibold text-xl">
        Datos del usuario
      </p>
      <div className="shadow-md py-10 pl-3 text-gray-600">
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

export default OptionUser
