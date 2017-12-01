import React from 'react';
import {Paper, RaisedButton,TextField  } from 'material-ui';
import {Row, Col, Grid, Pager } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/signup.css';
const Login = ({message, loginGoogle, LoginSimple,changeTextUsername, changTextPassWord, signUpTranfer}) =>(
    <div className="signup"> 
        <Grid>
            <Row className="col-md-offset-3 login">
                <Col xs={6} md={8}>
                    <Paper  zDepth={3} >
                        <div  className="sign-form">
                            <h4 style={{textAlign:'center', color:'#fff'}}>{message}</h4>
                            <RaisedButton label="Login with google" secondary={true} onClick={() => loginGoogle()}/>
                            <h4>Username</h4>
                            <TextField fullWidth={true} 
                                onChange={ e => changeTextUsername(e.target.value)}
                                floatingLabelText="Enter username"/><br/>
                            <h4>Password</h4>
                            <TextField inputStyle={true} 
                                 fullWidth={true} type="password" 
                                 onChange={e => changTextPassWord(e.target.value)} 
                                 floatingLabelText="Enter password"
                            />
                            <RaisedButton label="Login" primary={true} style={{marginRight:1}} onClick={() =>LoginSimple()}/>
                            <RaisedButton label="Sign-up" secondary={true} onClick={() =>signUpTranfer()}>
                            </RaisedButton>
                        </div> 
                    </Paper>
                        
                </Col>
            </Row>
        </Grid>

    </div>
)

Login.PropTypes = {
}

export default Login