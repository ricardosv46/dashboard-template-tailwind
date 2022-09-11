export const isNumberDecimal = (number?: string) => {
  const regNumber = /^\d{1,7}([.][0-9]{1,2})?$/
  return regNumber.test(number ?? '')
}
