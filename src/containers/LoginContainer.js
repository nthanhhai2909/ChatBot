import React from 'react'
import Login from '../components/Login'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/signup.css';
export default class SignUpContainer extends React.Component{

    render(){
        return(
            <div className="signup">
                <Header/>
                <div className="container">
                    <Login 
                    />
                </div>
                <hr/>
                <Footer/>
            </div>
        )
    }
}

