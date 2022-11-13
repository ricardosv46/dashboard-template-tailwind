import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import Table from '@components/shared/Table/Table'
import { usePedidos } from '@services/usePedido'
import { useState } from 'react'
import Aviso from './components/Aviso'
import { recortarCadena, ordenarFecha } from '../../../helpers/helpers'
import { ToggleSwitch } from '@components/shared/ToggleSwitch/ToggleSwitch'
import { IconEye } from '@icons'
import { useNavigate } from 'react-router-dom'
import { Toast } from '@utils/Toast'
const OrderPage = () => {
  const router = useNavigate()
  const [state, setState] = useState({
    pagina: 1,
    numeroPagina: 10
  })
  // eslint-disable-next-line no-unused-vars

  const {
    db: dataPedidos,
    loading,
    updateEstadoPedido,
    nTotal
  } = usePedidos({ email: '', FechaInicio: '', FechaFin: '', nombreCliente: '', ...state })

  const handleUpdateEstado = (id: string, estado: string) => {
    updateEstadoPedido({
      pedidoId: id,
      estado: estado === '1' ? '0' : '1'
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Estado Actualizado Correctamente.' })
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }
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
                    S/. {item?.precioTotal}
                  </td>
                  <td>
                    <div className="flex justify-center ">
                      <ToggleSwitch
                        onClick={() => {
                          handleUpdateEstado(item?.pedidoId!, item?.estado!)
                        }}
                        value={item.estado === '1'}
                      />
                    </div>
                  </td>
                  <td className="">
                    <div
                      className="flex justify-center cursor-pointer py-1"
                      onClick={() => router(`detalle-pedido/${item.pedidoId}`)}>
                      <IconEye className="w-5 h-4 text-primary-500" />
                    </div>
                  </td>
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
