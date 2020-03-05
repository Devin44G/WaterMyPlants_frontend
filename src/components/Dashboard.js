import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import PlantCard from './PlantCard';
import axios from "axios";
import { Motion, spring } from 'react-motion';
import {PlantAreaIn,
        PlantAreaOut} from '../styles';

const Dashboard = props => {
  const [user, setUser] = useState({
    id:'',
    username: '',
    phone_number: ''
  });
  const [plants, setPlants] = useState([]);
  const [sun, setSun] = useState([]);
  const [addedPlant, setAddedPlant] = useState({
    nickname: '',
    species: '',
    frequency: ''
  });
  const id = localStorage.getItem('userID');

// USER DETAILS
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${id}`)
      .then(res => {
        console.log('Data from useEffect: ', res.data);
        setUser({
          id: res.data.id,
          username: res.data.username,
          phone_number: res.data.phone_number
        });
      })
      .catch(err => `Error of type: ${err} has been thrown`);
  }, [id]);

  const editUser = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/users/${id}`, {
        username: user.username,
        phone_number: user.phone_number
      })
      .then(() => {
        console.log('Edit successfull');
      });
  }

  const changeHandler = e => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
      });
  }

// PLANT DETAILS
  useEffect(() => {
    axios
    .get(`https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400
    `)
    .then(response => {
      var test = response.data.results.sunrise;
      //var keyArray = test.map(function(item) { return item["name"]; });
      setSun(test);
    //  console.log("dave" + test);
    },[]);
    axiosWithAuth()
      .get('/api/plants')
      .then(res2 => {
        setPlants(res2.data);
      })
      .catch(err => `Error of type: ${err} has been thrown`);
    }, [setPlants]);

  const addPlant = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/plants/', {
        nickname: addedPlant.nickname,
        species: addedPlant.species,
        frequency: addedPlant.frequency
      })
      .then(res => {
        console.log('Plant added');
        axiosWithAuth()
        .get('/api/plants')
        .then(res2 => {
          setPlants(res2.data);
          console.log('Data from plant: ', res2.data);
        })
        .catch(err => `Error of type: ${err} has been thrown`);
      })
  };

  const plantChangeHandler = e => {
    setAddedPlant({
      ...addedPlant,
      [e.target.name]: e.target.value
    });
  }

  const SunTime = () => {
    return (
      <Motion defaultStyle={{ left: -100 }} style={{ left: spring(10) }}>
        {val => <h1 style={{ position: 'relative', ...val }}>Sunrise {sun}{' '}
        </h1>}
      </Motion>
    );
  };

  return(
    <div className="dashboard">
      {/* DASHBOARD LINKS */}
      <div style={{
        width:'100%',
        display:'flex',
        justifyContent:'flex-end',
        padding:'2rem 1rem'
      }}>
        <a href="#add-plant" style={{marginRight:'1rem'}}>Add Plant</a>
        <a href="#edit-user">Edit User Info</a>
      </div>

      {/* USER'S PLANTS */}
      <h2>Your Plants:</h2>
      <PlantAreaOut>
        {plants.map(plant => (
          <PlantAreaIn key={plant.id}>
            {/* <span className="span-bg"></span> */}
            <Link to={`/plant/${plant.id}`}
              style={{
                textDecoration:'none',
                color:'black',
                zIndex:'1',
                width:'100%',
                height:'100%'
              }}>
              <PlantCard plant={plant} />
            </Link>
          </PlantAreaIn>
        )
        )}
      </PlantAreaOut>

      {/* DASHBOARD FORMS */}
      <section style={{display:'block', margin:'0 auto', display:'flex', flexWrap:'wrap', flexDirection:'column', alignItems:'center'}}>
        <SunTime/>
        <form onSubmit={addPlant} id="add-plant" style={{margin:'0'}}>
          <input
            type="text"
            placeholder=" Plant Nickname"
            name="nickname"
            value={addedPlant.nickname}
            onChange={plantChangeHandler}
          />
          <input
            type="text"
            placeholder="Species Name"
            name="species"
            value={addedPlant.species}
            onChange={plantChangeHandler}
          />
          <input
            type="text"
            placeholder="Watering Frequency"
            name="frequency"
            value={addedPlant.frequency}
            onChange={plantChangeHandler}
          />
          <button type="submit">Add Plant</button>
        </form>
        <form onSubmit={editUser} id="edit-user" style={{margin:'0'}}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="New Number"
            name="phone_number"
            value={user.phone_number}
            onChange={changeHandler}
          />
          <button type="submit">Edit Username</button>
        </form>
      </section>
    </div>
  );
  }

      export default Dashboard;
