import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Heading = ({
  name,
  collection,
  isCollection,
  borderColor,
  setIsEditing,
  setIsShowPopup,
  setCurrentCollectionData
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

  return (
    <Wrapper>
      <Title>{name}</Title>
      <Fragment>
        <i
          className="fas fa-pencil-alt"
          onClick={e => {
            e.stopPropagation();
            setIsShowPopup(true);
            setIsEditing(true);
            setCurrentCollectionData(collection);
          }}
        ></i>
        {!isCollection && <i className="fas fa-trash-alt"></i>}
      </Fragment>
    </Wrapper>
  );
};

Heading.propTypes = {
  name: PropTypes.string,
  collection: PropTypes.object,
  isCollection: PropTypes.bool,
  borderColor: PropTypes.string,
  setIsEditing: PropTypes.func,
  setIsShowPopup: PropTypes.func,
  setCurrentCollectionData: PropTypes.func
};

export default Heading;
