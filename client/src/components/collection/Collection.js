import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import Book from "../book/Book";
import Heading from "../headingComponent/Heading";
import RedirectButton from "../redirectButton/RedirectButton";
import PopupComponent from "../popup/PopupComponent";

const Text = styled.p`
  font-style: italic;
  font-size: 14px;
`;

const BooksHolder = styled.div`
  display: flex;
  justify-content: center;
`;

const renderBooks = ({ collectionData, booksData }) => {
   const { books } = collectionData;
   const filteredData = booksData.length ? books.map(data => booksData.find(el => el._id === data)) : [];
   return filteredData.map(el => <Book key={el._id} data={el}/>);
};

const Collection = () => {
  const params = useParams();
  const { collections, booksData } = useSelector(state => state.collections);
  const collectionData = collections.find(el => el._id === params.id);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCollectionData, setCurrentCollectionData] = useState({});

  return (
    <Fragment>
      {collectionData && (
        <Fragment>
          <RedirectButton path='/' text="Home"/>
          <Heading 
            name={collectionData.name}
            description={collectionData.description}
            setIsShowPopup={setIsShowPopup}
            setIsEditing={setIsEditing}
            setCurrentCollectionData={setCurrentCollectionData}
            isCollection 
          />
          <Text>{collectionData.description}</Text>
          <div>Books: </div>{" "}
          {collectionData.books.length ? (
            <BooksHolder>{renderBooks({ collectionData, booksData })}</BooksHolder>
          ) : (
            "Add new book"
          )}
        </Fragment>
      )}
       {isShowPopup && (
        <PopupComponent
          setIsShowPopup={setIsShowPopup}
          isEditing={isEditing}
          currentCollectionData={currentCollectionData}
          setCurrentCollectionData={setCurrentCollectionData}
          isCollection
        />
      )}
    </Fragment>
  );
};

Collection.propTypes = {
  collections: PropTypes.array,
  booksData: PropTypes.array,
};

export default Collection;
