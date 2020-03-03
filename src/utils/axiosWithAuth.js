import axios from 'axios';

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: 'https://wmp-bw.herokuapp.com'
  });
};
