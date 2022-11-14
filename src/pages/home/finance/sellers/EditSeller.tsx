// import Input from '@components/shared/Input/Input'
// import InputImage from '@components/shared/Input/InputImage'
// import PlantillaPage from '@components/shared/PlantillaPage/PlantillaPage'
// import { Show } from '@components/shared/Show/Show'
// import Spinner from '@components/shared/Spinner/Spinner'
// import { useVendedoras } from '@services/useVendedores'
// import { Toast } from '@utils/Toast'
// import { validateCreateVendedor } from '@validation/finance/validateCreateVendedor'
// import { useFormik } from 'formik'
// import { useEffect } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'

// const EditSeller = () => {
//   const router = useNavigate()
//   const { id } = useParams()
//   const { updateVendedora, loadingUpdate, loadingVendedoraId, dbVendedoraId } = useVendedoras({
//     vendedoraId: id
//   })
//   const onSubmit = async () => {
//     updateVendedora({
//       vendedoraId: dbVendedoraId.vendedoraId!,
//       nombres: values.nombres,
//       apellidos: values.apellidos,
//       link: values.link,
//       imagenPrincipal: Number(values.imagenPrincipal.id)
//     }).then((res) => {
//       if (res?.ok) {
//         Toast({ type: 'success', message: 'Creado Correctamente.' })
//         router('/sellers')
//       } else {
//         Toast({ type: 'error', message: res?.error! })
//       }
//     })
//   }

//   const { values, errors, touched, setFieldValue, setValues, ...form } = useFormik({
//     onSubmit,
//     validate: validateCreateVendedor,
//     initialValues: {
//       nombres: '',
//       apellidos: '',
//       link: '',
//       imagenPrincipal: {
//         id: '',
//         titulo: '',
//         url: ''
//       }
//     }
//   })

//   useEffect(() => {
//     if (!loadingVendedoraId) {
//       if (dbVendedoraId?.vendedoraId === id) {
//         setValues({
//           nombres: dbVendedoraId?.nombres!,
//           apellidos: dbVendedoraId?.apellidos!,
//           link: dbVendedoraId?.link!,
//           imagenPrincipal: {
//             id: dbVendedoraId?.imagenPrincipal?.id!,
//             titulo: dbVendedoraId?.imagenPrincipal?.titulo!,
//             url: dbVendedoraId?.imagenPrincipal?.url!
//           }
//         })
//       } else {
//         router('/sellers')
//       }
//     }
//   }, [loadingVendedoraId])

//   return (
//     <PlantillaPage title="Editar Vendedor" goback>
//       <div className="flex justify-center">
//         <h1 className="title-9 dark:text-slate-200">Editar Vendedor</h1>
//       </div>
//       <Show
//         condition={loadingVendedoraId}
//         loading
//         isDefault={<Spinner className="w-10 h-10 mx-auto my-20 border-4" />}>
//         <form
//           onSubmit={form.handleSubmit}
//           className="flex flex-col w-full max-w-3xl gap-5 mx-auto mt-10 md:grid sm:grid-cols-2 ">
//           <Input
//             type="text"
//             label="Nombres"
//             {...form.getFieldProps('nombres')}
//             error={errors.nombres}
//             touched={touched?.nombres ?? false}
//           />
//           <Input
//             type="text"
//             label="Apellidos"
//             {...form.getFieldProps('apellidos')}
//             error={errors.apellidos}
//             touched={touched?.apellidos ?? false}
//           />
//           <div className="col-span-2 ">
//             <Input
//               type="text"
//               label="Link"
//               {...form.getFieldProps('link')}
//               error={errors.link}
//               touched={touched?.link ?? false}
//             />
//           </div>

//           <div className="flex w-full col-span-2 mx-auto md:w-1/2">
//             <InputImage
//               value={values.imagenPrincipal}
//               onChange={(value) => setFieldValue('imagenPrincipal', value)}
//               label=" Imagen Principal"
//               error={errors.imagenPrincipal}
//               touched={touched?.imagenPrincipal?.url ?? false}
//             />
//           </div>

//           <div className="flex items-center justify-center col-span-2">
//             <button
//               type="submit"
//               disabled={loadingUpdate}
//               className="w-full md:w-1/2 btn btn-solid-primary">
//               Actualizar Vendedor
//               {loadingUpdate && <Spinner className="w-5 h-5" />}
//             </button>
//           </div>
//         </form>
//       </Show>
//     </PlantillaPage>
//   )
// }

// export default EditSeller

const EditSeller = () => {
  return <h1>test</h1>
}
export default EditSeller
