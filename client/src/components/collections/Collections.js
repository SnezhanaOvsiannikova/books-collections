import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Heading from "../headingComponent/Heading";
import Spinner from "../spinner/Spinner";
import CollectionPopup from "../collection-popup/CollectionPopup";
import AddingButton from "../addingButton/AddingButton";
import RedirectButton from "../redirectButton/RedirectButton";
import { unScroll } from "../../utils";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Collection = styled.div`
  padding: 10px;
  background-color: #17301c;
  border-radius: 5px;
  border: 2px solid #a4a9ad;
  flex: 1;
  min-width: 240px;
  max-width: 252px;
  margin: 0 10px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.p`
  font-style: italic;
  font-size: 14px;
  color: #ffba49;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px 10px;
`;

const renderCollections = ({
  collections,
  history,
  setIsEditing,
  setIsShowPopup,
  setCurrentData
}) => {
  return collections.map(collection => (
    <Collection
      onClick={() => history.push(`/collection/${collection._id}`)}
      key={collection._id}
    >
      <Heading
        borderColor="#a4a9ad"
        setIsEditing={setIsEditing}
        setIsShowPopup={setIsShowPopup}
        collection={collection}
        setCurrentData={setCurrentData}
      />
      <Text>{collection.description}</Text>
    </Collection>
  ));
};

const Collections = () => {
  const history = useHistory();
  const { collections, loading } = useSelector(state => state.collections);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentData, setCurrentData] = useState({});

  useEffect(() => {
    unScroll({ isShowPopup });
  }, [isShowPopup]);

  return (
    <Fragment>
      <ButtonHolder>
        <RedirectButton path="/books" text="All Books" />
        <AddingButton
          title="Create new collection"
          setCurrentData={setCurrentData}
          setIsEditing={setIsEditing}
          setIsShowPopup={setIsShowPopup}
        />
      </ButtonHolder>
      <Wrapper>
        {loading ? (
          <Spinner />
        ) : collections.length ? (
          renderCollections({
            collections,
            history,
            setIsEditing,
            setIsShowPopup,
            setCurrentData
          })
        ) : (
          `Create new collection`
        )}
      </Wrapper>{" "}
      {isShowPopup && (
        <CollectionPopup
          setIsShowPopup={setIsShowPopup}
          isEditing={isEditing}
          currentData={currentData}
        />
      )}
    </Fragment>
  );
};

Collections.propTypes = {
  collections: PropTypes.array,
  loading: PropTypes.bool
};

export default Collections;
