const handleUpdateEstado = (id: string, estado: string) => {
  updateEstadoProducto({
    productoId: id,
    estado: estado === 'Activado' ? 'Desactivado' : 'Activado'
  }).then((res) => {
    if (res?.ok) {
      Toast({ type: 'success', message: 'Estado Actualizado Correctamente.' })
    } else {
      Toast({ type: 'error', message: res?.error! })
    }
  })
}
