import React, {useContext} from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../contexts/AuthProvider';
import { FaUserLock} from "react-icons/fa";


const Header = () => {

    const { user } = useContext(AuthContext);
    console.log(user)

    return (
        <div>
            {/* -----------navbar start */}

               <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
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
                        <Nav>
                            <Nav.Link href="#deets">
                                { user?.email && user.displayName }
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user?.email ?
                                        <Image roundedCircle style={{ height: '30px' }} src={user.photoURL}></Image>
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