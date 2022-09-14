import { IconBank, IconCart, IconFile, IconImage, IconMoney, IconOptions, IconUser } from '@icons'
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
const BanksPage = lazy(() => import('../pages/home/finance/banks/BanksPage'))
const CreateBank = lazy(() => import('../pages/home/finance/banks/CreateBank'))
const EditBank = lazy(() => import('../pages/home/finance/banks/EditBank'))
const CashMobile = lazy(() => import('../pages/home/finance/cash/CashPage'))
const CreateCashMobile = lazy(() => import('../pages/home/finance/cash/CreateCash'))
const EditCashMobile = lazy(() => import('../pages/home/finance/cash/EditCash'))
const SlidersPage = lazy(() => import('../pages/home/sliders/SliderPage'))
const CreateSlider = lazy(() => import('../pages/home/sliders/CreateSlider'))
const EditSlider = lazy(() => import('../pages/home/sliders/EditSlider'))
const SellersPage = lazy(() => import('../pages/home/finance/sellers/SellersPage'))
const EditSeller = lazy(() => import('../pages/home/finance/sellers/EditSeller'))
const CreateSeller = lazy(() => import('../pages/home/finance/sellers/CreateSeller'))
const EditPassword = lazy(() => import('../pages/home/account/EditPassword'))
const EditProfile = lazy(() => import('../pages/home/account/EditProfile'))

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
  },

  {
    icon: IconBank,
    name: 'Finanzas',
    to: '/vendedora',
    path: 'banks',
    component: BanksPage,
    subMenu: {
      value: true,
      paths: [
        {
          icon: IconBank,
          name: 'Bancos',
          path: 'banks',
          to: '/banks',
          component: BanksPage,
          render: true
        },
        {
          icon: IconOptions,
          name: 'Crear Banco',
          path: 'banks/create-bank',
          to: '',
          component: CreateBank,
          render: false
        },
        {
          icon: IconOptions,
          name: 'Editar Banco',
          path: 'banks/edit-bank/:id',
          to: '',
          component: EditBank,
          render: false
        },
        {
          icon: IconMoney,
          name: 'Efectivo movil',
          path: 'cash-mobile',
          to: '/cash-mobile',
          component: CashMobile,
          render: true
        },
        {
          icon: IconBank,
          name: 'crear efectivo movil',
          path: 'cash-mobile/create-cash-mobile',
          to: '',
          component: CreateCashMobile,
          render: false
        },
        {
          icon: IconOptions,
          name: 'Editar Banco',
          path: 'cash-mobile/edit-cash-mobile/:id',
          to: '',
          component: EditCashMobile,
          render: false
        },

        {
          icon: IconUser,
          name: 'Vendedores',
          path: 'sellers',
          to: '/sellers',
          component: SellersPage,
          render: true
        },
        {
          icon: IconUser,
          name: 'Crear Vendedora',
          path: 'sellers/create-seller',
          to: '',
          component: CreateSeller,
          render: false
        },
        {
          icon: IconUser,
          name: 'Editar Vendedora',
          path: 'sellers/edit-seller/:id',
          to: '',
          component: EditSeller,
          render: false
        }
      ]
    }
  },
  {
    icon: IconUser,
    name: 'Cuenta',
    to: '/account',
    path: 'account',
    component: ProductsPage,
    subMenu: {
      value: true,
      paths: [
        {
          icon: IconUser,
          name: 'Password',
          path: 'edit-paasword',
          to: '/edit-paasword',
          component: EditPassword,
          render: true
        },
        {
          icon: IconUser,
          name: 'Profile',
          path: 'edit-profile',
          to: '/edit-profile',
          component: EditProfile,
          render: true
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
