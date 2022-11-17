import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import Table from '@components/shared/Table/Table'
import { useVentasAnio } from '@services/useVentasAnio'

const SalesYear = () => {
  const { ventasAnio, loading } = useVentasAnio()

  return (
    <PlantillaPage
      title="Ventas del año"
      desc="Desde aqui podras visualizar la informacion de todas las ventas del año">
      <Show
        condition={loading}
        loading
        isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
        <Table>
          <thead>
            <tr className="dark:border-b-slate-700">
              <th className="text-center">Mes</th>
              <th className="text-center">Monto</th>
              <th className="text-center">Cantidad</th>
              <th className="text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {ventasAnio.map((item) => (
              <tr
                key={item?.mes}
                className="dark:bg-transparent dark:text-slate-50 dark:hover:bg-slate-900 dark:border-b-slate-700">
                <td className="text-center ">{item?.mes}</td>
                <td className="text-center ">{item?.monto?.toFixed(2)}</td>
                <td className="text-center ">{item?.cantidad}</td>
                <td className="text-center ">
                  {(item?.monto && item?.cantidad ? item?.monto * item?.cantidad : 0)?.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Show>
    </PlantillaPage>
  )
}

export default SalesYear
