import { useState } from "react"

import './FormCart.css'

const FormCart = ({handleAddOrder, dataForm, handleOnChange}) => {

  const [errors, setErrors] = useState({
    name:'', 
    phone:'', 
    email:''
  })
    
    
  const handleBlur = (evt) => {
    const inputName = evt.target.name
    const inputValue = evt.target.value
    inputValue.length === 0 ? setErrors({
      ...errors, [inputName]: <p className="required">Fill required</p>
    })
    : setErrors({
      ...errors, [inputName]: ''
    })
  }

    
  return (
    <div>
      <h3>To complete the order, please fill in the following fields.</h3>
      <form onSubmit={handleAddOrder}>
        <input type='text' name='name' placeholder='Enter your complete name' value={dataForm.name} onChange={handleOnChange} onBlur={handleBlur} />
        <p className="error">{errors.name}</p>
        <input type='number' name='phone' placeholder='Enter your phone' value={dataForm.phone} onChange={handleOnChange} onBlur={handleBlur} />
        <p className="error">{errors.phone}</p>
        <input type='email' name='email' placeholder='Enter your email' value={dataForm.email} onChange={handleOnChange} onBlur={handleBlur} />
        <p className="error">{errors.email}</p>
        <button className="btn btn-success">Confirm order</button>
      </form>
    </div>
  )
}

export default FormCart