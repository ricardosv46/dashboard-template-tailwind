import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import { useEffect, useState } from 'react'
import AcordionProducts from './components/AcordionProduts'
import AcordionUser from './components/AcordionUser'
import MenuDesktop from './components/MenuDesktop'
import ShowOption from './components/ShowOption'
import AcordionAddrees from './components/AcordionAddrees'
import AcordionPayment from './components/AcordionPayment'
import { useParams } from 'react-router-dom'
import { usePedidos } from '../../../services/usePedido'

const DetallePedido = () => {
  const loading = false
  const [option, setOption] = useState(1)
  const { id } = useParams()
  const { updateVistoPedido } = usePedidos({})

  useEffect(() => {
    updateVistoPedido({
      pedidoId: id,
      visto: '1'
    })
  }, [])

  return (
    <PlantillaPage title="" goback>
      <div className="flex justify-center">
        <h1 className="title-9 font-bold dark:text-slate-200 mb-5">Detalle del pedido</h1>
      </div>
      <Show
        condition={loading}
        loading
        isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
        {/* Funciona para la version desktop */}
        <div className="sm:flex  gap-4 hidden ">
          <MenuDesktop setOption={setOption} option={option} />
          <ShowOption option={option} />
        </div>
        {/* Funciona para la version mobile */}
        <div className="sm:hidden">
          <AcordionUser />
          <AcordionProducts />
          <AcordionAddrees />
          <AcordionPayment />
        </div>
      </Show>
    </PlantillaPage>
  )
}

export default DetallePedido