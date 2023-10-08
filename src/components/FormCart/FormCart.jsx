const FormCart = ({handleAddOrder}, dataForm, handleOnChange) => {
  return (
    <div>
        <form onSubmit={handleAddOrder} >
            <input type='text' name='name' placeholder='Ingrese su nombre' value={dataForm.name} onChange={handleOnChange} />
            <input type='number' name='phone' placeholder='Ingrese su teléfono' value={dataForm.phone} onChange={handleOnChange} />
            <input type='email' name='email' placeholder='Ingrese su email' value={dataForm.email} onChange={handleOnChange} />
            <button className="btn btn-outline-secondary">Confirmar compra</button>
        </form>
    </div>
  )
}

export default FormCart