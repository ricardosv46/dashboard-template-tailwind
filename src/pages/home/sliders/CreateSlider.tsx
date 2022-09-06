import Input from '@components/shared/Input/Input'
import InputImage, { Imagenes } from '@components/shared/Input/InputImage'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Select from '@components/shared/Select/Select'
import Spinner from '@components/shared/Spinner/Spinner'
import { useSliders } from '@services/useSliders'
import { validateCreateSlider } from '@validation/Sliders/validateCreateSlider'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CreateSlider = () => {
  const router = useNavigate()
  const { createSlider, loadingCreate } = useSliders({})

  const onSubmit = async () => {
    createSlider({
      titulo: values.titulo,
      tipoLink: values.tipoLink,
      link: values.link,
      imagenPrincipal: Number(values.imagenPrincipal?.id)
    }).then((res) => {
      if (res.ok) {
        toast.success('Slider Creado Correctamente.', {
          theme: 'colored',
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })

        router('/sliders')
      } else {
        toast.error(res?.error, {
          theme: 'colored',
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    })
  }

  const { values, errors, touched, setFieldValue, ...form } = useFormik({
    onSubmit,
    validate: validateCreateSlider,
    initialValues: {
      titulo: '',
      link: '',
      tipoLink: '',
      imagenPrincipal: {
        id: '',
        titulo: '',
        url: ''
      }
    }
  })

  return (
    <PlantillaPage title="Crear Slider" goback="/sliders">
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Crear Slider</h1>
      </div>
      <form
        onSubmit={form.handleSubmit}
        className="flex flex-col w-full max-w-3xl gap-5 mx-auto mt-10 md:grid sm:grid-cols-2 ">
        <Input
          type="text"
          label="Titulo"
          {...form.getFieldProps('titulo')}
          error={errors.titulo}
          touched={touched?.titulo ?? false}
        />
        <Input
          type="text"
          label="Link"
          {...form.getFieldProps('link')}
          error={errors.link}
          touched={touched?.link ?? false}
        />
        <div className="col-span-2">
          <Select
            label="Tipo Link"
            value={values.tipoLink}
            options={[
              { value: 'interno', label: 'Enlace Interno' },
              { value: 'externo', label: 'Enlace Externo' }
            ]}
            onChange={({ value }) => {
              setFieldValue('tipoLink', value)
            }}
            dataExtractor={{
              label: 'label',
              value: 'value'
            }}
            error={errors.tipoLink}
            touched={touched?.tipoLink ?? false}
          />
        </div>
        <div className="flex w-full col-span-2 mx-auto md:w-1/2">
          <InputImage
            value={values.imagenPrincipal}
            onChange={(value) => setFieldValue('imagenPrincipal', value)}
            label=" Imagen Principal"
            error={errors.imagenPrincipal}
            touched={touched?.imagenPrincipal?.url ?? false}
          />
        </div>

        <div className="flex items-center justify-center col-span-2">
          <button
            type="submit"
            disabled={loadingCreate}
            className="w-full md:w-1/2 btn btn-solid-primary">
            Crear Slider
            {loadingCreate && <Spinner className="w-5 h-5" />}
          </button>
        </div>
      </form>
    </PlantillaPage>
  )
}

export default CreateSlider
