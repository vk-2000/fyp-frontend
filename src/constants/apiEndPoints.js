export const BACKEND_URL = 'http://localhost:8000/api';

export const GET_CITIES = {
  url: `${BACKEND_URL}/cities`,
  method: 'GET',
};

export const GET_TWEETS_BY_CITY = (city) => (
  {
    url: `${BACKEND_URL}/tweets/${city}`,
    method: 'GET',
  }
);
