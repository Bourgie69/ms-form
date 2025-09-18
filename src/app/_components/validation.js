import { form } from "@heroui/theme"

export const checkIfHasLetters = (string) => {
    return /^[a-zA-Z]+$/.test(string)
}

export const checkIfHasSpecialChars = (string) => {
    return /[!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?]/.test(string)
}

export const checkIfHasNumbers = (string) => {
    return /\d/.test(string)
  }

export const checkEmail = (string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(string)
}


export const validateFirst = (formData, setErrors, step, setStep) => {
    const errorMessage = {}

    if (checkIfHasNumbers(formData.firstName) || 
    checkIfHasSpecialChars(formData.firstName) || 
    formData.firstName.length === 0) {
      errorMessage.firstName = 'Input should only contain letters.'
      setErrors((prev) => ({...prev, firstName:true}))
    } else{
      setErrors((prev) => ({...prev, firstName:false}))
    }

    if (checkIfHasNumbers(formData.lastName) ||
    checkIfHasSpecialChars(formData.lastName) || 
    formData.lastName.trim().length === 0){
      errorMessage.lastName = 'Input should only contain letters.'
      setErrors((prev) => ({...prev, lastName:true}))
    } else{
      setErrors((prev) => ({...prev, lastName:false}))
    }

    if (checkIfHasNumbers(formData.userName) || 
    checkIfHasSpecialChars(formData.userName) || 
    formData.userName.trim().length === 0){
      errorMessage.userName = 'Input should only contain letters.'
      setErrors((prev) => ({...prev, userName:true}))
    } else{
      setErrors((prev) => ({...prev, userName:false}))
    }


    console.log(errorMessage)
    if(Object.keys(errorMessage).length === 0){
      setStep(step + 1)
    }
    else{
      console.log('ERROR')
    }
  }

export const validateSecond = (formData, setErrors, step, setStep) => {
    const errorMessage ={}
    if(!checkEmail(formData.email)){
        errorMessage.email = 'Not valid email'
        setErrors((prev) => ({...prev, email:true}))
    } else{
        setErrors((prev) => ({...prev, email:false}))
    }

    if(formData.phone.length !== 8 ||
    checkIfHasSpecialChars(formData.phone) ||
    checkIfHasLetters(formData.phone)
    ){
        errorMessage.phone = 'Not valid phone number'
        setErrors((prev) => ({...prev, phone:true}))
    } else{
        setErrors((prev) => ({...prev, phone:false}))
    }

    if(formData.password.length < 8 
    ){
        errorMessage.password = 'Not valid password'
        setErrors((prev) => ({...prev, password:true}))
    } else{
        setErrors((prev) => ({...prev, password:false}))
    }

    if(formData.confirmPassword !== formData.password){
        errorMessage.confirmPassword = 'password must match'
        setErrors((prev) => ({...prev, confirmPassword:true}))
    } else{
        setErrors((prev) => ({...prev, confirmPassword:false}))
    }

    if(Object.keys(errorMessage).length === 0){
      setStep(step + 1)
    }
    else{
      console.log('ERROR')
    }
}

export const validateThird = (formData, setErrors, step, setStep) => {
    const errorMessage = {}

    if(!formData.date){
        errorMessage.date = 'date must be picked'
        setErrors((prev => ({...prev, date:true})))
    } else{
        setErrors((prev) => ({...prev, date:false}))
    }

    if(!formData.file){
        errorMessage.file = 'file must be chosen'
        setErrors((prev) => ({...prev, file:true}))
    } else{
        setErrors((prev) => ({...prev, file:false}))
    }

    if(Object.keys(errorMessage).length === 0){
      setStep(step + 1)
    }
    else{
      console.log('ERROR')
    }
}