import { Component } from "react"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const btnStyles = {
    textAlign: 'center', 
    padding: '30px 0',
}

class NoPage extends Component {

    render() {
        return (
            <>
                <Header pageName="No Page"/> 
                    <Container style={btnStyles} >
                        <Link to="/"> 
                            <Button variant="secondary" size="lg">Go back</Button>{' '}
                        </Link>
                    </Container>
                <Footer/> 
            </>
        )
    }
}

export default NoPage