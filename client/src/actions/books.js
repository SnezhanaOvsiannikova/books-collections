import {
  GET_BOOKS_REQUEST,
  ADD_NEW_BOOK_REQUEST,
  DELETE_BOOK_REQUEST,
  EDIT_BOOK_REQUEST
} from "./actionsType";

export const getBooks = () => ({
  type: GET_BOOKS_REQUEST
});

export const addBook = book => ({
  type: ADD_NEW_BOOK_REQUEST,
  payload: { book }
});

export const deleteBook = id => ({
  type: DELETE_BOOK_REQUEST,
  payload: { id }
});

export const editBook = (id, book) => ({
  type: EDIT_BOOK_REQUEST,
  payload: { id, book }
});
