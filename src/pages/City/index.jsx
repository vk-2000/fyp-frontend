/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import Navbar from '../../components/Navbar';
import Tweet from '../../components/Tweet';
import { GET_TWEETS_BY_CITY } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './City.css';
import 'react-dropdown/style.css';

const options = [
  'All', 'infrastructure issues', 'services failure', 'public safety concerns',
];

const City = () => {
  const { cityName } = useParams();
  const [tweets, setTweets] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [problemType, setProblemType] = useState(options[0]);
  useEffect(() => {
    makeRequest(GET_TWEETS_BY_CITY(cityName, problemType)).then((response) => {
      setTweets(response.tweets);
    });
  }, [problemType]);

  const handleChangeProblemType = (e) => {
    setProblemType(e.value);
  };
  return (

    <div>
      <Navbar />
      <h1>
        Tweets from
        {' '}
        {cityName}
      </h1>
      <div className="dropdown-container">
        <Dropdown className="dropdown" options={options} onChange={handleChangeProblemType} value={options[problemType]} placeholder="All" />
      </div>
      <div className="tweets-container">
        {
        tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            tweet={tweet.tweet}
            problemType={tweet.problem_type}
            locations={tweet.locations}
            media={tweet.media}
          />
        ))
    }
      </div>
    </div>
  );
};
export default City;
