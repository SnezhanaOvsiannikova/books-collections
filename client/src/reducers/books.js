import {
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILED,
  ADD_NEW_BOOK_SUCCESS,
  ADD_NEW_BOOK_FAILED,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILED
} from "../actions/actionsType";

const initialState = {
  booksData: [],
  error: null
};

const books = (state = initialState, action) => {
  switch (action.type) {
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
    case ADD_NEW_BOOK_SUCCESS:
      return {
        ...state,
        booksData: [...state.booksData, action.payload.book]
      };
    case ADD_NEW_BOOK_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_BOOK_SUCCESS:
      return {
        ...state,
        booksData: state.booksData.filter(c => c._id !== action.payload.id)
      };
    case DELETE_BOOK_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
export default books;
