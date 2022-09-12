import Input from '@components/shared/Input/Input'
import InputImage from '@components/shared/Input/InputImage'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import { useBancos } from '@services/useBancos'
import { Toast } from '@utils/Toast'
import { validateCreateBank } from '@validation/finance/validateCreateBank'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditBank = () => {
  const router = useNavigate()
  const { id } = useParams()
  const { updateBanco, loadingUpdate, loadingBancoId, dbBancoId } = useBancos({
    bancoId: id
  })
  const onSubmit = async () => {
    updateBanco({
      bancoId: dbBancoId.bancoId!,
      titulo: values.titulo,
      numeroCuenta: values.numeroCuenta,
      imagenPrincipal: Number(values.imagenPrincipal.id)
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Creado Correctamente.' })
        router('/banks')
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }

  const { values, errors, touched, setFieldValue, setValues, ...form } = useFormik({
    onSubmit,
    validate: validateCreateBank,
    initialValues: {
      titulo: '',
      numeroCuenta: '',
      imagenPrincipal: {
        id: '',
        titulo: '',
        url: ''
      }
    }
  })

  useEffect(() => {
    if (!loadingBancoId) {
      if (dbBancoId?.bancoId === id) {
        setValues({
          titulo: dbBancoId?.titulo!,
          numeroCuenta: dbBancoId?.numeroCuenta!,
          imagenPrincipal: {
            id: dbBancoId?.imagenPrincipal?.id!,
            titulo: dbBancoId?.imagenPrincipal?.titulo!,
            url: dbBancoId?.imagenPrincipal?.url!
          }
        })
      } else {
        router('/banks')
      }
    }
  }, [loadingBancoId])

  return (
    <PlantillaPage title="Editar Banco" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Editar Banco</h1>
      </div>
      <Show
        condition={loadingBancoId}
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
            label="N° Cuenta"
            {...form.getFieldProps('numeroCuenta')}
            error={errors.numeroCuenta}
            touched={touched?.numeroCuenta ?? false}
          />

          <div className="flex w-full col-span-2 mx-auto md:w-1/2">
            <InputImage
              value={values.imagenPrincipal}
              onChange={(value) => setFieldValue('imagenPrincipal', value)}
              label=" Imagen Principal"
              error={errors.imagenPrincipal}
              touched={touched?.imagenPrincipal?.url ?? false}
            />
          </div>

          <div className="flex items-center justify-center col-span-2">
            <button
              type="submit"
              disabled={loadingUpdate}
              className="w-full md:w-1/2 btn btn-solid-primary">
              Actualizar Banco
              {loadingUpdate && <Spinner className="w-5 h-5" />}
            </button>
          </div>
        </form>
      </Show>
    </PlantillaPage>
  )
}

export default EditBank
