const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const postalCodeRegex = /^\d{4}-\d{3}$/

export const validateName = (name: string): boolean => {
  return name.length > 1
}

export const validateEmail = (email: string): boolean => {
  return emailRegex.test(email)
}

export const validateCity = (city: string): boolean => {
  return city.length > 1
}

export const validateAddress = (address: string): boolean => {
  return address.length > 1
}

export const validatePostalCode = (postalCode: string): boolean => {
  return postalCodeRegex.test(postalCode)
}

export const validateNumber = (number: string): boolean => {
  return number && number.length > 9 && number.length < 16
}

export const validateAll =
  (name: string, email: string, city: string, address: string, postalCode: string, phone: string): boolean => {
  return validateName(name) && validateEmail(email) && validateCity(city)
    && validateAddress(address) && validateNumber(phone) && validatePostalCode(postalCode)
}



