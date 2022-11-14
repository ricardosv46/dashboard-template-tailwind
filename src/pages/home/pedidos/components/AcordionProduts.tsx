import { IconChevronUp } from '@icons'
import { useState } from 'react'

const AcordionProducts = ({ data }: any) => {
  const [show, setShow] = useState(false)
  let suma = 0
  return (
    <div className="w-full pb-4">
      <div
        className={`${
          show && 'border-primary-600'
        } py-1 flex justify-between items-center border px-3  rounded-md`}>
        <p className={`${show && 'font-semibold'}  text-xl`}>Productos adquiridos</p>
        <p
          className={`${
            show ? 'rotate-0 text-primary-600' : 'text-gray-500 rotate-180'
          }  text-3xl  p-2`}
          onClick={() => setShow(!show)}>
          <IconChevronUp />
        </p>
      </div>
      <div className={`${show ? 'block' : 'hidden'}  border shadow-md  mt-3 p-3  rounded-md `}>
        {data?.DetallePedido?.map((product: any, index: any) => {
          suma = suma + product.total
          return (
            <div key={product.detallePedidoId}>
              <div
                className="flex justify-between
               items-start text-gray-700 py-2">
                <div className="flex gap-1 w-full">
                  <div className="w-20 h-20">
                    <img
                      className="w-full h-full"
                      src={product?.imagenPrincipal}
                      alt={product?.titulo}
                    />
                  </div>
                  <div className="">
                    <p className="text-xs text-gray-600">código: {product?.productoId}</p>
                    <p className="font-bold text-sm">{product?.titulo}</p>
                    <p className="font-semibold text-sm">s/. {product?.precio}</p>
                    <p className="text-xs">{product?.cantidad} un. </p>
                  </div>
                </div>
                <div className="w-20">
                  <p className="text-sm font-bold text-gray-700">s/. {product.total}</p>
                </div>
              </div>
              {!(data?.DetallePedido?.length - 1 === index) && <hr />}
            </div>
          )
        })}
        <div className="w-full h-[1.5px] bg-primary-600 my-2"></div>
        <div className="flex justify-between items-center">
          <p className="w-full">
            Productos <span className="font-bold">( {data?.DetallePedido.length} )</span>
          </p>
          <p className="w-24 font-bold">s/. {suma}</p>
        </div>
      </div>
    </div>
  )
}
export default AcordionProducts
