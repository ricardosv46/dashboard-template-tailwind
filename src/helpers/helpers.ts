export const recortarCadena = (cadena = '', totalCarateres: number): string => {
  if (cadena.length > totalCarateres) {
    return cadena.substring(0, totalCarateres - 1) + '...'
  }
  return cadena
}

export const ordenarFecha = (fecha: string): string => {
  const anno = fecha.substring(0, 4)
  const dia = fecha.substring(8, 10)
  const mes = fecha.substring(5, 7)
  return dia + '-' + mes + '-' + anno
}
