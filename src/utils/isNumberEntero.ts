export const isNumberEntero = (number?: string) => {
  const regNumber = /^\d{1,7}?$/
  return regNumber.test(number ?? '')
}
