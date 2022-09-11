import { IconChevronLeft, IconChevronRight, IconChevronsLeft, IconChevronsRight } from '@icons'
import React, { Dispatch } from 'react'

interface State {
  pagina: number
  numeroPagina: number
}

interface IProps {
  state: State
  setState: Dispatch<React.SetStateAction<State>>
  paginas: number[]
}

const Paginator = ({ state, setState, paginas }: IProps) => {
  const { pagina, numeroPagina } = state

  const increment = () => {
    if (paginas.length === pagina) return
    setState({ ...state, pagina: pagina + 1 })
  }
  const decrement = () => {
    if (pagina === 1) return
    setState({ ...state, pagina: pagina - 1 })
  }

  return (
    <div className="">
      <div className="flex items-center justify-between mt-10 text-black dark:text-white">
        <div>
          <button
            className="btn-icon btn-ghost-primary"
            onClick={() => setState({ ...state, pagina: 1 })}>
            <IconChevronsLeft className="w-4 h-4" />
          </button>
          <button className="btn-icon btn-ghost-primary" onClick={decrement}>
            <IconChevronLeft className="w-4 h-4" />
          </button>
        </div>

        <div className="text-[12px] md:text-base flex items-center gap-5 px-5">
          <p className="text-sm">
            Pagina <span className="font-bold ">{pagina}</span> de{' '}
            <span className="font-bold">{paginas.length}</span>
          </p>

          <div className="items-center hidden md:flex">
            <p className="text-sm">Ir a la página :</p>{' '}
            <select
              className="p-1 ml-1 text-sm text-center text-gray-600 border border-gray-300 rounded-lg w-14"
              value={pagina}
              onChange={(e) => setState({ ...state, pagina: Number(e.target.value) })}>
              {paginas.map((pagina) => (
                <option className="text-center" key={pagina} value={pagina}>
                  {pagina}
                </option>
              ))}
            </select>
          </div>

          <div className="items-center hidden md:flex">
            <p className="text-sm">Registros por página :</p>

            <select
              className="p-1 ml-1 text-sm text-center text-gray-600 border border-gray-300 rounded-lg w-14"
              value={numeroPagina}
              onChange={(e) =>
                setState({
                  ...state,
                  pagina: 1,
                  numeroPagina: Number(e.target.value)
                })
              }>
              {[10, 20, 30, 40, 50].map((paginaSize) => (
                <option className="text-center" key={paginaSize} value={paginaSize}>
                  {paginaSize}
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
                pagina: paginas.length
              })
            }>
            <IconChevronsRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center md:hidden">
        <p className="text-sm">Ir a la página :</p>{' '}
        <select
          className="p-1 ml-1 text-sm text-center text-gray-600 border border-gray-300 rounded-lg w-14"
          value={pagina}
          onChange={(e) => setState({ ...state, pagina: Number(e.target.value) })}>
          {paginas.map((pagina) => (
            <option className="text-center" key={pagina} value={pagina}>
              {pagina}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-center mt-3 md:hidden">
        <p className="text-sm">Registros por página :</p>

        <select
          className="p-1 ml-1 text-sm text-center text-gray-600 border border-gray-300 rounded-lg w-14"
          value={numeroPagina}
          onChange={(e) =>
            setState({
              ...state,
              pagina: 1,
              numeroPagina: Number(e.target.value)
            })
          }>
          {[10, 20, 30, 40, 50].map((paginaSize) => (
            <option className="text-center" key={paginaSize} value={paginaSize}>
              {paginaSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Paginator
