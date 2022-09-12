export const isNumber = (number: string) => {
  const regex = /^[0-9]*$/
  return regex.test(number)
}
