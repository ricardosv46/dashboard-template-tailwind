import './index.css'
import { useState } from 'react'
interface IProps {
  initialValue: any
  onChange?: (value: any) => void
}

const IconVisto = ({ initialValue, onChange }: IProps) => {
  const value = initialValue === 0 || initialValue === '0'

  const [isActive, setIsActive] = useState(value)

  const handleClick = () => {
    setIsActive(!isActive)
    onChange && onChange(!isActive)
  }

  return (
    <div
      className={`${
        isActive ? 'text-green-600 ' : 'text-gray-600'
      }  cursor-pointer font-bold transition-colors duration-300`}
      onClick={handleClick}>
      ✓✓
    </div>
  )
}

export default IconVisto
