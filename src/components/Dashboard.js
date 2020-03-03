import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { PlantContext, UserContext } from '../UserContext';

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);
  const [plants, setPlants] = useContext(PlantContext);
  const id = localStorage.getItem('userID');

// USER DETAILS
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${id}`)
      .then(res => {
        console.log('Data from useEffect: ', res.data);
        setUser(res.data);
      })
      .catch(err => `Error of type: ${err} has been thrown`);

      axiosWithAuth()
        .get(`/api/plants`)
        .then(res => {
          setPlants(res.data);
          console.log('Data from plant: ', res.data);
        })
        .catch(err => `Error of type: ${err} has been thrown`);
  }, []);

  const editUser = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/users/${id}`, user)
      .then(res => {
        setUser(user);
      });
  }

// PLANT DETAILS
  const addPlant = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/plants/', plants)
      .then(res => {
        console.log('Plant added');
      })
  };

  const changeHandler = e => {
    setPlants([
      {
        ...plants,
        [e.target.name]: e.target.value
      }
    ]);
  }

  return(
    <>
      <h2>Hello, my name is "{user.username}" . . . I'm just a test page!</h2>
      <Link to="/login">Logout</Link>
      <h3>My Plants:</h3>
      {plants.map(plant => <p>{plant.nickname}</p>)}
      <form onSubmit={addPlant}>
        <input
          type="text"
          placeholder="Nickname"
          name="nickname"
          value={plants.nickname}
          onChange={changeHandler}
        />
        <button type="submit">Add Plant</button>
      </form>
      <form onSubmit={editUser}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          // value={user.username}
          // onChange={changeHandler}
        />
        <button type="submit">Edit Username</button>
      </form>
    </>
  );
}

export default Dashboard;
