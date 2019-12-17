import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Rating from "../rating/Rating";
import {
  addBookToCollection,
  deleteBookFromCollection
} from "../../actions/collections";
import { deleteBook } from "../../actions/books";

const Holder = styled.div`
  padding: 10px;
`;

const IconWrap = styled.div`
  align-self: flex-end;
`;

const Title = styled.div`
  color: #17301c;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Price = styled.div`
  margin-top: 20px;
  .fa-dollar-sign {
    color: #17301c;
  }
`;

const showModal = ({
  setIsShowPopup,
  setIsEditing,
  setCurrentData,
  isCollectionPopupShow,
  data
}) => {
  setIsShowPopup(true);
  setIsEditing(true);
  setCurrentData && setCurrentData(data);
  isCollectionPopupShow && isCollectionPopupShow(false);
};

const onAddBookToCollection = (dispatch, collections, collectionId, bookId) => {
  const collection = collections.find(c => c._id === collectionId);
  if (collection && collection.books.indexOf(bookId) === -1)
    dispatch(addBookToCollection(collectionId, bookId));
};

const onDeleteBook = (dispatch, id) => {
  dispatch(deleteBook(id));
};

const onDeleteBookFromCollection = (dispatch, collectionId, bookId) => {
  dispatch(deleteBookFromCollection(collectionId, bookId));
};

const Book = ({
  data,
  setIsEditing,
  setIsShowPopup,
  setCurrentData,
  isCollectionPopupShow,
  redirectFromCollection,
  collectionId
}) => {
  const [bookRating, setBookRating] = useState(data.rating);
  const dispatch = useDispatch();
  const { collections } = useSelector(state => state.collections);
  const collection = collections.find(c => c._id === collectionId) || {};
  const isBookInCollection =
    collection.books &&
    collection.books.indexOf(data._id) !== -1 &&
    redirectFromCollection;

  const BookItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    flex: 0 24%;
    margin: 10px;
    border: 1px solid ${isBookInCollection ? "red" : "#17301c"};
    padding: 10px;
    border-radius: 5px;
    min-width: 240px;
    max-width: 252px;
    position: relative;
    .fa-trash-alt {
      color: red;
    }
    .fa-trash-alt,
    .fa-plus-square {
      margin-left: 15px;
    }
    input[type="checkbox"]:hover {
      cursor: pointer;
    }
    input[type="checkbox"]:focus {
      outline: none;
    }
  `;

  useEffect(() => {
    setBookRating(data.rating);
  }, [data]);

  return (
    <BookItem>
      <IconWrap>
        <i
          className="fas fa-pencil-alt"
          onClick={() =>
            showModal({
              setIsShowPopup,
              setIsEditing,
              setCurrentData,
              isCollectionPopupShow,
              data
            })
          }
        ></i>
        {!redirectFromCollection && (
          <i
            className="fas fa-trash-alt"
            onClick={() =>
              collectionId && !redirectFromCollection
                ? onDeleteBookFromCollection(dispatch, collectionId, data._id)
                : onDeleteBook(dispatch, data._id)
            }
          ></i>
        )}
        {redirectFromCollection && (
          <i
            className="fas fa-plus-square"
            onClick={() =>
              onAddBookToCollection(
                dispatch,
                collections,
                collectionId,
                data._id
              )
            }
          ></i>
        )}
      </IconWrap>
      <Holder>
        <Title>{data.name}</Title>
        <div>{data.author}</div>
      </Holder>
      <Price>
        <i className="fas fa-dollar-sign"></i> {data.price}
      </Price>
      <Rating
        rating={bookRating}
        onRatingClick={(i) => {
          setBookRating(i + 1);
          showModal({
            setIsShowPopup,
            setIsEditing,
            setCurrentData,
            isCollectionPopupShow,
            data: { ...data, rating: i + 1 }
          })
        }}
      />
    </BookItem>
  );
};

Book.propTypes = {
  data: PropTypes.object,
  setIsEditing: PropTypes.func,
  setIsShowPopup: PropTypes.func,
  setCurrentData: PropTypes.func,
  isCollectionPopupShow: PropTypes.func,
  redirectFromCollection: PropTypes.bool,
  collectionId: PropTypes.string
};

export default Book;
