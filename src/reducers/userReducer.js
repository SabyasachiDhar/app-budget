// reducers/userReducer.js
const initialUserState = {
    name: '',
    email: ''
  };
  
  const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          name: action.payload.name,
          email: action.payload.email
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  