import Input from '@components/shared/Input/Input'
import InputImage, { Imagenes } from '@components/shared/Input/InputImage'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Select from '@components/shared/Select/Select'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import { useSliders } from '@services/useSliders'
import { validateCreateSlider } from '@validation/Sliders/validateCreateSlider'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditSlider = () => {
  const { slug } = useParams()
  const router = useNavigate()
  const { updateSlider, loadingUpdate, dbSliderId, loadingSliderId } = useSliders({
    sliderId: Number(slug)
  })

  const onSubmit = async () => {
    updateSlider({
      sliderId: dbSliderId?.sliderId!,
      titulo: values.titulo,
      tipoLink: values.tipoLink,
      link: values.link,
      imagenPrincipal: Number(values.imagenPrincipal?.id)
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

  const { values, errors, touched, setValues, setFieldValue, ...form } = useFormik({
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

  useEffect(() => {
    if (!loadingSliderId) {
      if (dbSliderId.sliderId === slug) {
        setValues({
          titulo: dbSliderId?.titulo!,
          link: dbSliderId?.link!,
          tipoLink: dbSliderId?.tipoLink!,
          imagenPrincipal: {
            id: dbSliderId?.imagenPrincipal?.id!,
            titulo: dbSliderId?.imagenPrincipal?.titulo!,
            url: dbSliderId?.imagenPrincipal?.url!
          }
        })
      } else {
        router('/sliders')
      }
    }
  }, [loadingSliderId])

  return (
    <PlantillaPage title="Editar Slider" goback="/sliders">
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Editar Slider</h1>
      </div>
      <Show
        condition={loadingSliderId}
        loading
        isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
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
              disabled={loadingUpdate}
              className="w-full md:w-1/2 btn btn-solid-primary">
              Actualizar Slider
              {loadingUpdate && <Spinner className="w-5 h-5" />}
            </button>
          </div>
        </form>
      </Show>
    </PlantillaPage>
  )
}

export default EditSlider
