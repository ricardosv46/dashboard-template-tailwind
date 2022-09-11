import { classNames } from '@utils/classNames'
import { generatedTotal } from '@utils/generatedTotal'
import { Dispatch, ReactElement, useState } from 'react'
import Paginator from '../Paginator/Paginator'
import styles from './table.module.css'
interface State {
  pagina: number
  numeroPagina: number
}

interface Props {
  className?: string
  children: ReactElement | ReactElement[]
  widthPaginator?: boolean
  state?: State
  setState?: Dispatch<React.SetStateAction<State>>
  nTotal?: number
}

const Table = ({ className, widthPaginator, state, setState, nTotal, children }: Props) => {
  const paginas =
    widthPaginator && nTotal && nTotal > 0 ? generatedTotal(nTotal!, state?.numeroPagina!) : []
  return (
    <div className={classNames([styles.tableContainer, className])}>
      <table>{children}</table>
      {widthPaginator && paginas.length > 0 && (
        <Paginator setState={setState!} state={state!} paginas={paginas} />
      )}
    </div>
  )
}

export default Table
