import Input from '@components/shared/Input/Input'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Select from '@components/shared/Select/Select'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import Table from '@components/shared/Table/Table'
import { useSubscribers } from '@services/useSubscribers'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
  FechaInicio: '',
  FechaFin: ''
}

const SubscribersPage = () => {
  const [state, setState] = useState({
    pagina: 1,
    numeroPagina: 10
  })

  const [filtros, setFiltros] = useState({
    FechaInicio: '',
    FechaFin: ''
  })

  const onSubmit = () => {
    setFiltros({
      ...values
    })
  }

  const { values, errors, touched, ...form } = useFormik({
    onSubmit,
    initialValues: initialState
  })

  const { ventasAnio, loading, ntotal } = useSubscribers({ ...state, ...filtros })

  const limpiarFiltro = () => {
    form.setValues({ FechaInicio: '', FechaFin: '' })
    setFiltros({ FechaInicio: '', FechaFin: '' })
    useState({
      pagina: 1,
      numeroPagina: 10
    })
  }

  return (
    <PlantillaPage
      title="Suscriptores"
      desc="Desde aqui podras visualizar la informacion de todas los Suscriptores">
      <form
        onSubmit={form.handleSubmit}
        className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 ">
        <Input
          className="w-full"
          type="date"
          label="Fecha Inicial"
          {...form.getFieldProps('FechaInicio')}
        />
        <Input
          className="w-full"
          type="date"
          label="Fecha Final"
          {...form.getFieldProps('FechaFin')}
        />
        <button className="w-full px-0 btn btn-solid-green" type="submit">
          Filtrar
        </button>
        <button className="w-full px-0 btn btn-solid-red" type="button" onClick={limpiarFiltro}>
          Limpiar Filtro
        </button>
      </form>
      <Show
        condition={loading}
        loading
        isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
        <Table widthPaginator nTotal={ntotal} state={state} setState={setState}>
          <thead>
            <tr className="dark:border-b-slate-700">
              <th className="text-center">Nombres</th>
              <th className="text-center">Correo</th>
            </tr>
          </thead>
          <tbody>
            {ventasAnio.map((item) => (
              <tr
                key={item?.suscriptorId}
                className="dark:bg-transparent dark:text-slate-50 dark:hover:bg-slate-900 dark:border-b-slate-700">
                <td className="text-center ">{item?.nombres}</td>
                <td className="text-center ">{item?.correo}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Show>
    </PlantillaPage>
  )
}

export default SubscribersPage
