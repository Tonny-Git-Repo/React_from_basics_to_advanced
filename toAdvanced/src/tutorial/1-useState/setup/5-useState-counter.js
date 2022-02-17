import React, { useState } from 'react';

const UseStateCounter = () => {
  let [count, setCount ] = useState(0);

  let [countLater, setCountLater ] = useState(0)

  const decreaseCount = ()=> {
    count-=1;
    setCount(count)
  }

  const increase = () =>{
    count+=1;
    setCount(count)
  }

  //We can use setVariable with a an anonymous function in it isntead of directly using the variable
  //By using the precedent value of the variable, we are sure that we always have the precedent actuel value, 
  //in the case of our function with setTimeout, we have the real precedent value even if the vulue wasn't actual du to the 2s delay
  //IMPORTANT: by using this methode we must alwyas return
  const increaseLater = () =>{
    setTimeout(() =>{
      setCountLater((prevCount) =>{
        return prevCount+1
      })
    }, 2000)
  }
  return (<>
  <div className='container'>
    <div style={{margin: '4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1>{count}</h1>
      <button type='button' className="btn" onClick = {() => {decreaseCount()}}>Decrease</button>
      <button className='btn' onClick={() => setCount(0)}>Reset</button>
      <button className='btn' onClick={() =>increase()}>Increase</button>
    </div>
  
  <div style={{margin: '4rem 0'}}>
    <h2>More complex Counter</h2>
    <h1>{countLater}</h1>
    <button type='button' className="btn" onClick = {() => {increaseLater()}}>Increase Later</button>
  </div>
</div></>);
};

export default UseStateCounter;
