// src/redux/reducers.js
const initialState = {
    dataFromChild: '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DATA_FROM_CHILD':
        return {
          ...state,
          dataFromChild: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  