import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Rating from "../rating/Rating";

const InputHolder = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  align-content: center;
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
  input[type="number"] {
    flex: 0 25%;
  }
`;

const BookPopupContent = ({
  data,
  setBookName,
  setBookAuthor,
  setBookPrice,
  setBookRating,
  bookRating
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
          name="name"
          defaultValue={data.name}
          onChange={event => setBookName(event.target.value)}
        />
      </InputHolder>
      <InputHolder>
        <label htmlFor="author">
          <b>Author:</b>{" "}
        </label>
        <input
          id="author"
          name="author"
          defaultValue={data.author}
          onChange={event => setBookAuthor(event.target.value)}
        />
      </InputHolder>
      <InputHolder>
        <label htmlFor="price">
          <b>Price:</b>{" "}
        </label>
        <input
          id="price"
          type="number"
          min="1"
          max="1000"
          name="price"
          defaultValue={data.price}
          onChange={event => setBookPrice(event.target.value)}
        />
      </InputHolder>
      <InputHolder>
        <Rating
          rating={bookRating || data.rating}
          setRatingValue={r => setBookRating(r + 1)}
        />
      </InputHolder>
    </Fragment>
  );
};

BookPopupContent.propTypes = {
  data: PropTypes.object,
  setBookName: PropTypes.func,
  setBookAuthor: PropTypes.func,
  setBookPrice: PropTypes.func,
  setBookRating: PropTypes.func,
  bookRating: PropTypes.number
};

export default BookPopupContent;
