import React, { useState } from 'react';
import classes from'./App.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'

const app = props =>{


 const [personsState, setPersonsState]= useState({
    persons : [
      {id: "szsc",name: "Venu" , age:"234"},
      {id:"dscs",name:"gopal", age:"2132"},
      {id:"uyyyt",name:"hegde", age:"999"}
    ],
    showPersons: false
  })

 
  const togglePersonHandler = ()=>{
       const doesShow = personsState.showPersons;
       setPersonsState(
         {
          persons: [
            {id: "szsc",name: "Venu" , age:"234"},
            {id:"dscs",name:"hegde", age:"2132"},
            {id:"uyyyt",name: "gopal", age:"999"}],
            showPersons: !doesShow
         }
       )
      
  }

  const deletePersonHandler = (personIndex)=>{
    //const persons = personsState.persons;
    const persons =[...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({
       persons: persons,
       showPersons: personsState.showPersons
    })
  }
 
  const nameChangedHandler = (event,id)=>{
    const personIndex = personsState.persons.findIndex(p =>{
      return p.id === id
    })
    const person = {
      ...personsState.persons[personIndex]
    }
    person.name = event.target.value;

  const persons = [...personsState.persons]
  persons[personIndex] = person;
    setPersonsState(
      {
       persons: persons,
         showPersons: personsState.showPersons
      }
    )
  }

  let persons = null;
  
  if(personsState.showPersons){
    persons = <Persons  
        persons = {personsState.persons}
        clicked={deletePersonHandler}
        changed={nameChangedHandler}/>
      
    
  
  }

  
 
    return (
      <div className={classes.App}>   
        
        <Cockpit
         showPersons={personsState.showPersons}
         persons={personsState.persons}
         clicked={togglePersonHandler}
        />
        {persons}
      
        
      </div>
    );
  //  return React.createElement('div',{className : 'App'},React.createElement('h1', null, "Hii is it working?"));
  }

export default app;



