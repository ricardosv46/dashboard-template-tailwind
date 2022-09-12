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
import { useEfectivoMovil } from '@services/useEfectivoMovil'
import { Toast } from '@utils/Toast'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CashPage = () => {
  const router = useNavigate()
  const { isOpen, onOpen, onClose } = useToggle()
  const [selectId, setSelectId] = useState<string | null | undefined>(null)
  const {
    db: dataEfectivoMovil,
    loading,
    updateEstadoEfectivoMovil,
    deleteEfectivoMovil
  } = useEfectivoMovil({ estado: '' })

  const handleDelete = () => {
    deleteEfectivoMovil({ efectivoMovilId: Number(selectId) }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Eliminado Correctamente.' })
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }

  const handleUpdateEstado = (id: string, estado: string) => {
    updateEstadoEfectivoMovil({
      efectivoMovilId: id,
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
        title="Efectivo Movil"
        desc="Desde aquí podrás visualizar la información de tus metodos de pago"
        button={
          <button
            onClick={() => router('create-cash-mobile')}
            className="self-end w-full mb-3 btn btn-solid-primary sm:w-max">
            <IconPlus />
            Crear Efectivo Movil
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
                <th className="text-center">Imagen</th>
                <th className="text-center">Nombre</th>
                <th className="text-center">N° Celular</th>
                <th className="text-center">Estado</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {dataEfectivoMovil.map((item) => (
                <tr
                  key={item.efectivoMovilId}
                  className="dark:bg-transparent dark:text-slate-50 dark:hover:bg-slate-900 dark:border-b-slate-700">
                  <td className="text-center">
                    <Image
                      className="object-cover w-12 mx-auto"
                      src={item?.imagenPrincipal?.url ?? ''}
                      alt="imgs"
                    />
                  </td>
                  <td className="text-center">
                    <Image
                      className="object-cover w-12 mx-auto"
                      src={item?.imagenQr?.url ?? ''}
                      alt="imgs"
                    />
                  </td>
                  <td className="text-center ">{item?.titulo}</td>
                  <td className="text-center ">{item?.numeroCelular}</td>
                  <td>
                    <div className="flex justify-center ">
                      <ToggleSwitch
                        onClick={() => {
                          handleUpdateEstado(item?.efectivoMovilId!, item?.estado!)
                        }}
                        value={item.estado === 'Activado'}
                      />
                    </div>
                  </td>

                  <td>
                    <div className="flex justify-center gap-x-3">
                      <button
                        className="btn-icon btn-ghost-primary"
                        onClick={() => router(`edit-cash-mobile/${item.efectivoMovilId}`)}>
                        <IconEdit />
                      </button>

                      <button
                        className="btn-icon btn-ghost-primary"
                        onClick={() => {
                          onOpen()
                          setSelectId(item?.efectivoMovilId)
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
        header="Eliminar efectivo movil"
        body="¿Estas seguro que deseas eliminar este efectivo movil?"
      />
    </>
  )
}

export default CashPage
