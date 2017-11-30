import React from 'react';
import avatar from '../image/avatar.jpg';
import {Link} from 'react-router-dom'
const Title = () =>(
    <div>
        <h4>Confesstion - Blog</h4>
        <ul className="nav nav-pills nav-stacked">
            <li className="active"><a href="#section1">Home</a></li>
            <li><Link to="/friends">Friends</Link></li>
            <li><Link to="/skill">Skill</Link></li>
        </ul><br/>
    </div>
)
export default Title