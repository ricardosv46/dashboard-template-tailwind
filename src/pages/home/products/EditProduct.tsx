import Editor from '@components/shared/Editor/Editor'
import Input from '@components/shared/Input/Input'
import InputAddOptions from '@components/shared/Input/InputAddOptions'
import InputImage from '@components/shared/Input/InputImage'
import InputSelectImages from '@components/shared/Input/InputSelectImages'
import InputSelectProducts from '@components/shared/Input/InputSelectProducts'
import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
import Select from '@components/shared/Select/Select'
import { Show } from '@components/shared/Show/Show'
import Spinner from '@components/shared/Spinner/Spinner'
import { useCategoriaProductos } from '@services/useCategoriaProductos'
import { useProductos } from '@services/useProductos'
import { Toast } from '@utils/Toast'
import { validateCreateProducto } from '@validation/products/validateCreateProducto'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetAllProductosRelacionadosQuery } from '../../../generated/graphql'

const EditProduct = () => {
  const router = useNavigate()
  const { slug } = useParams()
  const { db: dataCategoriaProducto, loading: locadingCategoria } = useCategoriaProductos({
    estado: 'Activado'
  })
  const { updateProducto, loadingUpdate, loadingProductoSlug, dbProductoSlug } = useProductos({
    slug
  })
  const { data: dbPR, loading: loadingPR } = useGetAllProductosRelacionadosQuery({
    fetchPolicy: 'network-only',
    variables: {
      slug
    }
  })

  const onSubmit = async () => {
    const inputValues = {
      productoId: dbProductoSlug?.productoId!,
      titulo: values.titulo,
      keywords: values.keywords,
      descripcionCorta: values.descripcionCorta,
      descripcionLarga: values.descripcionLarga,
      categoriaProductoId: Number(values.categoriaProductoId),
      precioOferta: values.precioOferta ? Number(values.precioOferta) : Number(values.precioReal),
      precioReal: Number(values.precioReal),
      stockMinimo: Number(values.stockMinimo),
      stockReal: Number(values.stockReal),
      galeria: values.galeria?.map((value: any) => value.id),
      relacionado: values.relacionado?.map((value: any) => value.id),
      imagenPrincipal: Number(values.imagenPrincipal.id),
      imagenSecundaria: Number(values.imagenSecundaria.id)
    }

    updateProducto(inputValues).then((res) => {
      if (res?.ok) {
        Toast({ type: 'success', message: 'Actualizado Correctamente.' })
        router('/products')
      } else {
        Toast({ type: 'error', message: res?.error! })
      }
    })
  }

  const { values, errors, touched, setFieldValue, setValues, ...form }: any = useFormik({
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
      galeria: [],
      relacionado: []
    }
  })

  useEffect(() => {
    if (!loadingProductoSlug) {
      if (dbProductoSlug?.slug === slug) {
        setValues({
          titulo: dbProductoSlug?.titulo!,
          keywords: dbProductoSlug?.keywords!,
          descripcionCorta: dbProductoSlug?.descripcionCorta!,
          descripcionLarga: dbProductoSlug?.descripcionLarga!,
          precioReal: String(dbProductoSlug?.precioReal!),
          precioOferta: String(dbProductoSlug?.precioOferta!),
          stockMinimo: String(dbProductoSlug?.stockMinimo!),
          stockReal: String(dbProductoSlug?.stockReal!),
          categoriaProductoId: String(dbProductoSlug?.categoriaProductoId!),
          imagenPrincipal: {
            id: dbProductoSlug?.imagenPrincipal?.id!,
            titulo: dbProductoSlug?.imagenPrincipal?.titulo!,
            url: dbProductoSlug?.imagenPrincipal?.url!
          },
          imagenSecundaria: {
            id: dbProductoSlug?.imagenSecundaria?.id!,
            titulo: dbProductoSlug?.imagenSecundaria?.titulo!,
            url: dbProductoSlug?.imagenSecundaria?.url!
          },
          galeria: dbProductoSlug?.galeria!,
          relacionado: dbPR?.GetAllProductosRelacionados?.data?.map((value: any) => {
            return {
              id: value.productoId,
              titulo: value.titulo,
              url: value.imagenPrincipal.url
            }
          })
        })
      } else {
        router('/products')
      }
    }
  }, [loadingProductoSlug, loadingPR])

  return (
    <PlantillaPage title="" goback>
      <div className="flex justify-center">
        <h1 className="title-9 dark:text-slate-200 mb-5">Editar Producto</h1>
      </div>
      <Show
        condition={loadingProductoSlug}
        loading
        isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
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
                textKeywords={dbProductoSlug?.keywords || ''}
                onChange={(values) => setFieldValue('keywords', values)}
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
              <Editor
                titulo="Descripcion del producto"
                onChangue={(values) => setFieldValue('descripcionLarga', values)}
                contenido={dbProductoSlug?.descripcionLarga || ''}
              />
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
            <div className="mb-10">
              <InputSelectImages
                label="Galeria de imágenes"
                onChange={(values) => setFieldValue('galeria', values)}
                imgsInitial={dbProductoSlug?.galeria}
                value={values.galeria}
                error={errors.galeria}
                touched={touched?.galeria ?? false}
              />
            </div>

            {/* Input para asociar productos relacionados */}
            <div className="lg:col-span-2">
              <InputSelectProducts
                label="Productos relacionados"
                onChange={(values) => setFieldValue('relacionado', values)}
                productsInitial={dbPR?.GetAllProductosRelacionados.data?.map((value: any) => {
                  return {
                    id: value.productoId,
                    titulo: value.titulo,
                    url: value.imagenPrincipal.url
                  }
                })}
                value={values.relacionado}
                error={errors.relacionado}
                loadingPR={loadingPR}
              />
            </div>
          </div>

          <div className="flex  mt-10 items-center justify-center lg:col-span-3 xl:col-span-4">
            <button
              type="submit"
              disabled={loadingUpdate}
              className="max-w-[300px] btn btn-solid-primary">
              Actualizar Producto
              {loadingUpdate && <Spinner className="w-5 h-5" />}
            </button>
          </div>
        </form>
      </Show>
    </PlantillaPage>
  )
}

export default EditProduct
