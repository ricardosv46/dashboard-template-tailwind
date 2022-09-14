import Input from '@components/shared/Input/Input'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Spinner from '@components/shared/Spinner/Spinner'
import { useProfile } from '@services/useProfile'
import { useAuthContext } from '@store/auth/AuthState'
import { Toast } from '@utils/Toast'
import { validateEditPassword } from '@validation/profile/validateEditPassword'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const EditPassword = () => {
  const router = useNavigate()
  const { updatePassword, loadingUpdatePassword } = useProfile()
  const { user } = useAuthContext()

  const onSubmit = async () => {
    updatePassword({
      id: String(user.id),
      passwordAntiguo: values.passwordAntiguo,
      passwordNuevo: values.passwordNuevo
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Contraseña actualizada.' })
        router('/')
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }

  const { values, errors, touched, setFieldValue, ...form } = useFormik({
    onSubmit,
    validate: validateEditPassword,
    initialValues: {
      passwordAntiguo: '',
      passwordNuevo: '',
      repeatPasswordNuevo: ''
    }
  })

  return (
    <PlantillaPage title="Cambiar Contraseña" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Cambiar Contraseña</h1>
      </div>
      <form
        onSubmit={form.handleSubmit}
        className="flex flex-col w-full max-w-sm gap-5 mx-auto mt-10 ">
        <Input
          type="password"
          label="Contraseña Antigua"
          {...form.getFieldProps('passwordAntiguo')}
          error={errors.passwordAntiguo}
          touched={touched?.passwordAntiguo ?? false}
        />
        <Input
          type="password"
          label="Nueva Contraseña"
          {...form.getFieldProps('passwordNuevo')}
          error={errors.passwordNuevo}
          touched={touched?.passwordNuevo ?? false}
        />
        <Input
          type="password"
          label="Repetir Contraseña"
          {...form.getFieldProps('repeatPasswordNuevo')}
          error={errors.repeatPasswordNuevo}
          touched={touched?.repeatPasswordNuevo ?? false}
        />

        <div className="flex items-center justify-center col-span-2">
          <button
            type="submit"
            disabled={loadingUpdatePassword}
            className="w-full btn btn-solid-primary">
            Actualizar Contraseña
            {loadingUpdatePassword && <Spinner className="w-5 h-5" />}
          </button>
        </div>
      </form>
    </PlantillaPage>
  )
}

export default EditPassword
