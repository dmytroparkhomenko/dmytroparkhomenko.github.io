import './card.scss'
import imgTest from '../../pic/card-beans.png'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <>
            <Link to={"/our-coffee/products/" + props.id}>
                <div className="card">
                    <img src={imgTest} alt="Beans" />
                    <p>{props.title}</p>
                    <p>{props.country}</p>
                    <span>{props.price}$</span>
                </div>
            </Link>
        </>
    )
}

export default Card