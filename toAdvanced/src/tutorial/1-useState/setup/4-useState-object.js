import React, { useState } from 'react';

const UseStateObject = () => {
  const [ person, setPerson ] = useState({
    name: "Zetsuna Kiryu",
    age: 30,
    style: "Rakashka palm"
  });

  //while using object, to conserv other variable, we must first user a spread oprerator 
  
  const updateStyle = () => {
    setPerson({...person, style: "niko style"})
  }
  //or we can define a state for each property of the object
  //const [name, setName ] = useState("Zetzuna Kiryu");
  //const [age, setAge ] = useState(30);
  //const [style, setStyle ] = useState("Zetzuna Kiryu");

  return(<>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.style}</h3>
  <button type='button' className='btn' onClick={() =>updateStyle()}>update</button>
  </>
    );
};

export default UseStateObject;
