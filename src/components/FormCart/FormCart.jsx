import { useState } from "react"

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
      ...errors, [inputName]: `Se requiere completar este campo`
    })
    : setErrors({
      ...errors, [inputName]: ''
    })
  }

    
  return (
    <div>
      <form onSubmit={handleAddOrder}>
        <input type='text' name='name' placeholder='Ingrese su nombre' value={dataForm.name} onChange={handleOnChange} onBlur={handleBlur} />
        <p className="error">{errors.name}</p>
        <input type='number' name='phone' placeholder='Ingrese su teléfono' value={dataForm.phone} onChange={handleOnChange} onBlur={handleBlur} />
        <p className="error">{errors.phone}</p>
        <input type='email' name='email' placeholder='Ingrese su email' value={dataForm.email} onChange={handleOnChange} onBlur={handleBlur} />
        <p className="error">{errors.email}</p>
        <button className="btn btn-outline-secondary">Confirmar compra</button>
      </form>
    </div>
  )
}

export default FormCart