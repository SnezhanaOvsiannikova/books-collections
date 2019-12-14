import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteCollection } from "../../actions/collections";

const clickHandler = ({
  e,
  setCurrentData,
  setIsEditing,
  setIsShowPopup,
  isCollectionPopupShow,
  collection
}) => {
  e.stopPropagation();
  setIsShowPopup(true);
  setIsEditing(true);
  setCurrentData && setCurrentData(collection);
  isCollectionPopupShow && isCollectionPopupShow(true);
};

const Heading = ({
  collection,
  isCollection,
  borderColor,
  setIsEditing,
  setIsShowPopup,
  setCurrentData,
  isCollectionPopupShow
}) => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 2px solid ${borderColor};
    .fa-pencil-alt,
    .fa-trash-alt {
      margin-left: 8px;
    }
    .fas:first-child {
      margin-left: 0;
    }
  `;

  const Title = styled.h2`
    margin: 0 10px 0 0;
    font-size: 18px;
    text-align: center;
    color: #9c9583;
    font-weight: 800;
    flex: 1;
  `;

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Title>{collection.name}</Title>
      <Fragment>
        <i
          className="fas fa-pencil-alt"
          onClick={e =>
            clickHandler({
              e,
              setCurrentData,
              setIsEditing,
              setIsShowPopup,
              collection,
              isCollectionPopupShow
            })
          }
        ></i>
        {!isCollection && (
          <i
            className="fas fa-trash-alt"
            onClick={e => {
              e.stopPropagation();
              dispatch(deleteCollection(collection._id));
            }}
          ></i>
        )}
      </Fragment>
    </Wrapper>
  );
};

Heading.propTypes = {
  collection: PropTypes.object,
  isCollection: PropTypes.bool,
  borderColor: PropTypes.string,
  setIsEditing: PropTypes.func,
  setIsShowPopup: PropTypes.func,
  setCurrentData: PropTypes.func,
  isCollectionPopupShow: PropTypes.func
};

export default Heading;
