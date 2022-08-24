import PlantillaPage from '@components/PlantillaPage/PlantillaPage'
import { IconPlus } from '@icons'

const PedidosPage = () => {
  return (
    <PlantillaPage
      title="Cultivos"
      desc="Desde aqui podras visualizar la informacion de todas los cultivos"
      button={
        <button
          className="self-end w-full mb-3 btn btn-solid-primary sm:w-max"
          onClick={() => {}}
        >
          <IconPlus />
          Crear Cultivo
        </button>
      }
    >
      <div></div>
    </PlantillaPage>
  )
}

export default PedidosPage
