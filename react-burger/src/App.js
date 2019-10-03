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

  const switchNmaeHandler = (newName)=>{
    //console.log("was clicked")
    setPersonsState({persons: [
      {name: "Venu" , age:"234"},
      {name:newName, age:"2132"},
      {name:"hegde", age:"999"}
    ]})
  }

  const nameChangeHandler = (event)=>{
    setPersonsState({
      persons: [
        {name: "Venu" , age:"234"},
        {name:"hegde", age:"2132"},
        {name: event.target.value, age:"999"}]
    })
  }

  const togglePersonHandler = ()=>{
       const doesShow = personsState.showPersons;
       setPersonsState(
         {
          persons: [
            {name: "Venu" , age:"234"},
            {name:"hegde", age:"2132"},
            {name: "gopal", age:"999"}],
            showPersons: !doesShow
         }
       )
  }

  const style = {
    backgroundColor : 'white',
    font : 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor : 'pointer'
  }

  let persons = null;
  if(personsState.showPersons){
    persons = (
      <div>

      <Person name={personsState.persons[0].name}
        age={personsState.persons[0].age}/>

       <Person name={personsState.persons[1].name}
        age={personsState.persons[1].age}/>
       
       <Person name={personsState.persons[2].name}
        age={personsState.persons[2].age} 
        click={switchNmaeHandler.bind(this,'gopalhegde')}
        changed={nameChangeHandler}>
          Iah fine
       </Person>

      </div> 
    )
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



