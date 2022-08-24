import { classNames } from '@utils/classNames'
import { generatedTotal } from '@utils/generatedTotal'
import { Dispatch, ReactElement, useState } from 'react'
import Paginator from '../Paginator/Paginator'
import styles from './table.module.css'
interface State {
  page: number
  numberPaginate: number
}

interface Props {
  className?: string
  th: any
  td: any
  widthPaginator?: boolean
  state?: State
  setState?: Dispatch<React.SetStateAction<State>>
  nTotal?: number
}

const Table = ({
  th,
  td,
  className,
  widthPaginator,
  state,
  setState,
  nTotal
}: Props) => {
  const paginas =
    widthPaginator && nTotal && nTotal > 0
      ? generatedTotal(nTotal!, state?.numberPaginate!)
      : []
  return (
    <div className={classNames([styles.tableContainer, className])}>
      <table>
        <thead>
          <tr className="dark:border-b-slate-700">
            {th.map((item: any) => (
              <th key={item} className="text-center">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="dark:bg-transparent dark:text-slate-50 dark:hover:bg-slate-900 dark:border-b-slate-700">
            {td.map((item: any) => (
              <td key={item} className="text-center">
                {item}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {widthPaginator && paginas.length > 0 && (
        <Paginator setState={setState!} state={state!} paginas={paginas} />
      )}
    </div>
  )
}

export default Table
