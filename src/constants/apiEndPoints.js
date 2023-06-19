export const BACKEND_URL = 'http://localhost:8000/api';

export const GET_CITIES = {
  url: `${BACKEND_URL}/cities`,
  method: 'GET',
};

export const LOGIN = {
  url: `${BACKEND_URL}/token/`,
  method: 'POST',
};

export const GET_TWEETS_BY_CITY = (city, problemType) => (
  {
    url: `${BACKEND_URL}/tweets/${city}?problem_type=${problemType}`,
    method: 'GET',
  }
);
