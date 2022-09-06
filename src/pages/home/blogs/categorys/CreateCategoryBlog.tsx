import Input from '@components/shared/Input/Input'
import InputImage, { Imagenes } from '@components/shared/Input/InputImage'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Select from '@components/shared/Select/Select'
import Spinner from '@components/shared/Spinner/Spinner'
import { useCategoriaBlogs } from '@services/useCategoriaBlogs'
import { useSliders } from '@services/useSliders'
import { validateCreateCategoriaBlog } from '@validation/blogs/validateCreateCategoriaBlog'
import { validateCreateSlider } from '@validation/Sliders/validateCreateSlider'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CreateCategoryBlog = () => {
  const router = useNavigate()
  const { createCategoriaBlog, loadingCreate } = useCategoriaBlogs({})
  const onSubmit = async () => {
    createCategoriaBlog({
      titulo: values.titulo,
      keywords: values.keywords,
      descripcion: values.descripcion,
      imagenPrincipal: Number(values.imagenPrincipal.id),
      imagenSecundaria: Number(values.imagenSecundaria.id)
    }).then((res) => {
      if (res.ok) {
        toast.success('Creado Correctamente.', {
          theme: 'colored',
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })

        router('/blogs-category')
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
    validate: validateCreateCategoriaBlog,
    initialValues: {
      titulo: '',
      keywords: '',
      descripcion: '',
      imagenPrincipal: {
        id: '',
        titulo: '',
        url: ''
      },
      imagenSecundaria: {
        id: '',
        titulo: '',
        url: ''
      }
    }
  })

  return (
    <PlantillaPage title="Crear Categoría" goback="/blogs-category">
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Crear Categoría</h1>
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
          label="Keywords"
          {...form.getFieldProps('keywords')}
          error={errors.keywords}
          touched={touched?.keywords ?? false}
        />
        <div className="col-span-2">
          <Input
            type="text"
            label="Descripción"
            {...form.getFieldProps('descripcion')}
            error={errors.descripcion}
            touched={touched?.descripcion ?? false}
          />
        </div>
        <InputImage
          value={values.imagenPrincipal}
          onChange={(value) => setFieldValue('imagenPrincipal', value)}
          label=" Imagen Principal"
          error={errors.imagenPrincipal}
          touched={touched?.imagenPrincipal?.url ?? false}
        />

        <InputImage
          value={values.imagenSecundaria}
          onChange={(value) => setFieldValue('imagenSecundaria', value)}
          label=" Imagen Secundaria"
          error={errors.imagenSecundaria}
          touched={touched?.imagenSecundaria?.url ?? false}
        />

        <div className="flex items-center justify-center col-span-2">
          <button
            type="submit"
            disabled={loadingCreate}
            className="w-full md:w-1/2 btn btn-solid-primary">
            Crear Categoría
            {loadingCreate && <Spinner className="w-5 h-5" />}
          </button>
        </div>
      </form>
    </PlantillaPage>
  )
}

export default CreateCategoryBlog
