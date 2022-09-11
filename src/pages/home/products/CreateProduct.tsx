import Input from '@components/shared/Input/Input'
import InputImage from '@components/shared/Input/InputImage'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Select from '@components/shared/Select/Select'
import Spinner from '@components/shared/Spinner/Spinner'
import { useCategoriaProductos } from '@services/useCategoriaProductos'
import { useProductos } from '@services/useProductos'
import { Toast } from '@utils/Toast'
import { validateCreateProducto } from '@validation/productos/validateCreateProducto'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {
  const router = useNavigate()
  const { db: dataCategoriaProducto, loading: locadingCategoria } = useCategoriaProductos({
    estado: 'Activado'
  })
  const { createProducto, loadingCreate } = useProductos({})

  const onSubmit = async () => {
    createProducto({
      titulo: values.titulo,
      keywords: values.keywords,
      descripcionCorta: values.descripcionCorta,
      descripcionLarga: values.descripcionLarga,
      categoriaProductoId: Number(values.categoriaProductoId),
      precioOferta: Number(values.precioOferta),
      precioReal: Number(values.precioReal),
      stockMinimo: Number(values.stockMinimo),
      stockReal: Number(values.stockReal),
      galeria: [],
      imagenPrincipal: Number(values.imagenPrincipal.id),
      imagenSecundaria: Number(values.imagenSecundaria.id)
    }).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Creado Correctamente.' })
        router('/products')
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }

  const { values, errors, touched, setFieldValue, ...form } = useFormik({
    onSubmit,
    validate: validateCreateProducto,
    initialValues: {
      titulo: '',
      keywords: '',
      categoriaProductoId: '',
      descripcionCorta: '',
      descripcionLarga: '',
      precioReal: '',
      precioOferta: '',
      stockMinimo: '',
      stockReal: '',
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
    <PlantillaPage title="Crear Producto" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200">Crear Producto</h1>
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
        <Select
          label="Categoria"
          value={values.categoriaProductoId}
          options={dataCategoriaProducto}
          onChange={({ value }) => {
            setFieldValue('categoriaProductoId', value)
          }}
          dataExtractor={{
            label: 'titulo',
            value: 'categoriaProductoId'
          }}
          error={errors.categoriaProductoId}
          touched={touched?.categoriaProductoId ?? false}
        />
        <Input
          type="text"
          label="Precio Real"
          {...form.getFieldProps('precioReal')}
          error={errors.precioReal}
          touched={touched?.precioReal ?? false}
        />
        <Input
          type="text"
          label="Precio Oferta"
          {...form.getFieldProps('precioOferta')}
          error={errors.precioOferta}
          touched={touched?.precioOferta ?? false}
        />
        <Input
          type="text"
          label="Stock Mínimo"
          {...form.getFieldProps('stockMinimo')}
          error={errors.stockMinimo}
          touched={touched?.stockMinimo ?? false}
        />
        <Input
          type="text"
          label="Stock Real"
          {...form.getFieldProps('stockReal')}
          error={errors.stockReal}
          touched={touched?.stockReal ?? false}
        />
        <Input
          type="text"
          label="Keywords"
          {...form.getFieldProps('keywords')}
          error={errors.keywords}
          touched={touched?.keywords ?? false}
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
            Crear Producto
            {loadingCreate && <Spinner className="w-5 h-5" />}
          </button>
        </div>
      </form>
    </PlantillaPage>
  )
}

export default CreateProduct
