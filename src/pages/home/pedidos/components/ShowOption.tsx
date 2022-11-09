import React from 'react'
import OptionUser from './OptionUser'
import OptionProducts from './OptionProducts'
import OptionAddress from './OptionAddress'
import OptionPayment from './OptionPayment'

interface IProps {
  option: number
}

const ShowOption = ({ option = 1 }: IProps) => {
  switch (option) {
    case 1:
      return <OptionUser />
    case 2:
      return <OptionProducts />
    case 3:
      return <OptionAddress />
    case 4:
      return <OptionPayment />
    default:
      break
  }
  return (
    <div className="w-full shadow-md border">
      <h2 className="text-center py-10">Error</h2>
    </div>
  )
}

export default ShowOption
