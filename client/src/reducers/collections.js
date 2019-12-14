import {
  GET_COLLECTIONS_REQUEST,
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_FAILED,
  ADD_NEW_COLLECTION_SUCCESS,
  ADD_NEW_COLLECTION_FAILED,
  EDIT_COLLECTION_SUCCESS,
  EDIT_COLLECTION_FAILED,
  DELETE_COLLECTION_SUCCESS,
  DELETE_COLLECTION_FAILED,
  ADD_NEW_BOOK_TO_COLLECTION_SUCCESS,
  ADD_NEW_BOOK_TO_COLLECTION_FAILED,
  DELETE_BOOK_FROM_COLLECTION_SUCCESS,
  DELETE_BOOK_FROM_COLLECTION_FAILED
} from "../actions/actionsType";

const initialState = {
  collections: [],
  loading: false,
  error: null
};

const updateCollections = (state, updatedCollection) => {
  const index = state.collections.findIndex(
    c => c._id === updatedCollection._id
  );
  const updatedCollections = [...state.collections];
  updatedCollections[index] = updatedCollection;
  return updatedCollections;
};

const updatedBooksInCollection = (state, action, isRemove) => {
  const index = state.collections.findIndex(c => c._id === action.collectionId);
  const updatedCollections = [...state.collections];
  const updatedBooks = [...state.collections[index].books];

  if (!isRemove) {
    updatedBooks.push(action.bookId);
  }

  updatedCollections[index].books = isRemove
    ? updatedBooks.filter(b => b !== action.bookId)
    : updatedBooks;

  return updatedCollections;
};

const collections = (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLECTIONS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_COLLECTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        collections: action.payload
      };
    case GET_COLLECTIONS_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case ADD_NEW_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: [...state.collections, action.payload]
      };
    case ADD_NEW_COLLECTION_FAILED:
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
    case DELETE_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: state.collections.filter(c => c._id !== action.payload)
      };
    case DELETE_COLLECTION_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case ADD_NEW_BOOK_TO_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: updatedBooksInCollection(state, action.payload)
      };
    case ADD_NEW_BOOK_TO_COLLECTION_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_BOOK_FROM_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: updatedBooksInCollection(state, action.payload, true)
      };
    case DELETE_BOOK_FROM_COLLECTION_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
export default collections;
