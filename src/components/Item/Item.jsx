import { Link } from "react-router-dom"

const Item = ({ instrumento }) => {
    return (
        <div className='card w-25'>
            <div className="card-body">
                <img className="w-100" src={instrumento.imgUrl} alt="imagen instrumento" />
            </div>
            <div className="card-body">
                <strong>{instrumento.name}</strong>
                <p>Precio: {instrumento.precio}</p>
                <div className="card-footer">
                    <Link to={`/detalle/${instrumento.id}`}>
                    <button className="btn btn-outline-dark">Detalle:</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item