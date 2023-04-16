/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import './Tweet.css';

const Tweet = ({ tweet, problemType }) => (
  <div className="tweet-card">
    <div className="tweet-text">{tweet}</div>
    <div className="tweet-problem">{problemType}</div>
  </div>
);

export default Tweet;

Tweet.propTypes = {
  tweet: PropTypes.string.isRequired,
  problemType: PropTypes.string.isRequired,
};
