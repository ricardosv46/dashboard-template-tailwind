import Input from '@components/shared/Input/Input'
import InputAddOptions from '@components/shared/Input/InputAddOptions'
import InputImage from '@components/shared/Input/InputImage'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Spinner from '@components/shared/Spinner/Spinner'
import { useCategoriaBlogs } from '@services/useCategoriaBlogs'
import { Toast } from '@utils/Toast'
import { validateCreateCategoriaBlog } from '@validation/blogs/validateCreateCategoriaBlog'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

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
      if (res?.ok) {
        Toast({ type: 'success', message: 'Categoria creada Correctamente.' })
        router('/blogs-category')
      } else {
        Toast({ type: 'error', message: res?.error! })
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
    <PlantillaPage title="Crear Categoría" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Crear Categoría</h1>
      </div>
      <form
        onSubmit={form.handleSubmit}
        className="flex flex-col w-full max-w-3xl gap-8 mx-auto mt-10 ">
        <Input
          type="text"
          label="Titulo"
          {...form.getFieldProps('titulo')}
          error={errors.titulo}
          touched={touched?.titulo ?? false}
        />
        <InputAddOptions onChange={(value) => setFieldValue('keywords', value)} />

        <Input
          type="text"
          label="Descripción"
          {...form.getFieldProps('descripcion')}
          error={errors.descripcion}
          touched={touched?.descripcion ?? false}
        />
        <div className="flex flex-col sm:flex-row gap-5">
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
        </div>

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
