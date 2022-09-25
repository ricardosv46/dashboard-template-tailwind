import Image from '@components/shared/Img/Image'
import ModalDelete from '@components/shared/Modal/ModalDelete'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Select from '@components/shared/Select/Select'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import Table from '@components/shared/Table/Table'
import { ToggleSwitch } from '@components/shared/ToggleSwitch/ToggleSwitch'
import useToggle from '@hooks/useToggle'
import { IconEdit, IconPlus, IconTrash } from '@icons'
import { useProductos } from '@services/useProductos'
import { Toast } from '@utils/Toast'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IconSearch from '../../../icons/IconSearch'

const estados = [
  { label: 'Todos', value: '' },
  { label: 'Activado', value: 'Activado' },
  { label: 'Desactivado', value: 'Desactivado' }
]

const ProductsPage = () => {
  const router = useNavigate()
  const { isOpen, onOpen, onClose } = useToggle()
  const [state, setState] = useState({
    pagina: 1,
    numeroPagina: 10
  })
  const { values, errors, touched, setFieldValue, ...form } = useFormik({
    onSubmit: () => {},
    initialValues: {
      estado: '',
      destacado: ''
    }
  })
  const [selectId, setSelectId] = useState<string | null | undefined>(null)
  const [palabraClave, setPalabraClave] = useState('')
  const {
    db: dataProductos,
    loading,
    nTotal,
    deleteProducto,
    updateEstadoProducto,
    updateDestacadoProducto
  } = useProductos({ ...values, ...state, palabraClave })

  const handleDelete = () => {
    deleteProducto({ productoId: Number(selectId) }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Eliminado Correctamente.' })
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }

  const handleUpdateEstado = (id: string, estado: string) => {
    updateEstadoProducto({
      productoId: id,
      estado: estado === 'Activado' ? 'Desactivado' : 'Activado'
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Estado Actualizado Correctamente.' })
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }

  const handleUpdateDestacado = (id: string, destacado: string) => {
    updateDestacadoProducto({
      productoId: id,
      destacado: destacado === 'Activado' ? 'Desactivado' : 'Activado'
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Destacado Actualizado Correctamente.' })
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }

  return (
    <>
      <PlantillaPage
        title="Productos"
        desc="Desde aqui podras visualizar todos los productos"
        button={
          <button
            onClick={() => router('create-product')}
            className="self-end w-full mb-3 btn btn-solid-primary sm:w-max">
            <IconPlus />
            Crear Producto
          </button>
        }>
        <div className="grid justify-center items-start grid-cols-1 md:grid-cols-5 gap-8 mb-3">
          <div className="md:col-span-3  relative md:h-full">
            <input
              type="text"
              className="border peer bg-transparent outline-none w-full h-full p-4 border-primary-600  border-b-2 rounded-tr-md rounded-tl-md"
              placeholder="Ingrese una palabra clave"
              onChange={(e) => setPalabraClave(e.target.value)}
            />
            <div className="absolute right-0 top-0 bg-primary-600 pt-3  h-full rounded-tr-md px-3 cursor-pointer">
              <IconSearch />
            </div>
          </div>

          <Select
            label="Estado"
            value={values.estado}
            options={estados}
            onChange={({ value }) => {
              setFieldValue('estado', value)
              setState({ ...state, pagina: 1 })
            }}
            dataExtractor={{
              label: 'label',
              value: 'value'
            }}
          />
          <Select
            label="Destacado"
            value={values.destacado}
            options={estados}
            onChange={({ value }) => {
              setFieldValue('destacado', value)
              setState({ ...state, pagina: 1 })
            }}
            dataExtractor={{
              label: 'label',
              value: 'value'
            }}
          />
        </div>
        <Show
          condition={loading}
          loading
          isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
          <Table widthPaginator nTotal={nTotal} state={state} setState={setState}>
            <thead>
              <tr className="dark:border-b-slate-700">
                <th className="text-center">Imagen</th>
                <th className="text-center">Titulo</th>
                <th className="text-center">Estado</th>
                <th className="text-center">Destacado</th>
                <th className="text-center">Categoría</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {dataProductos.map((item) => (
                <tr
                  key={item?.productoId}
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
                          handleUpdateEstado(item?.productoId!, item?.estado!)
                        }}
                        value={item.estado === 'Activado'}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center ">
                      <ToggleSwitch
                        onClick={() => {
                          handleUpdateDestacado(item?.productoId!, item?.destacado!)
                        }}
                        value={item.destacado === 'Activado'}
                      />
                    </div>
                  </td>
                  <td className="text-center ">{item?.CategoriaProducto?.titulo}</td>

                  <td>
                    <div className="flex justify-center gap-x-3">
                      <button
                        className="btn-icon btn-ghost-primary"
                        onClick={() => router(`edit-product/${item.slug}`)}>
                        <IconEdit />
                      </button>

                      <button
                        className="btn-icon btn-ghost-primary"
                        onClick={() => {
                          onOpen()
                          setSelectId(item?.productoId)
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
        header="Eliminar producto"
        body="¿Estas seguro que deseas eliminar este producto?"
      />
    </>
  )
}

export default ProductsPage
