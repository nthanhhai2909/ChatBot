import React from 'react';
import {Paper, RaisedButton,TextField  } from 'material-ui';
import {Row, Col, Grid, Pager } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/signup.css';
const Login = ({username, pasword, confirm, message, signupGoole, signupSimple,
     changeTextEmail, changTextPassWord, changeTextConfirm, loginTranfer}) =>(
    <div className="signup"> 
        <Grid>
            <Row className="col-md-offset-3 login">
                <Col xs={6} md={8}>
                    <Paper  zDepth={3} >
                        <div  className="sign-form">
                            <h4 style={{textAlign:'center', color:'#fff'}}>{message}</h4>
                            <RaisedButton label="Login with google" secondary={true} onClick={signupGoole}/>
                            <h4>Email</h4>
                            <TextField hintText="email" fullWidth={true} 
                                onChange={ e => changeTextEmail(e.target.value)}
                                value={username}
                                floatingLabelText="Enter email"/><br/>
                            <h4>Password</h4>
                            <TextField inputStyle={true} 
                                 fullWidth={true} type="password" 
                                 onChange={e => changTextPassWord(e.target.value)} 
                                 value={pasword}
                                 floatingLabelText="Enter password"
                            />
                            <RaisedButton label="Login" primary={true} onClick={loginTranfer}/>
                            <RaisedButton label="" default={true} onClick={signupSimple}>
                                <Link to="/signup">Sign-up</Link>
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