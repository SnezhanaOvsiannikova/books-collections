import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputHolder = styled.div`
  margin-bottom: 10px;
  display: flex;
  label {
    margin-right: 10px;
  }
  input,
  textarea {
    flex: 1;
  }
  textarea {
    resize: none;
    min-height: 100px;
  }
`;

const CollectionPopupContent = ({
  data,
  setCollectionName,
  setCollectionDescription
}) => {
  return (
    <Fragment>
      <InputHolder>
        <label htmlFor="name">
          <b>Name:</b>{" "}
        </label>
        <input
          id="name"
          type="text"
          defaultValue={data.name}
          onChange={event => setCollectionName(event.target.value)}
        ></input>
      </InputHolder>{" "}
      <InputHolder>
        <label htmlFor="description">
          <b>Description:</b>{" "}
        </label>
        <textarea
          id="description"
          defaultValue={data.description}
          onChange={event => setCollectionDescription(event.target.value)}
        ></textarea>
      </InputHolder>
    </Fragment>
  );
};

CollectionPopupContent.propTypes = {
  data: PropTypes.object,
  setCollectionName: PropTypes.func,
  setCollectionDescription: PropTypes.func
};

export default CollectionPopupContent;
