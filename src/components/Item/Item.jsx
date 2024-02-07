import { Link } from "react-router-dom"

import './Item.css';

const Item = ({ instrument }) => {
    return (

        <div className='tarjeta'>
            <Link to={`/detalle/${instrument.id}`} className="link">
                <div className="card-title">{instrument.name}</div>
                <div className="tarjeta-body">
                    <img className="img-tarjeta" src={instrument.imgUrl} alt="imagen instrumento" />
                    <div className="description">{instrument.description}</div>
                </div>
                <div className="prize">Prize: USD {instrument.precio}</div>
            </Link>
        </div>


    )
}

export default Item