import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    
  }
  componentDidMount() {
    //Declare self=this
    let self = this;
    axios.get('/api')
    .then( (response) => {
      let json = response.data;
      //setState
      self.setState({
        message:json.message
      })
    })
    .catch( (error) => {
      console.log(error);
    });
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.message}</h1>
        </header>
        
      </div>
    );
  }
}

export default App;
