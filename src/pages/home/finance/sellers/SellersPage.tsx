import Image from '@components/shared/Img/Image'
import ModalDelete from '@components/shared/Modal/ModalDelete'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import Table from '@components/shared/Table/Table'
import { ToggleSwitch } from '@components/shared/ToggleSwitch/ToggleSwitch'
import useToggle from '@hooks/useToggle'
import { IconEdit, IconPlus, IconTrash } from '@icons'
import { useBancos } from '@services/useBancos'
import { useVendedoras } from '@services/useVendedores'
import { Toast } from '@utils/Toast'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SellersPage = () => {
  const router = useNavigate()
  const { isOpen, onOpen, onClose } = useToggle()
  const [selectId, setSelectId] = useState<string | null | undefined>(null)
  const {
    db: dataVendedores,
    loading,
    updateEstadoVendedora,
    deleteVendedora
  } = useVendedoras({ estado: '' })

  const handleDelete = () => {
    deleteVendedora({ vendedoraId: Number(selectId) }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Eliminado Correctamente.' })
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }

  const handleUpdateEstado = (id: string, estado: string) => {
    updateEstadoVendedora({
      vendedoraId: id,
      estado: estado === 'Activado' ? 'Desactivado' : 'Activado'
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
      <PlantillaPage
        title="Vendedores"
        desc="Desde aqui podras visualizar todas los vendedores"
        button={
          <button
            onClick={() => router('create-seller')}
            className="self-end w-full mb-3 btn btn-solid-primary sm:w-max">
            <IconPlus />
            Crear Banco
          </button>
        }>
        <Show
          condition={loading}
          loading
          isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
          <Table>
            <thead>
              <tr className="dark:border-b-slate-700">
                <th className="text-center">Imagen</th>
                <th className="text-center">Nombres</th>
                <th className="text-center">Apellidos</th>
                <th className="text-center">Link</th>
                <th className="text-center">Estado</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {dataVendedores.map((item) => (
                <tr
                  key={item.vendedoraId}
                  className="dark:bg-transparent dark:text-slate-50 dark:hover:bg-slate-900 dark:border-b-slate-700">
                  <td className="text-center">
                    <Image
                      className="object-cover w-12 mx-auto"
                      src={item?.imagenPrincipal?.url ?? ''}
                      alt="imgs"
                    />
                  </td>
                  <td className="text-center ">{item?.nombres}</td>
                  <td className="text-center ">{item?.apellidos}</td>
                  <td className="text-center ">{item?.link}</td>
                  <td>
                    <div className="flex justify-center ">
                      <ToggleSwitch
                        onClick={() => {
                          handleUpdateEstado(item?.vendedoraId!, item?.estado!)
                        }}
                        value={item.estado === 'Activado'}
                      />
                    </div>
                  </td>

                  <td>
                    <div className="flex justify-center gap-x-3">
                      <button
                        className="btn-icon btn-ghost-primary"
                        onClick={() => router(`edit-seller/${item.vendedoraId}`)}>
                        <IconEdit />
                      </button>

                      <button
                        className="btn-icon btn-ghost-primary"
                        onClick={() => {
                          onOpen()
                          setSelectId(item?.vendedoraId)
                        }}>
                        <IconTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Show>
      </PlantillaPage>
      <ModalDelete
        isOpen={isOpen}
        onClick={handleDelete}
        onClose={onClose}
        header="Eliminar vendedor"
        body="¿Estas seguro que deseas eliminar este vendedor?"
      />
    </>
  )
}

export default SellersPage
