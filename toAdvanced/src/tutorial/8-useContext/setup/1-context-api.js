import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

//creating a context
const PeopleContext = React.createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  //Defini all Properties, that will be contains in the context
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  //We have to wrap the root Component or the whole app with a context provider
  return (
    <PeopleContext.Provider value = {{removePerson, people}}>
      <h3>prop drilling</h3>
      <List />
    </PeopleContext.Provider>
  );
};

const List = () => {
  const {people} = useContext(PeopleContext)
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  //Accessing properties that are available in the context
  const { removePerson } = useContext(PeopleContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
