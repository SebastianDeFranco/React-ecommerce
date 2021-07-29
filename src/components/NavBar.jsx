import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './cartwidget/CartWidget';
import './shop/NavBar.css';
import {NavLink} from 'react-router-dom';
import {Link} from "react-router-dom";




function NavBar() {
    return (
        <div>
        <Navbar bg="light" variant="light" className="navbar">
        <Link to="/" className="logo"><img src="/assets/img/tienda-comic.png" width="90px"/></Link>
            <Nav className="mr-auto">
            <Link to="/" className="link-nav">Comics</Link>
            <Link to="/category/Marvel" className="link-nav">Marvel</Link>
            <Link to="/category/DC" className="link-nav">DC</Link>
            <Link to="/cart"><CartWidget/></Link>
            </Nav>
        </Navbar>
        </div>
    )
}

export default NavBar
