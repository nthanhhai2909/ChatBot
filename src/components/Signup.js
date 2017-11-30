import React from 'react';
import {Paper, RaisedButton,TextField  } from 'material-ui';
import {Row, Col, Grid, Pager } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/signup.css';
const SignUp = ({message, signupGoole, signupSimple, changeTextUsername,changeTextEmail,
                changTextPassWord, changeTextConfirm, loginTranfer,
                invalidEmail, invalidUsername, invalidPassword, invalidCofirm,}) =>(
    <div className="signup"> 
        <Grid>
            <Row className="col-md-offset-3">
                <Col xs={6} md={8}>
                    <Paper  zDepth={3} >
                        <div  className="sign-form">
                            <h4 style={{textAlign:'center', color:'red'}}>{message}</h4>
                            <RaisedButton label="Login with google" secondary={true} onClick={() =>signupGoole()}/>
                            <h4>Email</h4>
                            <TextField fullWidth={true} 
                                onChange={ e => changeTextEmail(e.target.value)}
                                floatingLabelText="Enter email"
                                errorText={invalidEmail}
                                /><br/>
                            <h4>Username</h4>
                            <TextField fullWidth={true} 
                                onChange={ e => changeTextUsername(e.target.value)}
                                floatingLabelText="Enter username"
                                errorText={invalidUsername}
                                /><br/>
                            <h4>Password</h4>
                            <TextField inputStyle={true} 
                                 fullWidth={true} type="password" 
                                 onChange={e => changTextPassWord(e.target.value)} 
                                 floatingLabelText="Enter password"
                                 errorText={invalidPassword}
                            />
                            <h4>Confirm</h4>
                            <TextField inputStyle="password" 
                                fullWidth={true} type="password"
                                onChange={e => changeTextConfirm(e.target.value)}
                                floatingLabelText="Enter confirm"
                                errorText={invalidCofirm}
                              /><br/>   
                            <RaisedButton label="Sign-up " style={{marginRight:1}} primary={true} onClick={() => signupSimple()}/>
                            <RaisedButton label="Login" secondary={true} onClick={() => loginTranfer()}>
                            </RaisedButton>
                        </div> 
                    </Paper>
                        
                </Col>
            </Row>
        </Grid>

    </div>
)

SignUp.PropTypes = {
    message: PropTypes.string,
    signupGoole: PropTypes.func,
    signupSimple: PropTypes.string,
    changeTextConfirm: PropTypes.func,
    changeTextEmail: PropTypes.func,
    changTextPassWord: PropTypes.func,
    loginTranfer: PropTypes.func,
}


export default SignUp