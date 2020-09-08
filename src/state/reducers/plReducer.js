// ACTION VARS
export const GET_USER = 'GET_USER';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';

export const GET_PLANTS = 'GET_PLANT';
export const GET_ALL_PLANTS = 'GET_ALL_PLANTS';
export const GET_SINGLE_PLANT = 'GET_SINGLE_PLANT';
export const ADD_PLANT = 'ADD_PLANT';
export const EDIT_PLANT = 'EDIT_PLANT';

const initialState = {
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
      return {
        ...state,
        userData: {
          ...state.userData,
          username: action.payload,
        }
      };
    default:
      return state;
  }
}
