import React from 'react';

const PlantCard = props => {
  const { nickname, species, frequency } = props.plant;

  return(
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <div className="card-img"></div>
      {/* NICKNAME */}
      <div>
        <h3>{nickname ? nickname : ('No Nickname Given')}</h3>
        <p>Nickname</p>
      </div>
      {/* SPECIES */}
      <div>
        <h4>{species ? species : ('No Species Given')}</h4>
        <p>Species</p>
      </div>
      {/* FREQUENCY */}
      <div>
        <h4>Water me: {frequency ? frequency : ('No Frequency Given')}</h4>
        <p>Watering Frequency</p>
      </div>
    </div>
  );
}

export default PlantCard;
