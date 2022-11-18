import Input from '@components/shared/Input/Input'
import InputFile from '@components/shared/Input/InputFile'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Select from '@components/shared/Select/Select'
import Spinner from '@components/shared/Spinner/Spinner'
import { useProfile } from '@services/useProfile'
import { useAuthContext } from '@store/auth/AuthState'
import { Toast } from '@utils/Toast'
import { validateEditProfile } from '@validation/profile/validateEditProfile'
import { useFormik } from 'formik'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const dataDocumento = [
  { value: 'DNI', label: 'DNI' },
  { value: 'CE', label: 'Carnet' },
  { value: 'Pasaporte', label: 'Pasaporte' }
]
const dataGenero = [
  { value: '1', label: 'Masculino' },
  { value: '0', label: 'Femenino' }
]

const EditProfile = () => {
  const router = useNavigate()
  const { updateProfile, loadingUpdateProfile } = useProfile()
  const { user } = useAuthContext()

  console.log({ user })

  const onSubmit = async () => {
    updateProfile({
      id: String(user.id),
      ...values
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Datos actualizado.' })
        router('/')
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }

  const { values, errors, touched, setFieldValue, ...form } = useFormik({
    onSubmit,
    validate: validateEditProfile,
    initialValues: {
      tipoDocumento: user?.tipoDocumento ?? '',
      numeroDocumento: user?.numeroDocumento ?? '',
      genero: String(user?.genero) ?? '',
      nombres: user?.nombres ?? '',
      apellidos: user?.apellidos ?? '',
      celular: user?.celular ?? '',
      fechaNacimiento: moment(user?.fechaNacimiento).format('YYYY-MM-DD') ?? '',
      email: user?.email ?? '',
      photo: user?.foto ?? null
    }
  })

  console.log({ values })

  return (
    <PlantillaPage title="Editar Perfil" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Editar Perfil</h1>
      </div>
      <form
        onSubmit={form.handleSubmit}
        className="flex flex-col w-full max-w-3xl gap-5 mx-auto mt-10 md:grid sm:grid-cols-2">
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
        <Select
          label="Tipo Documento"
          value={values.tipoDocumento}
          options={dataDocumento}
          onChange={({ value }) => {
            setFieldValue('tipoDocumento', value)
          }}
          dataExtractor={{
            label: 'label',
            value: 'value'
          }}
          error={errors.tipoDocumento}
          touched={touched?.tipoDocumento ?? false}
        />
        <Input
          type="text"
          label="Nro Documento"
          {...form.getFieldProps('numeroDocumento')}
          error={errors.numeroDocumento}
          touched={touched?.numeroDocumento ?? false}
          maxLength={values.tipoDocumento === 'DNI' ? 8 : values.tipoDocumento === 'CE' ? 9 : 10}
        />
        <Input
          disabled
          type="text"
          label="Email"
          {...form.getFieldProps('email')}
          error={errors.email}
          touched={touched?.email ?? false}
        />
        <Select
          label="Genero"
          value={values.genero}
          options={dataGenero}
          onChange={({ value }) => {
            setFieldValue('genero', value)
          }}
          dataExtractor={{
            label: 'label',
            value: 'value'
          }}
          error={errors.genero}
          touched={touched?.genero ?? false}
        />

        <Input
          type="text"
          label="Celular"
          {...form.getFieldProps('celular')}
          error={errors.celular}
          touched={touched?.celular ?? false}
        />
        <Input
          type="date"
          label="Fecha Nacimiento"
          {...form.getFieldProps('fechaNacimiento')}
          error={errors.fechaNacimiento}
          touched={touched?.fechaNacimiento ?? false}
        />

        <div className="flex w-full col-span-2 mx-auto md:w-1/2">
          <InputFile
            label="Foto"
            value={values.photo}
            onChange={(value) => setFieldValue('photo', value)}
            error={errors.photo}
            touched={touched?.photo ?? false}
          />
        </div>
        <div className="flex items-center justify-center col-span-2">
          <button
            type="submit"
            disabled={loadingUpdateProfile}
            className="w-full btn btn-solid-primary">
            Actualizar Perfil
            {loadingUpdateProfile && <Spinner className="w-5 h-5" />}
          </button>
        </div>
      </form>
    </PlantillaPage>
  )
}

export default EditProfile
