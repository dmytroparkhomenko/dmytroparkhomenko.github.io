import './card.scss'
import imgTest from '../../pic/card-beans.png'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <>
            <Link to={"/our-coffee/products/" + props.id}>

                <div className={props.kind && props.kind === 'home-card' ? "card home-card" : "card" }>
                    <img src={props.img || imgTest} alt="Beans" />
                    <p>{props.title}</p>
                    <p>{props.country}</p>
                    <span>{props.price}$</span>
                </div>

            </Link>
        </>
    )
}

export default Card