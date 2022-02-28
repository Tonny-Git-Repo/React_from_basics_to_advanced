import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [ name, setName ] = useState('default name');
  const { id } = useParams();

  useEffect(() =>{
    const newPers = data.find((person) => person.id === parseInt(id));
    setName(newPers.name);
  })
  return (
    <div>
      <h1>{name}</h1>
      <Link to ='/people' className='btn'>Back to people</Link>
    </div>
  );
};

export default Person;
