import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import CollectionPopupContent from "../collectionPopupContent/CollectionPopupContent";
import { addNewCollection, editCollection } from "../../actions/collections";

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

const CollectionPopup = ({ isEditing, setIsShowPopup, currentData }) => {
  const [collectionName, setCollectionName] = useState("");
  const [collectionDescription, setCollectionDescription] = useState("");
  const dispatch = useDispatch();

  const editCollectionData = ({
    currentData,
    collectionName,
    collectionDescription,
    setIsShowPopup
  }) => {
    dispatch(
      editCollection(currentData._id, {
        name: collectionName || currentData.name,
        description: collectionDescription || currentData.description
      })
    );
    setIsShowPopup(false);
  };

  const addNewCollectionData = ({
    collectionName,
    collectionDescription,
    setIsShowPopup
  }) => {
    if (collectionName && collectionDescription) {
      dispatch(
        addNewCollection({
          name: collectionName,
          description: collectionDescription
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
        <CollectionPopupContent
          data={currentData}
          setCollectionName={setCollectionName}
          setCollectionDescription={setCollectionDescription}
        />
        <Button
          onClick={() => {
            isEditing
              ? editCollectionData({
                  currentData,
                  collectionName,
                  collectionDescription,
                  setIsShowPopup
                })
              : addNewCollectionData({
                  collectionName,
                  collectionDescription,
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

CollectionPopup.propTypes = {
  isEditing: PropTypes.bool,
  setIsShowPopup: PropTypes.func,
  currentData: PropTypes.object
};

export default CollectionPopup;
