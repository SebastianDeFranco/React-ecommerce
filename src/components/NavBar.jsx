import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './cartwidget/CartWidget';




function NavBar() {
    return (
        <div>
        <Navbar bg="danger" variant="dark">
        <Navbar.Brand href="#home">Pizzeria BA</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Pizzas</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <Nav.Link href="#pricing"><CartWidget/></Nav.Link>
            </Nav>
        </Navbar>
        </div>
    )
}

export default NavBar
