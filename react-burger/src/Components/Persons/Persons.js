import React,{Component} from 'react'

import Person from './Person/Person'

class Persons extends Component{
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Person.js] getDerivedStateFromProps')
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Person.js] Should COmponent Update')
        return true;
    }
   
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Person.js] getSnapShotBeforeUpdate')
        return null;
    }

    componentDidUpdate(){
        console.log('[Person.js]componentDidUpdate')
    }
 render(){
    console.log('[Person.js] Render')
     return  this.props.persons.map((person ,index) =>{
        return  <Person
         click={()=> this.props.clicked(index)}
         name={person.name} 
         age={person.age} 
         key={person.id}
         changed= {(event)=>this.props.changed(event,person.id)}
         />
      })
 }
}

  export default Persons;