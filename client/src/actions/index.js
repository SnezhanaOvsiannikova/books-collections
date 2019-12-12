import {
  GET_COLLECTIONS_REQUEST,
  GET_BOOKS_REQUEST,
  EDIT_COLLECTION_REQUEST
} from "../actions/actionsType";

export const getCollections = () => ({
  type: GET_COLLECTIONS_REQUEST
});

export const getBooks = () => ({
  type: GET_BOOKS_REQUEST
});

export const editCollection = (id, collection) => ({
  type: EDIT_COLLECTION_REQUEST,
  payload: { id, collection }
});
