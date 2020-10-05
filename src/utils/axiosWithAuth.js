import axios from 'axios';

// Setting up an axiosWithAuth func to retrieve token passed
// from backend and set it in the headers

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token
    },
    // Setting up baseURL, so I don't have to type the full one out each time
    // NOTE: reading URI from a .env file, so API is not open to others
    baseURL: process.env.REACT_APP_API_URL
  });
};
