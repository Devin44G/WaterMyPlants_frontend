import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useRouteMatch, useParams } from 'react-router-dom';

import PlantCard from './PlantCard';

const Plant = props => {
  const [isEditing, setIsEditing] = useState(true);
  const [plant, setPlant] = useState({
    nickname: '',
    species: '',
    frequency: ''
  });

  const match = useRouteMatch();
  const { id } = useParams();

  const getData = id => {
    axiosWithAuth()
      .get(`/api/plants/${id}`)
      .then(res => {
        console.log('Data!!', res.data.plant);
        setPlant({
          nickname: res.data.plant.nickname,
          species: res.data.plant.species,
          frequency: res.data.frequency
        });
      })
  }

  useEffect(() => {
    getData(match.params.id);
  }, [match.params.id]);

  console.log('Plants Comp: ', match);

  // EDITING PLANT DETAILS
  const editPlant = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/plants/${id}`, {
        nickname: plant.nickname,
        species: plant.species,
        frequency: plant.frequency
      })
      .then(res => {
        console.log('This is put res:', res.data);
        props.history.push('/dashboard');
      })
  }

  const plantChangeHandler = e => {
    setPlant({
      ...plant,
      [e.target.name]: e.target.value
    });
  }

  const deletePlant = () => {
    axiosWithAuth()
      .delete(`/api/plants/${id}`)
      .then(res => {
        console.log("Deleted Plant");
        props.history.push('/dashboard');
      });
  }

  return(
    // CARD
    <div>
      <button onClick={deletePlant}>Delete</button>
      <PlantCard plant={plant}/>

      {isEditing && (
        <form onClick={editPlant}>
          <label>
            New Nickname
            <input
              type="text"
              placeholder="New Nickname"
              name="nickname"
              value={plant.nickname}
              onChange={plantChangeHandler}
            />
          </label>
          <label>
            Species Name
            <input
              type="text"
              placeholder="Species"
              name="species"
              value={plant.species}
              onChange={plantChangeHandler}
            />
          </label>
          <label>
            Watering Frequency
            <input
              type="text"
              placeholder="Watering Frequency"
              name="frequency"
              value={plant.frequency}
              onChange={plantChangeHandler}
            />
          </label>
          <button type="submit">Save Edit</button>
        </form>
      )}
    </div>
  );
}

export default Plant;
