interface IProps {
  fecha?: string
  visto?: number | undefined | null
}

const Aviso = ({ fecha, visto }: IProps) => {
  const show = visto === 0
  return (
    <>
      {show && (
        <span className="bg-blue-600 px-2 py-[1px] rounded-xl text-[11px] text-white font-normal ml-2">
          Nuevo
        </span>
      )}
    </>
  )
}

export default Aviso
