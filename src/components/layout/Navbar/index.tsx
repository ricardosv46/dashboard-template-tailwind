import ToggleTheme from '@components/shared/ToggleTheme/ToggleTheme'
import useToggle from '@hooks/useToggle'
import { IconBars, IconsNotifications, IconUserCircle } from '@icons'
import SidebarDrawer from '../Sidebar/SidebarDrawer'

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useToggle()

  return (
    <header className="sticky top-0 z-40 shadow">
      <SidebarDrawer isOpen={isOpen} onClose={onClose} />
      <nav className="flex justify-end gap-3 px-8 py-2 text-center bg-gray-100 dark:bg-gray-700">
        <div className="flex gap-2">
          <ToggleTheme />
          <button className="btn-icon btn-ghost-slate">
            <IconsNotifications className="w-4 h-4" />
          </button>
          <button className=" text-gray-500 p-[7.5px]">
            <IconUserCircle className="w-5 h-5" />
          </button>
          <button className="block btn-icon btn-solid-primary lg:hidden" onClick={onOpen}>
            <IconBars className="w-4 h-4 text-white" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
