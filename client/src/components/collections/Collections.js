import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Heading from "../headingComponent/Heading";
import Spinner from "../spinner/Spinner";
import PopupComponent from "../popup/PopupComponent";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Collection = styled.div`
  padding: 10px;
  background-color: #17301c;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 2px solid #a4a9ad;
  flex: 1;
  margin-left: 15px;
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Text = styled.p`
  font-style: italic;
  font-size: 14px;
  color: #ffba49;
`;

const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
  .fa-plus-square {
    font-size: 25px;
    &:hover {
      cursor: pointer;
      color: #9c9583;
    }
  }
`;

const renderCollections = ({
  collections,
  history,
  setIsEditing,
  setIsShowPopup,
  setCurrentCollectionData,
}) => {
  return collections.map(collection => (
    <Collection
      onClick={() => history.push(`/collection/${collection._id}`)}
      key={collection._id}
    >
      <Heading
        name={collection.name}
        borderColor="#a4a9ad"
        setIsEditing={setIsEditing}
        setIsShowPopup={setIsShowPopup}
        collection={collection}
        setCurrentCollectionData={setCurrentCollectionData}
      />
      <Text>{collection.description}</Text>
    </Collection>
  ));
};

const Collections = () => {
  const history = useHistory();
  const { collections } = useSelector(state => state.collections);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCollectionData, setCurrentCollectionData] = useState({});

  return (
    <Fragment>
      <Button
        title="Create new collection"
        onClick={() => {
          setCurrentCollectionData({});
          setIsShowPopup(true);
        }}
      >
        <i className="fas fa-plus-square"></i>
      </Button>
      <Wrapper>
        {" "}
        {collections.length ? (
          renderCollections({
            collections,
            history,
            setIsEditing,
            setIsShowPopup,
            setCurrentCollectionData
          })
        ) : (
          <Spinner />
        )}
      </Wrapper>{" "}
      {isShowPopup && (
        <PopupComponent
          setIsShowPopup={setIsShowPopup}
          isEditing={isEditing}
          currentCollectionData={currentCollectionData}
          isCollection
        />
      )}
    </Fragment>
  );
};

Collections.propTypes = {
  collections: PropTypes.array
};

export default Collections;
