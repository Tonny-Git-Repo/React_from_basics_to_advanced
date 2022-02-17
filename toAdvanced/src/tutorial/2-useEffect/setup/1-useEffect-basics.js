import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  let [ count , setCount ] = useState(0);

  const updateCount = () =>{
    setCount((prevCount)=>{
      return prevCount +1;
    });
  }

  //useEffect is for side operation/effect aftec a special (with condition) or every time something changes (default)
  //hooks can't be run in a condition, => when we want to use a hook with a condition we put the condition in the hook
  useEffect(() =>{
    if(count > 5){
      console.log("I'm a rock start!!!");
    }
  });

//We can run a useEffect depending on a specific varialble or list of variable in the second parameter[]
  useEffect(()=>{
    console.log("goog job ;-)");
  }, [count]);

  //The useEffect will run only the first time the page is rendered, if there is no second parameter
  useEffect(()=>{
    console.log("Hello Moto");
  }, []);
  return (<>
  <div className='countainer'>
    <h1>{ count }</h1>
    <button className='btn' onClick={() => updateCount()}>add</button>
  </div>
  </>);
};

export default UseEffectBasics;
