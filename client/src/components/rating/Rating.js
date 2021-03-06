import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RatingHolder = styled.div`
  text-align: center;
  padding: 10px 10px 0;
`;

const Icon = styled.i`
  &.fas,
  &.far {
    margin-left: 8px;
  }
  &.fas:first-child,
  &.far:first-child {
    margin-left: 0;
  }
  &:hover {
    color: #ffba49;
  }
  &.fas {
    color: #ffba49;
  }
`;

const Rating = ({ rating, setRatingValue, onRatingClick }) => (
  <RatingHolder>
    {[...Array(5).keys()].map((el, i) => (
      <Icon
        className={`${i < rating ? "fas" : "far"} fa-star`}
        key={`${el}-${i + 1}`}
        onClick={() => {
          setRatingValue && setRatingValue(i);
          onRatingClick && onRatingClick(i);
        }}
      ></Icon>
    ))}
  </RatingHolder>
);

Rating.propTypes = {
  rating: PropTypes.number,
  setRatingValue: PropTypes.func,
  onRatingClick: PropTypes.func
};

export default Rating;
