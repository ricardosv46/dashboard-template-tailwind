import OptionUser from './OptionUser'
import OptionProducts from './OptionProducts'
import OptionAddress from './OptionAddress'
import OptionPayment from './OptionPayment'
interface IProps {
  option: number
  data: any
}

const ShowOption = ({ option = 1, data }: IProps) => {
  switch (option) {
    case 1:
      return <OptionUser data={data} />
    case 2:
      return <OptionProducts data={data} />
    case 3:
      return <OptionAddress data={data} />
    case 4:
      return <OptionPayment data={data} />
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
