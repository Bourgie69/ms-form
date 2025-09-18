'use client'
import FormInput from "../_components/form-input";

export default function Step2({formData, setFormData, errors, setErrors}) {
  const handleInput = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({...prev, [name]: value}))
  };
  return(
    <> 
       <FormInput
       type='email'
        label="Email"
        name="email"
        value={formData.email}
        error={errors.email}
        errorMessage='Enter Valid Email!'
        onChange={handleInput}
      />
      <FormInput
      type='text'
        label="Phone Number"
        name="phone"
        value={formData.phone}
        error={errors.phone}
        errorMessage='Enter Valid Phone Number!'
        onChange={handleInput}
      />
      <FormInput
      type='password'
        label="Password"
        name="password"
        value={formData.password}
        error={errors.password}
        errorMessage='Enter Valid Password!'
        onChange={handleInput}
      />
      <FormInput
      type='password'
        label="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        error={errors.confirmPassword}
        errorMessage='Password Must Match!'
        onChange={handleInput}
      />
    </>
)}