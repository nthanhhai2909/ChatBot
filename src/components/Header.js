import React, {Component}  from 'react';
import {Nav,Navbar, NavItem, Image,Col} from 'react-bootstrap';
import avatar from '../image/avatar.jpg';

export default class Header extends Component{
    
    render(){
        return(
            
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">NGUYEN THANH HAI</a>
                    </Navbar.Brand>
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">About</NavItem>
                        <NavItem>
                            <Col xs={6} md={4}>
                                <Image src={avatar} circle width={25}  />
                            </Col>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}