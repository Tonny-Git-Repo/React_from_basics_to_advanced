import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [ names, setName ] = useState(data);

  const handleClick = (id) =>{
    const newList = names.filter(name =>{
      return name.id !== id;
    });

    setName(newList);
  }

  return (
    <>
    {names.map(name_id =>{
      const { id , name } = name_id;
      return(
        <div key={id} className='item'>
          <h4 >{name}</h4>
          <button type = "button" className='btn' onClick={()=>handleClick(id)}>delete</button>
        </div>
      ) 
    })}
    <button type='button' className='btn' onClick= {() => setName([])}>Clear all</button>
    </>
    );
};

export default UseStateArray;
