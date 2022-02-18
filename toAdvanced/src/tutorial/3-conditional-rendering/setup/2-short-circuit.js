import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [ text, setText ] = useState('')
  const [ isError, setIsError ] = useState(false)
  //if the value text is true, then return text if it's not true return 'hello world'
  // With || somthing will bwereturn wether the text itself other the other text 
  const firstValue = text || 'hello world';

  //If the variable text is true then return 'hello world' if it is not true do nothing
  //the second text willbe displayed only if the condition is true (text must be true)
  const secondValue = text && 'hello world';

  const toggleError = () =>{
    setIsError((prevVal) =>{
       /* if(prevVal === true ){
         prevVal = false;
         return prevVal
       }
       prevVal = true;
       return prevVal */
       return !prevVal
    })
  }
  return (
    <>
    <h1>{ text || 'john doe' }</h1>
    <button className='btn' onClick = {() =>toggleError()} >Toggle error</button>
    {isError && <h1>Error...</h1>}
    {isError ? (<p>Sorry, there is an error...</p>) : (<p>There is no error</p>)}
    </>
  );
};

export default ShortCircuit;
