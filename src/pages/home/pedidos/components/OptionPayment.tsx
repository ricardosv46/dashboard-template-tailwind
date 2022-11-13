import { ordenarFecha } from '../../../../helpers/helpers'

const OptionPayment = ({ data }: any) => {
  let suma = 0
  const arrayProducts = data?.DetallePedido
  for (let i = 0; i < arrayProducts.length; i++) {
    suma = suma + arrayProducts[i].total
  }

  return (
    <div className="w-full">
      <p className="border text-center sm:text-left sm:pl-10 py-3 shadow-md font-semibold text-xl">
        Datos del pago
      </p>
      <div className="shadow-md py-10 pl-3 text-gray-600">
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

export default OptionPayment
