import React from 'react'

const OptionAddress = ({ data }: any) => {
  return (
    <div className="w-full">
      <p className="border text-center sm:text-left sm:pl-10 py-3 shadow-md font-semibold text-xl">
        Dirección de envio
      </p>
      <div className="shadow-md py-10 px-5">
        <ul className="text-gray-700">
          <li className="">* {data?.direccionEnvio}</li>
        </ul>
      </div>
    </div>
  )
}

export default OptionAddress
