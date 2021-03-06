import React from 'react'
import Login from '../components/Login'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/signup.css'
import {loginSuccess} from '../actions/login'
import axios from 'axios'
import {connect} from 'react-redux'
class SignUpContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message:'',
            username: '',
            password: '',

        }
    }
    changeTextUsername(value){
        this.setState({username: value});
    }   
    changTextPassWord(value){
        this.setState({password: value});
    }
    signUpTranfer(){
        this.props.history.push('/signup');
    }
    loginGoogle(){

    }
    LoginSimple(){
        axios.post('http://localhost:3000/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then((res) => {
            if(res.data.status === 'false'){
                this.setState({message: 'Login unsuccess!!!'});
                return;
            }
            this.props.dispatch(loginSuccess(res.data.id, res.data.token));
            this.props.history.push('/');
        })
        .catch((err) => {

        })
    }
    responseGoogleUnSuccess(res){
        this.setState({message: 'Login unsuccess!!!'});
        return;
        

    }
    responseGoogleSuccess(res){
        console.log(res);
        this.props.dispatch(loginSuccess(res.googleId, res.Zi.access_token));
        this.props.history.push('/');

    }
    render(){
        return(
            <div>
                <Header/>
                <Login
                    message={this.state.message}
                    loginGoogle={() => this.loginGoogle()}
                    LoginSimple={()=>this.LoginSimple()}
                    changeTextUsername={(value) => this.changeTextUsername(value)}  
                    changTextPassWord={(value) => this.changTextPassWord(value)}   
                    signUpTranfer={() => this.signUpTranfer()} 
                    responseGoogleUnSuccess={(res) => this.responseGoogleUnSuccess(res)  } 
                    responseGoogleSuccess={(res) => this.responseGoogleSuccess(res)  } 
                />
                <hr/>
                <Footer/>
            </div>
        )
    }
}

export default connect()(SignUpContainer)