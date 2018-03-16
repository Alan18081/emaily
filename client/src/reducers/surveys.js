import {FETCH_SURVEYS, DELETE_SURVEY,SORT_SURVEYS,FETCH_SURVEYS_LOADER} from '../actions/types';

const initialState = {
  items: [],
  loading: false
};

const fetchSurveysLoader = (state) => {
  return {
    ...state,
    loading: true
  };
};

const fetchSurveys = (state,action) => {
  return {
    ...state,
    items: action.payload,
    loading: false
  };
};

const deleteSurvey = (state,action) => {
  const updatedSurveys = state.items.filter(survey => survey._id !== action.payload);
  return {
    ...state,
    items: updatedSurveys
  };
};

const sortSurveys = (state) => {
  const surveys = [...state.items];
  return {
    ...state,
    items: surveys.reverse()
  };
};

const surveysReducer = (state = initialState,action) => {
  switch(action.type) {
    case FETCH_SURVEYS_LOADER:
      return fetchSurveysLoader(state);
    case FETCH_SURVEYS:
      return fetchSurveys(state,action);
    case DELETE_SURVEY:
      return deleteSurvey(state,action);
    case SORT_SURVEYS:
      return sortSurveys(state);
    default:
      return state;
  }
};

export default surveysReducer;