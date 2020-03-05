import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const PlantCard = props => {
  console.log('props: ', props);
  const { nickname, species, frequency } = props.plant;

  return(
    <div style={{border:'solid 1px green'}}>
      {/* NICKNAME */}
      <div>
        <h3>{nickname}</h3>
        <p>Nickname</p>
      </div>
      {/* SPECIES */}
      <div>
        <h4>{species}</h4>
        <p>Species</p>
      </div>
      {/* FREQUENCY */}
      <div>
        <h4>Water me: {frequency}</h4>
        <p>Frequency</p>
      </div>
    </div>
  );
}

export default PlantCard;
