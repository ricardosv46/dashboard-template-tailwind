import { IconClose, IconPlus } from '@icons'
import { FileToUpload } from '.'

interface Props {
  files?: FileToUpload[]
  inputId: string
  onCancel: () => void
  onUpload: () => void
  onDelete: (id: string) => void
}

const kbToMb = (kb: number) => parseFloat(String(Math.floor(kb / 1000)))

const DashboardFiles = ({
  files,
  inputId,
  onDelete,
  onCancel,
  onUpload
}: Props) => {
  return (
    <div className="flex-col h-full">
      <div className="grid items-center grid-cols-1 gap-3 pb-2 border-b border-b-gray-200 dark:border-b-gray-700 md:grid-cols-3">
        <button
          className="w-full btn btn-ghost-red sm:w-max"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <p className="text-center font-mediumhidden md:block">
          {files?.length} archivos seleccionados
        </p>
        {/* <Button
          ml="auto"
          w={{ base: 'full', md: 'max' }}
          as="label"
          variant="outline"
          colorScheme="primary"
          leftIcon={<Icon as={AddIcon} />}
          htmlFor={`input-file-${inputId}`}
        >
          Añadir mas
        </Button> */}

        <label
          className="w-full cursor-pointer place-self-end btn btn-outline-primary sm:w-max"
          htmlFor={`input-file-${inputId}`}
          onClick={() => {}}
        >
          <IconPlus />
          Añadir mas
        </label>
      </div>

      <div className="grid py-2 gap-2 flex-1 overflow-auto auto-rows-[64px] md:auto-rows-[188px] grid-cols-1 md:grid-cols-auto-fit2">
        {files &&
          files.map(({ id, file, blob }) => (
            <div
              className="flex flex-row w-full h-full gap-3 md:gap-0 md:flex-col"
              key={id}
            >
              <div className="relative rounded overflow-hidden w-20 md:w-full h-16 md:h-[145px] mb-2">
                <button
                  aria-label="Eliminar archivo"
                  className="absolute top-0 right-0 z-20 hidden btn-icon btn-solid-red md:block"
                  onClick={() => onDelete(id)}
                >
                  {<IconClose />}
                </button>

                {/* <IconButton
                  top={0}
                  right={0}
                  zIndex={20}
                  size="xs"
                  pos="absolute"
                  bg="black"
                  color="gray.300"
                  aria-label="Eliminar archivo"
                  _hover={{ bg: 'blackAlpha.500' }}
                  _dark={{ bg: 'white', color: 'gray.700' }}
                  icon={<CloseIcon />}
                  onClick={() => onDelete(id)}
                  display={{ base: 'none', md: 'block' }}
                /> */}
                <img
                  className="absolute inset-0 z-10 w-full h-full"
                  alt={file.name}
                  src={URL.createObjectURL(blob)}
                />
              </div>

              <div>
                <p className="font-medium text-[12px]">{file.name}</p>
                <p className="font-medium text-gray-500 text-[11px]">
                  {kbToMb(file.size)} KB
                </p>
                <button
                  className="self-end w-full mb-3 btn btn-solid-red sm:w-max md:hidden"
                  onClick={() => onDelete(id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="flex pt-2 border-t border-t-gray-200 dark:border-t-gray-700">
        <button
          className="w-full btn btn-solid-primary sm:w-max"
          onClick={onUpload}
        >
          Subir {files?.length} {files?.length === 1 ? 'archivo' : 'archivos'}{' '}
        </button>
      </div>
    </div>
  )
}

export default DashboardFiles
