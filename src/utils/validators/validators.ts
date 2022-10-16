export const requiredField = (value:string) => {
    if(value) return undefined
    return 'Field is required';

}
export const maxLengthCreator = (maxLength : number) => (value : string) => {
  if(value.length > maxLength) return `max length ${maxLength}`
    return undefined
}