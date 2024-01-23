import { Link } from "react-router-dom"

const Item = ({ instrument }) => {
    return (
        <div className='card w-25'>
            <strong className="card-header">{instrument.name}</strong>
            <div className="card-body">
                <img className="w-100" src={instrument.imgUrl} alt="imagen instrumento" />
            </div>
                <p>Prize: USD {instrument.precio}</p>
                <p>{instrument.description}</p>
                <div className="card-footer">
                    <Link to={`/detalle/${instrument.id}`}>
                    <button className="btn btn-outline-secondary">Detalle</button>
                    </Link>
                </div>
        </div>
    )
}

export default Item