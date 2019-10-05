import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'


const app = props =>{

  const style = {
    backgroundColor : 'green',
    font : 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor : 'pointer',
  }


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
    persons = (
      <div>
       {
         personsState.persons.map((person ,index) =>{
           return  <Person
            click={()=> deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed= {(event)=>nameChangedHandler(event,person.id)}
            />
         })
        
       }
      </div>
    )
    style.backgroundColor = "red"
  }

  
  const classes = [];
  if(personsState.persons.length <=2){
    classes.push('red');
  }
  if(personsState.persons.length <=1){
    classes.push('bold');
  }

    return (
      <div className="App">
        <h1> Hi Iam react developer</h1>
        <p className={classes.join(' ')}>Its working!</p>
        <button onClick={togglePersonHandler} style={style}> Switch Name</button>
       
       
        {persons}
      
      
        
      </div>
    );
  //  return React.createElement('div',{className : 'App'},React.createElement('h1', null, "Hii is it working?"));
  }

export default app;



