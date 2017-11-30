import React from 'react'
import Signup from '../components/Signup'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {changeTextEmail} from '../actions/signup'
import PropTypes from 'prop-types'
import '../css/signup.css'
import {connect} from 'react-redux'
import axios from 'axios'
import Validator  from 'validator'

const EMAIL_INVALID = 'Email invalid'
const USERNAME_INVALID = 'Username invalid'
const PASSWORD_INVALID = 'Password invalid'
const CONFIRM_INVALID = 'Confirm invalid'
class SignUpContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            username: '',
            password: '',
            confirm: '',
            message: '',
            invalidEmail:'',
            invalidUsername:'',
            invalidPassword:'',
            invalidCofirm:''
        
        }
        
    }


    // get email from user
    changeTextEmail(value){
        this.setState({email: value});
    }
    // get username from user
    changeTextUsername(value){
        this.setState({username: value});
    }
    // get password from user
    changTextPassWord(value){
        this.setState({password: value});
    }
    // get confirm from user
    changeTextConfirm(value){
        this.setState({confirm: value});
    }
    signupGoole(){

    }

    signupSimple(){
        // check valid form sign-up
        if(!this.isValidForm()){return;}

        axios.post('http://localhost:3000/signup',{
            email:this.state.email,
            username: this.state.username, 
            password: this.state.password,
            confirm:this.state.confirm,
        })
        .then((response)=>{
            console.log(response.data);
            if(response.data.status === 'true'){
                this.props.history.push("/");
            }
            else{
                this.setState({message: response.data.message});
            }
        })
        .catch((err) => console.log(err));       
    }

    loginTranfer(){
        this.props.history.push({
            pathname:'/login'
        });
    }

    // check valid form sign-up
    isValidForm(){
        let isValid = true;
        //check email
        if(!this.isValidEmail(this.state.email))
            {this.setState({invalidEmail: EMAIL_INVALID}); isValid = false;}
        else{this.setState({invalidEmail: ''});}
        //check Username
        if(!this.isValidUsername(this.state.username))
            {this.setState({invalidUsername: USERNAME_INVALID}); isValid = false;}
        else{this.setState({invalidUsername: ''});}            
        //check password
        if(!this.isValidPassword(this.state.password))
            {this.setState({invalidPassword: PASSWORD_INVALID}); isValid = false;}
        else{this.setState({invalidPassword: ''});}  
        if(!this.isValidCofirm(this.state.confirm, this.state.password))
            {this.setState({invalidCofirm:CONFIRM_INVALID}); isValid = false;}
        else{this.setState({invalidCofirm: ''});}   
        return isValid;
    }

    // check valid is email
    isValidEmail(email){
        // check syntax email
        if(email.indexOf('@') === -1){return false;}
        // check email null
        if(email === '') return false;
        //check email valid
        if(!Validator.isEmail(email) ){ return false;}
        return true;
    }
    
    // check valid username
    isValidUsername(username){
        if(username === ''){return false;}
        const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        // check user starting with number
        if(username[0] > '0' && username[0] < '9'){return false;}
        // check username 6 or more characters
        if(username.length < 6) {return false;}
        // check username contains strange character
        if(format.test(username)) {return false;}
        return true;
    }

    // check valid password
    isValidPassword(password){
        if(password === ''){return false;}
        const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        // check user starting with number
        if(password[0] > '0' && password[0] < '9'){return false;}
        // check username 6 or more characters
        if(password.length < 6) {return false;}
        // check username contains strange character
        if(format.test(password)) {return false;}
        return true;
    }

    // check valid confirm
    isValidCofirm(comfirm, password){
        if(comfirm !== password){return false;}
        return true;
    }

    render(){
        console.log("hihi", this.state.invalidEmail);
        return(
            <div className="signup">
                <Header/>
                <div className="container">
                    <Signup 
                        changeTextEmail={(value) => this.changeTextEmail(value)}
                        changeTextUsername={(value) => this.changeTextUsername(value)}
                        changTextPassWord={(value) => this.changTextPassWord(value)}
                        changeTextConfirm={(value) => this.changeTextConfirm(value)}
                        message={this.state.message}
                        signupGoole={() => this.signupGoole()}
                        signupSimple={() => this.signupSimple()}
                        loginTranfer={() => this.loginTranfer()}
                        invalidEmail={this.state.invalidEmail}
                        invalidUsername={this.state.invalidUsername}
                        invalidPassword={this.state.invalidPassword}
                        invalidCofirm={this.state.invalidCofirm}
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

