import React, { useEffect, useState } from 'react';
import { GET_CITIES } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import CityCard from '../CityCard';
import './Cities.css';

const Cities = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    makeRequest(GET_CITIES).then((response) => {
    //   console.log(response);
      setCities(response.cities);
    });
  }, []);
  return (
    <div className="cities-body">
      <div className="city-cards-container">
        {cities.map((city) => (
          <CityCard name={city.name} image={city.image} key={city} />
        ))}
      </div>
    </div>
  );
};

export default Cities;
