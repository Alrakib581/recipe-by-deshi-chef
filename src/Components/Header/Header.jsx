import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext) 
  const handleLogOut = ()=>{
    // console.log('cliked')
    logOut()
  }
  return (
    <div className="position-sticky top-0 inddex">
      <Navbar bg="warning" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand className="fw-bold" to="/">Recipes by deshi chef</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <ActiveLink to="/">Home</ActiveLink>
              <ActiveLink to='/blog'>Blog</ActiveLink>
            </Nav>
            <Nav className="d-flex align-items-center">
                {
                  user && <Link title={user?.displayName} className="btn py-0"> {
                    user?.photoURL ? <img style={{width: '60px'}} className='img-fluid rounded-circle ' src={user?.photoURL} alt="" /> : user?.displayName
                  } </Link>
                }
                {
                  user ? 
                   <button onClick={handleLogOut} className="btn btn-dark px-4">Logout</button>: <Link to='/login'><button className="btn btn-dark px-4">Login</button></Link>
                   
                  
                }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
