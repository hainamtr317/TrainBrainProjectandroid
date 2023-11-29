// reducers.js
const initialState = {
    // Define your initial state here
    counter: 0,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, counter: state.counter + 100 };
      case 'DECREMENT':
        return { ...state, counter: state.counter - 1 };
      case 'RESET':
        return {...state,counter:0}
      default:
        return state;
    }
  };
  
  export default rootReducer;