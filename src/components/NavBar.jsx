import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './cartwidget/CartWidget';
import './shop/NavBar.css';



function NavBar() {
    return (
        <div>
        <Navbar bg="light" variant="light" className="navbar">
        <Navbar.Brand href="#home" className="logo">VB</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cadenitas</Nav.Link>
            <Nav.Link href="#feature">Aros</Nav.Link>
            <Nav.Link href="#featur">Anillos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <Nav.Link href="#pricin"><CartWidget/></Nav.Link>
            </Nav>
        </Navbar>
        </div>
    )
}

export default NavBar
