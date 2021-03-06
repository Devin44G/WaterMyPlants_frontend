// ACTION FUNCS
import { cleanState, getUser,
        addUser, editUser,
        getPlants, getSinglePlant,
        editPlant, deletePlant,
        addPlant } from '../actions';

// TYPE VARS
export const GET_USER = 'GET_USER';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';

export const GET_PLANTS = 'GET_PLANTS';
export const GET_ALL_PLANTS = 'GET_ALL_PLANTS';
export const GET_SINGLE_PLANT = 'GET_SINGLE_PLANT';
export const ADD_PLANT = 'ADD_PLANT';
export const EDIT_PLANT = 'EDIT_PLANT';
export const DELETE_PLANT = 'DELETE_PLANT';

export const CLEAN = 'CLEAN';

export const initialState = {
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

export const plReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER:
      return getUser(state, action);
    case ADD_USER:
      return addUser(state, action);
    case EDIT_USER:
      return editUser(state, action);
    case GET_PLANTS:
      return getPlants(state, action);
    case GET_SINGLE_PLANT:
      return getSinglePlant(state, action);
    case EDIT_PLANT:
      return editPlant(state, action);
    case DELETE_PLANT:
      return deletePlant(state, action);
    case ADD_PLANT:
      return addPlant(state, action);
    case CLEAN:
      return cleanState();
    default:
      return state;
  }
}
