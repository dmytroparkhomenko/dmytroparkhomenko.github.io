import Container from 'react-bootstrap/Container';
import logo from '../../pic/Logo.svg' 
import './nav.scss'

import { Outlet, Link } from "react-router-dom";

const Nav = () => {

    return (
        <>
                <nav>
                    <Container fluid="md">
                        <ul>
                            <li>
                                <Link className="header_link" to="/" ><img src={logo} alt="Logo"/></Link>
                            </li>
                            <li>
                                <Link className="header_link" to="/our-coffee">Our Coffee</Link>
                            </li>
                            <li>
                                <Link className="header_link" to="/for-you">For your pleasure</Link>
                            </li>
                        </ul>
                    </Container>
                 </nav>
            <Outlet/>
        </>
    )
}

export default Nav