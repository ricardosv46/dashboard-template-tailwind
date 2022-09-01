import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight
} from '@icons'
import React, { Dispatch } from 'react'

interface State {
  page: number
  numberPaginate: number
}

interface IProps {
  state: State
  setState: Dispatch<React.SetStateAction<State>>
  paginas: number[]
}

const Paginator = ({ state, setState, paginas }: IProps) => {
  const { page, numberPaginate } = state

  const increment = () => {
    if (paginas.length === page) return
    setState({ ...state, page: page + 1 })
  }
  const decrement = () => {
    if (page === 1) return
    setState({ ...state, page: page - 1 })
  }

  return (
    <div className="">
      <div className="flex items-center justify-between mt-10 text-black dark:text-white">
        <div>
          <button
            className="btn-icon btn-ghost-primary"
            onClick={() => setState({ ...state, page: 1 })}
          >
            <IconChevronsLeft className="w-4 h-4" />
          </button>
          <button className="btn-icon btn-ghost-primary" onClick={decrement}>
            <IconChevronLeft className="w-4 h-4" />
          </button>
        </div>

        <div className="text-[12px] md:text-base flex items-center gap-5 px-5">
          <p className="text-sm">
            Pagina <span className="font-bold ">{page}</span> de{' '}
            <span className="font-bold">{paginas.length}</span>
          </p>

          <div className="items-center hidden md:flex">
            <p className="text-sm">Ir a la página :</p>{' '}
            <select
              className="p-1 ml-1 text-sm text-center text-gray-600 border border-gray-300 rounded-lg w-14"
              value={page}
              onChange={(e) =>
                setState({ ...state, page: Number(e.target.value) })
              }
            >
              {paginas.map((page) => (
                <option className="text-center" key={page} value={page}>
                  {page}
                </option>
              ))}
            </select>
          </div>

          <div className="items-center hidden md:flex">
            <p className="text-sm">Registros por página :</p>

            <select
              className="p-1 ml-1 text-sm text-center text-gray-600 border border-gray-300 rounded-lg w-14"
              value={numberPaginate}
              onChange={(e) =>
                setState({
                  ...state,
                  page: 1,
                  numberPaginate: Number(e.target.value)
                })
              }
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option className="text-center" key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <button className="btn-icon btn-ghost-primary" onClick={increment}>
            <IconChevronRight className="w-4 h-4" />
          </button>
          <button
            className="btn-icon btn-ghost-primary"
            onClick={() =>
              setState({
                ...state,
                page: paginas.length
              })
            }
          >
            <IconChevronsRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center md:hidden">
        <p className="text-sm">Ir a la página :</p>{' '}
        <select
          className="p-1 ml-1 text-sm text-center text-gray-600 border border-gray-300 rounded-lg w-14"
          value={page}
          onChange={(e) => setState({ ...state, page: Number(e.target.value) })}
        >
          {paginas.map((page) => (
            <option className="text-center" key={page} value={page}>
              {page}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-center mt-3 md:hidden">
        <p className="text-sm">Registros por página :</p>

        <select
          className="p-1 ml-1 text-sm text-center text-gray-600 border border-gray-300 rounded-lg w-14"
          value={numberPaginate}
          onChange={(e) =>
            setState({
              ...state,
              page: 1,
              numberPaginate: Number(e.target.value)
            })
          }
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option className="text-center" key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Paginator
