import { useState, useRef, useMemo, useEffect } from 'react'
import JoditEditor from 'jodit-react'
import useToggle from '@hooks/useToggle'
import ModalSelectUrlImage from '../Modal/ModalSelectUrlImage'
import './index.css'
interface IEditor {
  titulo?: string
  onChangue: (value: any) => void
  contenido?: string
}

const Editor = ({ titulo, onChangue, contenido = '' }: IEditor) => {
  const editor = useRef(null)
  const { isOpen, onClose, onOpen } = useToggle()
  const [content, setContent] = useState(contenido)
  const [showPreview, setShowPreview] = useState(false)

  const config: any = {
    readonly: false,
    height: 400,
    placeholder: titulo || 'Empiece a escribir...'
  }

  useEffect(() => {
    const selector = document.querySelector('[data-ref="image"]')
    selector?.addEventListener('click', () => {
      onOpen()
    })
  }, [])

  return (
    <div>
      <ModalSelectUrlImage {...{ isOpen, onClose }} />
      {useMemo(
        () => (
          <JoditEditor
            ref={editor}
            value={content}
            config={config} // tabIndex of textarea
            onBlur={(newContent) => {
              // setContent(newContent.target.innerHTML);
            }}
            onChange={(newContent) => {
              setContent(newContent)
              onChangue(newContent)
            }}
          />
        ),
        []
      )}
      <div className="flex justify-start items-center my-5 gap-5">
        <p
          className="max-w-[200px] text-sm px-2 btn btn-solid-second bg-blue-600 cursor-pointer "
          onClick={() => setShowPreview(!showPreview)}>
          {!showPreview ? 'Mostrar' : 'Ocultar'} vista previa
        </p>
      </div>
      {showPreview && (
        <div className="w-full mt-5 p-5 shadow-md">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  )
}

export default Editor
