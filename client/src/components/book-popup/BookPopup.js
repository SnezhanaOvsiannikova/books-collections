import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import BookPopupContent from "../bookPopupContent/BookPopupContent";
import { addBook, editBook } from "../../actions/books";

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1001;
`;

const Popup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  min-width: 300px;
  min-height: 300px;
  min-width: 400px;
  min-height: 400px;
  background: #ffffff;
  border: 2px solid #a4a9ad;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  box-shadow: #64686e 0px 0px 3px 3px;
  -moz-box-shadow: #64686e 0px 0px 3px 3px;
  -webkit-box-shadow: #64686e 0px 0px 3px 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

const Button = styled.button`
  border: none;
  color: #e2d4b7;
  align-self: flex-end;
  margin-top: auto;
  padding: 10px 15px;
  background: #17301c;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
`;

const CloseIcon = styled.i`
  font-size: 20px;
  position: absolute;
  right: 2%;
  top: 2%;
`;

const Error = styled.span`
  color: red;
  font-size: 14px;
`;

const isValid = ({ bookName, bookAuthor, bookPrice, setValidationError }) => {
  let errText = "";
  if (!bookName) {
    errText = `Name is required.${"\n"}`;
  }
  if (!bookAuthor) {
    errText = `${errText}Author is required.${"\n"}`;
  }
  if (!bookPrice) {
    errText = `${errText}Price is required.`;
  }

  setValidationError(errText);
  return bookName && bookAuthor && bookPrice;
};

const BookPopup = ({ isEditing, setIsShowPopup, currentData }) => {
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [bookRating, setBookRating] = useState(0);
  const [validationError, setValidationError] = useState(null);
  const dispatch = useDispatch();

  const editBookData = ({
    currentData,
    bookName,
    bookAuthor,
    bookPrice,
    bookRating,
    setIsShowPopup
  }) => {
    dispatch(
      editBook(currentData._id, {
        name: bookName || currentData.name,
        author: bookAuthor || currentData.author,
        price: bookPrice || currentData.price,
        rating: bookRating || currentData.rating
      })
    );
    setIsShowPopup(false);
  };

  const addNewBookData = ({
    bookName,
    bookAuthor,
    bookPrice,
    bookRating,
    setIsShowPopup
  }) => {
    if (
      isValid({
        bookName,
        bookAuthor,
        bookPrice,
        setValidationError
      })
    ) {
      dispatch(
        addBook({
          name: bookName,
          author: bookAuthor,
          price: bookPrice,
          rating: bookRating
        })
      );
      setIsShowPopup(false);
    }
  };

  return (
    <PopupWrapper>
      <Popup>
        <CloseIcon
          className="fas fa-times"
          onClick={() => setIsShowPopup(false)}
        ></CloseIcon>
        <BookPopupContent
          data={currentData}
          setBookName={setBookName}
          setBookAuthor={setBookAuthor}
          setBookPrice={setBookPrice}
          setBookRating={setBookRating}
          bookRating={bookRating}
        />
        {validationError && <Error>{validationError}</Error>}
        <Button
          onClick={() => {
            isEditing
              ? editBookData({
                  currentData,
                  bookName,
                  bookAuthor,
                  bookPrice,
                  bookRating,
                  setIsShowPopup
                })
              : addNewBookData({
                  bookName,
                  bookAuthor,
                  bookPrice,
                  bookRating,
                  setIsShowPopup
                });
          }}
        >
          {isEditing ? "Edit" : "Create"}
        </Button>
      </Popup>
    </PopupWrapper>
  );
};

BookPopup.propTypes = {
  isEditing: PropTypes.bool,
  setIsShowPopup: PropTypes.func,
  currentData: PropTypes.object
};

export default BookPopup;
