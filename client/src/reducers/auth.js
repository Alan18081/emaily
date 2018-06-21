import {FETCH_USER} from '../actions/types';

const fetchUser = (state,action) => {
  return action.payload || false;
};

const authReducer = (state = null,action) => {
  switch (action.type) {
    case FETCH_USER:
      return fetchUser(state,action);
    default:
      return state;
  }
};

export default authReducer;