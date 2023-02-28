import { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


import "./home.scss"
import beans from '../../pic/Beans.svg' 
import beansLight from '../../pic/Beans-light.svg' 


import startBeans1 from '../../pic/start-cards-beans-1.png'
import startBeans2 from '../../pic/start-cards-beans-2.png'
import startBeans3 from '../../pic/start-cards-beans-3.png'
import Footer from '../../components/footer/footer'


class Home extends Component {

    render() {
        return (
            <>
                <div className="first_screen">
                    <Container className="container" fluid="md">
                            <h1>Everything You Love About Coffee</h1>
                            <img src={beans} alt="beans" className="beans-logo"/>
                            <h2>We makes every day full of energy and taste</h2>
                            <h2>Want to try our beans?</h2>
                            <Link to="/our-coffee"><button>More</button></Link>
                    </Container>
                </div>
                <div className="about_us">
                    <h2>About Us</h2>
                    <img src={beansLight} alt="beans" className="beans-logo"/>
                    <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                    <p>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </div>
                <div className="our_best">
                    <h2>Our Best</h2>
                    <Container className="container">
                            <Row>
                                <Col>
                                    <Link to="/our-coffee/products/10">
                                        <div className="start_card">
                                            <img src={startBeans1} alt="beans1" />
                                            <div className="desc">
                                                <p>Presto coffee Beans 1kg</p>
                                                <span className="rightSide">14,99$</span>
                                            </div>
                                        </div>`
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/our-coffee/products/10">
                                        <div className="start_card">
                                            <img src={startBeans2} alt="beans2" />
                                            <div className="desc">
                                                <p>Presto coffee Beans 1kg</p>
                                                <span className="rightSide">14,99$</span>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/our-coffee/products/10">
                                        <div className="start_card">
                                            <img src={startBeans3} alt="beans3" />  
                                            <div className="desc">
                                                <p>Presto coffee Beans 1kg</p>
                                                <span className="rightSide">14,99$</span>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            </Row>
                    </Container>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Home