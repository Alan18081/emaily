import {combineReducers} from 'redux';
import authReducer from './auth';
import {reducer as formReducer} from 'redux-form';
import surveysReducer from './surveys';
import draftsReducer from './drafts';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  surveys: surveysReducer,
  drafts: draftsReducer
});

export default rootReducer;