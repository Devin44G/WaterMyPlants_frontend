import { axiosWithAuth } from '../../utils/axiosWithAuth';

// ACTIONS
export const getUser = (state, action) => {
  axiosWithAuth()
    .post('/api/auth/register', action)
    .then(res => {
    })
    .catch(err => console.log(err));
  return {
    ...state,
    userData: {
      ...state.userData,
      username: action.payload.username
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
      console.log('RES', res.data);
      // return {
      //   ...state,
      //   userData: {
      //     id: res.data.id,
      //     username: res.data.username
      //   }
      // };
    })
    .catch(err => console.log(err));
};
