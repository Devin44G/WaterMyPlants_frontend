import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useRouteMatch } from 'react-router-dom';

const Plant = props => {
  const [plant, setPlant] = useState({
    nickname: '',
    species: '',
    frequency: ''
  });
  const match = useRouteMatch();

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

  return(
    // CARD
    <div>
      {/* NICKNAME */}
      <div>
        <h3>{plant.nickname}</h3>
        <p>Nickname</p>
      </div>
      {/* SPECIES */}
      <div>
        <h4>{plant.species}</h4>
        <p>Species</p>
      </div>
      {/* FREQUENCY */}
      <div>
        <h4>Water me: {plant.frequency}</h4>
        <p>Frequency</p>
      </div>
    </div>
  );
}

export default Plant;
