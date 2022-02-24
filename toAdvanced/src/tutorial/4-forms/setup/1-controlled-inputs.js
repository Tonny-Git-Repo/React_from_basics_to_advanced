import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ persons, setPerson ] = useState([])

  const handleClick = (e) =>{
    e.preventDefault();
    //console.log(name, email)
    if(name && email){
      const pers =  { id: new Date().getTime() ,name, email};
      console.log(pers);

      setEmail('');
      setName('')
      setPerson((prev) =>{
        return [...prev, pers]
      });
    }else{
      console.log("nothing found")
    }
  }

  return (<>
  <section>
    <form className='form' onSubmit={handleClick}>
      <div className='form-control'>
      <label htmlFor='userName'>Name: </label>
      <input type="text" id = 'userName' value= {name} onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className='form-control'>
      <label htmlFor='userMail'>Email: </label>
      <input type="email" id='userMail' onChange={(e) => setEmail(e.target.value)} value= {email}/>
      </div>

      <button type='submit' >send</button>
      </form>
    </section>
    <section>
      {
        persons.map((person) =>{
          const { id, name, email } = person
          return <div className='item' key={id}>
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        })
      }
    </section>
    </>
    
    );

};

export default ControlledInputs;
