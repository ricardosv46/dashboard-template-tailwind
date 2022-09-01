import { classNames } from '@utils/classNames'

interface IProps {
  value: boolean
  onClick: () => void
}
export const ToggleSwitch = ({ value, onClick }: IProps) => {
  return (
    <>
      {/* Switch Container */}
      <button
        type="button"
        className={classNames([
          'flex items-center w-12 h-6 p-1 rounded-full cursor-pointer  ',
          !value ? 'bg-slate-200 dark:bg-slate-300' : 'bg-primary-500'
        ])}
        onClick={onClick}
      >
        {/* Switch */}
        <div
          className={classNames([
            'h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out',
            !value
              ? 'bg-gray-400 dark:bg-gray-500 '
              : 'transform translate-x-5 bg-white'
          ])}
        ></div>
      </button>
    </>
  )
}
