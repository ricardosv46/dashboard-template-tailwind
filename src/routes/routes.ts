import { IconCart, IconFile, IconImage, IconOptions } from '@icons'
import { Route } from '@interface/index'
import { lazy } from 'react'

const BlogsPage = lazy(() => import('../pages/home/blogs/BlogsPage'))
const ImagesPage = lazy(() => import('../pages/home/ImagesPage'))
const ProductsPage = lazy(() => import('../pages/home/products/ProductsPage'))
// const PedidosPage = lazy(() => import('../pages/home/pedidos/PedidosPage'))
// const VerPedidos = lazy(() => import('../pages/home/pedidos/VerPedidos'))
const CreateProduct = lazy(() => import('../pages/home/products/CreateProduct'))
const EditProduct = lazy(() => import('../pages/home/products/EditProduct'))
const CategorysProduct = lazy(() => import('../pages/home/products/categorys/CategorysProduct'))
const CreateCategoryProducto = lazy(
  () => import('../pages/home/products/categorys/CreateCategoryProduct')
)
const EditCategoryProducto = lazy(
  () => import('../pages/home/products/categorys/EditCategoryProduct')
)
const CategorysBlog = lazy(() => import('../pages/home/blogs/categorys/CategorysBlog'))
const CreateCategoryBlog = lazy(() => import('../pages/home/blogs/categorys/CreateCategoryBlog'))
const EditCategoryBlog = lazy(() => import('../pages/home/blogs/categorys/EditCategoryBlog'))
const CreateBlog = lazy(() => import('../pages/home/blogs/CreateBlog'))
const EditBlog = lazy(() => import('../pages/home/blogs/EditBlog'))
// const Banks = lazy(() => import('../pages/home/banks/Banks'))
// const CreateBank = lazy(() => import('../pages/home/banks/CreateBank'))
// const EditBank = lazy(() => import('../pages/home/banks/EditarBank'))
// const EfectivoMovil = lazy(() => import('../pages/home/efectivoMovil/EfectivoMovil'))
// const CreateEfectivoMovil = lazy(() => import('../pages/home/efectivoMovil/CreateEfectivoMovil'))
// const EditEfectivoMovil = lazy(() => import('../pages/home/efectivoMovil/EditarEfectivoMovil'))
const SlidersPage = lazy(() => import('../pages/home/sliders/SliderPage'))
const CreateSlider = lazy(() => import('../pages/home/sliders/CreateSlider'))
const EditSlider = lazy(() => import('../pages/home/sliders/EditSlider'))
// const VendedoraPage = lazy(() => import('../pages/home/vendedoras/VendedoraPage'))
// const CreateVendedora = lazy(() => import('../pages/home/vendedoras/CreateVendedora'))
// const EditVendedora = lazy(() => import('../pages/home/vendedoras/EditVendedora'))

export const homeRoutes: Route[] = [
  {
    icon: IconImage,
    path: 'images',
    name: 'Imagenes',
    to: '/images',
    component: ImagesPage,
    subMenu: { value: false, paths: [] }
  },
  {
    icon: IconImage,
    name: 'Sliders',
    to: '/sliders',
    path: 'sliders',
    component: SlidersPage,
    subMenu: {
      value: false,
      paths: [
        {
          icon: IconOptions,
          name: 'Crear Slider',
          path: '/sliders/create-slider',
          to: '',
          component: CreateSlider,
          render: false
        },
        {
          icon: IconOptions,
          name: 'Editar Slider',
          path: '/sliders/edit-slider/:slug',
          to: '',
          component: EditSlider,
          render: false
        }
      ]
    }
  },
  {
    icon: IconFile,
    name: 'Blogs',
    to: '/blogs',
    path: 'blogs',
    component: BlogsPage,
    subMenu: {
      value: true,
      paths: [
        {
          icon: IconOptions,
          name: 'Categoria',
          path: 'blogs-category',
          to: '/blogs-category',
          component: CategorysBlog,
          render: true
        },
        {
          icon: IconFile,
          name: 'Blogs',
          path: 'blogs',
          to: '/blogs',
          component: BlogsPage,
          render: true
        },
        {
          icon: IconOptions,
          name: 'Crear Categoria Blog',
          path: '/blogs-category/create-blog-category',
          to: '',
          component: CreateCategoryBlog,
          render: false
        },
        {
          icon: IconOptions,
          name: 'Editar Categoria Blog',
          path: '/blogs-category/edit-blog-category/:slug',
          to: '',
          component: EditCategoryBlog,
          render: false
        },
        {
          icon: IconOptions,
          name: 'Crear Blog',
          path: 'blogs/create-blog',
          to: '',
          component: CreateBlog,
          render: false
        },
        {
          icon: IconOptions,
          name: 'Editar Blog',
          path: 'blogs/edit-blog/:slug',
          to: '',
          component: EditBlog,
          render: false
        }
      ]
    }
  },
  {
    icon: IconCart,
    name: 'Productos',
    to: '/products',
    path: 'products',
    component: ProductsPage,
    subMenu: {
      value: true,
      paths: [
        {
          icon: IconOptions,
          name: 'Categoria',
          path: 'products-category',
          to: '/products-category',
          component: CategorysProduct,
          render: true
        },
        {
          icon: IconCart,
          name: 'Productos',
          path: 'products',
          to: '/products',
          component: ProductsPage,
          render: true
        },
        {
          icon: IconOptions,
          name: 'Crear Categoria Producto',
          path: 'products-category/create-product-category',
          to: '',
          component: CreateCategoryProducto,
          render: false
        },
        {
          icon: IconOptions,
          name: 'Editar Categoria Producto',
          path: 'products-category/edit-product-category/:slug',
          to: '',
          component: EditCategoryProducto,
          render: false
        },
        {
          icon: IconOptions,
          name: 'Crear Product',
          path: 'products/create-product',
          to: '',
          component: CreateProduct,
          render: false
        },
        {
          icon: IconOptions,
          name: 'Editar Product',
          path: 'products/edit-product/:slug',
          to: '',
          component: EditProduct,
          render: false
        }
      ]
    }
  }
]

// 	{
// 		icon: IconPedidos,
// 		name: 'Pedidos',
// 		to: '/pedidos',
// 		path: 'pedidos',
// 		component: PedidosPage,
// 		subMenu: {
// 			value: false,
// 			paths: [
// 				{
// 					icon: IconOptions,
// 					name: 'Ver pedido',
// 					path: 'pedidos/:id',
// 					to: '/pedidos/:id',
// 					component: VerPedidos,
// 					render: false
// 				}
// 			]
// 		}
// 	},

// 	{
// 		icon: IconCart,
// 		name: 'Productos',
// 		to: '/products',
// 		path: 'products',
// 		component: ProductsPage,
// 		subMenu: {
// 			value: true,
// 			paths: [
// 				{
// 					icon: IconOptions,
// 					name: 'Categoria',
// 					path: 'products-category',
// 					to: '/products-category',
// 					component: CategoryProduct,
// 					render: true
// 				},
// 				{
// 					icon: IconCart,
// 					name: 'Productos',
// 					path: 'products',
// 					to: '/products',
// 					component: ProductsPage,
// 					render: true
// 				},
// 				{
// 					icon: IconOptions,
// 					name: 'Crear Categoria Producto',
// 					path: 'create-producto-category',
// 					to: '/create-producto-category',
// 					component: CreateCategoryProducto,
// 					render: false
// 				},
// 				{
// 					icon: IconOptions,
// 					name: 'Editar Categoria Producto',
// 					path: 'edit-producto-category/:id',
// 					to: '/edit-producto-category/:id',
// 					component: EditCategoryProducto,
// 					render: false
// 				},
// 				{
// 					icon: IconOptions,
// 					name: 'Crear Product',
// 					path: 'create-product',
// 					to: '/create-product',
// 					component: CreateProduct,
// 					render: false
// 				},
// 				{
// 					icon: IconOptions,
// 					name: 'Editar Product',
// 					path: 'edit-product/:id',
// 					to: '/edit-product/:id',
// 					component: EditProduct,
// 					render: false
// 				}
// 			]
// 		}
// 	},
// 	{
// 		icon: IconBank,
// 		name: 'Finanzas',
// 		to: '/vendedora',
// 		path: 'bancos',
// 		component: Banks,
// 		subMenu: {
// 			value: true,
// 			paths: [
// 				{
// 					icon: IconOptions,
// 					name: 'Crear Banco',
// 					path: 'create-bank',
// 					to: '/create-bank',
// 					component: CreateBank,
// 					render: false
// 				},
// 				{
// 					icon: IconOptions,
// 					name: 'Editar Banco',
// 					path: 'edit-bank/:id',
// 					to: '/edit-bank/:id',
// 					component: EditBank,
// 					render: false
// 				},
// 				{
// 					icon: IconBank,
// 					name: 'Bancos',
// 					path: 'bancos',
// 					to: '/bancos',
// 					component: Banks,
// 					render: true
// 				},
// 				{
// 					icon: IconMoney,
// 					name: 'Efectivo movil',
// 					path: 'efectivo-movil',
// 					to: '/efectivo-movil',
// 					component: EfectivoMovil,
// 					render: true
// 				},
// 				{
// 					icon: IconOptions,
// 					name: 'Editar Banco',
// 					path: 'edit-efectivo-movil/:id',
// 					to: '/edit-efectivo-movil/:id',
// 					component: EditEfectivoMovil,
// 					render: false
// 				},
// 				{
// 					icon: IconBank,
// 					name: 'crear efectivo movil',
// 					path: 'create-efectivo-movil',
// 					to: '/create-efectivo-movil',
// 					component: CreateEfectivoMovil,
// 					render: false
// 				},
// 				{
// 					icon: IconUser,
// 					name: 'Vendedoras',
// 					path: 'vendedora',
// 					to: '/vendedora',
// 					component: VendedoraPage,
// 					render: true
// 				},
// 				{
// 					icon: IconUser,
// 					name: 'editar Vendedora',
// 					path: 'edit-vendedora/:id',
// 					to: '/edit-vendedora/:id',
// 					component: EditVendedora,
// 					render: false
// 				},
// 				{
// 					icon: IconUser,
// 					name: 'crear efectivo movil',
// 					path: 'create-vendedora',
// 					to: '/create-vendedora',
// 					component: CreateVendedora,
// 					render: false
// 				}
// 			]
// 		}
// 	}
// ]

export const getRoutes = () => {
  const subRoutes = []
  const mainRoutes = []

  for (const { subMenu, ...mainRoute } of homeRoutes) {
    mainRoutes.push(mainRoute)

    for (const subMenu_ of subMenu.paths) {
      subRoutes.push(subMenu_)
    }
  }

  return { mainRoutes, subRoutes }
}
