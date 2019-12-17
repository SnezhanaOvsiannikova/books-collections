import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background-color: #17301c;
  border: none;
  color: #9c9583;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 800;
`;

const RedirectButton = ({ path, text, state }) => {
  const history = useHistory();
  const navigate = () => {
    const options = {
      pathname: path
    };

    history.push(state ? { ...options, state } : options);
  };
  return <Button onClick={navigate}>{text}</Button>;
};

RedirectButton.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
  state: PropTypes.object
};

export default RedirectButton;
