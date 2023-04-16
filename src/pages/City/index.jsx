/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Tweet from '../../components/Tweet';
import { GET_TWEETS_BY_CITY } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './City.css';

const City = () => {
  const { cityName } = useParams();
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    makeRequest(GET_TWEETS_BY_CITY(cityName)).then((response) => {
      setTweets(response.tweets);
    });
  }, []);
  return (

    <div>
      <Navbar />
      <h1>
        Tweets from
        {' '}
        {cityName}
      </h1>
      <div className="tweets-container">

        {
        tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet.tweet} problemType={tweet.problem_type} />
        ))
    }
      </div>
    </div>
  );
};
export default City;
