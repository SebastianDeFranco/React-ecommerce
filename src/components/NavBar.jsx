import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './cartwidget/CartWidget';
import './shop/NavBar.css';




function NavBar() {
    return (
        <div>
        <Navbar bg="light" variant="light" className="navbar">
        <Navbar.Brand href="#home" className="logo"><img src="/assets/img/tienda-comic.png" width="90px"/></Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Comics</Nav.Link>
            <Nav.Link href="#feature">FAQ</Nav.Link>
            <Nav.Link href="#featur">¿Quienes Somos?</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <Nav.Link href="#pricin"><CartWidget/></Nav.Link>
            </Nav>
        </Navbar>
        </div>
    )
}

export default NavBar
