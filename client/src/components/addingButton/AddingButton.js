import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.div`
  font-size: 25px;
  &:hover {
    cursor: pointer;
    color: #9c9583;
  }
`;

const clickHandler = ({ setCurrentData, setIsEditing, setIsShowPopup }) => {
  setCurrentData({});
  setIsEditing(false);
  setIsShowPopup(true);
};

const AddingButton = ({
  title,
  setCurrentData,
  setIsEditing,
  setIsShowPopup
}) => {
  return (
    <Button
      className="fas fa-plus-square"
      title={title}
      onClick={() =>
        clickHandler({ setCurrentData, setIsEditing, setIsShowPopup })
      }
    ></Button>
  );
};

AddingButton.propTypes = {
  title: PropTypes.string,
  setCurrentData: PropTypes.func,
  setIsEditing: PropTypes.func,
  setIsShowPopup: PropTypes.func
};

export default AddingButton;
