import React, {Component}  from 'react'
import {Nav,Navbar, NavItem, Image,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import avatar from '../image/avatar.jpg'

class Header extends React.Component{
    constructor(props){
        super(props);

    }
    
    render(){
        return(
            <Navbar bsStyle="inverse">
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">NGUYEN THANH HAI</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem onClick={() => this.props.handleClickLogin()} >Login</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}
export default Header