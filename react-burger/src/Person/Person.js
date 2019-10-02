import React from 'react'
const person = (props)=>{
    return (
        <div>
              
              <p> Iam {props.name} react developer with {props.age}</p>
             <p>{props.children}</p> 
        </div>
        
    )
}

export default person;