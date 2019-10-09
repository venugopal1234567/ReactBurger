import React  ,{useEffect} from 'react'
import classes from './Cockpit.css'

const cockpit = (props)=>{
   
    //  useEffect(()=>{
    //    console.log('[Cockpit.js] useEffect');
    //    setTimeout(()=>{
    //      alert("Data saved to cloud");
    //    }, 1000)
    //  },[props.persons])


    const assignedclasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
   
    if(props.persons.length <=2){
      assignedclasses.push(classes.red);
    }
    if(props.persons.length <=1){
      assignedclasses.push(classes.bold);
    }

    
    return (
        <div className={classes.Cockpit}>
        <h1> Hi Iam react developer</h1>
        <p className={assignedclasses.join(' ')}>Its working!</p>
        <button onClick={props.clicked} className={btnClass} > Switch Name</button>
        </div>
       
    )
}

export default cockpit;