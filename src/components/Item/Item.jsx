import { Link } from "react-router-dom"

import './Item.css';

const Item = ({ instrument }) => {
    return (
        <div className='card w-25 tarjeta'>
            <strong className="card-header">{instrument.name}</strong>
            <div className="card-body">
                <img className="w-100" src={instrument.imgUrl} alt="imagen instrumento" />
            </div>
                <p className="description">{instrument.description}</p>
                <p className="prize">Prize: USD {instrument.precio}</p>
                <div className="card-footer">
                    <Link to={`/detalle/${instrument.id}`}>
                    <button className="btn btn-outline-secondary btn-detail">Detail</button>
                    </Link>
                </div>
        </div>
    )
}

export default Item