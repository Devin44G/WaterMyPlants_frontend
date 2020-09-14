import { axiosWithAuth } from '../../utils/axiosWithAuth';

// CLEAN STATE AFTER LOGOUT
export const cleanState = () => {
  return {
    userData: {
      id: 0,
      username: '',
    },
    plantData: {
      nickname: '',
      species: '',
      h2o_frequency: '',
      image: ''
    },
    users: [],
    plants: [],
    loading: false
  };
}

// USER ACTIONS
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

export const editUser = (state, action) => {
  axiosWithAuth()
    .patch(`/api/users/${action.payload.user.id}`, {
      username: action.payload.data.username
    })
    .then(() => {
      console.log('Edit successful');
    });
    console.log('USER', action.payload.user);
    console.log('DATA', action.payload.data);
    return {
      ...state,
      userData: {
        ...state.userData,
        username: action.payload.data.username
      }
    };
};

// PLANT ACTIONS
export const getPlants = (state, action) => {
  return {
    ...state,
    plants: action.payload
  };
};

export const getSinglePlant = (state, action) => {
  console.log('Successfully got plant with id: ', action.payload.id);
  window.localStorage.setItem('plant', JSON.stringify(action.payload))
  return {
    ...state,
    plantData: {
      ...state.plantData,
      id: action.payload.id,
      nickname: action.payload.nickname,
      species: action.payload.species,
      h2o_frequency: action.payload.h2o_frequency,
      image: action.payload.image
    }
  }
};

export const editPlant = (state, action) => {
  axiosWithAuth()
    .patch(`/api/plants/${action.payload.id}`, action.payload.data)
    .then(res => {
      console.log('Successfully edited plant. PLANT:', res.data);
    });

    return {
      ...state,
      userData: {
        ...state.userData,
        nickname: action.payload.data.nickname,
        species: action.payload.data.species,
        h2o_frequency: action.payload.data.h2o_frequency
      }
    }
}

export const deletePlant = (state, action) => {
  axiosWithAuth()
    .delete(`/api/plants/${action.payload}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(`Error deleting plant. ERROR: ${err}`);
    })

  return {
    ...state
  }
}

export const addPlant = (state, action) => {
  // Figure out way to put action here
}
