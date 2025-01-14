import { Link } from 'react-router-dom'
import Welcome from '../../assets/imgs/welcome.png'
import { variables } from '../../data/variables'

const WelcomePage = () => {
  const user = JSON.parse(localStorage.getItem('user')!)
  const { linkVisitarSitio, nombreVisitarSitio, linkSoporte } = variables

  return (
    <div className="p-10">
      <div className="flex items-center justify-between px-4 py-8 bg-gray-300 rounded-lg md:px-12">
        <div className="flex flex-col gap-5 font-semibold text-gray-700">
          <h1 className="text-2xl font-bold lg:text-4xl">Bienvenido {user?.nombres}</h1>
          <p>
            Desde el panel de administración podrás,agregar,modificar,eliminar información referente
            atu tienda.
          </p>
          <p>
            Recuerda que si tienes algún problema o duda puedes contactarnos a{' '}
            <span className="text-red-500">{linkSoporte}</span>
          </p>
          <p className="font-semibold">
            Estamos felices de ser tus aliados en el crecimiento de tu negocio.
          </p>
        </div>
        <img src={Welcome} className="w-full h-full hidden lg:block max-w-[200px]" alt="welcome" />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 mt-10 text-3xl font-bold text-center text-gray-700 sm:flex-row ">
        <Link to={linkVisitarSitio}>
          <div className="flex items-center justify-center px-10 bg-gray-300 rounded-lg cursor-pointer w-60 h-36">
            <p>{nombreVisitarSitio}</p>
          </div>
        </Link>
        <Link to="/products">
          <div className="flex items-center justify-center px-10 bg-gray-300 rounded-lg cursor-pointer w-60 h-36">
            <p>Productos Registrados</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default WelcomePage
