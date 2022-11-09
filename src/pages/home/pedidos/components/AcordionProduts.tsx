import { IconChevronUp } from '@icons'
import { useState } from 'react'

const AcordionProducts = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="w-full pb-4">
      <div
        className={`${
          show && 'border-primary-600'
        } py-1 flex justify-between items-center border px-3  rounded-md`}>
        <p className={`${show && 'font-semibold'}  text-xl`}>Productos adquiridos</p>
        <p
          className={`${
            show ? 'rotate-0 text-primary-600' : 'text-gray-500 rotate-180'
          }  text-3xl  p-2`}
          onClick={() => setShow(!show)}>
          <IconChevronUp />
        </p>
      </div>
      <div className={`${show ? 'block' : 'hidden'}  border shadow-md pl-3 mt-3 py-3  rounded-md `}>
        texto
      </div>
    </div>
  )
}
export default AcordionProducts