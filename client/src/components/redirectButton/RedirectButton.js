import React from "react";
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

const Button = styled.button`
  background-color: #17301c;
  border: none;
  color: #9c9583;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 800;
`;

const RedirectButton = ({ path, text }) => {
  const history = useHistory();

  return (
  <Button onClick={() => history.push(path)}>{text}</Button>
  );
};

RedirectButton.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
};

export default RedirectButton;
