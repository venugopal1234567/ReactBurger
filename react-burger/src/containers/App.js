import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'

class App extends Component {


  state = {
    persons: [
      { id: "szsc", name: "Venu", age: "234" },
      { id: "dscs", name: "gopal", age: "2132" },
      { id: "uyyyt", name: "hegde", age: "999" }
    ],
    showPersons: false
  }




  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = personsState.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  componentDidMount(){
    console.log('[App.js] ComponentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] ShouldComponentUpdate')
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] ComponentDidUpdate')
  }


  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }



    return (
      <div className={classes.App}>

        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}


      </div>
    );

  }



  //  return React.createElement('div',{className : 'App'},React.createElement('h1', null, "Hii is it working?"));
}

export default App;



