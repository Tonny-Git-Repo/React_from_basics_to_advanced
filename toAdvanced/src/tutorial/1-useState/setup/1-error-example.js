import React, { useState } from 'react';

const ErrorExample = () => {

  const [ title, setTitle ] = useState("Random title");

  const handleClick = () =>{
    if(title === "Random title"){
      setTitle("Hello people");
    }else{
      setTitle("Random title")
    }
    
  }

  return (<>
  <h2> {title}</h2>
  <button type="button" className='btn' onClick={() =>handleClick()}>Change title</button>
  </>);
};

export default ErrorExample;
