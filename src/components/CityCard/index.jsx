/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CityCard.css';

const getImageStyle = (image) => ({
  // backgroundImage: `url(${image})`,
  background: 'transparent',
  border: 'none',
  height: '200px',
  width: '300px',
  borderRadius: '5px',
  margin: '1rem',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
  fontSize: '2rem',
  transition: 'transform 0.2s ease-in-out',
  backgroundImage: `linear-gradient(rgba(35, 35, 35, 0.775), rgba(181, 181, 181, 0.893)), url(${image})`,
  backgroundSize: 'cover',
  color: 'white',
});

const CityCard = ({ name, image }) => {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate(`/city/${name}`)} className="city-card" style={getImageStyle(image)}>
      {name}
    </button>
  );
};

export default CityCard;

CityCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
