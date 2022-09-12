import Input from '@components/shared/Input/Input'
import InputImage from '@components/shared/Input/InputImage'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Spinner from '@components/shared/Spinner/Spinner'
import { useBancos } from '@services/useBancos'
import { useVendedoras } from '@services/useVendedores'
import { Toast } from '@utils/Toast'
import { validateCreateVendedor } from '@validation/finance/validateCreateVendedor'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const CreateSeller = () => {
  const router = useNavigate()
  const { createVendedora, loadingCreate } = useVendedoras({})
  const onSubmit = async () => {
    createVendedora({
      nombres: values.nombres,
      apellidos: values.apellidos,
      link: values.link,
      imagenPrincipal: Number(values.imagenPrincipal.id)
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Actualizado Correctamente.' })
        router('/sellers')
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }

  const { values, errors, touched, setFieldValue, ...form } = useFormik({
    onSubmit,
    validate: validateCreateVendedor,
    initialValues: {
      nombres: '',
      apellidos: '',
      link: '',
      imagenPrincipal: {
        id: '',
        titulo: '',
        url: ''
      }
    }
  })

  return (
    <PlantillaPage title="Crear Vendedor" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Crear Vendedor</h1>
      </div>
      <form
        onSubmit={form.handleSubmit}
        className="flex flex-col w-full max-w-3xl gap-5 mx-auto mt-10 md:grid sm:grid-cols-2 ">
        <Input
          type="text"
          label="Nombres"
          {...form.getFieldProps('nombres')}
          error={errors.nombres}
          touched={touched?.nombres ?? false}
        />
        <Input
          type="text"
          label="Apellidos"
          {...form.getFieldProps('apellidos')}
          error={errors.apellidos}
          touched={touched?.apellidos ?? false}
        />
        <div className="col-span-2 ">
          <Input
            type="text"
            label="Link"
            {...form.getFieldProps('link')}
            error={errors.link}
            touched={touched?.link ?? false}
          />
        </div>

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
            disabled={loadingCreate}
            className="w-full md:w-1/2 btn btn-solid-primary">
            Crear Vendedor
            {loadingCreate && <Spinner className="w-5 h-5" />}
          </button>
        </div>
      </form>
    </PlantillaPage>
  )
}

export default CreateSeller
