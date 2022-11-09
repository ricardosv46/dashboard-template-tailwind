import { IconChevronUp } from '@icons'

interface IProps {
  option: number
  setOption: (value: number) => void
}

const MenuDesktop = ({ option, setOption }: IProps) => {
  const handleClick = (value: number) => {
    setOption(value)
  }

  return (
    <ul className="w-full border shadow-md sm:w-[450px]">
      <li
        className={`${
          option === 1 && 'border-l-primary-600 border-l-4 font-semibold'
        } py-2 sm:py-3 border-b px-2 text-[#333333] cursor-pointer flex justify-between items-center`}
        onClick={() => handleClick(1)}>
        <p>Datos de usuario</p>
        <p className={`${option === 1 && 'text-primary-600'}  text-2xl rotate-90`}>
          <IconChevronUp />
        </p>
      </li>
      <li
        className={`${
          option === 2 && 'border-l-primary-600 border-l-4 font-semibold'
        } py-2 sm:py-3 border-b px-2 text-[#333333] cursor-pointer flex justify-between items-center`}
        onClick={() => handleClick(2)}>
        <p>Productos adquiridos</p>
        <p className={`${option === 2 && 'text-primary-600'}  text-2xl rotate-90`}>
          <IconChevronUp />
        </p>
      </li>
      <li
        className={`${
          option === 3 && 'border-l-primary-600 border-l-4 font-semibold'
        } py-2 sm:py-3 border-b px-2 text-[#333333] cursor-pointer flex justify-between items-center`}
        onClick={() => handleClick(3)}>
        <p> Dirección de envio</p>
        <p className={`${option === 3 && 'text-primary-600'}  text-2xl rotate-90`}>
          <IconChevronUp />
        </p>
      </li>
      <li
        className={`${
          option === 4 && 'border-l-primary-600 border-l-4 font-semibold'
        } py-2 sm:pay-3 px-2 text-[#333333] cursor-pointer flex justify-between items-center`}
        onClick={() => handleClick(4)}>
        <p> Datos del pago</p>
        <p className={`${option === 4 && 'text-primary-600'}  text-2xl rotate-90`}>
          <IconChevronUp />
        </p>
      </li>
    </ul>
  )
}

export default MenuDesktop
