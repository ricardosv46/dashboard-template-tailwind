import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  DateTimeTz: any;
  Upload: any;
};

export type Banco = {
  __typename?: 'Banco';
  bancoId?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['DateTime']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  numeroCuenta?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type BancoInput = {
  bancoId?: InputMaybe<Scalars['ID']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  numeroCuenta?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type Blog = {
  __typename?: 'Blog';
  CategoriaBlog?: Maybe<CategoriaBlog>;
  User?: Maybe<User>;
  blogId?: Maybe<Scalars['ID']>;
  categoriaBlogId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenSecundaria?: Maybe<Imagen>;
  keywords?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type BlogInput = {
  blogId?: InputMaybe<Scalars['ID']>;
  categoriaBlogId?: InputMaybe<Scalars['Int']>;
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type Carrito = {
  __typename?: 'Carrito';
  Producto?: Maybe<Producto>;
  cantidad?: Maybe<Scalars['Int']>;
  carritoId?: Maybe<Scalars['ID']>;
  productoId?: Maybe<Scalars['Int']>;
};

export type CarritoInput = {
  cantidad?: InputMaybe<Scalars['Int']>;
  carritoId?: InputMaybe<Scalars['ID']>;
  productoId?: InputMaybe<Scalars['Int']>;
};

export type CategoriaBlog = {
  __typename?: 'CategoriaBlog';
  categoriaBlogId?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenSecundaria?: Maybe<Imagen>;
  keywords?: Maybe<Scalars['String']>;
  numeroBlogs?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CategoriaBlogInput = {
  categoriaBlogId?: InputMaybe<Scalars['ID']>;
  descripcion?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type CategoriaProducto = {
  __typename?: 'CategoriaProducto';
  categoriaProductoId?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenSecundaria?: Maybe<Imagen>;
  keywords?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CategoriaProductoInput = {
  categoriaProductoId?: InputMaybe<Scalars['ID']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  descripcion?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ComentarioBlog = {
  __typename?: 'ComentarioBlog';
  User?: Maybe<User>;
  blogId?: Maybe<Scalars['Int']>;
  comentarioBlogId?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type ComentarioBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  descripcion?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  usuarioId?: InputMaybe<Scalars['Int']>;
};

export type Contacto = {
  __typename?: 'Contacto';
  celular?: Maybe<Scalars['String']>;
  contactoId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  nombre?: Maybe<Scalars['String']>;
  tipoServicio?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ContactoInput = {
  celular?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  descripcion?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  nombre?: InputMaybe<Scalars['String']>;
  tipoServicio?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type DatosEmpresa = {
  __typename?: 'DatosEmpresa';
  departamento?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  distrito?: Maybe<Scalars['String']>;
  emailContacto?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  nomEmpresa?: Maybe<Scalars['String']>;
  provincia?: Maybe<Scalars['String']>;
  ruc?: Maybe<Scalars['String']>;
};

export type DatosEmpresaInput = {
  departamento?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  distrito?: InputMaybe<Scalars['String']>;
  emailContacto?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  nomEmpresa?: InputMaybe<Scalars['String']>;
  provincia?: InputMaybe<Scalars['String']>;
  ruc?: InputMaybe<Scalars['String']>;
};

export type DatosTarjetaInput = {
  installments?: InputMaybe<Scalars['Int']>;
  payment_method_id?: InputMaybe<Scalars['String']>;
  source_id?: InputMaybe<Scalars['String']>;
  tipo_tarjeta?: InputMaybe<Scalars['Int']>;
  type_save?: InputMaybe<Scalars['Int']>;
};

export type Departamento = {
  __typename?: 'Departamento';
  DeparCodi?: Maybe<Scalars['ID']>;
  DeparNom?: Maybe<Scalars['String']>;
};

export type DetallePedido = {
  __typename?: 'DetallePedido';
  cantidad?: Maybe<Scalars['Int']>;
  detallePedidoId?: Maybe<Scalars['ID']>;
  imagenPrincipal?: Maybe<Scalars['String']>;
  pedidoId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  productoId?: Maybe<Scalars['Int']>;
  titulo?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
};

export type DetallePedidoInput = {
  cantidad?: InputMaybe<Scalars['Int']>;
  detallePedidoId?: InputMaybe<Scalars['ID']>;
  imagenPrincipal?: InputMaybe<Scalars['String']>;
  pedidoId?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
  productoId?: InputMaybe<Scalars['Int']>;
  titulo?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['Float']>;
};

export type DireccionEnvio = {
  __typename?: 'DireccionEnvio';
  DeparCodi?: Maybe<Scalars['Int']>;
  DistCodi?: Maybe<Scalars['Int']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  celular?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  direccionEnvioId?: Maybe<Scalars['ID']>;
  nombreAgencia?: Maybe<Scalars['String']>;
  pedidoId?: Maybe<Scalars['Int']>;
};

export type DireccionEnvioInput = {
  DeparCodi?: InputMaybe<Scalars['Int']>;
  DistCodi?: InputMaybe<Scalars['Int']>;
  ProvCodi?: InputMaybe<Scalars['Int']>;
  celular?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  direccionEnvioId?: InputMaybe<Scalars['ID']>;
  nombreAgencia?: InputMaybe<Scalars['String']>;
};

export type DireccionUsuario = {
  __typename?: 'DireccionUsuario';
  DeparCodi?: Maybe<Scalars['Int']>;
  DeparNom?: Maybe<Scalars['String']>;
  DistCodi?: Maybe<Scalars['Int']>;
  DistNom?: Maybe<Scalars['String']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  ProvNom?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  direccion?: Maybe<Scalars['String']>;
  direccionUsuarioId?: Maybe<Scalars['Int']>;
  nombreAgencia?: Maybe<Scalars['String']>;
  tipoDireccion?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type DireccionUsuarioInput = {
  DeparCodi?: InputMaybe<Scalars['Int']>;
  DistCodi?: InputMaybe<Scalars['Int']>;
  ProvCodi?: InputMaybe<Scalars['Int']>;
  alias?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  direccionUsuarioId?: InputMaybe<Scalars['Int']>;
  nombreAgencia?: InputMaybe<Scalars['String']>;
  tipoDireccion?: InputMaybe<Scalars['String']>;
  usuarioId?: InputMaybe<Scalars['Int']>;
};

export type Distrito = {
  __typename?: 'Distrito';
  DistCodi?: Maybe<Scalars['ID']>;
  DistNom?: Maybe<Scalars['String']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
  precioEnvio?: Maybe<Scalars['Float']>;
};

export type DistritoInput = {
  DistCodi?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
  precioEnvio?: InputMaybe<Scalars['Float']>;
};

export type EfectivoMovil = {
  __typename?: 'EfectivoMovil';
  created_at?: Maybe<Scalars['DateTime']>;
  efectivoMovilId?: Maybe<Scalars['ID']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenQr?: Maybe<Imagen>;
  numeroCelular?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type EfectivoMovilInput = {
  efectivoMovilId?: InputMaybe<Scalars['ID']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenQr?: InputMaybe<Scalars['Int']>;
  numeroCelular?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type Filtros = {
  __typename?: 'Filtros';
  categorias?: Maybe<Array<Scalars['String']>>;
  precios?: Maybe<Array<Scalars['Float']>>;
};

export type GetAllArrayUsuarios = {
  __typename?: 'GetAllArrayUsuarios';
  Usuario?: Maybe<Array<Maybe<User>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllBancos = {
  __typename?: 'GetAllBancos';
  data?: Maybe<Array<Banco>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllBlogs = {
  __typename?: 'GetAllBlogs';
  data?: Maybe<Array<Blog>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllCategoriaBlogs = {
  __typename?: 'GetAllCategoriaBlogs';
  data?: Maybe<Array<CategoriaBlog>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllCategoriaProductos = {
  __typename?: 'GetAllCategoriaProductos';
  data?: Maybe<Array<CategoriaProducto>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllContactos = {
  __typename?: 'GetAllContactos';
  data?: Maybe<Array<Contacto>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllDireccionesUsuarios = {
  __typename?: 'GetAllDireccionesUsuarios';
  data?: Maybe<Array<DireccionUsuario>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllEfectivoMovil = {
  __typename?: 'GetAllEfectivoMovil';
  data?: Maybe<Array<EfectivoMovil>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllImagenes = {
  __typename?: 'GetAllImagenes';
  data?: Maybe<Array<Imagen>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllNotificacionPedidos = {
  __typename?: 'GetAllNotificacionPedidos';
  data?: Maybe<Array<Maybe<NotificacionPedido>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllPedidos = {
  __typename?: 'GetAllPedidos';
  data?: Maybe<Array<Pedido>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllProductos = {
  __typename?: 'GetAllProductos';
  data?: Maybe<Array<Producto>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllSliders = {
  __typename?: 'GetAllSliders';
  data?: Maybe<Array<Slider>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllSoportes = {
  __typename?: 'GetAllSoportes';
  data?: Maybe<Array<Soporte>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllSuscriptores = {
  __typename?: 'GetAllSuscriptores';
  data?: Maybe<Array<Suscriptores>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllUsuarios = {
  __typename?: 'GetAllUsuarios';
  Usuario?: Maybe<User>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetDatosAdicionalesPedido = {
  __typename?: 'GetDatosAdicionalesPedido';
  DireccionEnvio?: Maybe<DireccionEnvio>;
  Recibo?: Maybe<Recibo>;
  User?: Maybe<User>;
};

export type Imagen = {
  __typename?: 'Imagen';
  estado?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AsignarDatosEmpresa: DatosEmpresa;
  CreateBancos: Banco;
  CreateBlog: Blog;
  CreateCarrito: Array<Maybe<Carrito>>;
  CreateCategoriaBlog: CategoriaBlog;
  CreateCategoriaProducto: CategoriaProducto;
  CreateContactos: Contacto;
  CreateDireccionUsuario: DireccionUsuario;
  CreateEfectivoMovil: EfectivoMovil;
  CreateImagen: Scalars['String'];
  CreatePedido: Pedido;
  CreatePrecioEnvioDistrito: Distrito;
  CreateProducto: Producto;
  CreateSlider: Slider;
  CreateSoporte: Soporte;
  CreateSuscriptores: Suscriptores;
  CreateUsuario: User;
  DeleteBancos: Scalars['String'];
  DeleteBlog: Scalars['String'];
  DeleteCarrito: Scalars['String'];
  DeleteCategoriaBlog: Scalars['String'];
  DeleteCategoriaProducto: Scalars['String'];
  DeleteDireccionUsuario: Scalars['String'];
  DeleteEfectivoMovil: Scalars['String'];
  DeleteImagen: Scalars['String'];
  DeleteProducto: Scalars['String'];
  DeleteSlider: Scalars['String'];
  DeleteSoporte: Scalars['String'];
  DeleteSuscriptores: Scalars['String'];
  Login: User;
  RecoverPasswordUsuario: Scalars['String'];
  UpdateBancos: Banco;
  UpdateCarrito: Carrito;
  UpdateCategoriaBlog: CategoriaBlog;
  UpdateCategoriaProducto: CategoriaProducto;
  UpdateDestacadoBlog: Blog;
  UpdateDestacadoCategoriaBlog: CategoriaBlog;
  UpdateDestacadoCategoriaProducto: CategoriaProducto;
  UpdateDestacadoProducto: Producto;
  UpdateDireccionUsuario: DireccionUsuario;
  UpdateEfectivoMovil: EfectivoMovil;
  UpdateEstadoBanco: Banco;
  UpdateEstadoBlog: Blog;
  UpdateEstadoCategoriaBlog: CategoriaBlog;
  UpdateEstadoCategoriaProducto: CategoriaProducto;
  UpdateEstadoContacto: Contacto;
  UpdateEstadoDistrito: Distrito;
  UpdateEstadoEfectivoMovil: EfectivoMovil;
  UpdateEstadoPedido: Pedido;
  UpdateEstadoProducto: Producto;
  UpdateEstadoSlider: Slider;
  UpdateEstadoSoporte: Soporte;
  UpdateEstadoUsuario: Scalars['String'];
  UpdateImagen: Imagen;
  UpdatePasswordUsuario: User;
  UpdateProducto: Producto;
  UpdateSlider: Slider;
  UpdateSoporte: Soporte;
  UpdateSuscriptores: Suscriptores;
  UpdateUsuario: User;
  UpdateVistoNotificacionPedido: NotificacionPedido;
  UpdateVistoPedido: Pedido;
  UploadVoucher: Pedido;
  updateBlog: Blog;
};


export type MutationAsignarDatosEmpresaArgs = {
  input: DatosEmpresaInput;
  logo?: InputMaybe<Scalars['Upload']>;
};


export type MutationCreateBancosArgs = {
  input?: InputMaybe<BancoInput>;
};


export type MutationCreateBlogArgs = {
  input: BlogInput;
};


export type MutationCreateCarritoArgs = {
  input?: InputMaybe<Array<CarritoInput>>;
};


export type MutationCreateCategoriaBlogArgs = {
  input: CategoriaBlogInput;
};


export type MutationCreateCategoriaProductoArgs = {
  input: CategoriaProductoInput;
};


export type MutationCreateContactosArgs = {
  input?: InputMaybe<ContactoInput>;
};


export type MutationCreateDireccionUsuarioArgs = {
  input: DireccionUsuarioInput;
};


export type MutationCreateEfectivoMovilArgs = {
  input?: InputMaybe<EfectivoMovilInput>;
};


export type MutationCreateImagenArgs = {
  imagen: Scalars['Upload'];
};


export type MutationCreatePedidoArgs = {
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput>>;
  input3: ReciboInput;
  input4: DireccionEnvioInput;
  input5?: InputMaybe<DatosTarjetaInput>;
  voucher?: InputMaybe<Scalars['Upload']>;
};


export type MutationCreatePrecioEnvioDistritoArgs = {
  input: DistritoInput;
};


export type MutationCreateProductoArgs = {
  input: ProductoInput;
};


export type MutationCreateSliderArgs = {
  input: SliderInput;
};


export type MutationCreateSoporteArgs = {
  input: SoporteInput;
};


export type MutationCreateSuscriptoresArgs = {
  input: SuscriptoresInput;
};


export type MutationCreateUsuarioArgs = {
  input: UserInput;
  photo?: InputMaybe<Scalars['Upload']>;
};


export type MutationDeleteBancosArgs = {
  bancoId: Scalars['Int'];
};


export type MutationDeleteBlogArgs = {
  blogId: Scalars['Int'];
};


export type MutationDeleteCarritoArgs = {
  carritoId: Scalars['Int'];
};


export type MutationDeleteCategoriaBlogArgs = {
  categoriaBlogId: Scalars['Int'];
};


export type MutationDeleteCategoriaProductoArgs = {
  categoriaProductoId: Scalars['Int'];
};


export type MutationDeleteDireccionUsuarioArgs = {
  direccionUsuarioId: Scalars['Int'];
};


export type MutationDeleteEfectivoMovilArgs = {
  efectivoMovilId: Scalars['Int'];
};


export type MutationDeleteImagenArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteProductoArgs = {
  productoId: Scalars['Int'];
};


export type MutationDeleteSliderArgs = {
  sliderId: Scalars['Int'];
};


export type MutationDeleteSoporteArgs = {
  SoporteId: Scalars['Int'];
};


export type MutationDeleteSuscriptoresArgs = {
  suscriptorId: Scalars['Int'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRecoverPasswordUsuarioArgs = {
  email: Scalars['String'];
};


export type MutationUpdateBancosArgs = {
  input?: InputMaybe<BancoInput>;
};


export type MutationUpdateCarritoArgs = {
  input: CarritoInput;
};


export type MutationUpdateCategoriaBlogArgs = {
  input: CategoriaBlogInput;
};


export type MutationUpdateCategoriaProductoArgs = {
  input: CategoriaProductoInput;
};


export type MutationUpdateDestacadoBlogArgs = {
  input: UpdateDestacadoBlogInput;
};


export type MutationUpdateDestacadoCategoriaBlogArgs = {
  input: UpdateDestacadoCategoriaBlogInput;
};


export type MutationUpdateDestacadoCategoriaProductoArgs = {
  input: UpdateDestacadoCategoriaProductoInput;
};


export type MutationUpdateDestacadoProductoArgs = {
  input: UpdateDestacadoProductoInput;
};


export type MutationUpdateDireccionUsuarioArgs = {
  input: DireccionUsuarioInput;
};


export type MutationUpdateEfectivoMovilArgs = {
  input?: InputMaybe<EfectivoMovilInput>;
};


export type MutationUpdateEstadoBancoArgs = {
  input?: InputMaybe<UpdateEstadoBancoInput>;
};


export type MutationUpdateEstadoBlogArgs = {
  input: UpdateEstadoBlogInput;
};


export type MutationUpdateEstadoCategoriaBlogArgs = {
  input: UpdateEstadoCategoriaBlogInput;
};


export type MutationUpdateEstadoCategoriaProductoArgs = {
  input: UpdateEstadoCategoriaProductoInput;
};


export type MutationUpdateEstadoContactoArgs = {
  input?: InputMaybe<UpdateEstadoContactoInput>;
};


export type MutationUpdateEstadoDistritoArgs = {
  input: DistritoInput;
};


export type MutationUpdateEstadoEfectivoMovilArgs = {
  input?: InputMaybe<UpdateEstadoEfectivoMovilInput>;
};


export type MutationUpdateEstadoPedidoArgs = {
  input: UpdateEstadoPedidoInput;
};


export type MutationUpdateEstadoProductoArgs = {
  input: UpdateEstadoProductoInput;
};


export type MutationUpdateEstadoSliderArgs = {
  input?: InputMaybe<UpdateEstadoSliderInput>;
};


export type MutationUpdateEstadoSoporteArgs = {
  input?: InputMaybe<UpdateEstadoSoporteInput>;
};


export type MutationUpdateEstadoUsuarioArgs = {
  input: UpdateEstadoUsuarioInput;
};


export type MutationUpdateImagenArgs = {
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  titulo?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePasswordUsuarioArgs = {
  input: UpdatePasswordInput;
};


export type MutationUpdateProductoArgs = {
  input: ProductoInput;
};


export type MutationUpdateSliderArgs = {
  input?: InputMaybe<SliderInput>;
};


export type MutationUpdateSoporteArgs = {
  input?: InputMaybe<SoporteInput>;
};


export type MutationUpdateSuscriptoresArgs = {
  input?: InputMaybe<SuscriptoresInput>;
};


export type MutationUpdateUsuarioArgs = {
  input?: InputMaybe<UserInput>;
  photo?: InputMaybe<Scalars['Upload']>;
};


export type MutationUpdateVistoNotificacionPedidoArgs = {
  input: UpdateVistoNotificacionPedidoInput;
};


export type MutationUpdateVistoPedidoArgs = {
  input: UpdateVistoPedidoInput;
};


export type MutationUploadVoucherArgs = {
  idPedido: Scalars['Int'];
  voucher?: InputMaybe<Scalars['Upload']>;
};


export type MutationUpdateBlogArgs = {
  input: BlogInput;
};

export type NotificacionComentarioBlog = {
  __typename?: 'NotificacionComentarioBlog';
  Blog?: Maybe<Blog>;
  blogId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  estado?: Maybe<Scalars['String']>;
  notificacionComentarioBlogId?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type NotificacionComentarioBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type NotificacionPedido = {
  __typename?: 'NotificacionPedido';
  created_at?: Maybe<Scalars['DateTime']>;
  notificacionPedidoId?: Maybe<Scalars['Int']>;
  pedidoId?: Maybe<Scalars['Int']>;
  visto?: Maybe<Scalars['Int']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Pedido = {
  __typename?: 'Pedido';
  DetallePedido?: Maybe<Array<DetallePedido>>;
  DireccionEnvio?: Maybe<DireccionEnvio>;
  Recibo?: Maybe<Recibo>;
  Usuario?: Maybe<User>;
  direccionEnvio?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  fechaPedido?: Maybe<Scalars['DateTime']>;
  medioPago?: Maybe<Scalars['String']>;
  numeroOperacion?: Maybe<Scalars['String']>;
  pedidoId?: Maybe<Scalars['ID']>;
  precioEnvio?: Maybe<Scalars['Float']>;
  precioTotal?: Maybe<Scalars['Float']>;
  ticketPdf?: Maybe<Scalars['String']>;
  tipoEnvio?: Maybe<Scalars['String']>;
  tipoPago?: Maybe<Scalars['Int']>;
  tipoVenta?: Maybe<Scalars['String']>;
  usuarioId?: Maybe<Scalars['Int']>;
  visto?: Maybe<Scalars['Int']>;
  voucher?: Maybe<Scalars['String']>;
};

export type PedidoInput = {
  direccionEnvio?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  fechaPedido?: InputMaybe<Scalars['Date']>;
  medioPago?: InputMaybe<Scalars['String']>;
  numeroOperacion?: InputMaybe<Scalars['String']>;
  pedidoId?: InputMaybe<Scalars['ID']>;
  precioEnvio?: InputMaybe<Scalars['Float']>;
  precioTotal?: InputMaybe<Scalars['Float']>;
  tipoEnvio?: InputMaybe<Scalars['Int']>;
  tipoPago?: InputMaybe<Scalars['Int']>;
  tipoVenta?: InputMaybe<Scalars['String']>;
  visto?: InputMaybe<Scalars['Int']>;
};

export type Precio = {
  __typename?: 'Precio';
  maximo?: Maybe<Scalars['Float']>;
  minimo?: Maybe<Scalars['Float']>;
};

export type Producto = {
  __typename?: 'Producto';
  CategoriaProducto?: Maybe<CategoriaProducto>;
  categoriaProductoId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
  especificaciones?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  galeria?: Maybe<Array<Maybe<Imagen>>>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenSecundaria?: Maybe<Imagen>;
  keywords?: Maybe<Scalars['String']>;
  nroPedidos?: Maybe<Scalars['Int']>;
  nroTotalProducVendidoFecha?: Maybe<Scalars['Int']>;
  precioOferta?: Maybe<Scalars['Float']>;
  precioReal?: Maybe<Scalars['Float']>;
  productoId?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  stockMinimo?: Maybe<Scalars['Float']>;
  stockReal?: Maybe<Scalars['Float']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ProductoInput = {
  categoriaProductoId?: InputMaybe<Scalars['Int']>;
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  especificaciones?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  galeria?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  precioOferta?: InputMaybe<Scalars['Float']>;
  precioReal?: InputMaybe<Scalars['Float']>;
  productoId?: InputMaybe<Scalars['ID']>;
  relacionado?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  stockMinimo?: InputMaybe<Scalars['Float']>;
  stockReal?: InputMaybe<Scalars['Float']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type Provincia = {
  __typename?: 'Provincia';
  DeparCodi?: Maybe<Scalars['Int']>;
  ProvCodi?: Maybe<Scalars['ID']>;
  ProvNom?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  BusquedaAvanzada: GetAllProductos;
  EmitirTicket: Scalars['String'];
  GetAllBancos: GetAllBancos;
  GetAllBlogs: GetAllBlogs;
  GetAllBlogsCategoriaSlug: GetAllBlogs;
  GetAllBlogsDestacados: GetAllBlogs;
  GetAllCarrito: Array<Maybe<Carrito>>;
  GetAllCategoriaBlogs: GetAllCategoriaBlogs;
  GetAllCategoriaProductos: GetAllCategoriaProductos;
  GetAllContactos: GetAllContactos;
  GetAllDepartamentos?: Maybe<Array<Departamento>>;
  GetAllDireccionUsuarios: GetAllDireccionesUsuarios;
  GetAllDistritos?: Maybe<Array<Distrito>>;
  GetAllEfectivoMovil: GetAllEfectivoMovil;
  GetAllImagenes?: Maybe<GetAllImagenes>;
  GetAllNotificacionPedidos: GetAllNotificacionPedidos;
  GetAllPedidoUser: GetAllPedidos;
  GetAllPedidos: GetAllPedidos;
  GetAllProductos: GetAllProductos;
  GetAllProductosBestSelling: GetAllProductos;
  GetAllProductosCategoriaSlug: GetAllProductos;
  GetAllProductosMasVendidos: GetAllProductos;
  GetAllProductosMasVendidosSemana: GetAllProductos;
  GetAllProductosPorAgotarse: GetAllProductos;
  GetAllProductosRelacionados: GetAllProductos;
  GetAllProvincias?: Maybe<Array<Provincia>>;
  GetAllSliders: GetAllSliders;
  GetAllSoportes: GetAllSoportes;
  GetAllSuscriptores: GetAllSuscriptores;
  GetAllTarjetaUsuario?: Maybe<Array<TarjetasUsuarios>>;
  GetAllUsuarioMesCompraron: GetAllArrayUsuarios;
  GetAllUsuarios: GetAllUsuarios;
  GetAllUsuariosRegistradosUltimoMes: GetAllArrayUsuarios;
  GetAllVentasAnio: Array<Maybe<VentasAnio>>;
  GetBancoId: Banco;
  GetBlogSlug: Blog;
  GetCategoriaBlogSlug: CategoriaBlog;
  GetCategoriaProductoSlug: CategoriaProducto;
  GetDatosEmpresa: DatosEmpresa;
  GetDireccionUsuarioId: DireccionUsuario;
  GetEfectivoMovilId: EfectivoMovil;
  GetFiltrosPalabraClave: Filtros;
  GetPedidoId: Pedido;
  GetPrecios?: Maybe<Precio>;
  GetProductoSlug: Producto;
  GetReniec: Reniec;
  GetSliderId: Slider;
  GetSoporteId: Soporte;
};


export type QueryBusquedaAvanzadaArgs = {
  categoriaSlug?: InputMaybe<Scalars['String']>;
  destacado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  palabraClave?: InputMaybe<Scalars['String']>;
  precio?: InputMaybe<Array<Scalars['Float']>>;
  tipoOrdenacion?: InputMaybe<Scalars['String']>;
};


export type QueryEmitirTicketArgs = {
  pedidoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllBancosArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllBlogsArgs = {
  destacado?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllBlogsCategoriaSlugArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllBlogsDestacadosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllCategoriaBlogsArgs = {
  destacado?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllCategoriaProductosArgs = {
  destacado?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllContactosArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllDireccionUsuariosArgs = {
  usuarioId: Scalars['Int'];
};


export type QueryGetAllDistritosArgs = {
  ProCode?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllEfectivoMovilArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllImagenesArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllNotificacionPedidosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  visto?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllPedidoUserArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllPedidosArgs = {
  FechaFin?: InputMaybe<Scalars['String']>;
  FechaInicio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  nombreCliente?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllProductosArgs = {
  destacado?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  palabraClave?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllProductosBestSellingArgs = {
  categoriaSlug?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllProductosCategoriaSlugArgs = {
  destacado?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllProductosMasVendidosArgs = {
  categoriaSlug?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllProductosMasVendidosSemanaArgs = {
  FechaFin?: InputMaybe<Scalars['String']>;
  FechaInicio?: InputMaybe<Scalars['String']>;
  categoriaSlug?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllProductosPorAgotarseArgs = {
  categoriaSlug?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllProductosRelacionadosArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllProvinciasArgs = {
  DepCode?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllSlidersArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllSoportesArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllSuscriptoresArgs = {
  FechaFin?: InputMaybe<Scalars['String']>;
  FechaInicio?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllTarjetaUsuarioArgs = {
  customer_id?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllUsuarioMesCompraronArgs = {
  FechaFin?: InputMaybe<Scalars['String']>;
  FechaInicio?: InputMaybe<Scalars['String']>;
  categoriaSlug?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllUsuariosArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  tipoUsuario?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllUsuariosRegistradosUltimoMesArgs = {
  FechaFin?: InputMaybe<Scalars['String']>;
  FechaInicio?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetBancoIdArgs = {
  bancoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetBlogSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoriaBlogSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoriaProductoSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetDireccionUsuarioIdArgs = {
  direccionesUsuariosId: Scalars['Int'];
};


export type QueryGetEfectivoMovilIdArgs = {
  efectivoMovilId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetFiltrosPalabraClaveArgs = {
  palabraClave?: InputMaybe<Scalars['String']>;
};


export type QueryGetPedidoIdArgs = {
  pedidoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetProductoSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetReniecArgs = {
  dni?: InputMaybe<Scalars['String']>;
};


export type QueryGetSliderIdArgs = {
  sliderId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetSoporteIdArgs = {
  soporteId?: InputMaybe<Scalars['Int']>;
};

export type Recibo = {
  __typename?: 'Recibo';
  pedidoId?: Maybe<Scalars['Int']>;
  razonSocial?: Maybe<Scalars['String']>;
  reciboId?: Maybe<Scalars['ID']>;
  ruc?: Maybe<Scalars['String']>;
};

export type ReciboInput = {
  pedidoId?: InputMaybe<Scalars['Int']>;
  razonSocial?: InputMaybe<Scalars['String']>;
  reciboId?: InputMaybe<Scalars['ID']>;
  ruc?: InputMaybe<Scalars['String']>;
};

export type Slider = {
  __typename?: 'Slider';
  created_at?: Maybe<Scalars['DateTime']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  link?: Maybe<Scalars['String']>;
  sliderId?: Maybe<Scalars['ID']>;
  tipoLink?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SliderInput = {
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  sliderId?: InputMaybe<Scalars['ID']>;
  tipoLink?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type Soporte = {
  __typename?: 'Soporte';
  apellidos?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  link?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  soporteId?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SoporteInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  nombres?: InputMaybe<Scalars['String']>;
  soporteId?: InputMaybe<Scalars['ID']>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Suscriptores = {
  __typename?: 'Suscriptores';
  correo?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  suscriptorId?: Maybe<Scalars['ID']>;
};

export type SuscriptoresInput = {
  correo?: InputMaybe<Scalars['String']>;
  nombres?: InputMaybe<Scalars['String']>;
  suscriptorId?: InputMaybe<Scalars['ID']>;
};

export type TarjetasUsuarios = {
  __typename?: 'TarjetasUsuarios';
  customer_id?: Maybe<Scalars['String']>;
  expiration_month?: Maybe<Scalars['Int']>;
  expiration_year?: Maybe<Scalars['Int']>;
  first_six_digits?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_four_digits?: Maybe<Scalars['String']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdateDestacadoBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  destacado?: InputMaybe<Scalars['String']>;
};

export type UpdateDestacadoCategoriaBlogInput = {
  categoriaBlogId?: InputMaybe<Scalars['ID']>;
  destacado?: InputMaybe<Scalars['String']>;
};

export type UpdateDestacadoCategoriaProductoInput = {
  categoriaProductoId?: InputMaybe<Scalars['ID']>;
  destacado?: InputMaybe<Scalars['String']>;
};

export type UpdateDestacadoProductoInput = {
  destacado?: InputMaybe<Scalars['String']>;
  productoId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEstadoBancoInput = {
  bancoId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoCategoriaBlogInput = {
  categoriaBlogId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoCategoriaProductoInput = {
  categoriaProductoId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoContactoInput = {
  contactoId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoEfectivoMovilInput = {
  efectivoMovilId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoPedidoInput = {
  estado?: InputMaybe<Scalars['String']>;
  pedidoId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEstadoProductoInput = {
  estado?: InputMaybe<Scalars['String']>;
  productoId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEstadoSliderInput = {
  estado?: InputMaybe<Scalars['String']>;
  sliderId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEstadoSoporteInput = {
  estado?: InputMaybe<Scalars['String']>;
  soporteId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEstadoUsuarioInput = {
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type UpdatePasswordInput = {
  id?: InputMaybe<Scalars['ID']>;
  passwordAntiguo?: InputMaybe<Scalars['String']>;
  passwordNuevo?: InputMaybe<Scalars['String']>;
};

export type UpdateVistoNotificacionPedidoInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  notificacionPedidoId?: InputMaybe<Scalars['Int']>;
  visto?: InputMaybe<Scalars['Int']>;
};

export type UpdateVistoPedidoInput = {
  pedidoId?: InputMaybe<Scalars['ID']>;
  visto?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  apellidos?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  cantidadComprada?: Maybe<Scalars['Int']>;
  celular?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  fechaNacimiento?: Maybe<Scalars['DateTime']>;
  foto?: Maybe<Scalars['String']>;
  genero?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  montoTotalComprado?: Maybe<Scalars['Float']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
};

export type UserInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fechaNacimiento?: InputMaybe<Scalars['Date']>;
  foto?: InputMaybe<Scalars['String']>;
  genero?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
  tipoUsuario?: InputMaybe<Scalars['Int']>;
};

export type VentasAnio = {
  __typename?: 'VentasAnio';
  cantidad?: Maybe<Scalars['Int']>;
  mes?: Maybe<Scalars['String']>;
  monto?: Maybe<Scalars['Float']>;
};

export type Reniec = {
  __typename?: 'reniec';
  ApellidoMaterno?: Maybe<Scalars['String']>;
  ApellidoPaterno?: Maybe<Scalars['String']>;
  DNI?: Maybe<Scalars['String']>;
  FechaNacimiento?: Maybe<Scalars['String']>;
  Nombres?: Maybe<Scalars['String']>;
};

export type DeleteSliderMutationVariables = Exact<{
  sliderId: Scalars['Int'];
}>;


export type DeleteSliderMutation = { __typename?: 'Mutation', DeleteSlider: string };

export type CreateBancosMutationVariables = Exact<{
  input?: InputMaybe<BancoInput>;
}>;


export type CreateBancosMutation = { __typename?: 'Mutation', CreateBancos: { __typename?: 'Banco', bancoId?: string | null, titulo?: string | null, estado?: string | null, numeroCuenta?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null } };

export type CreateBlogMutationVariables = Exact<{
  input: BlogInput;
}>;


export type CreateBlogMutation = { __typename?: 'Mutation', CreateBlog: { __typename?: 'Blog', titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, keywords?: string | null, estado?: string | null, destacado?: string | null, categoriaBlogId?: number | null, usuarioId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type CreateCategoriaBlogMutationVariables = Exact<{
  input: CategoriaBlogInput;
}>;


export type CreateCategoriaBlogMutation = { __typename?: 'Mutation', CreateCategoriaBlog: { __typename?: 'CategoriaBlog', categoriaBlogId?: string | null, titulo?: string | null, slug?: string | null, keywords?: string | null, descripcion?: string | null, estado?: string | null, created_at?: any | null, updated_at?: any | null, numeroBlogs?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type CreateCategoriaProductoMutationVariables = Exact<{
  input: CategoriaProductoInput;
}>;


export type CreateCategoriaProductoMutation = { __typename?: 'Mutation', CreateCategoriaProducto: { __typename?: 'CategoriaProducto', categoriaProductoId?: string | null, titulo?: string | null, slug?: string | null, estado?: string | null, keywords?: string | null, descripcion?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type CreateProductoMutationVariables = Exact<{
  input: ProductoInput;
}>;


export type CreateProductoMutation = { __typename?: 'Mutation', CreateProducto: { __typename?: 'Producto', productoId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, precioReal?: number | null, precioOferta?: number | null, stockMinimo?: number | null, stockReal?: number | null, keywords?: string | null, destacado?: string | null, estado?: string | null, categoriaProductoId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, galeria?: Array<{ __typename?: 'Imagen', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null> | null, CategoriaProducto?: { __typename?: 'CategoriaProducto', updated_at?: any | null, created_at?: any | null, descripcion?: string | null, keywords?: string | null, estado?: string | null, slug?: string | null, titulo?: string | null, categoriaProductoId?: string | null, imagenSecundaria?: { __typename?: 'Imagen', estado?: string | null, titulo?: string | null, id?: string | null, url?: string | null } | null, imagenPrincipal?: { __typename?: 'Imagen', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null } | null } };

export type DeleteBancosMutationVariables = Exact<{
  bancoId: Scalars['Int'];
}>;


export type DeleteBancosMutation = { __typename?: 'Mutation', DeleteBancos: string };

export type DeleteBlogMutationVariables = Exact<{
  blogId: Scalars['Int'];
}>;


export type DeleteBlogMutation = { __typename?: 'Mutation', DeleteBlog: string };

export type DeleteCategoriaBlogMutationVariables = Exact<{
  categoriaBlogId: Scalars['Int'];
}>;


export type DeleteCategoriaBlogMutation = { __typename?: 'Mutation', DeleteCategoriaBlog: string };

export type DeleteCategoriaProductoMutationVariables = Exact<{
  categoriaProductoId: Scalars['Int'];
}>;


export type DeleteCategoriaProductoMutation = { __typename?: 'Mutation', DeleteCategoriaProducto: string };

export type DeleteProductoMutationVariables = Exact<{
  productoId: Scalars['Int'];
}>;


export type DeleteProductoMutation = { __typename?: 'Mutation', DeleteProducto: string };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', Login: { __typename?: 'User', id?: string | null, tipoUsuario?: number | null, tipoDocumento?: string | null, numeroDocumento?: string | null, genero?: number | null, nombres?: string | null, apellidos?: string | null, celular?: string | null, fechaNacimiento?: any | null, foto?: string | null, email?: string | null, apiToken?: string | null, customer_id?: string | null } };

export type UpdateBancosMutationVariables = Exact<{
  input?: InputMaybe<BancoInput>;
}>;


export type UpdateBancosMutation = { __typename?: 'Mutation', UpdateBancos: { __typename?: 'Banco', bancoId?: string | null, titulo?: string | null, estado?: string | null, numeroCuenta?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null } };

export type UpdateCategoriaBlogMutationVariables = Exact<{
  input: CategoriaBlogInput;
}>;


export type UpdateCategoriaBlogMutation = { __typename?: 'Mutation', UpdateCategoriaBlog: { __typename?: 'CategoriaBlog', categoriaBlogId?: string | null, titulo?: string | null, slug?: string | null, keywords?: string | null, descripcion?: string | null, estado?: string | null, created_at?: any | null, updated_at?: any | null, numeroBlogs?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type UpdateCategoriaProductoMutationVariables = Exact<{
  input: CategoriaProductoInput;
}>;


export type UpdateCategoriaProductoMutation = { __typename?: 'Mutation', UpdateCategoriaProducto: { __typename?: 'CategoriaProducto', categoriaProductoId?: string | null, titulo?: string | null, slug?: string | null, estado?: string | null, keywords?: string | null, descripcion?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type UpdateDestacadoBlogMutationVariables = Exact<{
  input: UpdateDestacadoBlogInput;
}>;


export type UpdateDestacadoBlogMutation = { __typename?: 'Mutation', UpdateDestacadoBlog: { __typename?: 'Blog', blogId?: string | null, titulo?: string | null, destacado?: string | null } };

export type UpdateDestacadoCategoriaBlogMutationVariables = Exact<{
  input: UpdateDestacadoCategoriaBlogInput;
}>;


export type UpdateDestacadoCategoriaBlogMutation = { __typename?: 'Mutation', UpdateDestacadoCategoriaBlog: { __typename?: 'CategoriaBlog', categoriaBlogId?: string | null, titulo?: string | null, slug?: string | null, keywords?: string | null, descripcion?: string | null, estado?: string | null, destacado?: string | null, numeroBlogs?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type UpdateDestacadoCategoriaProductoMutationVariables = Exact<{
  input: UpdateDestacadoCategoriaProductoInput;
}>;


export type UpdateDestacadoCategoriaProductoMutation = { __typename?: 'Mutation', UpdateDestacadoCategoriaProducto: { __typename?: 'CategoriaProducto', categoriaProductoId?: string | null, titulo?: string | null, slug?: string | null, estado?: string | null, keywords?: string | null, descripcion?: string | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type UpdateDestacadoProductoMutationVariables = Exact<{
  input: UpdateDestacadoProductoInput;
}>;


export type UpdateDestacadoProductoMutation = { __typename?: 'Mutation', UpdateDestacadoProducto: { __typename?: 'Producto', productoId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, precioReal?: number | null, precioOferta?: number | null, stockMinimo?: number | null, stockReal?: number | null, keywords?: string | null, destacado?: string | null, estado?: string | null, categoriaProductoId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, galeria?: Array<{ __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null> | null } };

export type UpdateEstadoBlogMutationVariables = Exact<{
  input: UpdateEstadoBlogInput;
}>;


export type UpdateEstadoBlogMutation = { __typename?: 'Mutation', UpdateEstadoBlog: { __typename?: 'Blog', blogId?: string | null, titulo?: string | null, estado?: string | null } };

export type UpdateEstadoCategoriaBlogMutationVariables = Exact<{
  input: UpdateEstadoCategoriaBlogInput;
}>;


export type UpdateEstadoCategoriaBlogMutation = { __typename?: 'Mutation', UpdateEstadoCategoriaBlog: { __typename?: 'CategoriaBlog', categoriaBlogId?: string | null, titulo?: string | null, slug?: string | null, keywords?: string | null, descripcion?: string | null, estado?: string | null, created_at?: any | null, updated_at?: any | null, numeroBlogs?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type UpdateEstadoCategoriaProductoMutationVariables = Exact<{
  input: UpdateEstadoCategoriaProductoInput;
}>;


export type UpdateEstadoCategoriaProductoMutation = { __typename?: 'Mutation', UpdateEstadoCategoriaProducto: { __typename?: 'CategoriaProducto', categoriaProductoId?: string | null, titulo?: string | null, slug?: string | null, estado?: string | null, keywords?: string | null, descripcion?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type UpdateEstadoProductoMutationVariables = Exact<{
  input: UpdateEstadoProductoInput;
}>;


export type UpdateEstadoProductoMutation = { __typename?: 'Mutation', UpdateEstadoProducto: { __typename?: 'Producto', productoId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, precioReal?: number | null, precioOferta?: number | null, stockMinimo?: number | null, stockReal?: number | null, keywords?: string | null, destacado?: string | null, estado?: string | null, categoriaProductoId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, galeria?: Array<{ __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null> | null } };

export type UpdatePasswordUsuarioMutationVariables = Exact<{
  input: UpdatePasswordInput;
}>;


export type UpdatePasswordUsuarioMutation = { __typename?: 'Mutation', UpdatePasswordUsuario: { __typename?: 'User', id?: string | null, tipoUsuario?: number | null, tipoDocumento?: string | null, numeroDocumento?: string | null, genero?: number | null, nombres?: string | null, apellidos?: string | null, celular?: string | null, fechaNacimiento?: any | null, foto?: string | null, email?: string | null, apiToken?: string | null, customer_id?: string | null } };

export type UpdateProductoMutationVariables = Exact<{
  input: ProductoInput;
}>;


export type UpdateProductoMutation = { __typename?: 'Mutation', UpdateProducto: { __typename?: 'Producto', productoId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, precioReal?: number | null, precioOferta?: number | null, stockMinimo?: number | null, stockReal?: number | null, keywords?: string | null, destacado?: string | null, estado?: string | null, categoriaProductoId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, galeria?: Array<{ __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null> | null } };

export type CreateEfectivoMovilMutationVariables = Exact<{
  input?: InputMaybe<EfectivoMovilInput>;
}>;


export type CreateEfectivoMovilMutation = { __typename?: 'Mutation', CreateEfectivoMovil: { __typename?: 'EfectivoMovil', updated_at?: any | null, created_at?: any | null, numeroCelular?: string | null, estado?: string | null, titulo?: string | null, efectivoMovilId?: string | null, imagenQr?: { __typename?: 'Imagen', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null, imagenPrincipal?: { __typename?: 'Imagen', url?: string | null, titulo?: string | null, estado?: string | null, id?: string | null } | null } };

export type DeleteEfectivoMovilMutationVariables = Exact<{
  efectivoMovilId: Scalars['Int'];
}>;


export type DeleteEfectivoMovilMutation = { __typename?: 'Mutation', DeleteEfectivoMovil: string };

export type UpdateEfectivoMovilMutationVariables = Exact<{
  input?: InputMaybe<EfectivoMovilInput>;
}>;


export type UpdateEfectivoMovilMutation = { __typename?: 'Mutation', UpdateEfectivoMovil: { __typename?: 'EfectivoMovil', efectivoMovilId?: string | null, titulo?: string | null, estado?: string | null, updated_at?: any | null, created_at?: any | null, numeroCelular?: string | null, imagenPrincipal?: { __typename?: 'Imagen', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null, imagenQr?: { __typename?: 'Imagen', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null } };

export type UpdateEstadoEfectivoMovilMutationVariables = Exact<{
  input?: InputMaybe<UpdateEstadoEfectivoMovilInput>;
}>;


export type UpdateEstadoEfectivoMovilMutation = { __typename?: 'Mutation', UpdateEstadoEfectivoMovil: { __typename?: 'EfectivoMovil', efectivoMovilId?: string | null, titulo?: string | null, estado?: string | null } };

export type CreateImagenMutationVariables = Exact<{
  imagen: Scalars['Upload'];
}>;


export type CreateImagenMutation = { __typename?: 'Mutation', CreateImagen: string };

export type DeleteImagenMutationVariables = Exact<{
  deleteImagenId: Scalars['Int'];
}>;


export type DeleteImagenMutation = { __typename?: 'Mutation', DeleteImagen: string };

export type UpdateEstadoPedidoMutationVariables = Exact<{
  input: UpdateEstadoPedidoInput;
}>;


export type UpdateEstadoPedidoMutation = { __typename?: 'Mutation', UpdateEstadoPedido: { __typename?: 'Pedido', pedidoId?: string | null, estado?: string | null } };

export type UpdateVistoPedidoMutationVariables = Exact<{
  input: UpdateVistoPedidoInput;
}>;


export type UpdateVistoPedidoMutation = { __typename?: 'Mutation', UpdateVistoPedido: { __typename?: 'Pedido', visto?: number | null, pedidoId?: string | null } };

export type UpdateBlogMutationVariables = Exact<{
  input: BlogInput;
}>;


export type UpdateBlogMutation = { __typename?: 'Mutation', updateBlog: { __typename?: 'Blog', blogId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, keywords?: string | null, estado?: string | null, destacado?: string | null, categoriaBlogId?: number | null, usuarioId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type UpdateEstadoBancoMutationVariables = Exact<{
  input?: InputMaybe<UpdateEstadoBancoInput>;
}>;


export type UpdateEstadoBancoMutation = { __typename?: 'Mutation', UpdateEstadoBanco: { __typename?: 'Banco', bancoId?: string | null, titulo?: string | null, estado?: string | null, numeroCuenta?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type CreateSliderMutationVariables = Exact<{
  input: SliderInput;
}>;


export type CreateSliderMutation = { __typename?: 'Mutation', CreateSlider: { __typename?: 'Slider', sliderId?: string | null, titulo?: string | null, tipoLink?: string | null, link?: string | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type GetAllBancosQueryVariables = Exact<{
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllBancosQuery = { __typename?: 'Query', GetAllBancos: { __typename?: 'GetAllBancos', numeroTotal?: number | null, data?: Array<{ __typename?: 'Banco', bancoId?: string | null, titulo?: string | null, estado?: string | null, numeroCuenta?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null }> | null } };

export type GetAllBlogsQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllBlogsQuery = { __typename?: 'Query', GetAllBlogs: { __typename?: 'GetAllBlogs', numeroTotal?: number | null, data?: Array<{ __typename?: 'Blog', blogId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, keywords?: string | null, estado?: string | null, destacado?: string | null, categoriaBlogId?: number | null, usuarioId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, CategoriaBlog?: { __typename?: 'CategoriaBlog', titulo?: string | null } | null }> | null } };

export type GetAllCategoriaBlogsQueryVariables = Exact<{
  estado?: InputMaybe<Scalars['String']>;
  destacado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllCategoriaBlogsQuery = { __typename?: 'Query', GetAllCategoriaBlogs: { __typename?: 'GetAllCategoriaBlogs', numeroTotal?: number | null, data?: Array<{ __typename?: 'CategoriaBlog', categoriaBlogId?: string | null, titulo?: string | null, slug?: string | null, keywords?: string | null, descripcion?: string | null, estado?: string | null, destacado?: string | null, created_at?: any | null, updated_at?: any | null, numeroBlogs?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null }> | null } };

export type GetAllCategoriaProductosQueryVariables = Exact<{
  estado?: InputMaybe<Scalars['String']>;
  destacado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllCategoriaProductosQuery = { __typename?: 'Query', GetAllCategoriaProductos: { __typename?: 'GetAllCategoriaProductos', numeroTotal?: number | null, data?: Array<{ __typename?: 'CategoriaProducto', categoriaProductoId?: string | null, titulo?: string | null, slug?: string | null, estado?: string | null, destacado?: string | null, keywords?: string | null, descripcion?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null }> | null } };

export type GetAllProductosQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
  destacado?: InputMaybe<Scalars['String']>;
  palabraClave?: InputMaybe<Scalars['String']>;
}>;


export type GetAllProductosQuery = { __typename?: 'Query', GetAllProductos: { __typename?: 'GetAllProductos', numeroTotal?: number | null, data?: Array<{ __typename?: 'Producto', productoId?: string | null, titulo?: string | null, slug?: string | null, estado?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, precioReal?: number | null, precioOferta?: number | null, stockMinimo?: number | null, stockReal?: number | null, keywords?: string | null, destacado?: string | null, categoriaProductoId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, CategoriaProducto?: { __typename?: 'CategoriaProducto', titulo?: string | null } | null }> | null } };

export type GetAllProductosRelacionadosQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetAllProductosRelacionadosQuery = { __typename?: 'Query', GetAllProductosRelacionados: { __typename?: 'GetAllProductos', numeroTotal?: number | null, data?: Array<{ __typename?: 'Producto', productoId?: string | null, titulo?: string | null, imagenPrincipal?: { __typename?: 'Imagen', url?: string | null } | null }> | null } };

export type GetAllSliderQueryVariables = Exact<{
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllSliderQuery = { __typename?: 'Query', GetAllSliders: { __typename?: 'GetAllSliders', numeroTotal?: number | null, data?: Array<{ __typename?: 'Slider', sliderId?: string | null, titulo?: string | null, tipoLink?: string | null, link?: string | null, estado?: string | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null }> | null } };

export type GetBancoIdQueryVariables = Exact<{
  bancoId?: InputMaybe<Scalars['Int']>;
}>;


export type GetBancoIdQuery = { __typename?: 'Query', GetBancoId: { __typename?: 'Banco', bancoId?: string | null, titulo?: string | null, estado?: string | null, numeroCuenta?: string | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type GetBlogSlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetBlogSlugQuery = { __typename?: 'Query', GetBlogSlug: { __typename?: 'Blog', blogId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, keywords?: string | null, estado?: string | null, destacado?: string | null, categoriaBlogId?: number | null, usuarioId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, CategoriaBlog?: { __typename?: 'CategoriaBlog', titulo?: string | null } | null } };

export type GetCategoriaBlogSlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetCategoriaBlogSlugQuery = { __typename?: 'Query', GetCategoriaBlogSlug: { __typename?: 'CategoriaBlog', categoriaBlogId?: string | null, titulo?: string | null, slug?: string | null, keywords?: string | null, descripcion?: string | null, estado?: string | null, created_at?: any | null, updated_at?: any | null, numeroBlogs?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null } };

export type GetCategoriaProductoSlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetCategoriaProductoSlugQuery = { __typename?: 'Query', GetCategoriaProductoSlug: { __typename?: 'CategoriaProducto', categoriaProductoId?: string | null, titulo?: string | null, slug?: string | null, estado?: string | null, keywords?: string | null, descripcion?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type GetProductoSlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetProductoSlugQuery = { __typename?: 'Query', GetProductoSlug: { __typename?: 'Producto', productoId?: string | null, titulo?: string | null, slug?: string | null, estado?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, precioReal?: number | null, precioOferta?: number | null, stockMinimo?: number | null, stockReal?: number | null, keywords?: string | null, destacado?: string | null, categoriaProductoId?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, galeria?: Array<{ __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null> | null, CategoriaProducto?: { __typename?: 'CategoriaProducto', titulo?: string | null } | null } };

export type GetSliderIdQueryVariables = Exact<{
  sliderId?: InputMaybe<Scalars['Int']>;
}>;


export type GetSliderIdQuery = { __typename?: 'Query', GetSliderId: { __typename?: 'Slider', sliderId?: string | null, titulo?: string | null, tipoLink?: string | null, link?: string | null, estado?: string | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null } };

export type UpdateEstadoSliderMutationVariables = Exact<{
  input: UpdateEstadoSliderInput;
}>;


export type UpdateEstadoSliderMutation = { __typename?: 'Mutation', UpdateEstadoSlider: { __typename?: 'Slider', sliderId?: string | null, titulo?: string | null, estado?: string | null } };

export type UpdateSliderMutationVariables = Exact<{
  input: SliderInput;
}>;


export type UpdateSliderMutation = { __typename?: 'Mutation', UpdateSlider: { __typename?: 'Slider', sliderId?: string | null, titulo?: string | null, tipoLink?: string | null, link?: string | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type GetAllEfectivoMovilQueryVariables = Exact<{
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllEfectivoMovilQuery = { __typename?: 'Query', GetAllEfectivoMovil: { __typename?: 'GetAllEfectivoMovil', numeroTotal?: number | null, data?: Array<{ __typename?: 'EfectivoMovil', efectivoMovilId?: string | null, titulo?: string | null, estado?: string | null, numeroCelular?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagen', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null, imagenQr?: { __typename?: 'Imagen', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null }> | null } };

export type GetEfectivoMovilIdQueryVariables = Exact<{
  efectivoMovilId?: InputMaybe<Scalars['Int']>;
}>;


export type GetEfectivoMovilIdQuery = { __typename?: 'Query', GetEfectivoMovilId: { __typename?: 'EfectivoMovil', efectivoMovilId?: string | null, titulo?: string | null, estado?: string | null, updated_at?: any | null, created_at?: any | null, numeroCelular?: string | null, imagenPrincipal?: { __typename?: 'Imagen', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null, imagenQr?: { __typename?: 'Imagen', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null } };

export type GetAllImagenesQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllImagenesQuery = { __typename?: 'Query', GetAllImagenes?: { __typename?: 'GetAllImagenes', numeroTotal?: number | null, data?: Array<{ __typename?: 'Imagen', id?: string | null, url?: string | null, titulo?: string | null }> | null } | null };

export type GetAllPedidosQueryVariables = Exact<{
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  FechaInicio?: InputMaybe<Scalars['String']>;
  FechaFin?: InputMaybe<Scalars['String']>;
  nombreCliente?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
}>;


export type GetAllPedidosQuery = { __typename?: 'Query', GetAllPedidos: { __typename?: 'GetAllPedidos', numeroTotal?: number | null, data?: Array<{ __typename?: 'Pedido', fechaPedido?: any | null, estado?: string | null, precioTotal?: number | null, voucher?: string | null, visto?: number | null, tipoVenta?: string | null, pedidoId?: string | null, medioPago?: string | null, DetallePedido?: Array<{ __typename?: 'DetallePedido', cantidad?: number | null, detallePedidoId?: string | null, pedidoId?: number | null, imagenPrincipal?: string | null, precio?: number | null, productoId?: number | null, titulo?: string | null, total?: number | null }> | null, Usuario?: { __typename?: 'User', nombres?: string | null, numeroDocumento?: string | null, apellidos?: string | null, email?: string | null } | null }> | null } };

export type GetPedidoIdQueryVariables = Exact<{
  pedidoId?: InputMaybe<Scalars['Int']>;
}>;


export type GetPedidoIdQuery = { __typename?: 'Query', GetPedidoId: { __typename?: 'Pedido', direccionEnvio?: string | null, estado?: string | null, fechaPedido?: any | null, medioPago?: string | null, numeroOperacion?: string | null, pedidoId?: string | null, precioEnvio?: number | null, precioTotal?: number | null, ticketPdf?: string | null, tipoEnvio?: string | null, tipoPago?: number | null, tipoVenta?: string | null, usuarioId?: number | null, visto?: number | null, voucher?: string | null, DetallePedido?: Array<{ __typename?: 'DetallePedido', cantidad?: number | null, detallePedidoId?: string | null, imagenPrincipal?: string | null, pedidoId?: number | null, precio?: number | null, productoId?: number | null, titulo?: string | null, total?: number | null }> | null, DireccionEnvio?: { __typename?: 'DireccionEnvio', DeparCodi?: number | null, DistCodi?: number | null, ProvCodi?: number | null, celular?: string | null, direccion?: string | null, direccionEnvioId?: string | null, nombreAgencia?: string | null, pedidoId?: number | null } | null, Recibo?: { __typename?: 'Recibo', ruc?: string | null, reciboId?: string | null, razonSocial?: string | null, pedidoId?: number | null } | null, Usuario?: { __typename?: 'User', apellidos?: string | null, apiToken?: string | null, celular?: string | null, customer_id?: string | null, email?: string | null, estado?: string | null, fechaNacimiento?: any | null, foto?: string | null, genero?: number | null, id?: string | null, nombres?: string | null, numeroDocumento?: string | null, tipoDocumento?: string | null, tipoUsuario?: number | null } | null } };


export const DeleteSliderDocument = gql`
    mutation DeleteSlider($sliderId: Int!) {
  DeleteSlider(sliderId: $sliderId)
}
    `;
export type DeleteSliderMutationFn = Apollo.MutationFunction<DeleteSliderMutation, DeleteSliderMutationVariables>;

/**
 * __useDeleteSliderMutation__
 *
 * To run a mutation, you first call `useDeleteSliderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSliderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSliderMutation, { data, loading, error }] = useDeleteSliderMutation({
 *   variables: {
 *      sliderId: // value for 'sliderId'
 *   },
 * });
 */
export function useDeleteSliderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSliderMutation, DeleteSliderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSliderMutation, DeleteSliderMutationVariables>(DeleteSliderDocument, options);
      }
export type DeleteSliderMutationHookResult = ReturnType<typeof useDeleteSliderMutation>;
export type DeleteSliderMutationResult = Apollo.MutationResult<DeleteSliderMutation>;
export type DeleteSliderMutationOptions = Apollo.BaseMutationOptions<DeleteSliderMutation, DeleteSliderMutationVariables>;
export const CreateBancosDocument = gql`
    mutation CreateBancos($input: BancoInput) {
  CreateBancos(input: $input) {
    bancoId
    titulo
    estado
    numeroCuenta
    imagenPrincipal {
      url
      estado
      titulo
      id
    }
    created_at
    updated_at
  }
}
    `;
export type CreateBancosMutationFn = Apollo.MutationFunction<CreateBancosMutation, CreateBancosMutationVariables>;

/**
 * __useCreateBancosMutation__
 *
 * To run a mutation, you first call `useCreateBancosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBancosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBancosMutation, { data, loading, error }] = useCreateBancosMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBancosMutation(baseOptions?: Apollo.MutationHookOptions<CreateBancosMutation, CreateBancosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBancosMutation, CreateBancosMutationVariables>(CreateBancosDocument, options);
      }
export type CreateBancosMutationHookResult = ReturnType<typeof useCreateBancosMutation>;
export type CreateBancosMutationResult = Apollo.MutationResult<CreateBancosMutation>;
export type CreateBancosMutationOptions = Apollo.BaseMutationOptions<CreateBancosMutation, CreateBancosMutationVariables>;
export const CreateBlogDocument = gql`
    mutation CreateBlog($input: BlogInput!) {
  CreateBlog(input: $input) {
    titulo
    slug
    descripcionCorta
    descripcionLarga
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    keywords
    estado
    destacado
    categoriaBlogId
    usuarioId
    created_at
    updated_at
  }
}
    `;
export type CreateBlogMutationFn = Apollo.MutationFunction<CreateBlogMutation, CreateBlogMutationVariables>;

/**
 * __useCreateBlogMutation__
 *
 * To run a mutation, you first call `useCreateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBlogMutation, { data, loading, error }] = useCreateBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBlogMutation(baseOptions?: Apollo.MutationHookOptions<CreateBlogMutation, CreateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBlogMutation, CreateBlogMutationVariables>(CreateBlogDocument, options);
      }
export type CreateBlogMutationHookResult = ReturnType<typeof useCreateBlogMutation>;
export type CreateBlogMutationResult = Apollo.MutationResult<CreateBlogMutation>;
export type CreateBlogMutationOptions = Apollo.BaseMutationOptions<CreateBlogMutation, CreateBlogMutationVariables>;
export const CreateCategoriaBlogDocument = gql`
    mutation CreateCategoriaBlog($input: CategoriaBlogInput!) {
  CreateCategoriaBlog(input: $input) {
    categoriaBlogId
    titulo
    slug
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    estado
    created_at
    updated_at
    numeroBlogs
  }
}
    `;
export type CreateCategoriaBlogMutationFn = Apollo.MutationFunction<CreateCategoriaBlogMutation, CreateCategoriaBlogMutationVariables>;

/**
 * __useCreateCategoriaBlogMutation__
 *
 * To run a mutation, you first call `useCreateCategoriaBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoriaBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoriaBlogMutation, { data, loading, error }] = useCreateCategoriaBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCategoriaBlogMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoriaBlogMutation, CreateCategoriaBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoriaBlogMutation, CreateCategoriaBlogMutationVariables>(CreateCategoriaBlogDocument, options);
      }
export type CreateCategoriaBlogMutationHookResult = ReturnType<typeof useCreateCategoriaBlogMutation>;
export type CreateCategoriaBlogMutationResult = Apollo.MutationResult<CreateCategoriaBlogMutation>;
export type CreateCategoriaBlogMutationOptions = Apollo.BaseMutationOptions<CreateCategoriaBlogMutation, CreateCategoriaBlogMutationVariables>;
export const CreateCategoriaProductoDocument = gql`
    mutation CreateCategoriaProducto($input: CategoriaProductoInput!) {
  CreateCategoriaProducto(input: $input) {
    categoriaProductoId
    titulo
    slug
    estado
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    created_at
    updated_at
  }
}
    `;
export type CreateCategoriaProductoMutationFn = Apollo.MutationFunction<CreateCategoriaProductoMutation, CreateCategoriaProductoMutationVariables>;

/**
 * __useCreateCategoriaProductoMutation__
 *
 * To run a mutation, you first call `useCreateCategoriaProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoriaProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoriaProductoMutation, { data, loading, error }] = useCreateCategoriaProductoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCategoriaProductoMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoriaProductoMutation, CreateCategoriaProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoriaProductoMutation, CreateCategoriaProductoMutationVariables>(CreateCategoriaProductoDocument, options);
      }
export type CreateCategoriaProductoMutationHookResult = ReturnType<typeof useCreateCategoriaProductoMutation>;
export type CreateCategoriaProductoMutationResult = Apollo.MutationResult<CreateCategoriaProductoMutation>;
export type CreateCategoriaProductoMutationOptions = Apollo.BaseMutationOptions<CreateCategoriaProductoMutation, CreateCategoriaProductoMutationVariables>;
export const CreateProductoDocument = gql`
    mutation CreateProducto($input: ProductoInput!) {
  CreateProducto(input: $input) {
    productoId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    precioReal
    precioOferta
    stockMinimo
    stockReal
    imagenPrincipal {
      url
      estado
      titulo
      id
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    galeria {
      url
      estado
      titulo
      id
    }
    keywords
    destacado
    estado
    categoriaProductoId
    CategoriaProducto {
      updated_at
      created_at
      imagenSecundaria {
        estado
        titulo
        id
        url
      }
      imagenPrincipal {
        url
        estado
        titulo
        id
      }
      descripcion
      keywords
      estado
      slug
      titulo
      categoriaProductoId
    }
    created_at
    updated_at
  }
}
    `;
export type CreateProductoMutationFn = Apollo.MutationFunction<CreateProductoMutation, CreateProductoMutationVariables>;

/**
 * __useCreateProductoMutation__
 *
 * To run a mutation, you first call `useCreateProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductoMutation, { data, loading, error }] = useCreateProductoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductoMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductoMutation, CreateProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductoMutation, CreateProductoMutationVariables>(CreateProductoDocument, options);
      }
export type CreateProductoMutationHookResult = ReturnType<typeof useCreateProductoMutation>;
export type CreateProductoMutationResult = Apollo.MutationResult<CreateProductoMutation>;
export type CreateProductoMutationOptions = Apollo.BaseMutationOptions<CreateProductoMutation, CreateProductoMutationVariables>;
export const DeleteBancosDocument = gql`
    mutation DeleteBancos($bancoId: Int!) {
  DeleteBancos(bancoId: $bancoId)
}
    `;
export type DeleteBancosMutationFn = Apollo.MutationFunction<DeleteBancosMutation, DeleteBancosMutationVariables>;

/**
 * __useDeleteBancosMutation__
 *
 * To run a mutation, you first call `useDeleteBancosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBancosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBancosMutation, { data, loading, error }] = useDeleteBancosMutation({
 *   variables: {
 *      bancoId: // value for 'bancoId'
 *   },
 * });
 */
export function useDeleteBancosMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBancosMutation, DeleteBancosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBancosMutation, DeleteBancosMutationVariables>(DeleteBancosDocument, options);
      }
export type DeleteBancosMutationHookResult = ReturnType<typeof useDeleteBancosMutation>;
export type DeleteBancosMutationResult = Apollo.MutationResult<DeleteBancosMutation>;
export type DeleteBancosMutationOptions = Apollo.BaseMutationOptions<DeleteBancosMutation, DeleteBancosMutationVariables>;
export const DeleteBlogDocument = gql`
    mutation DeleteBlog($blogId: Int!) {
  DeleteBlog(blogId: $blogId)
}
    `;
export type DeleteBlogMutationFn = Apollo.MutationFunction<DeleteBlogMutation, DeleteBlogMutationVariables>;

/**
 * __useDeleteBlogMutation__
 *
 * To run a mutation, you first call `useDeleteBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBlogMutation, { data, loading, error }] = useDeleteBlogMutation({
 *   variables: {
 *      blogId: // value for 'blogId'
 *   },
 * });
 */
export function useDeleteBlogMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBlogMutation, DeleteBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBlogMutation, DeleteBlogMutationVariables>(DeleteBlogDocument, options);
      }
export type DeleteBlogMutationHookResult = ReturnType<typeof useDeleteBlogMutation>;
export type DeleteBlogMutationResult = Apollo.MutationResult<DeleteBlogMutation>;
export type DeleteBlogMutationOptions = Apollo.BaseMutationOptions<DeleteBlogMutation, DeleteBlogMutationVariables>;
export const DeleteCategoriaBlogDocument = gql`
    mutation DeleteCategoriaBlog($categoriaBlogId: Int!) {
  DeleteCategoriaBlog(categoriaBlogId: $categoriaBlogId)
}
    `;
export type DeleteCategoriaBlogMutationFn = Apollo.MutationFunction<DeleteCategoriaBlogMutation, DeleteCategoriaBlogMutationVariables>;

/**
 * __useDeleteCategoriaBlogMutation__
 *
 * To run a mutation, you first call `useDeleteCategoriaBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoriaBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoriaBlogMutation, { data, loading, error }] = useDeleteCategoriaBlogMutation({
 *   variables: {
 *      categoriaBlogId: // value for 'categoriaBlogId'
 *   },
 * });
 */
export function useDeleteCategoriaBlogMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoriaBlogMutation, DeleteCategoriaBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoriaBlogMutation, DeleteCategoriaBlogMutationVariables>(DeleteCategoriaBlogDocument, options);
      }
export type DeleteCategoriaBlogMutationHookResult = ReturnType<typeof useDeleteCategoriaBlogMutation>;
export type DeleteCategoriaBlogMutationResult = Apollo.MutationResult<DeleteCategoriaBlogMutation>;
export type DeleteCategoriaBlogMutationOptions = Apollo.BaseMutationOptions<DeleteCategoriaBlogMutation, DeleteCategoriaBlogMutationVariables>;
export const DeleteCategoriaProductoDocument = gql`
    mutation DeleteCategoriaProducto($categoriaProductoId: Int!) {
  DeleteCategoriaProducto(categoriaProductoId: $categoriaProductoId)
}
    `;
export type DeleteCategoriaProductoMutationFn = Apollo.MutationFunction<DeleteCategoriaProductoMutation, DeleteCategoriaProductoMutationVariables>;

/**
 * __useDeleteCategoriaProductoMutation__
 *
 * To run a mutation, you first call `useDeleteCategoriaProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoriaProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoriaProductoMutation, { data, loading, error }] = useDeleteCategoriaProductoMutation({
 *   variables: {
 *      categoriaProductoId: // value for 'categoriaProductoId'
 *   },
 * });
 */
export function useDeleteCategoriaProductoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoriaProductoMutation, DeleteCategoriaProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoriaProductoMutation, DeleteCategoriaProductoMutationVariables>(DeleteCategoriaProductoDocument, options);
      }
export type DeleteCategoriaProductoMutationHookResult = ReturnType<typeof useDeleteCategoriaProductoMutation>;
export type DeleteCategoriaProductoMutationResult = Apollo.MutationResult<DeleteCategoriaProductoMutation>;
export type DeleteCategoriaProductoMutationOptions = Apollo.BaseMutationOptions<DeleteCategoriaProductoMutation, DeleteCategoriaProductoMutationVariables>;
export const DeleteProductoDocument = gql`
    mutation DeleteProducto($productoId: Int!) {
  DeleteProducto(productoId: $productoId)
}
    `;
export type DeleteProductoMutationFn = Apollo.MutationFunction<DeleteProductoMutation, DeleteProductoMutationVariables>;

/**
 * __useDeleteProductoMutation__
 *
 * To run a mutation, you first call `useDeleteProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductoMutation, { data, loading, error }] = useDeleteProductoMutation({
 *   variables: {
 *      productoId: // value for 'productoId'
 *   },
 * });
 */
export function useDeleteProductoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductoMutation, DeleteProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductoMutation, DeleteProductoMutationVariables>(DeleteProductoDocument, options);
      }
export type DeleteProductoMutationHookResult = ReturnType<typeof useDeleteProductoMutation>;
export type DeleteProductoMutationResult = Apollo.MutationResult<DeleteProductoMutation>;
export type DeleteProductoMutationOptions = Apollo.BaseMutationOptions<DeleteProductoMutation, DeleteProductoMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  Login(input: $input) {
    id
    tipoUsuario
    tipoDocumento
    numeroDocumento
    genero
    nombres
    apellidos
    celular
    fechaNacimiento
    foto
    email
    apiToken
    customer_id
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UpdateBancosDocument = gql`
    mutation UpdateBancos($input: BancoInput) {
  UpdateBancos(input: $input) {
    bancoId
    titulo
    estado
    numeroCuenta
    imagenPrincipal {
      url
      estado
      titulo
      id
    }
    created_at
    updated_at
  }
}
    `;
export type UpdateBancosMutationFn = Apollo.MutationFunction<UpdateBancosMutation, UpdateBancosMutationVariables>;

/**
 * __useUpdateBancosMutation__
 *
 * To run a mutation, you first call `useUpdateBancosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBancosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBancosMutation, { data, loading, error }] = useUpdateBancosMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBancosMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBancosMutation, UpdateBancosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBancosMutation, UpdateBancosMutationVariables>(UpdateBancosDocument, options);
      }
export type UpdateBancosMutationHookResult = ReturnType<typeof useUpdateBancosMutation>;
export type UpdateBancosMutationResult = Apollo.MutationResult<UpdateBancosMutation>;
export type UpdateBancosMutationOptions = Apollo.BaseMutationOptions<UpdateBancosMutation, UpdateBancosMutationVariables>;
export const UpdateCategoriaBlogDocument = gql`
    mutation UpdateCategoriaBlog($input: CategoriaBlogInput!) {
  UpdateCategoriaBlog(input: $input) {
    categoriaBlogId
    titulo
    slug
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    estado
    created_at
    updated_at
    numeroBlogs
  }
}
    `;
export type UpdateCategoriaBlogMutationFn = Apollo.MutationFunction<UpdateCategoriaBlogMutation, UpdateCategoriaBlogMutationVariables>;

/**
 * __useUpdateCategoriaBlogMutation__
 *
 * To run a mutation, you first call `useUpdateCategoriaBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoriaBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoriaBlogMutation, { data, loading, error }] = useUpdateCategoriaBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCategoriaBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoriaBlogMutation, UpdateCategoriaBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoriaBlogMutation, UpdateCategoriaBlogMutationVariables>(UpdateCategoriaBlogDocument, options);
      }
export type UpdateCategoriaBlogMutationHookResult = ReturnType<typeof useUpdateCategoriaBlogMutation>;
export type UpdateCategoriaBlogMutationResult = Apollo.MutationResult<UpdateCategoriaBlogMutation>;
export type UpdateCategoriaBlogMutationOptions = Apollo.BaseMutationOptions<UpdateCategoriaBlogMutation, UpdateCategoriaBlogMutationVariables>;
export const UpdateCategoriaProductoDocument = gql`
    mutation UpdateCategoriaProducto($input: CategoriaProductoInput!) {
  UpdateCategoriaProducto(input: $input) {
    categoriaProductoId
    titulo
    slug
    estado
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    created_at
    updated_at
  }
}
    `;
export type UpdateCategoriaProductoMutationFn = Apollo.MutationFunction<UpdateCategoriaProductoMutation, UpdateCategoriaProductoMutationVariables>;

/**
 * __useUpdateCategoriaProductoMutation__
 *
 * To run a mutation, you first call `useUpdateCategoriaProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoriaProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoriaProductoMutation, { data, loading, error }] = useUpdateCategoriaProductoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCategoriaProductoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoriaProductoMutation, UpdateCategoriaProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoriaProductoMutation, UpdateCategoriaProductoMutationVariables>(UpdateCategoriaProductoDocument, options);
      }
export type UpdateCategoriaProductoMutationHookResult = ReturnType<typeof useUpdateCategoriaProductoMutation>;
export type UpdateCategoriaProductoMutationResult = Apollo.MutationResult<UpdateCategoriaProductoMutation>;
export type UpdateCategoriaProductoMutationOptions = Apollo.BaseMutationOptions<UpdateCategoriaProductoMutation, UpdateCategoriaProductoMutationVariables>;
export const UpdateDestacadoBlogDocument = gql`
    mutation UpdateDestacadoBlog($input: UpdateDestacadoBlogInput!) {
  UpdateDestacadoBlog(input: $input) {
    blogId
    titulo
    destacado
  }
}
    `;
export type UpdateDestacadoBlogMutationFn = Apollo.MutationFunction<UpdateDestacadoBlogMutation, UpdateDestacadoBlogMutationVariables>;

/**
 * __useUpdateDestacadoBlogMutation__
 *
 * To run a mutation, you first call `useUpdateDestacadoBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDestacadoBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDestacadoBlogMutation, { data, loading, error }] = useUpdateDestacadoBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDestacadoBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDestacadoBlogMutation, UpdateDestacadoBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDestacadoBlogMutation, UpdateDestacadoBlogMutationVariables>(UpdateDestacadoBlogDocument, options);
      }
export type UpdateDestacadoBlogMutationHookResult = ReturnType<typeof useUpdateDestacadoBlogMutation>;
export type UpdateDestacadoBlogMutationResult = Apollo.MutationResult<UpdateDestacadoBlogMutation>;
export type UpdateDestacadoBlogMutationOptions = Apollo.BaseMutationOptions<UpdateDestacadoBlogMutation, UpdateDestacadoBlogMutationVariables>;
export const UpdateDestacadoCategoriaBlogDocument = gql`
    mutation UpdateDestacadoCategoriaBlog($input: UpdateDestacadoCategoriaBlogInput!) {
  UpdateDestacadoCategoriaBlog(input: $input) {
    categoriaBlogId
    titulo
    slug
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    estado
    destacado
    numeroBlogs
  }
}
    `;
export type UpdateDestacadoCategoriaBlogMutationFn = Apollo.MutationFunction<UpdateDestacadoCategoriaBlogMutation, UpdateDestacadoCategoriaBlogMutationVariables>;

/**
 * __useUpdateDestacadoCategoriaBlogMutation__
 *
 * To run a mutation, you first call `useUpdateDestacadoCategoriaBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDestacadoCategoriaBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDestacadoCategoriaBlogMutation, { data, loading, error }] = useUpdateDestacadoCategoriaBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDestacadoCategoriaBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDestacadoCategoriaBlogMutation, UpdateDestacadoCategoriaBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDestacadoCategoriaBlogMutation, UpdateDestacadoCategoriaBlogMutationVariables>(UpdateDestacadoCategoriaBlogDocument, options);
      }
export type UpdateDestacadoCategoriaBlogMutationHookResult = ReturnType<typeof useUpdateDestacadoCategoriaBlogMutation>;
export type UpdateDestacadoCategoriaBlogMutationResult = Apollo.MutationResult<UpdateDestacadoCategoriaBlogMutation>;
export type UpdateDestacadoCategoriaBlogMutationOptions = Apollo.BaseMutationOptions<UpdateDestacadoCategoriaBlogMutation, UpdateDestacadoCategoriaBlogMutationVariables>;
export const UpdateDestacadoCategoriaProductoDocument = gql`
    mutation UpdateDestacadoCategoriaProducto($input: UpdateDestacadoCategoriaProductoInput!) {
  UpdateDestacadoCategoriaProducto(input: $input) {
    categoriaProductoId
    titulo
    slug
    estado
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
  }
}
    `;
export type UpdateDestacadoCategoriaProductoMutationFn = Apollo.MutationFunction<UpdateDestacadoCategoriaProductoMutation, UpdateDestacadoCategoriaProductoMutationVariables>;

/**
 * __useUpdateDestacadoCategoriaProductoMutation__
 *
 * To run a mutation, you first call `useUpdateDestacadoCategoriaProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDestacadoCategoriaProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDestacadoCategoriaProductoMutation, { data, loading, error }] = useUpdateDestacadoCategoriaProductoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDestacadoCategoriaProductoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDestacadoCategoriaProductoMutation, UpdateDestacadoCategoriaProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDestacadoCategoriaProductoMutation, UpdateDestacadoCategoriaProductoMutationVariables>(UpdateDestacadoCategoriaProductoDocument, options);
      }
export type UpdateDestacadoCategoriaProductoMutationHookResult = ReturnType<typeof useUpdateDestacadoCategoriaProductoMutation>;
export type UpdateDestacadoCategoriaProductoMutationResult = Apollo.MutationResult<UpdateDestacadoCategoriaProductoMutation>;
export type UpdateDestacadoCategoriaProductoMutationOptions = Apollo.BaseMutationOptions<UpdateDestacadoCategoriaProductoMutation, UpdateDestacadoCategoriaProductoMutationVariables>;
export const UpdateDestacadoProductoDocument = gql`
    mutation UpdateDestacadoProducto($input: UpdateDestacadoProductoInput!) {
  UpdateDestacadoProducto(input: $input) {
    productoId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    precioReal
    precioOferta
    stockMinimo
    stockReal
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    galeria {
      id
      titulo
      estado
      url
    }
    keywords
    destacado
    estado
    categoriaProductoId
    created_at
    updated_at
  }
}
    `;
export type UpdateDestacadoProductoMutationFn = Apollo.MutationFunction<UpdateDestacadoProductoMutation, UpdateDestacadoProductoMutationVariables>;

/**
 * __useUpdateDestacadoProductoMutation__
 *
 * To run a mutation, you first call `useUpdateDestacadoProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDestacadoProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDestacadoProductoMutation, { data, loading, error }] = useUpdateDestacadoProductoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDestacadoProductoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDestacadoProductoMutation, UpdateDestacadoProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDestacadoProductoMutation, UpdateDestacadoProductoMutationVariables>(UpdateDestacadoProductoDocument, options);
      }
export type UpdateDestacadoProductoMutationHookResult = ReturnType<typeof useUpdateDestacadoProductoMutation>;
export type UpdateDestacadoProductoMutationResult = Apollo.MutationResult<UpdateDestacadoProductoMutation>;
export type UpdateDestacadoProductoMutationOptions = Apollo.BaseMutationOptions<UpdateDestacadoProductoMutation, UpdateDestacadoProductoMutationVariables>;
export const UpdateEstadoBlogDocument = gql`
    mutation UpdateEstadoBlog($input: UpdateEstadoBlogInput!) {
  UpdateEstadoBlog(input: $input) {
    blogId
    titulo
    estado
  }
}
    `;
export type UpdateEstadoBlogMutationFn = Apollo.MutationFunction<UpdateEstadoBlogMutation, UpdateEstadoBlogMutationVariables>;

/**
 * __useUpdateEstadoBlogMutation__
 *
 * To run a mutation, you first call `useUpdateEstadoBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstadoBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstadoBlogMutation, { data, loading, error }] = useUpdateEstadoBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEstadoBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstadoBlogMutation, UpdateEstadoBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstadoBlogMutation, UpdateEstadoBlogMutationVariables>(UpdateEstadoBlogDocument, options);
      }
export type UpdateEstadoBlogMutationHookResult = ReturnType<typeof useUpdateEstadoBlogMutation>;
export type UpdateEstadoBlogMutationResult = Apollo.MutationResult<UpdateEstadoBlogMutation>;
export type UpdateEstadoBlogMutationOptions = Apollo.BaseMutationOptions<UpdateEstadoBlogMutation, UpdateEstadoBlogMutationVariables>;
export const UpdateEstadoCategoriaBlogDocument = gql`
    mutation UpdateEstadoCategoriaBlog($input: UpdateEstadoCategoriaBlogInput!) {
  UpdateEstadoCategoriaBlog(input: $input) {
    categoriaBlogId
    titulo
    slug
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    estado
    created_at
    updated_at
    numeroBlogs
  }
}
    `;
export type UpdateEstadoCategoriaBlogMutationFn = Apollo.MutationFunction<UpdateEstadoCategoriaBlogMutation, UpdateEstadoCategoriaBlogMutationVariables>;

/**
 * __useUpdateEstadoCategoriaBlogMutation__
 *
 * To run a mutation, you first call `useUpdateEstadoCategoriaBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstadoCategoriaBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstadoCategoriaBlogMutation, { data, loading, error }] = useUpdateEstadoCategoriaBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEstadoCategoriaBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstadoCategoriaBlogMutation, UpdateEstadoCategoriaBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstadoCategoriaBlogMutation, UpdateEstadoCategoriaBlogMutationVariables>(UpdateEstadoCategoriaBlogDocument, options);
      }
export type UpdateEstadoCategoriaBlogMutationHookResult = ReturnType<typeof useUpdateEstadoCategoriaBlogMutation>;
export type UpdateEstadoCategoriaBlogMutationResult = Apollo.MutationResult<UpdateEstadoCategoriaBlogMutation>;
export type UpdateEstadoCategoriaBlogMutationOptions = Apollo.BaseMutationOptions<UpdateEstadoCategoriaBlogMutation, UpdateEstadoCategoriaBlogMutationVariables>;
export const UpdateEstadoCategoriaProductoDocument = gql`
    mutation UpdateEstadoCategoriaProducto($input: UpdateEstadoCategoriaProductoInput!) {
  UpdateEstadoCategoriaProducto(input: $input) {
    categoriaProductoId
    titulo
    slug
    estado
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    created_at
    updated_at
  }
}
    `;
export type UpdateEstadoCategoriaProductoMutationFn = Apollo.MutationFunction<UpdateEstadoCategoriaProductoMutation, UpdateEstadoCategoriaProductoMutationVariables>;

/**
 * __useUpdateEstadoCategoriaProductoMutation__
 *
 * To run a mutation, you first call `useUpdateEstadoCategoriaProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstadoCategoriaProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstadoCategoriaProductoMutation, { data, loading, error }] = useUpdateEstadoCategoriaProductoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEstadoCategoriaProductoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstadoCategoriaProductoMutation, UpdateEstadoCategoriaProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstadoCategoriaProductoMutation, UpdateEstadoCategoriaProductoMutationVariables>(UpdateEstadoCategoriaProductoDocument, options);
      }
export type UpdateEstadoCategoriaProductoMutationHookResult = ReturnType<typeof useUpdateEstadoCategoriaProductoMutation>;
export type UpdateEstadoCategoriaProductoMutationResult = Apollo.MutationResult<UpdateEstadoCategoriaProductoMutation>;
export type UpdateEstadoCategoriaProductoMutationOptions = Apollo.BaseMutationOptions<UpdateEstadoCategoriaProductoMutation, UpdateEstadoCategoriaProductoMutationVariables>;
export const UpdateEstadoProductoDocument = gql`
    mutation UpdateEstadoProducto($input: UpdateEstadoProductoInput!) {
  UpdateEstadoProducto(input: $input) {
    productoId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    precioReal
    precioOferta
    stockMinimo
    stockReal
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    galeria {
      id
      titulo
      estado
      url
    }
    keywords
    destacado
    estado
    categoriaProductoId
    created_at
    updated_at
  }
}
    `;
export type UpdateEstadoProductoMutationFn = Apollo.MutationFunction<UpdateEstadoProductoMutation, UpdateEstadoProductoMutationVariables>;

/**
 * __useUpdateEstadoProductoMutation__
 *
 * To run a mutation, you first call `useUpdateEstadoProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstadoProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstadoProductoMutation, { data, loading, error }] = useUpdateEstadoProductoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEstadoProductoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstadoProductoMutation, UpdateEstadoProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstadoProductoMutation, UpdateEstadoProductoMutationVariables>(UpdateEstadoProductoDocument, options);
      }
export type UpdateEstadoProductoMutationHookResult = ReturnType<typeof useUpdateEstadoProductoMutation>;
export type UpdateEstadoProductoMutationResult = Apollo.MutationResult<UpdateEstadoProductoMutation>;
export type UpdateEstadoProductoMutationOptions = Apollo.BaseMutationOptions<UpdateEstadoProductoMutation, UpdateEstadoProductoMutationVariables>;
export const UpdatePasswordUsuarioDocument = gql`
    mutation UpdatePasswordUsuario($input: UpdatePasswordInput!) {
  UpdatePasswordUsuario(input: $input) {
    id
    tipoUsuario
    tipoDocumento
    numeroDocumento
    genero
    nombres
    apellidos
    celular
    fechaNacimiento
    foto
    email
    apiToken
    customer_id
  }
}
    `;
export type UpdatePasswordUsuarioMutationFn = Apollo.MutationFunction<UpdatePasswordUsuarioMutation, UpdatePasswordUsuarioMutationVariables>;

/**
 * __useUpdatePasswordUsuarioMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordUsuarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordUsuarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordUsuarioMutation, { data, loading, error }] = useUpdatePasswordUsuarioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePasswordUsuarioMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordUsuarioMutation, UpdatePasswordUsuarioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordUsuarioMutation, UpdatePasswordUsuarioMutationVariables>(UpdatePasswordUsuarioDocument, options);
      }
export type UpdatePasswordUsuarioMutationHookResult = ReturnType<typeof useUpdatePasswordUsuarioMutation>;
export type UpdatePasswordUsuarioMutationResult = Apollo.MutationResult<UpdatePasswordUsuarioMutation>;
export type UpdatePasswordUsuarioMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordUsuarioMutation, UpdatePasswordUsuarioMutationVariables>;
export const UpdateProductoDocument = gql`
    mutation UpdateProducto($input: ProductoInput!) {
  UpdateProducto(input: $input) {
    productoId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    precioReal
    precioOferta
    stockMinimo
    stockReal
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    galeria {
      id
      titulo
      estado
      url
    }
    keywords
    destacado
    estado
    categoriaProductoId
    created_at
    updated_at
  }
}
    `;
export type UpdateProductoMutationFn = Apollo.MutationFunction<UpdateProductoMutation, UpdateProductoMutationVariables>;

/**
 * __useUpdateProductoMutation__
 *
 * To run a mutation, you first call `useUpdateProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductoMutation, { data, loading, error }] = useUpdateProductoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductoMutation, UpdateProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductoMutation, UpdateProductoMutationVariables>(UpdateProductoDocument, options);
      }
export type UpdateProductoMutationHookResult = ReturnType<typeof useUpdateProductoMutation>;
export type UpdateProductoMutationResult = Apollo.MutationResult<UpdateProductoMutation>;
export type UpdateProductoMutationOptions = Apollo.BaseMutationOptions<UpdateProductoMutation, UpdateProductoMutationVariables>;
export const CreateEfectivoMovilDocument = gql`
    mutation CreateEfectivoMovil($input: EfectivoMovilInput) {
  CreateEfectivoMovil(input: $input) {
    updated_at
    created_at
    numeroCelular
    imagenQr {
      url
      estado
      titulo
      id
    }
    imagenPrincipal {
      url
      titulo
      estado
      id
    }
    estado
    titulo
    efectivoMovilId
  }
}
    `;
export type CreateEfectivoMovilMutationFn = Apollo.MutationFunction<CreateEfectivoMovilMutation, CreateEfectivoMovilMutationVariables>;

/**
 * __useCreateEfectivoMovilMutation__
 *
 * To run a mutation, you first call `useCreateEfectivoMovilMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEfectivoMovilMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEfectivoMovilMutation, { data, loading, error }] = useCreateEfectivoMovilMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEfectivoMovilMutation(baseOptions?: Apollo.MutationHookOptions<CreateEfectivoMovilMutation, CreateEfectivoMovilMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEfectivoMovilMutation, CreateEfectivoMovilMutationVariables>(CreateEfectivoMovilDocument, options);
      }
export type CreateEfectivoMovilMutationHookResult = ReturnType<typeof useCreateEfectivoMovilMutation>;
export type CreateEfectivoMovilMutationResult = Apollo.MutationResult<CreateEfectivoMovilMutation>;
export type CreateEfectivoMovilMutationOptions = Apollo.BaseMutationOptions<CreateEfectivoMovilMutation, CreateEfectivoMovilMutationVariables>;
export const DeleteEfectivoMovilDocument = gql`
    mutation DeleteEfectivoMovil($efectivoMovilId: Int!) {
  DeleteEfectivoMovil(efectivoMovilId: $efectivoMovilId)
}
    `;
export type DeleteEfectivoMovilMutationFn = Apollo.MutationFunction<DeleteEfectivoMovilMutation, DeleteEfectivoMovilMutationVariables>;

/**
 * __useDeleteEfectivoMovilMutation__
 *
 * To run a mutation, you first call `useDeleteEfectivoMovilMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEfectivoMovilMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEfectivoMovilMutation, { data, loading, error }] = useDeleteEfectivoMovilMutation({
 *   variables: {
 *      efectivoMovilId: // value for 'efectivoMovilId'
 *   },
 * });
 */
export function useDeleteEfectivoMovilMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEfectivoMovilMutation, DeleteEfectivoMovilMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEfectivoMovilMutation, DeleteEfectivoMovilMutationVariables>(DeleteEfectivoMovilDocument, options);
      }
export type DeleteEfectivoMovilMutationHookResult = ReturnType<typeof useDeleteEfectivoMovilMutation>;
export type DeleteEfectivoMovilMutationResult = Apollo.MutationResult<DeleteEfectivoMovilMutation>;
export type DeleteEfectivoMovilMutationOptions = Apollo.BaseMutationOptions<DeleteEfectivoMovilMutation, DeleteEfectivoMovilMutationVariables>;
export const UpdateEfectivoMovilDocument = gql`
    mutation UpdateEfectivoMovil($input: EfectivoMovilInput) {
  UpdateEfectivoMovil(input: $input) {
    efectivoMovilId
    titulo
    estado
    imagenPrincipal {
      url
      estado
      titulo
      id
    }
    imagenQr {
      url
      estado
      titulo
      id
    }
    updated_at
    created_at
    numeroCelular
  }
}
    `;
export type UpdateEfectivoMovilMutationFn = Apollo.MutationFunction<UpdateEfectivoMovilMutation, UpdateEfectivoMovilMutationVariables>;

/**
 * __useUpdateEfectivoMovilMutation__
 *
 * To run a mutation, you first call `useUpdateEfectivoMovilMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEfectivoMovilMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEfectivoMovilMutation, { data, loading, error }] = useUpdateEfectivoMovilMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEfectivoMovilMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEfectivoMovilMutation, UpdateEfectivoMovilMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEfectivoMovilMutation, UpdateEfectivoMovilMutationVariables>(UpdateEfectivoMovilDocument, options);
      }
export type UpdateEfectivoMovilMutationHookResult = ReturnType<typeof useUpdateEfectivoMovilMutation>;
export type UpdateEfectivoMovilMutationResult = Apollo.MutationResult<UpdateEfectivoMovilMutation>;
export type UpdateEfectivoMovilMutationOptions = Apollo.BaseMutationOptions<UpdateEfectivoMovilMutation, UpdateEfectivoMovilMutationVariables>;
export const UpdateEstadoEfectivoMovilDocument = gql`
    mutation UpdateEstadoEfectivoMovil($input: UpdateEstadoEfectivoMovilInput) {
  UpdateEstadoEfectivoMovil(input: $input) {
    efectivoMovilId
    titulo
    estado
  }
}
    `;
export type UpdateEstadoEfectivoMovilMutationFn = Apollo.MutationFunction<UpdateEstadoEfectivoMovilMutation, UpdateEstadoEfectivoMovilMutationVariables>;

/**
 * __useUpdateEstadoEfectivoMovilMutation__
 *
 * To run a mutation, you first call `useUpdateEstadoEfectivoMovilMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstadoEfectivoMovilMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstadoEfectivoMovilMutation, { data, loading, error }] = useUpdateEstadoEfectivoMovilMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEstadoEfectivoMovilMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstadoEfectivoMovilMutation, UpdateEstadoEfectivoMovilMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstadoEfectivoMovilMutation, UpdateEstadoEfectivoMovilMutationVariables>(UpdateEstadoEfectivoMovilDocument, options);
      }
export type UpdateEstadoEfectivoMovilMutationHookResult = ReturnType<typeof useUpdateEstadoEfectivoMovilMutation>;
export type UpdateEstadoEfectivoMovilMutationResult = Apollo.MutationResult<UpdateEstadoEfectivoMovilMutation>;
export type UpdateEstadoEfectivoMovilMutationOptions = Apollo.BaseMutationOptions<UpdateEstadoEfectivoMovilMutation, UpdateEstadoEfectivoMovilMutationVariables>;
export const CreateImagenDocument = gql`
    mutation CreateImagen($imagen: Upload!) {
  CreateImagen(imagen: $imagen)
}
    `;
export type CreateImagenMutationFn = Apollo.MutationFunction<CreateImagenMutation, CreateImagenMutationVariables>;

/**
 * __useCreateImagenMutation__
 *
 * To run a mutation, you first call `useCreateImagenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateImagenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createImagenMutation, { data, loading, error }] = useCreateImagenMutation({
 *   variables: {
 *      imagen: // value for 'imagen'
 *   },
 * });
 */
export function useCreateImagenMutation(baseOptions?: Apollo.MutationHookOptions<CreateImagenMutation, CreateImagenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateImagenMutation, CreateImagenMutationVariables>(CreateImagenDocument, options);
      }
export type CreateImagenMutationHookResult = ReturnType<typeof useCreateImagenMutation>;
export type CreateImagenMutationResult = Apollo.MutationResult<CreateImagenMutation>;
export type CreateImagenMutationOptions = Apollo.BaseMutationOptions<CreateImagenMutation, CreateImagenMutationVariables>;
export const DeleteImagenDocument = gql`
    mutation DeleteImagen($deleteImagenId: Int!) {
  DeleteImagen(id: $deleteImagenId)
}
    `;
export type DeleteImagenMutationFn = Apollo.MutationFunction<DeleteImagenMutation, DeleteImagenMutationVariables>;

/**
 * __useDeleteImagenMutation__
 *
 * To run a mutation, you first call `useDeleteImagenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteImagenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteImagenMutation, { data, loading, error }] = useDeleteImagenMutation({
 *   variables: {
 *      deleteImagenId: // value for 'deleteImagenId'
 *   },
 * });
 */
export function useDeleteImagenMutation(baseOptions?: Apollo.MutationHookOptions<DeleteImagenMutation, DeleteImagenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteImagenMutation, DeleteImagenMutationVariables>(DeleteImagenDocument, options);
      }
export type DeleteImagenMutationHookResult = ReturnType<typeof useDeleteImagenMutation>;
export type DeleteImagenMutationResult = Apollo.MutationResult<DeleteImagenMutation>;
export type DeleteImagenMutationOptions = Apollo.BaseMutationOptions<DeleteImagenMutation, DeleteImagenMutationVariables>;
export const UpdateEstadoPedidoDocument = gql`
    mutation UpdateEstadoPedido($input: UpdateEstadoPedidoInput!) {
  UpdateEstadoPedido(input: $input) {
    pedidoId
    estado
  }
}
    `;
export type UpdateEstadoPedidoMutationFn = Apollo.MutationFunction<UpdateEstadoPedidoMutation, UpdateEstadoPedidoMutationVariables>;

/**
 * __useUpdateEstadoPedidoMutation__
 *
 * To run a mutation, you first call `useUpdateEstadoPedidoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstadoPedidoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstadoPedidoMutation, { data, loading, error }] = useUpdateEstadoPedidoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEstadoPedidoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstadoPedidoMutation, UpdateEstadoPedidoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstadoPedidoMutation, UpdateEstadoPedidoMutationVariables>(UpdateEstadoPedidoDocument, options);
      }
export type UpdateEstadoPedidoMutationHookResult = ReturnType<typeof useUpdateEstadoPedidoMutation>;
export type UpdateEstadoPedidoMutationResult = Apollo.MutationResult<UpdateEstadoPedidoMutation>;
export type UpdateEstadoPedidoMutationOptions = Apollo.BaseMutationOptions<UpdateEstadoPedidoMutation, UpdateEstadoPedidoMutationVariables>;
export const UpdateVistoPedidoDocument = gql`
    mutation UpdateVistoPedido($input: UpdateVistoPedidoInput!) {
  UpdateVistoPedido(input: $input) {
    visto
    pedidoId
  }
}
    `;
export type UpdateVistoPedidoMutationFn = Apollo.MutationFunction<UpdateVistoPedidoMutation, UpdateVistoPedidoMutationVariables>;

/**
 * __useUpdateVistoPedidoMutation__
 *
 * To run a mutation, you first call `useUpdateVistoPedidoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVistoPedidoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVistoPedidoMutation, { data, loading, error }] = useUpdateVistoPedidoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVistoPedidoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVistoPedidoMutation, UpdateVistoPedidoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVistoPedidoMutation, UpdateVistoPedidoMutationVariables>(UpdateVistoPedidoDocument, options);
      }
export type UpdateVistoPedidoMutationHookResult = ReturnType<typeof useUpdateVistoPedidoMutation>;
export type UpdateVistoPedidoMutationResult = Apollo.MutationResult<UpdateVistoPedidoMutation>;
export type UpdateVistoPedidoMutationOptions = Apollo.BaseMutationOptions<UpdateVistoPedidoMutation, UpdateVistoPedidoMutationVariables>;
export const UpdateBlogDocument = gql`
    mutation updateBlog($input: BlogInput!) {
  updateBlog(input: $input) {
    blogId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    keywords
    estado
    destacado
    categoriaBlogId
    usuarioId
    created_at
    updated_at
  }
}
    `;
export type UpdateBlogMutationFn = Apollo.MutationFunction<UpdateBlogMutation, UpdateBlogMutationVariables>;

/**
 * __useUpdateBlogMutation__
 *
 * To run a mutation, you first call `useUpdateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlogMutation, { data, loading, error }] = useUpdateBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBlogMutation, UpdateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBlogMutation, UpdateBlogMutationVariables>(UpdateBlogDocument, options);
      }
export type UpdateBlogMutationHookResult = ReturnType<typeof useUpdateBlogMutation>;
export type UpdateBlogMutationResult = Apollo.MutationResult<UpdateBlogMutation>;
export type UpdateBlogMutationOptions = Apollo.BaseMutationOptions<UpdateBlogMutation, UpdateBlogMutationVariables>;
export const UpdateEstadoBancoDocument = gql`
    mutation UpdateEstadoBanco($input: UpdateEstadoBancoInput) {
  UpdateEstadoBanco(input: $input) {
    bancoId
    titulo
    estado
    numeroCuenta
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    created_at
    updated_at
  }
}
    `;
export type UpdateEstadoBancoMutationFn = Apollo.MutationFunction<UpdateEstadoBancoMutation, UpdateEstadoBancoMutationVariables>;

/**
 * __useUpdateEstadoBancoMutation__
 *
 * To run a mutation, you first call `useUpdateEstadoBancoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstadoBancoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstadoBancoMutation, { data, loading, error }] = useUpdateEstadoBancoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEstadoBancoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstadoBancoMutation, UpdateEstadoBancoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstadoBancoMutation, UpdateEstadoBancoMutationVariables>(UpdateEstadoBancoDocument, options);
      }
export type UpdateEstadoBancoMutationHookResult = ReturnType<typeof useUpdateEstadoBancoMutation>;
export type UpdateEstadoBancoMutationResult = Apollo.MutationResult<UpdateEstadoBancoMutation>;
export type UpdateEstadoBancoMutationOptions = Apollo.BaseMutationOptions<UpdateEstadoBancoMutation, UpdateEstadoBancoMutationVariables>;
export const CreateSliderDocument = gql`
    mutation CreateSlider($input: SliderInput!) {
  CreateSlider(input: $input) {
    sliderId
    titulo
    tipoLink
    link
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
  }
}
    `;
export type CreateSliderMutationFn = Apollo.MutationFunction<CreateSliderMutation, CreateSliderMutationVariables>;

/**
 * __useCreateSliderMutation__
 *
 * To run a mutation, you first call `useCreateSliderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSliderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSliderMutation, { data, loading, error }] = useCreateSliderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSliderMutation(baseOptions?: Apollo.MutationHookOptions<CreateSliderMutation, CreateSliderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSliderMutation, CreateSliderMutationVariables>(CreateSliderDocument, options);
      }
export type CreateSliderMutationHookResult = ReturnType<typeof useCreateSliderMutation>;
export type CreateSliderMutationResult = Apollo.MutationResult<CreateSliderMutation>;
export type CreateSliderMutationOptions = Apollo.BaseMutationOptions<CreateSliderMutation, CreateSliderMutationVariables>;
export const GetAllBancosDocument = gql`
    query GetAllBancos($estado: String) {
  GetAllBancos(estado: $estado) {
    data {
      bancoId
      titulo
      estado
      numeroCuenta
      imagenPrincipal {
        id
        titulo
        estado
        url
      }
      created_at
      updated_at
    }
    numeroTotal
  }
}
    `;

/**
 * __useGetAllBancosQuery__
 *
 * To run a query within a React component, call `useGetAllBancosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBancosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBancosQuery({
 *   variables: {
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllBancosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBancosQuery, GetAllBancosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBancosQuery, GetAllBancosQueryVariables>(GetAllBancosDocument, options);
      }
export function useGetAllBancosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBancosQuery, GetAllBancosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBancosQuery, GetAllBancosQueryVariables>(GetAllBancosDocument, options);
        }
export type GetAllBancosQueryHookResult = ReturnType<typeof useGetAllBancosQuery>;
export type GetAllBancosLazyQueryHookResult = ReturnType<typeof useGetAllBancosLazyQuery>;
export type GetAllBancosQueryResult = Apollo.QueryResult<GetAllBancosQuery, GetAllBancosQueryVariables>;
export const GetAllBlogsDocument = gql`
    query GetAllBlogs($pagina: Int, $numeroPagina: Int, $estado: String) {
  GetAllBlogs(pagina: $pagina, numeroPagina: $numeroPagina, estado: $estado) {
    numeroTotal
    data {
      blogId
      titulo
      slug
      descripcionCorta
      descripcionLarga
      imagenPrincipal {
        id
        titulo
        estado
        url
      }
      imagenSecundaria {
        id
        titulo
        estado
        url
      }
      keywords
      estado
      destacado
      categoriaBlogId
      CategoriaBlog {
        titulo
      }
      usuarioId
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetAllBlogsQuery__
 *
 * To run a query within a React component, call `useGetAllBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogsQuery({
 *   variables: {
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllBlogsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
      }
export function useGetAllBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
        }
export type GetAllBlogsQueryHookResult = ReturnType<typeof useGetAllBlogsQuery>;
export type GetAllBlogsLazyQueryHookResult = ReturnType<typeof useGetAllBlogsLazyQuery>;
export type GetAllBlogsQueryResult = Apollo.QueryResult<GetAllBlogsQuery, GetAllBlogsQueryVariables>;
export const GetAllCategoriaBlogsDocument = gql`
    query GetAllCategoriaBlogs($estado: String, $destacado: String) {
  GetAllCategoriaBlogs(estado: $estado, destacado: $destacado) {
    numeroTotal
    data {
      categoriaBlogId
      titulo
      slug
      keywords
      descripcion
      imagenPrincipal {
        id
        titulo
        estado
        url
      }
      imagenSecundaria {
        id
        titulo
        estado
        url
      }
      estado
      destacado
      created_at
      updated_at
      numeroBlogs
    }
  }
}
    `;

/**
 * __useGetAllCategoriaBlogsQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriaBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriaBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriaBlogsQuery({
 *   variables: {
 *      estado: // value for 'estado'
 *      destacado: // value for 'destacado'
 *   },
 * });
 */
export function useGetAllCategoriaBlogsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>(GetAllCategoriaBlogsDocument, options);
      }
export function useGetAllCategoriaBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>(GetAllCategoriaBlogsDocument, options);
        }
export type GetAllCategoriaBlogsQueryHookResult = ReturnType<typeof useGetAllCategoriaBlogsQuery>;
export type GetAllCategoriaBlogsLazyQueryHookResult = ReturnType<typeof useGetAllCategoriaBlogsLazyQuery>;
export type GetAllCategoriaBlogsQueryResult = Apollo.QueryResult<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>;
export const GetAllCategoriaProductosDocument = gql`
    query GetAllCategoriaProductos($estado: String, $destacado: String) {
  GetAllCategoriaProductos(estado: $estado, destacado: $destacado) {
    numeroTotal
    data {
      categoriaProductoId
      titulo
      slug
      estado
      destacado
      keywords
      descripcion
      imagenPrincipal {
        id
        titulo
        estado
        url
      }
      imagenSecundaria {
        id
        titulo
        estado
        url
      }
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetAllCategoriaProductosQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriaProductosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriaProductosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriaProductosQuery({
 *   variables: {
 *      estado: // value for 'estado'
 *      destacado: // value for 'destacado'
 *   },
 * });
 */
export function useGetAllCategoriaProductosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriaProductosQuery, GetAllCategoriaProductosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriaProductosQuery, GetAllCategoriaProductosQueryVariables>(GetAllCategoriaProductosDocument, options);
      }
export function useGetAllCategoriaProductosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriaProductosQuery, GetAllCategoriaProductosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriaProductosQuery, GetAllCategoriaProductosQueryVariables>(GetAllCategoriaProductosDocument, options);
        }
export type GetAllCategoriaProductosQueryHookResult = ReturnType<typeof useGetAllCategoriaProductosQuery>;
export type GetAllCategoriaProductosLazyQueryHookResult = ReturnType<typeof useGetAllCategoriaProductosLazyQuery>;
export type GetAllCategoriaProductosQueryResult = Apollo.QueryResult<GetAllCategoriaProductosQuery, GetAllCategoriaProductosQueryVariables>;
export const GetAllProductosDocument = gql`
    query GetAllProductos($pagina: Int, $numeroPagina: Int, $estado: String, $destacado: String, $palabraClave: String) {
  GetAllProductos(
    pagina: $pagina
    numeroPagina: $numeroPagina
    estado: $estado
    destacado: $destacado
    palabraClave: $palabraClave
  ) {
    numeroTotal
    data {
      productoId
      titulo
      slug
      estado
      descripcionCorta
      descripcionLarga
      precioReal
      precioOferta
      stockMinimo
      stockReal
      imagenPrincipal {
        id
        titulo
        estado
        url
      }
      imagenSecundaria {
        id
        titulo
        estado
        url
      }
      keywords
      destacado
      estado
      categoriaProductoId
      CategoriaProducto {
        titulo
      }
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetAllProductosQuery__
 *
 * To run a query within a React component, call `useGetAllProductosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductosQuery({
 *   variables: {
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *      estado: // value for 'estado'
 *      destacado: // value for 'destacado'
 *      palabraClave: // value for 'palabraClave'
 *   },
 * });
 */
export function useGetAllProductosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductosQuery, GetAllProductosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductosQuery, GetAllProductosQueryVariables>(GetAllProductosDocument, options);
      }
export function useGetAllProductosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductosQuery, GetAllProductosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductosQuery, GetAllProductosQueryVariables>(GetAllProductosDocument, options);
        }
export type GetAllProductosQueryHookResult = ReturnType<typeof useGetAllProductosQuery>;
export type GetAllProductosLazyQueryHookResult = ReturnType<typeof useGetAllProductosLazyQuery>;
export type GetAllProductosQueryResult = Apollo.QueryResult<GetAllProductosQuery, GetAllProductosQueryVariables>;
export const GetAllProductosRelacionadosDocument = gql`
    query GetAllProductosRelacionados($slug: String) {
  GetAllProductosRelacionados(slug: $slug) {
    numeroTotal
    data {
      productoId
      titulo
      imagenPrincipal {
        url
      }
    }
  }
}
    `;

/**
 * __useGetAllProductosRelacionadosQuery__
 *
 * To run a query within a React component, call `useGetAllProductosRelacionadosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductosRelacionadosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductosRelacionadosQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetAllProductosRelacionadosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductosRelacionadosQuery, GetAllProductosRelacionadosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductosRelacionadosQuery, GetAllProductosRelacionadosQueryVariables>(GetAllProductosRelacionadosDocument, options);
      }
export function useGetAllProductosRelacionadosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductosRelacionadosQuery, GetAllProductosRelacionadosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductosRelacionadosQuery, GetAllProductosRelacionadosQueryVariables>(GetAllProductosRelacionadosDocument, options);
        }
export type GetAllProductosRelacionadosQueryHookResult = ReturnType<typeof useGetAllProductosRelacionadosQuery>;
export type GetAllProductosRelacionadosLazyQueryHookResult = ReturnType<typeof useGetAllProductosRelacionadosLazyQuery>;
export type GetAllProductosRelacionadosQueryResult = Apollo.QueryResult<GetAllProductosRelacionadosQuery, GetAllProductosRelacionadosQueryVariables>;
export const GetAllSliderDocument = gql`
    query GetAllSlider($estado: String) {
  GetAllSliders(estado: $estado) {
    numeroTotal
    data {
      sliderId
      titulo
      tipoLink
      link
      estado
      imagenPrincipal {
        id
        titulo
        url
      }
    }
  }
}
    `;

/**
 * __useGetAllSliderQuery__
 *
 * To run a query within a React component, call `useGetAllSliderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSliderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSliderQuery({
 *   variables: {
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllSliderQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSliderQuery, GetAllSliderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSliderQuery, GetAllSliderQueryVariables>(GetAllSliderDocument, options);
      }
export function useGetAllSliderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSliderQuery, GetAllSliderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSliderQuery, GetAllSliderQueryVariables>(GetAllSliderDocument, options);
        }
export type GetAllSliderQueryHookResult = ReturnType<typeof useGetAllSliderQuery>;
export type GetAllSliderLazyQueryHookResult = ReturnType<typeof useGetAllSliderLazyQuery>;
export type GetAllSliderQueryResult = Apollo.QueryResult<GetAllSliderQuery, GetAllSliderQueryVariables>;
export const GetBancoIdDocument = gql`
    query GetBancoId($bancoId: Int) {
  GetBancoId(bancoId: $bancoId) {
    bancoId
    titulo
    estado
    numeroCuenta
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
  }
}
    `;

/**
 * __useGetBancoIdQuery__
 *
 * To run a query within a React component, call `useGetBancoIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBancoIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBancoIdQuery({
 *   variables: {
 *      bancoId: // value for 'bancoId'
 *   },
 * });
 */
export function useGetBancoIdQuery(baseOptions?: Apollo.QueryHookOptions<GetBancoIdQuery, GetBancoIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBancoIdQuery, GetBancoIdQueryVariables>(GetBancoIdDocument, options);
      }
export function useGetBancoIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBancoIdQuery, GetBancoIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBancoIdQuery, GetBancoIdQueryVariables>(GetBancoIdDocument, options);
        }
export type GetBancoIdQueryHookResult = ReturnType<typeof useGetBancoIdQuery>;
export type GetBancoIdLazyQueryHookResult = ReturnType<typeof useGetBancoIdLazyQuery>;
export type GetBancoIdQueryResult = Apollo.QueryResult<GetBancoIdQuery, GetBancoIdQueryVariables>;
export const GetBlogSlugDocument = gql`
    query GetBlogSlug($slug: String) {
  GetBlogSlug(slug: $slug) {
    blogId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    keywords
    estado
    destacado
    categoriaBlogId
    CategoriaBlog {
      titulo
    }
    usuarioId
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetBlogSlugQuery__
 *
 * To run a query within a React component, call `useGetBlogSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetBlogSlugQuery(baseOptions?: Apollo.QueryHookOptions<GetBlogSlugQuery, GetBlogSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogSlugQuery, GetBlogSlugQueryVariables>(GetBlogSlugDocument, options);
      }
export function useGetBlogSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogSlugQuery, GetBlogSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogSlugQuery, GetBlogSlugQueryVariables>(GetBlogSlugDocument, options);
        }
export type GetBlogSlugQueryHookResult = ReturnType<typeof useGetBlogSlugQuery>;
export type GetBlogSlugLazyQueryHookResult = ReturnType<typeof useGetBlogSlugLazyQuery>;
export type GetBlogSlugQueryResult = Apollo.QueryResult<GetBlogSlugQuery, GetBlogSlugQueryVariables>;
export const GetCategoriaBlogSlugDocument = gql`
    query GetCategoriaBlogSlug($slug: String) {
  GetCategoriaBlogSlug(slug: $slug) {
    categoriaBlogId
    titulo
    slug
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      url
    }
    imagenSecundaria {
      id
      titulo
      url
    }
    estado
    created_at
    updated_at
    numeroBlogs
  }
}
    `;

/**
 * __useGetCategoriaBlogSlugQuery__
 *
 * To run a query within a React component, call `useGetCategoriaBlogSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriaBlogSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriaBlogSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCategoriaBlogSlugQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriaBlogSlugQuery, GetCategoriaBlogSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriaBlogSlugQuery, GetCategoriaBlogSlugQueryVariables>(GetCategoriaBlogSlugDocument, options);
      }
export function useGetCategoriaBlogSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriaBlogSlugQuery, GetCategoriaBlogSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriaBlogSlugQuery, GetCategoriaBlogSlugQueryVariables>(GetCategoriaBlogSlugDocument, options);
        }
export type GetCategoriaBlogSlugQueryHookResult = ReturnType<typeof useGetCategoriaBlogSlugQuery>;
export type GetCategoriaBlogSlugLazyQueryHookResult = ReturnType<typeof useGetCategoriaBlogSlugLazyQuery>;
export type GetCategoriaBlogSlugQueryResult = Apollo.QueryResult<GetCategoriaBlogSlugQuery, GetCategoriaBlogSlugQueryVariables>;
export const GetCategoriaProductoSlugDocument = gql`
    query GetCategoriaProductoSlug($slug: String) {
  GetCategoriaProductoSlug(slug: $slug) {
    categoriaProductoId
    titulo
    slug
    estado
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetCategoriaProductoSlugQuery__
 *
 * To run a query within a React component, call `useGetCategoriaProductoSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriaProductoSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriaProductoSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCategoriaProductoSlugQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriaProductoSlugQuery, GetCategoriaProductoSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriaProductoSlugQuery, GetCategoriaProductoSlugQueryVariables>(GetCategoriaProductoSlugDocument, options);
      }
export function useGetCategoriaProductoSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriaProductoSlugQuery, GetCategoriaProductoSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriaProductoSlugQuery, GetCategoriaProductoSlugQueryVariables>(GetCategoriaProductoSlugDocument, options);
        }
export type GetCategoriaProductoSlugQueryHookResult = ReturnType<typeof useGetCategoriaProductoSlugQuery>;
export type GetCategoriaProductoSlugLazyQueryHookResult = ReturnType<typeof useGetCategoriaProductoSlugLazyQuery>;
export type GetCategoriaProductoSlugQueryResult = Apollo.QueryResult<GetCategoriaProductoSlugQuery, GetCategoriaProductoSlugQueryVariables>;
export const GetProductoSlugDocument = gql`
    query GetProductoSlug($slug: String) {
  GetProductoSlug(slug: $slug) {
    productoId
    titulo
    slug
    estado
    descripcionCorta
    descripcionLarga
    precioReal
    precioOferta
    stockMinimo
    stockReal
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    galeria {
      id
      titulo
      estado
      url
    }
    keywords
    destacado
    estado
    categoriaProductoId
    CategoriaProducto {
      titulo
    }
  }
}
    `;

/**
 * __useGetProductoSlugQuery__
 *
 * To run a query within a React component, call `useGetProductoSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductoSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductoSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProductoSlugQuery(baseOptions?: Apollo.QueryHookOptions<GetProductoSlugQuery, GetProductoSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductoSlugQuery, GetProductoSlugQueryVariables>(GetProductoSlugDocument, options);
      }
export function useGetProductoSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductoSlugQuery, GetProductoSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductoSlugQuery, GetProductoSlugQueryVariables>(GetProductoSlugDocument, options);
        }
export type GetProductoSlugQueryHookResult = ReturnType<typeof useGetProductoSlugQuery>;
export type GetProductoSlugLazyQueryHookResult = ReturnType<typeof useGetProductoSlugLazyQuery>;
export type GetProductoSlugQueryResult = Apollo.QueryResult<GetProductoSlugQuery, GetProductoSlugQueryVariables>;
export const GetSliderIdDocument = gql`
    query GetSliderId($sliderId: Int) {
  GetSliderId(sliderId: $sliderId) {
    sliderId
    titulo
    tipoLink
    link
    estado
    imagenPrincipal {
      id
      titulo
      url
    }
  }
}
    `;

/**
 * __useGetSliderIdQuery__
 *
 * To run a query within a React component, call `useGetSliderIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSliderIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSliderIdQuery({
 *   variables: {
 *      sliderId: // value for 'sliderId'
 *   },
 * });
 */
export function useGetSliderIdQuery(baseOptions?: Apollo.QueryHookOptions<GetSliderIdQuery, GetSliderIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSliderIdQuery, GetSliderIdQueryVariables>(GetSliderIdDocument, options);
      }
export function useGetSliderIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSliderIdQuery, GetSliderIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSliderIdQuery, GetSliderIdQueryVariables>(GetSliderIdDocument, options);
        }
export type GetSliderIdQueryHookResult = ReturnType<typeof useGetSliderIdQuery>;
export type GetSliderIdLazyQueryHookResult = ReturnType<typeof useGetSliderIdLazyQuery>;
export type GetSliderIdQueryResult = Apollo.QueryResult<GetSliderIdQuery, GetSliderIdQueryVariables>;
export const UpdateEstadoSliderDocument = gql`
    mutation UpdateEstadoSlider($input: UpdateEstadoSliderInput!) {
  UpdateEstadoSlider(input: $input) {
    sliderId
    titulo
    estado
  }
}
    `;
export type UpdateEstadoSliderMutationFn = Apollo.MutationFunction<UpdateEstadoSliderMutation, UpdateEstadoSliderMutationVariables>;

/**
 * __useUpdateEstadoSliderMutation__
 *
 * To run a mutation, you first call `useUpdateEstadoSliderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstadoSliderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstadoSliderMutation, { data, loading, error }] = useUpdateEstadoSliderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEstadoSliderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstadoSliderMutation, UpdateEstadoSliderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstadoSliderMutation, UpdateEstadoSliderMutationVariables>(UpdateEstadoSliderDocument, options);
      }
export type UpdateEstadoSliderMutationHookResult = ReturnType<typeof useUpdateEstadoSliderMutation>;
export type UpdateEstadoSliderMutationResult = Apollo.MutationResult<UpdateEstadoSliderMutation>;
export type UpdateEstadoSliderMutationOptions = Apollo.BaseMutationOptions<UpdateEstadoSliderMutation, UpdateEstadoSliderMutationVariables>;
export const UpdateSliderDocument = gql`
    mutation UpdateSlider($input: SliderInput!) {
  UpdateSlider(input: $input) {
    sliderId
    titulo
    tipoLink
    link
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
  }
}
    `;
export type UpdateSliderMutationFn = Apollo.MutationFunction<UpdateSliderMutation, UpdateSliderMutationVariables>;

/**
 * __useUpdateSliderMutation__
 *
 * To run a mutation, you first call `useUpdateSliderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSliderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSliderMutation, { data, loading, error }] = useUpdateSliderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSliderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSliderMutation, UpdateSliderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSliderMutation, UpdateSliderMutationVariables>(UpdateSliderDocument, options);
      }
export type UpdateSliderMutationHookResult = ReturnType<typeof useUpdateSliderMutation>;
export type UpdateSliderMutationResult = Apollo.MutationResult<UpdateSliderMutation>;
export type UpdateSliderMutationOptions = Apollo.BaseMutationOptions<UpdateSliderMutation, UpdateSliderMutationVariables>;
export const GetAllEfectivoMovilDocument = gql`
    query GetAllEfectivoMovil($estado: String) {
  GetAllEfectivoMovil(estado: $estado) {
    numeroTotal
    data {
      efectivoMovilId
      titulo
      estado
      imagenPrincipal {
        url
        estado
        titulo
        id
      }
      imagenQr {
        url
        estado
        titulo
        id
      }
      numeroCelular
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetAllEfectivoMovilQuery__
 *
 * To run a query within a React component, call `useGetAllEfectivoMovilQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEfectivoMovilQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEfectivoMovilQuery({
 *   variables: {
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllEfectivoMovilQuery(baseOptions?: Apollo.QueryHookOptions<GetAllEfectivoMovilQuery, GetAllEfectivoMovilQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllEfectivoMovilQuery, GetAllEfectivoMovilQueryVariables>(GetAllEfectivoMovilDocument, options);
      }
export function useGetAllEfectivoMovilLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllEfectivoMovilQuery, GetAllEfectivoMovilQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllEfectivoMovilQuery, GetAllEfectivoMovilQueryVariables>(GetAllEfectivoMovilDocument, options);
        }
export type GetAllEfectivoMovilQueryHookResult = ReturnType<typeof useGetAllEfectivoMovilQuery>;
export type GetAllEfectivoMovilLazyQueryHookResult = ReturnType<typeof useGetAllEfectivoMovilLazyQuery>;
export type GetAllEfectivoMovilQueryResult = Apollo.QueryResult<GetAllEfectivoMovilQuery, GetAllEfectivoMovilQueryVariables>;
export const GetEfectivoMovilIdDocument = gql`
    query GetEfectivoMovilId($efectivoMovilId: Int) {
  GetEfectivoMovilId(efectivoMovilId: $efectivoMovilId) {
    efectivoMovilId
    titulo
    estado
    imagenPrincipal {
      url
      estado
      titulo
      id
    }
    updated_at
    created_at
    numeroCelular
    imagenQr {
      url
      estado
      titulo
      id
    }
  }
}
    `;

/**
 * __useGetEfectivoMovilIdQuery__
 *
 * To run a query within a React component, call `useGetEfectivoMovilIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEfectivoMovilIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEfectivoMovilIdQuery({
 *   variables: {
 *      efectivoMovilId: // value for 'efectivoMovilId'
 *   },
 * });
 */
export function useGetEfectivoMovilIdQuery(baseOptions?: Apollo.QueryHookOptions<GetEfectivoMovilIdQuery, GetEfectivoMovilIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEfectivoMovilIdQuery, GetEfectivoMovilIdQueryVariables>(GetEfectivoMovilIdDocument, options);
      }
export function useGetEfectivoMovilIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEfectivoMovilIdQuery, GetEfectivoMovilIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEfectivoMovilIdQuery, GetEfectivoMovilIdQueryVariables>(GetEfectivoMovilIdDocument, options);
        }
export type GetEfectivoMovilIdQueryHookResult = ReturnType<typeof useGetEfectivoMovilIdQuery>;
export type GetEfectivoMovilIdLazyQueryHookResult = ReturnType<typeof useGetEfectivoMovilIdLazyQuery>;
export type GetEfectivoMovilIdQueryResult = Apollo.QueryResult<GetEfectivoMovilIdQuery, GetEfectivoMovilIdQueryVariables>;
export const GetAllImagenesDocument = gql`
    query GetAllImagenes($pagina: Int, $numeroPagina: Int) {
  GetAllImagenes(pagina: $pagina, numeroPagina: $numeroPagina) {
    numeroTotal
    data {
      id
      url
      titulo
    }
  }
}
    `;

/**
 * __useGetAllImagenesQuery__
 *
 * To run a query within a React component, call `useGetAllImagenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllImagenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllImagenesQuery({
 *   variables: {
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *   },
 * });
 */
export function useGetAllImagenesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllImagenesQuery, GetAllImagenesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllImagenesQuery, GetAllImagenesQueryVariables>(GetAllImagenesDocument, options);
      }
export function useGetAllImagenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllImagenesQuery, GetAllImagenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllImagenesQuery, GetAllImagenesQueryVariables>(GetAllImagenesDocument, options);
        }
export type GetAllImagenesQueryHookResult = ReturnType<typeof useGetAllImagenesQuery>;
export type GetAllImagenesLazyQueryHookResult = ReturnType<typeof useGetAllImagenesLazyQuery>;
export type GetAllImagenesQueryResult = Apollo.QueryResult<GetAllImagenesQuery, GetAllImagenesQueryVariables>;
export const GetAllPedidosDocument = gql`
    query GetAllPedidos($numeroPagina: Int, $pagina: Int, $FechaInicio: String, $FechaFin: String, $nombreCliente: String, $email: String) {
  GetAllPedidos(
    numeroPagina: $numeroPagina
    pagina: $pagina
    FechaInicio: $FechaInicio
    FechaFin: $FechaFin
    nombreCliente: $nombreCliente
    email: $email
  ) {
    data {
      DetallePedido {
        cantidad
        detallePedidoId
        pedidoId
        imagenPrincipal
        precio
        productoId
        titulo
        total
      }
      fechaPedido
      estado
      Usuario {
        nombres
        numeroDocumento
        apellidos
        email
      }
      precioTotal
      voucher
      visto
      tipoVenta
      pedidoId
      medioPago
    }
    numeroTotal
  }
}
    `;

/**
 * __useGetAllPedidosQuery__
 *
 * To run a query within a React component, call `useGetAllPedidosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPedidosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPedidosQuery({
 *   variables: {
 *      numeroPagina: // value for 'numeroPagina'
 *      pagina: // value for 'pagina'
 *      FechaInicio: // value for 'FechaInicio'
 *      FechaFin: // value for 'FechaFin'
 *      nombreCliente: // value for 'nombreCliente'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetAllPedidosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPedidosQuery, GetAllPedidosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPedidosQuery, GetAllPedidosQueryVariables>(GetAllPedidosDocument, options);
      }
export function useGetAllPedidosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPedidosQuery, GetAllPedidosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPedidosQuery, GetAllPedidosQueryVariables>(GetAllPedidosDocument, options);
        }
export type GetAllPedidosQueryHookResult = ReturnType<typeof useGetAllPedidosQuery>;
export type GetAllPedidosLazyQueryHookResult = ReturnType<typeof useGetAllPedidosLazyQuery>;
export type GetAllPedidosQueryResult = Apollo.QueryResult<GetAllPedidosQuery, GetAllPedidosQueryVariables>;
export const GetPedidoIdDocument = gql`
    query GetPedidoId($pedidoId: Int) {
  GetPedidoId(pedidoId: $pedidoId) {
    DetallePedido {
      cantidad
      detallePedidoId
      imagenPrincipal
      pedidoId
      precio
      productoId
      titulo
      total
    }
    DireccionEnvio {
      DeparCodi
      DistCodi
      ProvCodi
      celular
      direccion
      direccionEnvioId
      nombreAgencia
      pedidoId
    }
    Recibo {
      ruc
      reciboId
      razonSocial
      pedidoId
    }
    Usuario {
      apellidos
      apiToken
      celular
      customer_id
      email
      estado
      fechaNacimiento
      foto
      genero
      id
      nombres
      numeroDocumento
      tipoDocumento
      tipoUsuario
    }
    direccionEnvio
    estado
    fechaPedido
    medioPago
    numeroOperacion
    pedidoId
    precioEnvio
    precioTotal
    ticketPdf
    tipoEnvio
    tipoPago
    tipoVenta
    usuarioId
    visto
    voucher
  }
}
    `;

/**
 * __useGetPedidoIdQuery__
 *
 * To run a query within a React component, call `useGetPedidoIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPedidoIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPedidoIdQuery({
 *   variables: {
 *      pedidoId: // value for 'pedidoId'
 *   },
 * });
 */
export function useGetPedidoIdQuery(baseOptions?: Apollo.QueryHookOptions<GetPedidoIdQuery, GetPedidoIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPedidoIdQuery, GetPedidoIdQueryVariables>(GetPedidoIdDocument, options);
      }
export function useGetPedidoIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPedidoIdQuery, GetPedidoIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPedidoIdQuery, GetPedidoIdQueryVariables>(GetPedidoIdDocument, options);
        }
export type GetPedidoIdQueryHookResult = ReturnType<typeof useGetPedidoIdQuery>;
export type GetPedidoIdLazyQueryHookResult = ReturnType<typeof useGetPedidoIdLazyQuery>;
export type GetPedidoIdQueryResult = Apollo.QueryResult<GetPedidoIdQuery, GetPedidoIdQueryVariables>;