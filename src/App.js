import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormContainer from './Forms/FormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormContainer></FormContainer>
      </div>
    );
  }
}

export default App;
