import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { PLContext } from '../state/PLContext';
import { GET_SINGLE_PLANT, EDIT_PLANT, DELETE_PLANT } from '../state/reducers/plReducer';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useRouteMatch, useParams } from 'react-router-dom';

import PlantCard from './PlantCard';

const Plant = props => {
  const { handleSubmit, register } = useForm();
  const { data, dispatch } = useContext(PLContext);
  const [plant, setPlant] = useState(JSON.parse(window.localStorage.getItem('plant')));

// GETTING PARAMS
  const match = useRouteMatch();
  const { id } = useParams();
// FETCHING CLICKED PLANT
  useEffect(() => {
    const getData = id => {
      axiosWithAuth()
        .get(`/api/plants/${id}`)
        .then(res => {
          dispatch({ type: GET_SINGLE_PLANT, payload: res.data });
        })
        .catch(err => {
          console.log('Error getting plant. ERROR: ', err);
        });
    }
    getData(match.params.id);
  }, []);

  // EDITING PLANT
  const editPlant = async data => {
    await dispatch({ type: EDIT_PLANT, payload: {
      data,
      id
    }
  });
    props.history.push('/dashboard');
  }

  // DELETING PLANT
  const deletePlant = () => {
    dispatch({ type: DELETE_PLANT, payload: data.plantData.id });
      props.history.push('/dashboard');
  }

  const plantChangeHandler = e => {
    setPlant({
      ...plant,
      [e.target.name]: e.target.value
    })
  }

  return(
    // CARD
    <div>
      <div style={{display:'flex', justifyContent:'flex-end', margin:'2rem 2rem'}}>
        <button onClick={deletePlant} className="delete-btn">Delete Plant</button>
      </div>
      <PlantCard plant={data.plantData}/>
      <h2 style={{margin:'2rem 0 2rem'}}>Editing {data.plantData.nickname}</h2>
      <form onSubmit={handleSubmit(editPlant)} style={{display:'block', margin:'0 auto', padding:'0', display:'flex', flexWrap:'wrap', flexDirection:'column', alignItems:'center'}}>
        <label htmlFor="nickname">
          New Nickname:
        </label>
        <input
          type="text"
          placeholder="New Nickname"
          name="nickname"
          value={plant.nickname}
          onChange={plantChangeHandler}
          ref={register({ required: false })}
        />
        <label htmlFor="species">
          Species Name:
        </label>
        <input
          type="text"
          placeholder="Species"
          name="species"
          value={`${plant.species}`}
          onChange={plantChangeHandler}
          ref={register({ required: false })}
        />
        <label htmlFor="h2o_frequency">
          Watering h2o_frequency:
        </label>
        <input
          type="text"
          placeholder="Watering h2o_frequency"
          name="h2o_frequency"
          value={plant.h2o_frequency}
          onChange={plantChangeHandler}
          ref={register({ required: false })}
        />
        <button type="submit">Save Edit</button>
      </form>
    </div>
  );
}

export default Plant;
