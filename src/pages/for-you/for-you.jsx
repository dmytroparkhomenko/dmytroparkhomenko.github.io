import { Component } from "react"
import "./for-you.scss"

import {Container} from 'react-bootstrap'
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

import About from "../../components/about/about"
import aboutGoodsImg from '../../pic/about-goods.png'
import beansLight from '../../pic/Beans-light.svg' 
import Breadcrumb from "../../components/breadcrumb/breadcrumb"
import Products from "../../components/products/products"

class ForYou extends Component {

    render() {
        return (
            <>
                <Header pageName="For your pleasure"/> 
                <Container fluid="md">
                    <Breadcrumb
                        pageName={'For your pleasure'}
                        pageLink={'for-you'}/> 
                    <About 
                        title={"About our goods"} 
                        logo={beansLight}   
                        img={aboutGoodsImg}
                    /> 
                    <Products data={this.props.data}/> 
                </Container>
                <Footer/> 
            </>
        )
    }
}

export default ForYou