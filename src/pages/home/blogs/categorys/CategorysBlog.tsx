import Image from '@components/shared/Img/Image'
import ModalDelete from '@components/shared/Modal/ModalDelete'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import Table from '@components/shared/Table/Table'
import { ToggleSwitch } from '@components/shared/ToggleSwitch/ToggleSwitch'
import useToggle from '@hooks/useToggle'
import { IconEdit, IconPlus, IconTrash } from '@icons'
import { useCategoriaBlogs } from '@services/useCategoriaBlogs'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CategorysBlog = () => {
  const router = useNavigate()
  const { isOpen, onOpen, onClose } = useToggle()
  const [selectId, setSelectId] = useState<string | null | undefined>(null)
  const {
    db: dataCategoriaBlog,
    deleteCategoriaBlog,
    updateEstadoCategoriaBlog,
    loading
  } = useCategoriaBlogs({ estado: '' })

  const handleDelete = () => {
    deleteCategoriaBlog({ categoriaBlogId: Number(selectId) }).then((res) => {
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
    updateEstadoCategoriaBlog({
      categoriaBlogId: id,
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
        title="Categoría Blogs"
        desc="Desde aqui podras visualizar todas las categorías de los blogs"
        button={
          <button
            onClick={() => router('create-blog-category')}
            className="self-end w-full mb-3 btn btn-solid-primary sm:w-max">
            <IconPlus />
            Crear Categoría
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
                <th className="text-center">Titulo</th>
                <th className="text-center">Estado</th>
                <th className="text-center">Descripción</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {dataCategoriaBlog.map((item) => (
                <tr
                  key={item.categoriaBlogId}
                  className="dark:bg-transparent dark:text-slate-50 dark:hover:bg-slate-900 dark:border-b-slate-700">
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
                          handleUpdateEstado(item?.categoriaBlogId!, item?.estado!)
                        }}
                        value={item.estado === 'Activado'}
                      />
                    </div>
                  </td>
                  <td className="text-center ">{item?.descripcion}</td>

                  <td>
                    <div className="flex justify-center gap-x-3">
                      <button
                        className="btn-icon btn-ghost-primary"
                        onClick={() => router(`edit-blog-category/${item.slug}`)}>
                        <IconEdit />
                      </button>

                      <button
                        className="btn-icon btn-ghost-primary"
                        onClick={() => {
                          onOpen()
                          setSelectId(item?.categoriaBlogId)
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
        header="Eliminar categoria"
        body="¿Estas seguro que deseas eliminar esta categoria?"
      />
    </>
  )
}

export default CategorysBlog
