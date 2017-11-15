import React from 'react';
import avatar from '../image/avatar.jpg';
import {} from 'react-bootstrap';
import '../css/index.css';
export default class Title extends React.Component{
    render(){
        return (
            <div>
                <h4>Confesstion - Blog</h4>
                <ul className="nav nav-pills nav-stacked">
                    <li className="active"><a href="#section1">Home</a></li>
                    <li><a href="#section2">Friends</a></li>
                    <li><a href="#section3">Family</a></li>
                    <li><a href="#section3">Photos</a></li>
                </ul><br/>
            </div>
        );
    }
}