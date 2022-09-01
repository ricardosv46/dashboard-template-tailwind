import Input from '@components/shared/Input/Input'
import InputImage, { Imagenes } from '@components/shared/Input/InputImage'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Select from '@components/shared/Select/Select'
import Spinner from '@components/shared/Spinner/Spinner'
import { Slider } from '@generated/graphql'
import { useSliders } from '@services/useSliders'
import { validateCreateSlider } from '@validation/Sliders/validateCreateSlider'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditSlider = () => {
  const { state } = useLocation() as { state: any }
  const { item: slider } = state as { item: Slider }
  const [imagenPrincipal, setImagenPrincipal] = useState<Imagenes>(
    slider?.imagenPrincipal!
  )

  const router = useNavigate()
  const { updateSlider, loadingUpdate } = useSliders()

  const onSubmit = async () => {
    updateSlider({
      sliderId: slider?.sliderId!,
      titulo: values.titulo,
      tipoLink: values.tipoLink,
      link: values.link,
      imagenPrincipal: Number(imagenPrincipal?.id)
    }).then((res) => {
      if (res.ok) {
        toast.success('Slider Actualizado Correctamente.', {
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

  const { values, errors, touched, ...form } = useFormik({
    onSubmit,
    validate: validateCreateSlider,
    initialValues: {
      titulo: slider?.titulo!,
      link: slider?.link!,
      tipoLink: slider?.tipoLink!
    }
  })

  return (
    <PlantillaPage title="Editar Slider" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Editar Slider</h1>
      </div>
      <form
        onSubmit={form.handleSubmit}
        className="flex flex-col w-full max-w-3xl gap-5 mx-auto mt-10 md:grid sm:grid-cols-2 "
      >
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
              form.setFieldValue('tipoLink', value)
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
            value={imagenPrincipal}
            onChange={setImagenPrincipal}
            label=" Imagen Principal"
          />
        </div>

        <div className="flex items-center justify-center col-span-2">
          <button
            type="submit"
            disabled={loadingUpdate}
            className="w-full sm:w-auto xl:w-1/3 btn btn-solid-primary"
          >
            Actualizar Slider
            {loadingUpdate && <Spinner className="w-5 h-5" />}
          </button>
        </div>
      </form>
    </PlantillaPage>
  )
}

export default EditSlider
