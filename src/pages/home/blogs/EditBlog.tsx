import Input from '@components/shared/Input/Input'
import InputImage from '@components/shared/Input/InputImage'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Select from '@components/shared/Select/Select'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import { useBlogs } from '@services/useBlogs'
import { useCategoriaBlogs } from '@services/useCategoriaBlogs'
import { Toast } from '@utils/Toast'
import { validateCreateBlog } from '@validation/blogs/validateCreateBlog'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditBlog = () => {
  const router = useNavigate()
  const { slug } = useParams()
  const { db: dataCategoriaBlog, loading: locadingCategoria } = useCategoriaBlogs({
    estado: 'Activado'
  })
  const { dbBlogSlug, updateBlog, loadingUpdate, loadingBlogSlug } = useBlogs({ slug })
  const onSubmit = async () => {
    updateBlog({
      blogId: dbBlogSlug?.blogId!,
      titulo: values.titulo,
      keywords: values.keywords,
      descripcionCorta: values.descripcionCorta,
      descripcionLarga: values.descripcionLarga,
      categoriaBlogId: Number(values.categoriaBlogId),
      imagenPrincipal: Number(values.imagenPrincipal.id),
      imagenSecundaria: Number(values.imagenSecundaria.id)
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Actualizado Correctamente.' })
        router('/blogs')
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }

  const { values, errors, touched, setFieldValue, setValues, ...form } = useFormik({
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

  useEffect(() => {
    if (!loadingBlogSlug) {
      if (dbBlogSlug?.slug === slug) {
        setValues({
          titulo: dbBlogSlug?.titulo!,
          keywords: dbBlogSlug?.keywords!,
          descripcionCorta: dbBlogSlug?.descripcionCorta!,
          descripcionLarga: dbBlogSlug?.descripcionLarga!,
          categoriaBlogId: String(dbBlogSlug?.categoriaBlogId!),
          imagenPrincipal: {
            id: dbBlogSlug?.imagenPrincipal?.id!,
            titulo: dbBlogSlug?.imagenPrincipal?.titulo!,
            url: dbBlogSlug?.imagenPrincipal?.url!
          },
          imagenSecundaria: {
            id: dbBlogSlug?.imagenSecundaria?.id!,
            titulo: dbBlogSlug?.imagenSecundaria?.titulo!,
            url: dbBlogSlug?.imagenSecundaria?.url!
          }
        })
      } else {
        router('/blogs-category')
      }
    }
  }, [loadingBlogSlug])

  return (
    <PlantillaPage title="Editar Blog" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Editar Blog</h1>
      </div>
      <Show
        condition={loadingBlogSlug}
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
              disabled={loadingUpdate}
              className="w-full md:w-1/2 btn btn-solid-primary">
              Actualizar Blog
              {loadingUpdate && <Spinner className="w-5 h-5" />}
            </button>
          </div>
        </form>
      </Show>
    </PlantillaPage>
  )
}

export default EditBlog
