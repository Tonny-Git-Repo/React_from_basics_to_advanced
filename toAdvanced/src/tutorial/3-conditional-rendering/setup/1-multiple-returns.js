import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isError, setIsError ] = useState(false);
  const [ user, setUser ] = useState('default-user');
/********** useEffekt ********************/
  useEffect(()=>{
     setIsLoading((prevVal) =>{
      prevVal = true;
      return prevVal;
    }); 

    fetch(url).then((resp ) => {
      if(!(resp.status >= 200 && resp.status <=299)){
        setIsLoading(false)
         setIsError((prevVal) =>{
           prevVal = true;
           return prevVal
         })
         throw new Error(resp.statusText)
      }
      return resp.json()
    } )
    .then((user) =>{
      const { login } = user;

      setUser(login);

      setIsLoading(false)
    }).catch((error) =>{
      console.log(error)
    })
    
  }, [])
/****************** end of useEffect *******************/
  if(isLoading){
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if(isError){
    return(
      <div>
        <h1>Error...</h1>
      </div>
    )
  }

  return <div>
    <h1>{user}</h1>
  </div>
};

export default MultipleReturns;
