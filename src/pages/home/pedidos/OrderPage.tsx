import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import Table from '@components/shared/Table/Table'
import { usePedidos } from '@services/usePedido'
import { useState } from 'react'
import Aviso from './components/Aviso'
import { recortarCadena, ordenarFecha } from '../../../helpers/helpers'
const OrderPage = () => {
  const [state, setState] = useState({
    pagina: 1,
    numeroPagina: 10
  })
  // eslint-disable-next-line no-unused-vars

  const { db: dataPedidos, loading, nTotal } = usePedidos(state)
  console.log(dataPedidos)

  return (
    <>
      <PlantillaPage title="Pedidos" desc="Desde aqui podras visualizar todos los pedidos">
        <Show
          condition={loading}
          loading
          isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
          <Table widthPaginator nTotal={nTotal} state={state} setState={setState}>
            <thead>
              <tr className="dark:border-b-slate-700">
                <th className="text-left">Cliente</th>
                <th className="text-center">DNI</th>
                <th className="text-center">Fecha pedido</th>
                <th className="text-center">Tipo venta </th>
                <th className="text-center">Medio pago</th>
                <th className="text-left">Precio total</th>
                <th className="text-center">Estado</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {dataPedidos.map((item) => (
                <tr
                  key={item?.pedidoId}
                  className={`dark:bg-transparent  ${
                    item.visto === 0
                      ? 'dark:hover:text-black dark:hover:font-bold'
                      : 'dark:hover:text-gray-600'
                  } dark:hover:bg-white dark:border-b-slate-700 dark:text-white `}>
                  <td
                    className={`${
                      item.visto === 0 ? 'font-bold' : 'text-gray-400'
                    } text-left flex justify-between items-center`}>
                    <p>
                      {recortarCadena(`${item?.Usuario?.nombres} ${item.Usuario?.apellidos}`, 15)}
                    </p>
                    <Aviso visto={item.visto} />
                  </td>
                  <td className={`${item.visto === 0 ? 'font-bold' : 'text-gray-400'} text-center`}>
                    {item?.Usuario?.numeroDocumento}
                  </td>
                  <td className={`${item.visto === 0 ? 'font-bold' : 'text-gray-400'} text-center`}>
                    {ordenarFecha(item.fechaPedido)}
                  </td>
                  <td className={`${item.visto === 0 ? 'font-bold' : 'text-gray-400'} text-center`}>
                    {item?.tipoVenta}
                  </td>
                  <td className={`${item.visto === 0 ? 'font-bold' : 'text-gray-400'} text-center`}>
                    {item?.medioPago}
                  </td>
                  <td className={`${item.visto === 0 ? 'font-bold' : 'text-gray-400'} text-left`}>
                    S/. {item?.precioTotal}.00
                  </td>
                  <td
                    className={`${
                      item.visto === 0 ? 'font-bold' : 'text-gray-400'
                    } text-center`}></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Show>
      </PlantillaPage>
    </>
  )
}

export default OrderPage
