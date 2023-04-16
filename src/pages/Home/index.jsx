import React from 'react';
import Cities from '../../components/Cities';
import Navbar from '../../components/Navbar';
import './Home.css';

const Home = () => (
  <div>
    <Navbar />
    <div className="main-text">
      <span>Twitter search</span>
      <span>Find problems in cities using twitter</span>
    </div>
    <Cities />
  </div>
);

export default Home;
