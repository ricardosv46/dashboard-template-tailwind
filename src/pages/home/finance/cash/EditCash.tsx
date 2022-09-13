import Input from '@components/shared/Input/Input'
import InputImage from '@components/shared/Input/InputImage'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import { useEfectivoMovil } from '@services/useEfectivoMovil'
import { Toast } from '@utils/Toast'
import { validateCreateCash } from '@validation/finance/validateCreateCash'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditCash = () => {
  const router = useNavigate()
  const { id } = useParams()
  const { updateEfectivoMovil, loadingUpdate, loadingEfectivoMovilId, dbEfectivoMovilId } =
    useEfectivoMovil({
      efectivoMovilId: id
    })
  const onSubmit = async () => {
    updateEfectivoMovil({
      efectivoMovilId: dbEfectivoMovilId.efectivoMovilId!,
      titulo: values.titulo,
      numeroCelular: values.numeroCelular,
      imagenPrincipal: Number(values.imagenPrincipal.id),
      imagenQr: Number(values.imagenQr.id)
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Actualizado Correctamente.' })
        router('/cash-mobile')
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }

  const { values, errors, touched, setFieldValue, setValues, ...form } = useFormik({
    onSubmit,
    validate: validateCreateCash,
    initialValues: {
      titulo: '',
      numeroCelular: '',
      imagenPrincipal: {
        id: '',
        titulo: '',
        url: ''
      },
      imagenQr: {
        id: '',
        titulo: '',
        url: ''
      }
    }
  })

  useEffect(() => {
    if (!loadingEfectivoMovilId) {
      if (dbEfectivoMovilId?.efectivoMovilId === id) {
        setValues({
          titulo: dbEfectivoMovilId?.titulo!,
          numeroCelular: dbEfectivoMovilId?.numeroCelular!,
          imagenPrincipal: {
            id: dbEfectivoMovilId?.imagenPrincipal?.id!,
            titulo: dbEfectivoMovilId?.imagenPrincipal?.titulo!,
            url: dbEfectivoMovilId?.imagenPrincipal?.url!
          },
          imagenQr: {
            id: dbEfectivoMovilId?.imagenQr?.id!,
            titulo: dbEfectivoMovilId?.imagenQr?.titulo!,
            url: dbEfectivoMovilId?.imagenQr?.url!
          }
        })
      } else {
        router('/cash-mobile')
      }
    }
  }, [loadingEfectivoMovilId])

  return (
    <PlantillaPage title="Editar Efectivo Movil" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Editar Efectivo Movil</h1>
      </div>
      <Show
        condition={loadingEfectivoMovilId}
        loading
        isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
        <form
          onSubmit={form.handleSubmit}
          className="flex flex-col w-full max-w-3xl gap-5 mx-auto mt-10 md:grid sm:grid-cols-2 ">
          <Input
            type="text"
            label="Titulo"
            {...form.getFieldProps('titulo')}
            error={errors.titulo}
            touched={touched?.titulo ?? false}
          />

          <Input
            type="text"
            label="N° Celular"
            {...form.getFieldProps('numeroCelular')}
            error={errors.numeroCelular}
            touched={touched?.numeroCelular ?? false}
          />

          <InputImage
            value={values.imagenPrincipal}
            onChange={(value) => setFieldValue('imagenPrincipal', value)}
            label=" Imagen Principal"
            error={errors.imagenPrincipal}
            touched={touched?.imagenPrincipal?.url ?? false}
          />
          <InputImage
            value={values.imagenQr}
            onChange={(value) => setFieldValue('imagenQr', value)}
            label=" Imagen Qr"
            error={errors.imagenQr}
            touched={touched?.imagenQr?.url ?? false}
          />

          <div className="flex items-center justify-center col-span-2">
            <button
              type="submit"
              disabled={loadingUpdate}
              className="w-full md:w-1/2 btn btn-solid-primary">
              Actualizar Efectivo Movil
              {loadingUpdate && <Spinner className="w-5 h-5" />}
            </button>
          </div>
        </form>
      </Show>
    </PlantillaPage>
  )
}

export default EditCash