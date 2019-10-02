import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi Iam react developer</h1>
        <Person name="venu" age="132"/>
        <Person name="gopal" age="123423"/>
        <Person name="hegde" age="999">Iah fine</Person>
        <Person name="llll" age="2323"/>
      </div>
    );
  //  return React.createElement('div',{className : 'App'},React.createElement('h1', null, "Hii is it working?"));
  }
}

export default App;
