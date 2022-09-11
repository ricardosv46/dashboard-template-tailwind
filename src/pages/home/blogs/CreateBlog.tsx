import Input from '@components/shared/Input/Input'
import InputImage from '@components/shared/Input/InputImage'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Select from '@components/shared/Select/Select'
import Spinner from '@components/shared/Spinner/Spinner'
import { useBlogs } from '@services/useBlogs'
import { useCategoriaBlogs } from '@services/useCategoriaBlogs'
import { Toast } from '@utils/Toast'
import { validateCreateBlog } from '@validation/blogs/validateCreateBlog'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const router = useNavigate()
  const { db: dataCategoriaBlog, loading: locadingCategoria } = useCategoriaBlogs({
    estado: 'Activado'
  })
  const { createBlog, loadingCreate } = useBlogs({})
  const onSubmit = async () => {
    createBlog({
      titulo: values.titulo,
      keywords: values.keywords,
      descripcionCorta: values.descripcionCorta,
      descripcionLarga: values.descripcionLarga,
      categoriaBlogId: Number(values.categoriaBlogId),
      imagenPrincipal: Number(values.imagenPrincipal.id),
      imagenSecundaria: Number(values.imagenSecundaria.id)
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Creado Correctamente.' })
        router('/blogs')
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }

  const { values, errors, touched, setFieldValue, ...form } = useFormik({
    onSubmit,
    validate: validateCreateBlog,
    initialValues: {
      titulo: '',
      keywords: '',
      categoriaBlogId: '',
      descripcionCorta: '',
      descripcionLarga: '',
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
    <PlantillaPage title="Crear Blog" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Crear Blog</h1>
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
        <Select
          label="Categoria"
          value={values.categoriaBlogId}
          options={dataCategoriaBlog}
          onChange={({ value }) => {
            setFieldValue('categoriaBlogId', value)
          }}
          dataExtractor={{
            label: 'titulo',
            value: 'categoriaBlogId'
          }}
          error={errors.categoriaBlogId}
          touched={touched?.categoriaBlogId ?? false}
        />
        <Input
          type="text"
          label="Descripción Corta"
          {...form.getFieldProps('descripcionCorta')}
          error={errors.descripcionCorta}
          touched={touched?.descripcionCorta ?? false}
        />
        <div className="col-span-2">
          <Input
            type="text"
            label="Descripción Larga"
            {...form.getFieldProps('descripcionLarga')}
            error={errors.descripcionLarga}
            touched={touched?.descripcionLarga ?? false}
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
            Crear Blog
            {loadingCreate && <Spinner className="w-5 h-5" />}
          </button>
        </div>
      </form>
    </PlantillaPage>
  )
}

export default CreateBlog
