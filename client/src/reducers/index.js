import {combineReducers} from 'redux';
import authReducer from './auth';
import {reducer as formReducer} from 'redux-form';
import surveysReducer from './surveys';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  surveys: surveysReducer
});

export default rootReducer;