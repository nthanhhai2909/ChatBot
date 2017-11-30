import React, {Component}  from 'react'
import {Nav,Navbar, NavItem, Image,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import avatar from '../image/avatar.jpg'

const Header = () => (
    <Navbar bsStyle="inverse">
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">NGUYEN THANH HAI</Link>
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem>
                    <Link to="/login" style={{color: "#E0F2F1"}}>Login</Link>
                </NavItem>

            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
export default Header