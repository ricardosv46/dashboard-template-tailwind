import { IconCloudUpload } from '@icons'
import { classNames } from '@utils/classNames'

const OverlayDropFiles = ({ isDragging }: { isDragging?: boolean }) => {
  return (
    <div
      className={classNames([
        isDragging
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
        'inset-0 w-full h-full flex items-center justify-center absolute transition-opacity duration-300 ease-out z-30 bg-[rgba(250,250,250,0.95)] dark:bg-[rgba(0,0,0,0.95)]'
      ])}
    >
      <div className="flex flex-col items-center justify-center text-primary-500">
        <IconCloudUpload className="w-14 h-14" />
        <p className="font-semibold text-gray-600 dark:text-gray-400">
          Deja caer tus archivos aqui
        </p>
      </div>
    </div>
  )
}

export default OverlayDropFiles
