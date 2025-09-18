'use client'
import FormInput from "../_components/form-input";
export default function Step1({formData, setFormData, errors, setErrors}) {

  const handleInput = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({...prev, [name]: value}))
  };
  const handleEnterClick = (e) => {
    if(e.key === 'Enter'){
      console.log('enter')
    }
  }
  return (
    <> 
       <FormInput
        type='text'
        label="First Name"
        name="firstName"
        value={formData.firstName}
        error={errors.firstName}
        errorMessage='Enter Valid First Name!'
        onChange={handleInput}
        onKeyDown={handleEnterClick}
      />
      <FormInput
        type='text'
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        error={errors.lastName}
        errorMessage='Enter Valid Last Name!'
        onChange={handleInput}
      />
      <FormInput
        type='text'
        label="Username"
        name="userName"
        value={formData.userName}
        error={errors.userName}
        errorMessage='Enter Valid User Name!'
        onChange={handleInput}
      />
    </>
  )
}