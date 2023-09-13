const Item = ({ instrumento }) => {
    return (
        <div className='card w-25'>
            <div className="card-body">
                <p>Precio: {instrumento.precio}</p>
                <div className="card-footer">
                    <button className="btn btn-outline-dark">Detalle:</button></div>
            </div>
        </div>
    )
}

export default Item