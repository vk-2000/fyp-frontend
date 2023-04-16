/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CityCard.css';

const CityCard = ({ name }) => {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate(`/city/${name}`)}>
      {name}
    </button>
  );
};

export default CityCard;

CityCard.propTypes = {
  name: PropTypes.string.isRequired,
};
