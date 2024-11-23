import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Header =()=>{
    return(
        <div className="container-fluid p-0   ">
           <Navbar bg="dark fs-4" data-bs-theme="dark">
            <Container >
            <Navbar.Brand className="fs-3"   >RVG</Navbar.Brand>
            <Nav className="me-left">
                <Nav.Link as={Link} to="/"  >Home</Nav.Link>
                <Nav.Link as={Link} to="/About"  >About</Nav.Link>
                <Nav.Link as={Link} to="/Login" >Login</Nav.Link>

            </Nav>
            </Container>
      </Navbar>
        </div>
    )
}
export default Header;