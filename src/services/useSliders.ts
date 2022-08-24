import {
	useCreateBlogMutation,
	useCreateSliderMutation,
	useDeleteSliderMutation,
	useGetAllBlogsQuery,
	useGetAllSliderQuery,
	useUpdateEstadoSliderMutation,
	useUpdateSliderMutation
} from '../generated/graphql'

interface ICreateSlider {
	titulo: string
	tipoLink: string
	link: string
	imagenPrincipal: number
}

interface IUpdateSlider {
	sliderId: string
	titulo: string
	tipoLink: string
	link: string
	imagenPrincipal: number
}

export interface IUpdateEstadoSlider {
	sliderId: string
	estado: string
}

export interface IDeleteBlog {
	sliderId: number
}

// Obtenemos todos los sliders
export const useSliders = (input = { estado: '' }) => {
	const { data, loading, refetch } = useGetAllSliderQuery({
		fetchPolicy: 'network-only',
		variables: {
			...input
		}
	})

	const db = data?.GetAllSliders?.data ?? []
	const nTotal = data?.GetAllSliders?.numeroTotal ?? 0

	const [CreateSlider, { loading: loadingCreate }] = useCreateSliderMutation()

	const createSlider = async ({ titulo, tipoLink, link, imagenPrincipal }: ICreateSlider) => {
		try {
			const res = await CreateSlider({
				variables: {
					input: {
						titulo,
						tipoLink,
						link,
						imagenPrincipal
					}
				}
			})
			refetch()
			return { ok: true }
		} catch (error: any) {
			return { ok: false, error: 'Error no se pudo crear el Slider' }
		}
	}

	const [UpdateSlider, { loading: loadingUpdate }] = useUpdateSliderMutation()

	const updateSlider = async ({ sliderId, titulo, tipoLink, link, imagenPrincipal }: IUpdateSlider) => {
		try {
			const res = await UpdateSlider({
				variables: {
					input: {
						sliderId,
						titulo,
						tipoLink,
						link,
						imagenPrincipal
					}
				}
			})
			refetch()
			return { ok: true }
		} catch (error: any) {
			return { ok: false, error: 'Error no se pudo actualizar el Slider' }
		}
	}

	const [UpdateEstadoSlider, { loading: loadingUpdateEstado }] = useUpdateEstadoSliderMutation()

	const updateEstadoSlider = async ({ sliderId, estado }: IUpdateEstadoSlider) => {
		try {
			const res = await UpdateEstadoSlider({
				variables: {
					input: {
						sliderId,
						estado
					}
				}
			})
			refetch()
			return { ok: true }
		} catch (error: any) {
			return { ok: false, error: 'Error no se pudo actualizar el estado' }
		}
	}

	const [DeleteSlider, { loading: loadingDelete }] = useDeleteSliderMutation()

	const deleteSlider = async ({ sliderId }: IDeleteBlog) => {
		try {
			const res = await DeleteSlider({
				variables: {
					sliderId
				}
			})
			refetch()
			return { ok: true }
		} catch (error: any) {
			return { ok: false, error: 'Error no se pudo eliminar el Slider' }
		}
	}

	return {
		loading,
		db,
		nTotal,
		createSlider,
		updateSlider,
		updateEstadoSlider,
		deleteSlider
	}
}
