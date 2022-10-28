import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom' ;
import { Button, Image, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../contexts/AuthProvider';
import { FaUserLock} from "react-icons/fa";


const Header = () => {

    const [error, setError] = useState();

    const { user, logOut } = useContext(AuthContext);
    // console.log(user)


    const logOutHandle = () => {
        logOut()
    }


    return (
        <div>
            {/* -----------navbar start */}

               <Navbar collapseOnSelect expand="lg" fixed="top" className='bg-secondary'>
                    <Container>
                        <Link to='/'className='text-decoration-none'><Navbar.Brand>Dragon News Portal</Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                          
                                {
                                    user?.uid ?
                                    <><span className='text-dark fs-4 fw-bold'>Wellcome..</span> <Nav.Link className='text-white fs-5  fw-bold'>{user.displayName}</Nav.Link></>
                                    
                                        :
                                    <>
                                        <Link className='text-white me-3 text-decoration-none' to='/login'>Login</Link>
                                        <Link className='text-white me-3 text-decoration-none' to='/register'>Register</Link>
                                    </>
                                
                                 }
                            
                            <Nav.Link eventKey={2}>
                                {
                                    user?.uid ?
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <Image roundedCircle style={{ height: '30px' }} src={user?.photoURL}></Image>
                                            <Button onClick={logOutHandle} className='mx-3'>Sign Out</Button>
                                        </div>
                                        :
                                    <button style={{boderRadius: '50px'}}  className='bg-primary btn btn-outline-danger'><FaUserLock className='fs-3 text-danger'/></button>
                                }
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            {/* -----------navbar ends */}
        </div>
    );
};

export default Header;