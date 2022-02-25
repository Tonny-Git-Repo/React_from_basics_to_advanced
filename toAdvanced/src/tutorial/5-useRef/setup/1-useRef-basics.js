import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  //This initialse the referenz to null
  const refContainer = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    //using useRefName.current display the DOM Element that is tracked by this reference
    console.log(refContainer.current)
    //After accessing this reference we can access the value of this referrence with .value
    console.log(refContainer.current.value)
  }
  
  useEffect(()=>{
    refContainer.current.focus()
  })

  //with ref ={useRefMName} we're telling react to keep track on this element of the DOM
  return (<> 
  <form className='form' onSubmit = {handleSubmit}>
    <div>
      <input type='text' ref={refContainer}/>
      <button type='submit'>submit</button>
    </div>
  </form>
  </>);
};

export default UseRefBasics;
