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

const BookPopupContent = ({ data }) => {
  return (
    <Fragment>
      <InputHolder>
        <label htmlFor="name">
          <b>Name:</b>{" "}
        </label>
        <input id="name" type="text"></input>
      </InputHolder>
      <InputHolder>
        <label htmlFor="author">
          <b>Author:</b>{" "}
        </label>
        <input id="author"></input>
      </InputHolder>
      <InputHolder>
        <label htmlFor="price">
          <b>Price:</b>{" "}
        </label>
        <input id="price" type="number">
          ${" "}
        </input>
      </InputHolder>
      <InputHolder>
        <label htmlFor="rating">
          <b>Author:</b>{" "}
        </label>
        <input id="rating" type="checkbox">
          1
        </input>
      </InputHolder>
    </Fragment>
  );
};

BookPopupContent.propTypes = {
  data: PropTypes.object
};

export default BookPopupContent;
