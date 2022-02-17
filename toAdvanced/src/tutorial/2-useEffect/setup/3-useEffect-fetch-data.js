import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  let [ users, setUsers ] = useState([]);

  const getUsers = async () =>{
    const resp = await fetch(url)
    const users = await resp.json();
    setUsers(users)
  }
  
  //really important  by fetching data to add the second parameter, empty ot with specific value to rerender or we can have an infinite loop
  //du to setUsers trigerry a rerendering cause updating the content of users
  //we can't call a hooks as an async function, so we call the asny function in the hook or we can also directly definie it in the hook
  useEffect(()=>{
    getUsers()
  },[])

  return (<div className='container'>
    <h2> Git Users</h2>
    <ul className='users'>
      {users.map((user) => {
        const  {id, login, avatar_url, html_url} = user
        return <li key={id}>
          <img src={avatar_url} alt = {login}/>
          <div>
            <h4>{login}</h4>
            <a href={html_url}>repository</a>
          </div>
        </li>
      })}
    </ul>
  </div>);
};

export default UseEffectFetchData;
