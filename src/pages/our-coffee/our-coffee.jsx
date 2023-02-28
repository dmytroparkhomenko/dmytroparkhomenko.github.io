import { Component } from "react"
import "./our-coffee.scss"

import { Container} from 'react-bootstrap';
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Search from "../../components/search/search";

import aboutBeansImg from '../../pic/about-beans.png'
import beansLight from '../../pic/Beans-light.svg' 
import Filter from "../../components/filter/filter";
import About from "../../components/about/about";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import Products from "../../components/products/products";


class OurCoffee extends Component {

    render() {
    
        return ( 
            <>
                <Header pageName="Our Coffee"/> 
                <Container className="container">

                    <Breadcrumb 
                        pageName={'Our Coffee'}
                        pageLink={'our-coffee'}/> 

                    <About 
                        title={"About our beans"} 
                        logo={beansLight}   
                        img={aboutBeansImg}/> 

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

                    <Products 
                        data={this.props.data}
                        dataCount={this.props.dataCount}/> 

                </Container>
                <Footer/> 
            </>
        )
    }
}

export default OurCoffee