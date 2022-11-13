import { IconChevronUp } from '@icons'
import { useState } from 'react'
import { ordenarFecha } from '../../../../helpers/helpers'

const AcordionPayment = ({ data }: any) => {
  const [show, setShow] = useState(false)
  let suma = 0
  const arrayProducts = data?.DetallePedido
  for (let i = 0; i < arrayProducts.length; i++) {
    suma = suma + arrayProducts[i].total
  }
  return (
    <div className="w-full pb-4">
      <div
        className={`${
          show && 'border-primary-600'
        } py-1 flex justify-between items-center border px-3  rounded-md`}>
        <p className={`${show && 'font-semibold'}  text-xl`}>Datos del pago</p>
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
        }  border shadow-md pl-3 mt-3 py-3 text-sm text-gray-700 rounded-md `}>
        <div className="flex gap-2">
          <p className=" font-bold"> N° Operación: </p> <p>{data?.numeroOperacion}</p>
        </div>
        <div className="flex gap-2 mt-3">
          <p className=" font-bold"> Fecha pedido: </p> <p>{ordenarFecha(data?.fechaPedido)}</p>
        </div>
        <div className="flex gap-2 mt-3">
          <p className=" font-bold">Medio pago: </p> <p className="capitalize">{data?.medioPago}</p>
        </div>
        <div className="flex gap-2 mt-3">
          <p className=" font-bold"> Tipo venta: </p>
          <p className="capitalize">{data?.tipoVenta}</p>
        </div>
        <div className="flex gap-2 mt-3">
          <p className=" font-bold"> Precio productos: </p> <p>s/. {suma}</p>
        </div>
        <div className="flex gap-2 mt-3">
          <p className=" font-bold"> Precio envío: </p> <p>s/. {data?.precioEnvio}</p>
        </div>
        <div className="flex gap-2 mt-3">
          <p className=" font-bold"> Monto total: </p> <p>s/. {data?.precioTotal}</p>
        </div>
      </div>
    </div>
  )
}
export default AcordionPayment
