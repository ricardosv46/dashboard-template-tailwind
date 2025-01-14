import { DragEvent, useId, useRef, useState } from 'react'

import { nanoid } from 'nanoid'

import DropOrSelect from './DropOrSelect'
import DashboardFiles from './DashboardFiles'
import OverlayDropFiles from './OverlayDropFiles'
import Spinner from '../Spinner/Spinner'
import { toast } from 'react-toastify'
export interface FileToUpload {
  id: string
  file: File
  blob: Blob
}

interface Props {
  isLoading?: boolean
  onUpload?: (files: File[]) => Promise<boolean>
}

const UploadFiles = ({ onUpload, isLoading }: Props) => {
  const uid = useId()

  const dragCounterRef = useRef(0)
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<FileToUpload[]>([])

  const handleReset = () => {
    setFiles([])
  }

  const handleUpload = async () => {
    if (typeof onUpload === 'function') {
      const rawFiles = files.map(({ file }) => file)
      const res = await onUpload(rawFiles)
      if (!res) return

      handleReset()
    }
  }

  const handleDelete = (id: string) => {
    setFiles((prev) => prev.filter(({ id: _id }) => _id !== id))
  }

  const handleAdd = (files: FileList | null) => {
    if (!files) return
    let hasNotImageFile = false
    const newFiles: FileToUpload[] = []

    for (const file of [...files]) {
      if (!file.type.includes('image')) {
        console.log('Solo puede subir imagenes, type: ', file.type)
        hasNotImageFile = true
        continue
      }

      newFiles.push({
        file,
        id: nanoid(),
        blob: new Blob([file], { type: file.type })
      })
    }

    setFiles((prev) => [...prev, ...newFiles])

    if (hasNotImageFile) {
      toast.warning('Solo se deben seleccionar imagenes.', {
        theme: 'colored',
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    if (e?.dataTransfer?.files && e?.dataTransfer?.files.length > 0) {
      handleAdd(e?.dataTransfer?.files)
      e?.dataTransfer.clearData()
      dragCounterRef.current = 0
    }
  }
  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dragCounterRef.current += 1
    if (e?.dataTransfer?.items && e?.dataTransfer?.items.length > 0) {
      setIsDragging(true)
    }
  }
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dragCounterRef.current -= 1
    if (dragCounterRef.current > 0) return
    setIsDragging(false)
  }

  return (
    <div className="flex flex-1 max-w-[1980px] mx-auto w-full h-full">
      <input
        hidden
        multiple
        type="file"
        id={`input-file-${uid}`}
        onChange={(e) => {
          const _files = e.target.files
          console.log({ _files })
          handleAdd(_files)
        }}
      />
      <div
        className="relative w-full h-[420px] p-2 border border-gray-300 rounded bg-gray-50 dark:text-white dark:border-gray-700 dark:bg-gray-900"
        onDrop={handleDrop}
        onDragOver={handleDrag}
        onDragLeave={handleDragLeave}
        onDragEnter={handleDragEnter}>
        {isLoading && (
          <div className="absolute inset-0 w-full h-full bg-[rgba(250,250,250,0.95)] dark:bg-[rgba(0,0,0,0.95)] z-40">
            <div className="flex flex-col items-center justify-center h-full fap-3 w-hull">
              <Spinner className="w-10 h-10 mx-auto mb-5 border-4" />
              <p className="font-medium">Subiendo archivos por favor espere...</p>
            </div>
          </div>
        )}
        <OverlayDropFiles isDragging={isDragging} />
        {files.length === 0 && <DropOrSelect inputId={uid} />}
        {files.length !== 0 && (
          <DashboardFiles
            inputId={uid}
            files={files}
            onCancel={handleReset}
            onDelete={handleDelete}
            onUpload={handleUpload}
          />
        )}
      </div>
    </div>
  )
}

export default UploadFiles
