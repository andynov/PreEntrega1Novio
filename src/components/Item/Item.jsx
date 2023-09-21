import { Link } from "react-router-dom"

const Item = ({ instrumento }) => {
    return (
        <div className='card w-25'>
            <strong className="card-header">{instrumento.name}</strong>
            <div className="card-body">
                <img className="w-100" src={instrumento.imgUrl} alt="imagen instrumento" />
            </div>
                <p>Precio: ${instrumento.precio}</p>
                <p>{instrumento.description}</p>
                <div className="card-footer">
                    <Link to={`/detalle/${instrumento.id}`}>
                    <button className="btn btn-outline-secondary">Detalle</button>
                    </Link>
                </div>
        </div>
    )
}

export default Item