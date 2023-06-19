import React from 'react';
import './LocationChip.css';
import PropTypes from 'prop-types';

const LocationChip = ({ location }) => (
  <div className="tweet-location-chip">
    {location}
  </div>
);

export default LocationChip;

LocationChip.propTypes = {
  location: PropTypes.string.isRequired,
};
