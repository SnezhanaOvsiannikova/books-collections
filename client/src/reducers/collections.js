import {
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_FAILED,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILED,
  EDIT_COLLECTION_SUCCESS,
  EDIT_COLLECTION_FAILED
} from "../actions/actionsType";

const initialState = {
  collections: [],
  booksData: [],
  error: null
};

const updateCollections = (state, updatedCollection) => {
  const index = state.collections.findIndex(c => c._id === updatedCollection._id);
  const updatedCollections = [...state.collections];
  updatedCollections[index] = updatedCollection;
  return updatedCollections;
};

const collections = (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload
      };
    case GET_COLLECTIONS_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        booksData: action.payload
      };
    case GET_BOOKS_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case EDIT_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: updateCollections(state, action.payload)
      };
    case EDIT_COLLECTION_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
export default collections;
