import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Book from "../book/Book";
import RedirectButton from "../redirectButton/RedirectButton";
import BookPopup from "../book-popup/BookPopup";
import AddingButton from "../addingButton/AddingButton";
import { unScroll } from "../../utils";

const BooksHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px 10px;
`;

const renderBooks = ({
  booksData,
  setIsEditing,
  setIsShowPopup,
  setCurrentData,
  locationState = {}
}) =>
  booksData.map(el => {
    return (
      <Book
        key={el._id}
        data={el}
        setIsEditing={setIsEditing}
        setIsShowPopup={setIsShowPopup}
        setCurrentData={setCurrentData}
        redirectFromCollection={locationState.redirectFromCollection}
        collectionId={locationState.id}
      />
    )
  });

const Books = props => {
  const { booksData } = useSelector(state => state.books);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const locationState = props.location.state;

  useEffect(() => {
    unScroll({ isShowPopup });
  }, [isShowPopup]);

  return (
    <Fragment>
      <ButtonHolder>
        <RedirectButton path="/" text="Home" />
        {locationState && locationState.redirectFromCollection && <RedirectButton path={`/collection/${locationState.id}`} text="Back to collection" />}
        <AddingButton
          title="Add new book"
          setCurrentData={setCurrentData}
          setIsEditing={setIsEditing}
          setIsShowPopup={setIsShowPopup}
        />
      </ButtonHolder>
      <BooksHolder>
        {" "}
        {renderBooks({
          booksData,
          setIsEditing,
          setIsShowPopup,
          setCurrentData,
          locationState
        })}
      </BooksHolder>
      {isShowPopup && (
        <BookPopup
          setIsShowPopup={setIsShowPopup}
          isEditing={isEditing}
          setCurrentData={setCurrentData}
          currentData={currentData}
        />
      )}
    </Fragment>
  );
};

Books.propTypes = {
  booksData: PropTypes.array
};

export default Books;
