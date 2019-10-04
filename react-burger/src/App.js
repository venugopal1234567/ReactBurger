import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props =>{
 const [personsState, setPersonsState]= useState({
    persons : [
      {name: "Venu" , age:"234"},
      {name:"gopal", age:"2132"},
      {name:"hegde", age:"999"}
    ],
    showPersons: false
  })

 
  const togglePersonHandler = ()=>{
       const doesShow = personsState.showPersons;
       console.log(doesShow)
       setPersonsState(
         {
          persons: [
            {name: "Venu" , age:"234"},
            {name:"hegde", age:"2132"},
            {name: "gopal", age:"999"}],
            showPersons: !doesShow
         }
       )
      console.log(personsState.showPersons)
      
  }

  const deletePersonHandler = (personIndex)=>{
    const persons = personsState.persons;
    persons.splice(personIndex, 1);
    setPersonsState({
       persons: persons,
       showPersons: personsState.showPersons
    })
  }
 

  let persons = null;
  if(personsState.showPersons){
    persons = (
      <div>
       {
         personsState.persons.map((person ,index) =>{
           console.log(index)
           return  <Person
            click={()=> deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            />
         })
       }
      </div>
    )
  }

  
 
  const style = {
    backgroundColor : 'white',
    font : 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor : 'pointer'
  }

    return (
      <div className="App">
        <h1> Hi Iam react developer</h1>
        <button onClick={togglePersonHandler} style={style}> Switch Name</button>
       
       
        {persons}
      
      
        
      </div>
    );
  //  return React.createElement('div',{className : 'App'},React.createElement('h1', null, "Hii is it working?"));
  }

export default app;



