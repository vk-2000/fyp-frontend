import React, { useRef } from 'react';
import Cities from '../../components/Cities';
import Navbar from '../../components/Navbar';
import city from '../../assets/images/city.png';
import twitterLogo from '../../assets/images/twitter.png';
import './Home.css';

const Home = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="main-text">
          <span>TweetPulse</span>
          <span>Track citizen issues in real-time</span>
          <button onClick={handleClick} type="button">Get started</button>
        </div>
        <div className="images-container">
          <img src={city} alt="city" className="city-image" />
          <img src={twitterLogo} alt="twitter" className="twitter-image twitter-image-1" />
          <img src={twitterLogo} alt="twitter" className="twitter-image twitter-image-2" />
        </div>
      </div>
      <div ref={ref}>
        <Cities />
      </div>
    </div>
  );
};

export default Home;
