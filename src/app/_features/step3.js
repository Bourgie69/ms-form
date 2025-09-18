import FormInput from "../_components/form-input";

export default function Step3({formData, setFormData, errors, setErrors}) {


  const handleInput = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({...prev, [name]: value}))
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0] || null
    const reader = new FileReader();
    reader.onload = (e) => {
      setFormData((prev)=> ({...prev, file: e.target.result}))
    }
    reader.readAsDataURL(file)
  }

  return(
    <>
        <FormInput
        type='date'
        label="Date of Birth"
        name="date"
        value={formData.date}
        error={errors.date}
        errorMessage='Enter Valid Date!'
        onChange={handleInput}
      />
        
        <FormInput
        type='file'
        accept='image/*'
        label="Profile Image"
        name="file"
        error={errors.file}
        errorMessage='Choose Valid File!'
        onChange={handleFileInput}
        style={{cursor: 'pointer'}}
      />
      {formData.file ? (<img className="img-show" src={formData.file}/>) :<span className="img-empty">Add Image</span>}

    </>
)}