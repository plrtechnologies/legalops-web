import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { removeToken, getToken } from "../auth";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = getToken();

  const handleLogout = () => {
    removeToken();
    navigate("/Login");
  };

  // Hide nav links on login or signup page
  const isLoginOrSignupPage = location.pathname === "/Login" || location.pathname === "/Signup";

  return (
    <div className="container-fluid p-0">
      <Navbar bg="dark fs-4" data-bs-theme="dark" className="justify-content-center">
        <Container className="d-flex flex-column align-items-center">
          <Navbar.Brand className="fs-3 mx-auto">RVG</Navbar.Brand>
          {!isLoginOrSignupPage && (
            <Nav className="me-left">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              {!token ? (
                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
              ) : (
                <Nav.Link as={Link} to="#" onClick={handleLogout}>Logout</Nav.Link>
              )}
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;