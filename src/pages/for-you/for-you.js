import { Component } from "react"
import "./for-you.scss"

import {Container} from 'react-bootstrap';
import Header from "../../components/header/header";

class ForYou extends Component {

    render() {
        return (
            <>
                <Header pageName="For your pleasure"/> 
                <Container fluid="md">
                
                </Container>
            </>
        )
    }
}

export default ForYou