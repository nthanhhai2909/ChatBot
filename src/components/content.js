import React from 'react';
import avatar from '../image/avatar.jpg';
import {} from 'react-bootstrap';
import Title from './Title';
import Home from './Home';
import Footer from './Footer';
import '../css/index.css';

export default class Header1 extends React.Component{

    render(){
        return(
            <div>
                <div className="container-fluid">
                    <div class="row content">
                        <div className="col-sm-3 sidenav">
                            <Title/>
                        </div>
                        <div className="col-sm-9">
                            <Home/>
                        </div>
                        
                    </div>
                </div>
                <Footer/>
            </div>
            
                    
        );
    }
}