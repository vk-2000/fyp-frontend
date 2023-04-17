import React from 'react';
import Cities from '../../components/Cities';
import Navbar from '../../components/Navbar';
import './Home.css';

const Home = () => (
  <div>
    <Navbar />
    <div className="main-text">
      <span>TweetPulse</span>
      <span>Track citizen issues in real-time</span>
    </div>
    <Cities />
  </div>
);

export default Home;
