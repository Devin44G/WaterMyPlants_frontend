import React, { useEffect, useContext } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { PLContext } from '../state/PLContext';
import { GET_USER, GET_PLANTS, EDIT_USER, ADD_PLANT } from '../state/reducers/plReducer';
import DashboardContent from './DashboardContent';
import axios from "axios";
import { Motion, spring } from 'react-motion';

const Dashboard = props => {
  const { data, dispatch } = useContext(PLContext);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if(user) {
      // USER DETAILS
      dispatch({ type: GET_USER, payload: user });

      // PLANT DETAILS
      axiosWithAuth()
        .get('/api/plants/mine')
        .then( res => {
          dispatch({ type: GET_PLANTS, payload: res.data });
        })
        .catch(err => `Error getting plants. Error: ${err}`);
    }
  }, []);
  // EDITING USER
  const editUser = data => {
    dispatch({ type: EDIT_USER, payload: {
      user,
      data
    }});
  }

  // ADDING PLANT
  const addPlant = data => {
    let formData = new FormData();
    formData.append('nickname', data.nickname);
    formData.append('species', data.species);
    formData.append('h2o_frequency', data.h2o_frequency);
    formData.append('image', data.image);
    axiosWithAuth()
      .post('/api/plants/', formData)
      .then(res => {
        console.log(res.data);
      })
      .then(res => {
        axiosWithAuth()
          .get('/api/plants/mine')
          .then( res => {
            dispatch({ type: GET_PLANTS, payload: res.data });
          })
          .catch(err => `Error getting plants. Error: ${err}`);
      })
      .catch(err => console.log(`Error adding plant. ERROR: ${err}`));
  };

  const token = window.localStorage.getItem('token');

  return(
    <div className="dashboard">
      {!token ? <h3 style={{backgroundColor:'#8b4444', textDecoration:'none'}}>To view this page, you need to be <a href="/login">LOGGED IN</a></h3> :
      <DashboardContent data={data} editUser={editUser} addPlant={addPlant} />
      }
    </div>
  );
  }

export default Dashboard;
