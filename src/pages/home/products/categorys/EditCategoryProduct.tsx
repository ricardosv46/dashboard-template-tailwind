import Input from '@components/shared/Input/Input'
import InputImage from '@components/shared/Input/InputImage'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import { useCategoriaProductos } from '@services/useCategoriaProductos'
import { Toast } from '@utils/Toast'
import { validateCreateCategoriaProducto } from '@validation/products/validateCreateCategoriaProducto'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditCategoryProduct = () => {
  const router = useNavigate()
  const { slug } = useParams()
  const {
    updateCategoriaProducto,
    loadingUpdate,
    dbCategoriaProductoSlug,
    loadingCategoriaProductoSlug
  } = useCategoriaProductos({ slug })
  const onSubmit = async () => {
    updateCategoriaProducto({
      categoriaProductoId: dbCategoriaProductoSlug?.categoriaProductoId!,
      titulo: values.titulo,
      keywords: values.keywords,
      descripcion: values.descripcion,
      imagenPrincipal: Number(values.imagenPrincipal.id),
      imagenSecundaria: Number(values.imagenSecundaria.id)
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Actualizado Correctamente.' })
        router('/products-category')
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }

  const { values, errors, touched, setFieldValue, setValues, ...form } = useFormik({
    onSubmit,
    validate: validateCreateCategoriaProducto,
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

  useEffect(() => {
    if (!loadingCategoriaProductoSlug) {
      if (dbCategoriaProductoSlug?.slug === slug) {
        setValues({
          titulo: dbCategoriaProductoSlug?.titulo!,
          keywords: dbCategoriaProductoSlug?.keywords!,
          descripcion: dbCategoriaProductoSlug?.descripcion!,
          imagenPrincipal: {
            id: dbCategoriaProductoSlug?.imagenPrincipal?.id!,
            titulo: dbCategoriaProductoSlug?.imagenPrincipal?.titulo!,
            url: dbCategoriaProductoSlug?.imagenPrincipal?.url!
          },
          imagenSecundaria: {
            id: dbCategoriaProductoSlug?.imagenSecundaria?.id!,
            titulo: dbCategoriaProductoSlug?.imagenSecundaria?.titulo!,
            url: dbCategoriaProductoSlug?.imagenSecundaria?.url!
          }
        })
      } else {
        router('/products-category')
      }
    }
  }, [loadingCategoriaProductoSlug])

  return (
    <PlantillaPage title="Editar Categoría" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Editar Categoría</h1>
      </div>
      <Show
        condition={loadingCategoriaProductoSlug}
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
              disabled={loadingUpdate}
              className="w-full md:w-1/2 btn btn-solid-primary">
              Actualizar Categoría
              {loadingUpdate && <Spinner className="w-5 h-5" />}
            </button>
          </div>
        </form>
      </Show>
    </PlantillaPage>
  )
}

export default EditCategoryProduct
