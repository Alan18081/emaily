import {
  FETCH_DRAFTS,
  DELETE_DRAFT,
  SORT_DRAFTS,
  ADD_DRAFT,
  EDIT_DRAFT,
  CHANGE_DRAFT,
  SHOW_DRAFT_LOADER,
  SET_DRAFT_ID,
  FETCH_DRAFTS_LOADER
} from '../actions/types';

const initialState = {
  items: [],
  activeDraft: null,
  loading: false,
  createdDraftId: ''
};

const fetchDraftsLoader = (state) => {
  return {
    ...state,
    loading: true
  }
};

const setDraftId = (state,action) => {
  return {
    ...state,
    createdDraftId: action.payload
  }
};

const fetchDrafts = (state,action) => {
  return {
    ...state,
    items: action.payload,
    loading: false
  };
};

const addDraft = (state,action) => {
  const addDrafts = [...state.items];
  const index = addDrafts.findIndex(draft => draft.id === action.payload.id);
  if(index !== -1) {
    addDrafts[index] = action.payload;
  }
  else {
    addDrafts.push(action.payload);
  }
  return {
    ...state,
    items: addDrafts,
    loading: false
  };
};

const showDraftLoader = (state) => {
  return {
    ...state,
    loading: true
  };
};

const deleteDraft = (state,action) => {
  const updatedItems = state.items.filter(draft => draft._id !== action.payload)
  return {
    ...state,
    items: updatedItems
  };
};

const sortDrafts = (state) => {
  const sortedDrafts = [...state.items].reverse();
  return {
    ...state,
    items: sortedDrafts
  };
};

const editDraft = (state,action) => {
  const activeDraft = state.items.find(draft => draft._id === action.payload);
  return {
    ...state,
    activeDraft
  };
};

const changeDraft = (state,action) => {
  const updatedItems = [...state.items];
  const index = updatedItems.findIndex(draft => draft._id === action.payload);
  const oldDraft = updatedItems[index];
  const newDraft = {
    ...oldDraft,
    ...action.payload.values
  };
  updatedItems[index] = newDraft;
  return {
    ...state,
    items: updatedItems,
    loading: false
  };
};

const draftsReducer = (state = initialState,action) => {
  switch(action.type) {
    case FETCH_DRAFTS_LOADER:
      return fetchDraftsLoader(state);
    case SET_DRAFT_ID:
      return setDraftId(state,action);
    case FETCH_DRAFTS:
      return fetchDrafts(state,action);
    case ADD_DRAFT:
      return addDraft(state,action);
    case SHOW_DRAFT_LOADER:
      return showDraftLoader(state);
    case DELETE_DRAFT:
      return deleteDraft(state,action);
    case SORT_DRAFTS:
      return sortDrafts(state);
    case EDIT_DRAFT:
      return editDraft(state,action);
    case CHANGE_DRAFT:
      return changeDraft(state,action);
    default:
      return state;
  }
};

export default draftsReducer;