export const removeAccents = (str) => {    
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')    
  }

export const toLowerCaseWithoutAccents = (str) => {
    const str1 = str.toLowerCase()
    const str2 = removeAccents(str1)
    return str2
  }

export const compareStrings = (str1, str2) => {
    if (str1 === '') return false
    const tlcwa1 = toLowerCaseWithoutAccents(str1)
    const tlcwa2 = toLowerCaseWithoutAccents(str2)
    return tlcwa2.search(tlcwa1) !== -1
}