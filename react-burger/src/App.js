import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props =>{
 const [personsState, setPersonsState]= useState({
    persons : [
      {name: "Venu" , age:"234"},
      {name:"gopal", age:"2132"},
      {name:"hegde", age:"999"}
    ]
  })

  const switchNmaeHandler = ()=>{
    //console.log("was clicked")
    setPersonsState({persons: [
      {name: "Venu" , age:"234"},
      {name:"gopaksdkksdkkl", age:"2132"},
      {name:"hegde", age:"999"}
    ]})
  }
    return (
      <div className="App">
        <h1> Hi Iam react developer</h1>
        <button onClick={switchNmaeHandler}> Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>Iah fine</Person>
        
      </div>
    );
  //  return React.createElement('div',{className : 'App'},React.createElement('h1', null, "Hii is it working?"));
  }

export default app;



