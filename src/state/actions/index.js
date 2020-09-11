import { axiosWithAuth } from '../../utils/axiosWithAuth';

// ACTIONS
export const getUser = (state, action) => {
  axiosWithAuth()
    .get(`/api/users/${action.payload.id}`)
    .then(res => {
      console.log('Successully got user: ', res.data);
    })
    .catch(err => `Error of type: ${err} has been thrown`);
  return {
    ...state,
    userData: {
      ...state.userData,
      id: action.payload.id,
      username: action.payload.welcome
    }
  };
};

export const addUser = (state, action) => {
  axiosWithAuth()
    .post('/api/auth/register', {
      username: action.payload.username,
      password: action.payload.password
    })
    .then(res => {
      console.log('Successfully created user: ', res.data);
    })
    .catch(err => console.log(err));
};

export const getPlants = (state, action) => {
  return {
    ...state,
    plants: action.payload
  }
}
