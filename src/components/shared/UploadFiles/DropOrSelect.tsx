interface Props {
  inputId: string
}

const DropOrSelect = ({ inputId }: Props) => {
  return (
    <div className="flex items-center justify-center w-full h-full p-8 border border-gray-300 border-dashed ">
      <p className="text-center text-lg md:text-[28px]">
        Arratra tus archivos o{' '}
        <label
          htmlFor={`input-file-${inputId}`}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          selecciona tus archivos
        </label>
      </p>
    </div>
  )
}

export default DropOrSelect
