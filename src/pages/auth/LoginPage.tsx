import CheckBox from '@components/shared/Checkbox/CheckBox'
import Input from '@components/shared/Input/Input'
import Spinner from '@components/shared/Spinner/Spinner'
import ImageLogin from '../../assets/imgs/login.png'
import { variables } from '@data/variables'
import { IconLogo } from '@icons'
import { useLogin } from '@services/useLogin'
import { useAuthContext } from '@store/auth/AuthState'
import { validateLogin } from '@validation/validateLogin'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ToggleTheme from '@components/shared/ToggleTheme/ToggleTheme'

const LoginPage = () => {
  const { loginUsuario, loadingLogin } = useLogin()
  const { login } = useAuthContext()
  const router = useNavigate()
  const { titleLoginTop, titleLoginBottom } = variables
  const [isChecked, setIsChecked] = useState(false)

  const onSubmit = () => {
    loginUsuario({
      email: values?.email,
      password: values?.password
    }).then((res) => {
      if (res?.ok) {
        login(res?.data!)
      } else {
        toast.error('Email o Password incorrecto.', {
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

  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormik({
      validate: validateLogin,
      onSubmit,
      initialValues: { email: '', password: '' }
    })

  return (
    <div className="h-screen flex justify-center relative px-4 md:px-0 overflow-hidden">
      <div className="flex flex-col items-center justify-center  md:w-1/2   w-full md:mx-auto  px-6 md:px-8">
        <form onSubmit={handleSubmit} className="w-full max-w-sm py-8  ">
          <div className="w-48 mb-10">
            <IconLogo />
          </div>
          <h1 className=" mb-3 text-left  text-slate-800 dark:text-slate-200 text-2xl lg:text-4xl font-bold">
            Inicia sesión
          </h1>
          {/* <p className="paragraph-2 mb-3 text-slate-500 dark:text-slate-300">
            Si eres nuevo por aquí regístrate ahora:
            <span className="font-bold"> Crear cuenta</span>
          </p> */}

          <div className="flex flex-col gap-10 py-10">
            <Input
              type="text"
              label="Usuario"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched?.email ?? false}
            />
            <Input
              type="password"
              label="Contraseña"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched?.password ?? false}
            />
            <button
              type="submit"
              disabled={loadingLogin}
              className="btn btn-solid-primary"
            >
              Inicia sesión
              {loadingLogin && <Spinner />}
            </button>

            <div className="flex flex-col gap-y-3 sm:flex-row justify-between">
              <CheckBox
                label="Recordarme"
                value={isChecked}
                onClick={() => setIsChecked(!isChecked)}
              />
              <p
                className="text-slate-500 dark:text-slate-300 cursor-pointer hover:text-primary-500 hover:underline"
                // onClick={navigate('./recuperar', { replace: true })!}
                onClick={() => {
                  router('/auth/change-password')
                }}
              >
                Recuperar contraseña
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="hidden md:block md:w-1/2 h-full relative">
        <img className="w-full h-full object-cover" src={ImageLogin} alt="" />
        <div className="bg-[#0E1C3A] absolute opacity-70 inset-0"></div>
        <div className="w-full h-full flex flex-col justify-center items-start absolute top-0 p-16 font-bold">
          <h2 className=" text-white text-6xl font-bold"> {titleLoginTop}</h2>
          <h2 className=" text-primary-500 text-6xl font-bold">
            {titleLoginBottom}
          </h2>
        </div>
      </div>
      <ToggleTheme className="absolute top-5 left-5" />
    </div>
  )
}

export default LoginPage
