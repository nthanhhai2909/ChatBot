import React, { Component } from 'react';
import Home from '../components/Home';
import Friends from '../components/Friends';
import Skill from '../components/Skill';
import SignUpContainer from '../containers/SignUpContainer';
import LoginContainer from '../containers/LoginContainer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const App = () =>(
  <div>

      <MuiThemeProvider>
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/friends' component = {Friends}/>
                <Route exact path='/skill' component = {Skill}/>
                <Route exact path='/signup' component = {SignUpContainer}/>
                <Route exact path='/login' component = {LoginContainer}/>
            </Switch>
        </Router>
      </MuiThemeProvider>
  </div>
)


export default App
