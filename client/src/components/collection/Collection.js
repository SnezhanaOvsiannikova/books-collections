import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import Book from "../book/Book";
import Heading from "../headingComponent/Heading";
import RedirectButton from "../redirectButton/RedirectButton";
import CollectionPopup from "../collection-popup/CollectionPopup";
import BookPopup from "../book-popup/BookPopup";
import { unScroll } from "../../utils";

const Text = styled.p`
  font-style: italic;
  font-size: 14px;
`;

const BooksHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const renderBooks = ({
  collectionData,
  booksData,
  setIsEditing,
  setIsShowPopup,
  setCurrentData,
  isCollectionPopupShow
}) => {
  const { books } = collectionData;
  const filteredData = booksData.length
    ? books.map(data => booksData.find(el => el._id === data))
    : [];

  return filteredData
    .filter(el => el !== undefined)
    .map(el => (
      <Book
        key={el._id}
        data={el}
        collectionId={collectionData._id}
        setIsEditing={setIsEditing}
        setIsShowPopup={setIsShowPopup}
        setCurrentData={setCurrentData}
        isCollectionPopupShow={isCollectionPopupShow}
        redirectFromCollection={false}
      />
    ));
};

const Collection = () => {
  const params = useParams();
  const { collections } = useSelector(state => state.collections);
  const { booksData } = useSelector(state => state.books);
  const collectionData = collections.find(el => el._id === params.id);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isCollectionPopup, isCollectionPopupShow] = useState(false);
  const [currentData, setCurrentData] = useState({});

  useEffect(() => {
    unScroll({ isShowPopup });
  }, [isShowPopup]);

  return (
    <Fragment>
      {collectionData && (
        <Fragment>
          <RedirectButton path="/" text="Home" />
          <Heading
            collection={collectionData}
            setIsShowPopup={setIsShowPopup}
            setIsEditing={setIsEditing}
            isCollectionPopupShow={isCollectionPopupShow}
            isCollection
          />
          <Text>{collectionData.description}</Text>
          <div>Books: </div> <br />
          <RedirectButton
            path="/books"
            text="Add new book to collection"
            state={{ id: collectionData._id, redirectFromCollection: true }}
          />
          {collectionData.books.length !== 0 && (
            <BooksHolder>
              {renderBooks({
                collectionData,
                booksData,
                setIsEditing,
                setIsShowPopup,
                isCollectionPopupShow,
                setCurrentData
              })}
            </BooksHolder>
          )}
        </Fragment>
      )}
      {isShowPopup && isCollectionPopup ? (
        <CollectionPopup
          setIsShowPopup={setIsShowPopup}
          isEditing={isEditing}
          currentData={collectionData}
        />
      ) : (
        isShowPopup && (
          <BookPopup
            setIsShowPopup={setIsShowPopup}
            isEditing={isEditing}
            currentData={currentData}
          />
        )
      )}
    </Fragment>
  );
};

Collection.propTypes = {
  collections: PropTypes.array,
  booksData: PropTypes.array
};

export default Collection;
