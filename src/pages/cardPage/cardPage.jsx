import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './cardPage.scss'

import cardPageBeans from '../../pic/cardPageBeans.jpg'
import beansLight from '../../pic/Beans-light.svg' 
import { Link } from 'react-router-dom'

const CardPage = (props) => {

    return (
        <>
            <Header pageName={props.title}/>
            <div className="navigation">
                <Link to="/">{"Home >"}</Link>
                <Link to="/our-coffee">{"Our Coffee >"}</Link>
                <Link to={"/our-coffee/products/"+ props.id}>{props.title}</Link>
            </div>
                <div className="about_bean">
                    <img src={cardPageBeans} alt="about beans img" />
                    <div className="about_bean_desc">
                        <h2>About it</h2>
                        <img src={beansLight} alt="beans logo" />
                        <div className="about_bean_desc-item">
                                <p><span className='bold'>Country:</span> {props.country}</p>
                                <p>
                                    <span className='bold'>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p>
                                    <span className='bold'>Price:</span> <span className='price'>{props.price}$</span>
                                </p>
                        </div>
                    </div>
                </div>
            <Footer/> 
        </> 
    )
}

export default CardPage