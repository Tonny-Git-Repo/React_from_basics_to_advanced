 const Reducer = (state, action)=>{
    console.log(state, action);
    if(action.type === "ADD_PEOPLE"){
      const newPeople = [ ...state.people, action.payload];
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'item added'
      }
    }
    
    if(action.type === 'CLOSE_MODAL'){
      return { ...state, isModalOpen: false}
    }
    
    if(action.type === 'NO_VALUE'){
      return {...state, isModalOpen: true, modalContent: "Please provide a name!"}
    }
    if(action.type === 'REMOVE_ITEM'){
      const newPeople = state.people.filter((people) =>{
        return people.id  !== action.payload
      });
      return { ...state, people: newPeople};
    }
    
    throw new Error('No action matched')
    }

    export default Reducer