import React, { useState } from 'react';
import { data } from '../../../data'

// more components
// fix - context api, redux (for more complex cases)


//Prop drilling is passing a function or parameter to Component, that will not directly use it, but just passt it to the next Component they call,
//till the property/function reach the component that will use it
const PropDrilling = () => {
  const [people, setPeople ] = useState(data)

  //This is the propertiy that will be passed till the component that really have to use it
  const removePerson = (id) =>{
    setPeople((people) => {
      return people.filter((pers) => {
        return pers.id !== id;
      })
    })
  }

  //List itself won't use the methos removePerson, but we have to past it as a parameter so that the List can give it as parameter
  //to each person, because each person must have his own property to remove itself
  return <section>
    <h3>prop drilling</h3>
    < List people = {people} removePerson= {removePerson}/>
  </section>;
};

//The Component List has no use for the function removePerson, but it must give it as a parameter to each signle Person in the list
const List = ({people, removePerson}) => {
  return <>
  {people.map((person) => {
    return <SinglePerson key = {person.id} {...person} removePerson= {removePerson}/>
  })}
  </>
}

//hier is where the function removeperson will be used
const SinglePerson = ({ id, name, removePerson}) => {
  return <div className='item' >
  <h4> { name }</h4>
  <button onClick={() => removePerson(id)}>remove</button>
  </div> 
}

export default PropDrilling;
