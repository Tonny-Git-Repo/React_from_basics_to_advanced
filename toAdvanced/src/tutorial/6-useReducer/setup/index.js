import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { type } from '@testing-library/user-event/dist/type';
import Reducer from './reducer';
// reducer function


const reducer = Reducer;

let defaultState ={
  people: [],
  isModalOpen: false,
  modalContent: ''
}

const Index = () => {
 /*  const [ people, setPeople ] = useState(data);
  const [ showModal, setShowModal ] = useState(false); */
  const [ name, setName ] = useState('')

  const [ state, dispatch ] = useReducer(reducer, defaultState)

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name){
      dispatch( { type: 'NO_VALUE'});
    }else{
      const newPers = {id: new Date().getDate(),toString, name: name}
      dispatch({ type: 'ADD_PEOPLE', payload: newPers});
      setName('');
    }
  
  }

  const closeModal = () =>{
    dispatch( {type: 'CLOSE_MODAL'})
  }
  return <>
  {state.isModalOpen && <Modal closeModal = {closeModal} modalContent={state.modalContent} />}
  <form className = 'form' onSubmit={handleSubmit}>
    <div>
    <input 
    type='text' 
    value={name} 
    onChange={(e)=>setName(e.target.value)}/>
    <button className ='btn' type='submit'>submit</button>
    </div>
  </form>
  {state.people.map((user)=>{
    const { id, name } = user;
    return <div key = {id} className= 'item'>
      <h4>{name}</h4>
      <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: user.id})}>remove</button>
    </div>
  })}
  </>;
};

export default Index;
