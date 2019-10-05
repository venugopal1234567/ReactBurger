import React, { useState } from 'react';
import classes from'./App.css';
import Person from './Person/Person'


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
  let btnClass = '';
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
    btnClass = classes.Red;
  }

  
  const assignedclasses = [];
  if(personsState.persons.length <=2){
    assignedclasses.push(classes.red);
  }
  if(personsState.persons.length <=1){
    assignedclasses.push(classes.bold);
  }

    return (
      <div className={classes.App}>
        <h1> Hi Iam react developer</h1>
        <p className={assignedclasses.join(' ')}>Its working!</p>
        <button onClick={togglePersonHandler} className={btnClass} > Switch Name</button>
       
       
        {persons}
      
      
        
      </div>
    );
  //  return React.createElement('div',{className : 'App'},React.createElement('h1', null, "Hii is it working?"));
  }

export default app;



