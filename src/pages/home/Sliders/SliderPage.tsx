import Image from '@components/shared/Img/Image'
import ModalDelete from '@components/shared/Modal/ModalDelete'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import { Show } from '@components/shared/Show/Show'

import Spinner from '@components/shared/Spinner/Spinner'
import Table from '@components/shared/Table/Table'
import { ToggleSwitch } from '@components/shared/ToggleSwitch/ToggleSwitch'
import useToggle from '@hooks/useToggle'
import { IconEdit, IconEye, IconPlus, IconTrash } from '@icons'
import { useSliders } from '@services/useSliders'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const SliderPage = () => {
  const router = useNavigate()
  const { isOpen, onOpen, onClose } = useToggle()
  const [selectId, setSelectId] = useState<string | null | undefined>(null)
  const {
    db: dataSliders,
    deleteSlider,
    updateEstadoSlider,
    loading
  } = useSliders()

  const handleDelete = () => {
    deleteSlider({ sliderId: selectId } as any).then((res) => {
      if (res?.ok) {
        toast.success('Eliminado Correctamente.', {
          theme: 'colored',
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      } else {
        toast.error(res?.error, {
          theme: 'colored',
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    })
  }

  const handleUpdateEstado = (id: string, estado: string) => {
    updateEstadoSlider({
      sliderId: id,
      estado: estado === 'Activado' ? 'Desactivado' : 'Activado'
    }).then((res) => {
      if (res?.ok) {
        toast.success('Estado Actualizado Correctamente.', {
          theme: 'colored',
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      } else {
        toast.error(res?.error, {
          theme: 'colored',
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    })
  }

  return (
    <>
      <PlantillaPage
        title="Sliders"
        desc="Desde aqui podras visualizar la informacion de todas los sliders"
        button={
          <button
            className="self-end w-full mb-3 btn btn-solid-primary sm:w-max"
            onClick={() => router('create-slider')}
          >
            <IconPlus />
            Crear Slider
          </button>
        }
      >
        <Show
          condition={loading}
          loading
          isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}
        >
          <Table>
            <thead>
              <tr className="dark:border-b-slate-700">
                <th className="text-center">Imagen</th>
                <th className="text-center">Titulo</th>
                <th className="text-center">Estado</th>
                <th className="text-center">Link</th>
                <th className="text-center">Tipo Link</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {dataSliders.map((item) => (
                <tr
                  key={item.sliderId}
                  className="dark:bg-transparent dark:text-slate-50 dark:hover:bg-slate-900 dark:border-b-slate-700"
                >
                  <td className="text-center">
                    <Image
                      className="object-cover w-12 mx-auto"
                      src={item?.imagenPrincipal?.url ?? ''}
                      alt="imgs"
                    />
                  </td>
                  <td className="text-center ">{item?.titulo}</td>
                  <td>
                    <div className="flex justify-center ">
                      <ToggleSwitch
                        onClick={() => {
                          handleUpdateEstado(item?.sliderId!, item?.estado!)
                        }}
                        value={item.estado === 'Activado'}
                      />
                    </div>
                  </td>
                  <td className="text-center ">{item?.link}</td>
                  <td className="text-center ">
                    {item?.tipoLink === 'interno' ? 'Interno' : 'Externo'}
                  </td>
                  <td>
                    <div className="flex justify-center gap-x-3">
                      <button
                        className="btn-icon btn-ghost-primary"
                        onClick={() =>
                          router(`edit-slider/${item.sliderId}`, {
                            state: { item }
                          })
                        }
                      >
                        <IconEdit />
                      </button>

                      <button
                        className="btn-icon btn-ghost-primary"
                        onClick={() => {
                          onOpen()
                          setSelectId(item?.sliderId)
                        }}
                      >
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
        header="Eliminar slider"
        body="¿Estas seguro que deseas eliminar este slider?"
      />
    </>
  )
}

export default SliderPage
