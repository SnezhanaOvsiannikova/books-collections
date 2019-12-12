import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Rating from "../rating/Rating";

const BookItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  flex: 0 24%;
  margin-left: 15px;
  border: 1px solid #17301c;
  padding: 10px;
  border-radius: 5px;
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    cursor: pointer;
  }
  .fa-trash-alt {
    color: red;
    margin-left: 15px;
  }
`;

const Holder = styled.div`
  padding: 10px;
`;

const IconWrap = styled.div`
  align-self: flex-end;
  &.fa-pencil-alt, 
  &.fa-trash-alt {
    margin-left: 8px;
  }
  &.fas:first-child {
    margin-left: 0;
  }
`;

const Title = styled.div`
  color: #17301c;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Price = styled.div`
  margin-top: 20px;
  .fa-dollar-sign {
    color: #17301c;
  }
`;

const SubTitle = styled.div``;

const Book = ({ data }) => {
  return (
    <BookItem>
      <IconWrap>
        <i className="fas fa-pencil-alt"></i>
        <i className="fas fa-trash-alt"></i>
      </IconWrap>
      <Holder>
        <Title>{data.name}</Title>
        <SubTitle>{data.author}</SubTitle>
      </Holder>
      <Price>
        <i className="fas fa-dollar-sign"></i> {data.price}
      </Price>
      <Rating rating={data.rating}/>
    </BookItem>
  );
};

Book.propTypes = {
  data: PropTypes.object
};

export default Book;
