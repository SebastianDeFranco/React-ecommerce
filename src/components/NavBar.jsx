import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './cartwidget/CartWidget';
import './shop/NavBar.css';
import {NavLink} from 'react-router-dom';




function NavBar() {
    return (
        <div>
        <Navbar bg="light" variant="light" className="navbar">
        <NavLink to="/" className="logo"><img src="/assets/img/tienda-comic.png" width="90px"/></NavLink>
            <Nav className="mr-auto">
            <NavLink to="/" className="link-nav">Comics</NavLink>
            <NavLink to="/category/Marvel" className="link-nav">Marvel</NavLink>
            <NavLink to="/category/DC" className="link-nav">DC</NavLink>
            <Nav.Link href="#pricin"><CartWidget/></Nav.Link>
            </Nav>
        </Navbar>
        </div>
    )
}

export default NavBar
