import Input from '@components/shared/Input/Input'
import InputImage from '@components/shared/Input/InputImage'
import InputSelectImages from '@components/shared/Input/InputSelectImages'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Select from '@components/shared/Select/Select'
import Spinner from '@components/shared/Spinner/Spinner'
import { useCategoriaProductos } from '@services/useCategoriaProductos'
import { useProductos } from '@services/useProductos'
import { Toast } from '@utils/Toast'
import { validateCreateProducto } from '@validation/products/validateCreateProducto'
import { useFormik } from 'formik'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import InputSelectProducts from '@components/shared/Input/InputSelectProducts'
import Editor from '@components/shared/Editor/Editor'
import InputAddOptions from '@components/shared/Input/InputAddOptions'

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
      galeria: galeriaIds,
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
      },
      galeria: []
    }
  })

  const galeriaIds = useMemo(() => {
    return values.galeria.map(({ id }: any) => id)
  }, [values.galeria])

  return (
    <PlantillaPage title="Crear Producto" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200 mb-5">Crear Producto</h1>
      </div>
      <form
        onSubmit={form.handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 items-start xl:grid-cols-4 w-full gap-5 lg:gap-10">
        {/* 1 division */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10   lg:col-span-2  xl:col-span-3 ">
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
            label="Titulo"
            {...form.getFieldProps('titulo')}
            error={errors.titulo}
            touched={touched?.titulo ?? false}
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
          <div className="lg:col-span-2">
            {/* en textKeywords le envias una cadena de texto separado por una coma para que pueda pintarlo en pantalla */}
            {/* en el onChange te va devolver un string separado por comas */}
            <InputAddOptions
              textKeywords="Belleza,Salud,Vive una vida saludable"
              onChange={(value) => console.log(value)}
            />
          </div>

          <div className="lg:col-span-2">
            <Input
              type="text"
              label="Descripción Corta"
              {...form.getFieldProps('descripcionCorta')}
              error={errors.descripcionCorta}
              touched={touched?.descripcionCorta ?? false}
            />
          </div>

          <div className="lg:col-span-2">
            <Editor />
          </div>
        </div>
        {/* 2 division */}
        <div className=" flex flex-col gap-10 mt-10 lg:mt-0">
          {/* Input para seleccionar imagen principal y secundaria */}
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

          {/* Input para seleccionar una galeria de imágenes */}
          <div className="">
            <InputSelectImages
              label="Galeria de imágenes"
              onChange={(values) => setFieldValue('galeria', values)}
              value={values.galeria}
              error={errors.galeria}
              touched={touched?.imagenSecundaria?.url ?? false}
            />
          </div>

          {/* Input para asociar productos relacionados */}
          <div className="lg:col-span-2">
            <InputSelectProducts
              label="Productos relacionados"
              onChange={(values) => setFieldValue('galeria', values)}
              value={values.galeria}
              error={errors.galeria}
              touched={touched?.imagenSecundaria?.url ?? false}
            />
          </div>
        </div>
        {/* 3 division */}
        <div className="flex  mt-10 items-center justify-center lg:col-span-3 xl:col-span-4">
          <button
            type="submit"
            disabled={loadingCreate}
            className="max-w-[300px] btn btn-solid-primary">
            Crear Producto
            {loadingCreate && <Spinner className="w-5 h-5" />}
          </button>
        </div>
      </form>
    </PlantillaPage>
  )
}

export default CreateProduct
