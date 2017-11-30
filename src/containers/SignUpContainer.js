import React from 'react'
import Signup from '../components/Signup'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {changeTextEmail} from '../actions/signup'
import PropTypes from 'prop-types'
import '../css/signup.css'
import {connect} from 'react-redux'
class SignUpContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirm: '',
            message: '',

        }
    }

    changeTextEmail(value){
        this.setState({username: value});
    }
    changTextPassWord(value){
        this.setState({password: value});
    }
    changeTextConfirm(value){
        this.setState({confirm: value});
    }
    signupGoole(){

    }

    signupSimple(){

    }

    loginTranfer(){

    }

    render(){
        return(
            <div className="signup">
                <Header/>
                <div className="container">
                    <Signup 
                        changeTextEmail={(value) => this.changeTextEmail(value)}
                        changTextPassWord = {(value) => this.changTextPassWord(value)}
                        changeTextConfirm = {(value) => this.changeTextConfirm(value)}
                        message = {this.state.message}
                        signupGoole={() => this.signupGoole()}
                        signupSimple={() => this.signupSimple()}
                        loginTranfer={() => this.loginTranfer()}
                    />
                </div>
                <hr/>
                <Footer/>
           </div>
        )
    }

}


SignUpContainer.PropTypes = {

}

export default connect()(SignUpContainer)

