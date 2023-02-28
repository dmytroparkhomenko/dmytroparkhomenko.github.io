import { Component } from "react"
import "./our-coffee.scss"

import {Container} from 'react-bootstrap';
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Card from "../../components/card/card"
import Search from "../../components/search/search";

import aboutBeansImg from '../../pic/about-beans.png'
import beansLight from '../../pic/Beans-light.svg' 
import Filter from "../../components/filter/filter";
import { Link } from "react-router-dom";


class OurCoffee extends Component {

    render() {
        const elements = this.props.data.map(item => {
            return (
                <Card 
                    title={item.title}
                    country={item.country}
                    price={item.price}
                    id={item.id}
                    key={item.id} 
                />
            )
        })
    
        return ( 
            <>
                <Header pageName="Our Coffee"/> 
                <Container className="container">
                    <div className="navigation">
                        <Link to="/">{"Home >"}</Link>
                        <Link to="/our-coffee">{"Our Coffee"}</Link>
                    </div>
                    <div className="about_beans">
                        <img src={aboutBeansImg} alt="about beans img" />
                        <div className="about_beans_desc">
                            <h2>About our beans</h2>
                            <img src={beansLight} alt="beans logo" />
                            <p>
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. <br/><br/>
                                As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="filters">
                        <div className="search">
                            <p>Looking for</p>
                            <Search onSearch={this.props.changeFieldState} /> 
                        </div>
                        <div className="filter">
                            <p>Or filter</p>
                            <Filter 
                                filters={this.props.filtersButtons}
                                onFilter={this.props.onFilter}
                                onFilterSelect={this.props.onFilterSelect}
                            /> 
                        </div>
                    </div>
                    <div className="cards">
                        {elements}
                    </div>
                </Container>
                <Footer/> 
            </>
        )
    }
}

export default OurCoffee