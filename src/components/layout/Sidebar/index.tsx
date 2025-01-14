// import ToggleTheme from '@components/shared/ToggleTheme/ToggleTheme'
import useToggle from '@hooks/useToggle'
import { IconClose, IconHome, IconLogo, IconLogout, IconMinus, IconPlus } from '@icons'
import { homeRoutes } from '@routes/routes'
import { useAuthContext } from '@store/auth/AuthState'
import SidebarLink from './SidebarLink'
import styles from './sidebar.module.css'
import { classNames } from '@utils/classNames'
interface Props {
  onClose: () => void
  onToggle: () => void
  mobile: boolean
}

const Sidebar = ({ onClose, mobile = false }: Props) => {
  const { logout } = useAuthContext()
  const { isOpen, onToggle } = useToggle(true)
  const user = JSON.parse(localStorage.getItem('user')!)

  return (
    <div
      className={classNames([
        'relative h-full ease-out transition-all duration-300 overflow-hidden hover:w-[300px] z-50 shadow  hover:opacity-100',
        mobile ? '' : styles.sidebar,
        mobile ? 'w-[300px]' : isOpen ? `w-[300px] ${styles.anchor} ` : 'w-[72px]'
      ])}>
      <div className="h-screen pb-20 overflow-scroll bg-gray-100 dark:bg-gray-700 scroll-smooth no-scrollbar ">
        <div className="flex items-center justify-center  pt-4  pb-2">
          <div className="px-5 flex  w-full justify-between">
            <IconLogo className={styles.oculto} />
            {/* eslint-disable */}
            {mobile ? (
              <button className="btn-icon btn-ghost-primary" onClick={onClose}>
                <IconClose className="w-4 h-4" />
              </button>
            ) : (
              <div>
                {/* <ToggleTheme className={styles.oculto} /> */}
                <button className={`btn-icon btn-ghost-gray `} onClick={onToggle}>
                  {isOpen ? <IconPlus /> : <IconMinus />}
                </button>
              </div>
            )}
          </div>
        </div>
        <p className={`px-5 mb-5 text-lg font-semibold leading-7 text-primary-600  ${styles.text}`}>
          {user?.nombres} {user?.apellidos}
        </p>
        <div className="flex flex-col gap-2 px-4 pb-5">
          <SidebarLink
            to="/"
            name="Home"
            mobile={mobile}
            onClick={onClose}
            icon={IconHome}
            subMenu={{ value: false, paths: [] }}
          />

          {homeRoutes.map(({ icon, name, path, to, subMenu }) => (
            <SidebarLink key={path} onClick={onClose} {...{ icon, name, path, to, subMenu }} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 w-full p-5 bg-gray-100 dark:bg-gray-700">
        <button
          className={`w-full px-0 text-white bg-red-600 border-red-600 dark:bg-red-400 btn dark:border-red-400 ${
            mobile ? '' : 'hidden'
          }  ${styles.cerrar}`}
          onClick={logout}>
          <IconLogout />
          <p>Cerrar Sesión</p>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
