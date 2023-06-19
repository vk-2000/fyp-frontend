/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import './Tweet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoadBridge, faUserShield, faBan } from '@fortawesome/free-solid-svg-icons';
// import ReactPlayer from 'react-player';
import LocationChip from '../LocationChip';

const getIcon = (problemType) => {
  switch (problemType) {
    case 'infrastructure issues':
      return faRoadBridge;
    case 'services failure':
      return faBan;
    case 'public safety concerns':
      return faUserShield;
    default:
      return faRoadBridge;
  }
};

const Tweet = ({
  tweet, problemType, locations, media,
}) => (
  <div className="tweet-card">
    <div className="tweet-problem">
      <span><FontAwesomeIcon icon={getIcon(problemType)} /></span>
      {problemType}
    </div>
    <div className="tweet-text">{tweet}</div>
    {
      media

    && (
    <div className="tweet-media">
      <img src={media} alt="media" />
    </div>
    )
    }
    <div className="tweet-locations-container">
      {
        locations.map((location) => (
          <LocationChip key={location} location={location} />
        ))
      }
    </div>
  </div>
);

export default Tweet;

Tweet.propTypes = {
  tweet: PropTypes.string.isRequired,
  problemType: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
  media: PropTypes.string.isRequired,
};
