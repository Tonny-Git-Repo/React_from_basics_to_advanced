import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  let [ size, setSize ] = useState(window.innerWidth)


  const resized = () =>{
    setSize(window.innerWidth)
    console.log("hello")
  }

  /**
   * It is a good practice to always add a cleanup after adding an eventListener
   */
  useEffect(() =>{
    window.addEventListener('resize', resized());
    //cleanup
    return () =>{
      window.removeEventListener('resize', resized())
    }
  })

  return (<div className='container'>
    <h1>Windows width</h1>
    <h1>{size} px</h1>
  </div>);
};

export default UseEffectCleanup;
