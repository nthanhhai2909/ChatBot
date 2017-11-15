import React, { Component } from 'react';
import Header from './Header';
import Content from './content';
import {} from 'react-bootstrap';
export default class App extends Component {
  render(){
    return(
      <div >
        <Header/>
        <Content/>
      </div>
    );
  }
}
