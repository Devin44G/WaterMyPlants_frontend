import React from 'react';

const PlantCard = ({ plant }) => {
  const { nickname, species, h2o_frequency, image } = plant;

  const card_img2 = {
    background: `url('http://localhost:5000/${image}') no-repeat center center`,
    backgroundSize: 'cover',
    width: '50px',
    height: '50px',
    border: 'solid 1px black',
    marginBottom: '5px'
  };

  return(
    <div style={{
      display:'flex',
      justifyContent:'center',
      width:'100%'
    }}>
      <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        position:'relative',
        width:'80%',
        border:'solid 1px #1A4704',
        borderRadius:'3px',
      }}>
        <span className="span-bg"></span>
        <div style={{
          zIndex:'1',
          display:'flex',
          flexWrap:'wrap',
          flexDirection:'column',
          alignItems:'center',
          padding:'1rem'
        }}>
          <div className={(image === "No Image") ? 'card-img' : ''}
            style={(image !== "No Image") ? card_img2 : null}
          ></div>
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
          {/* h2o_frequency */}
          <div>
            <h4>Water me: {h2o_frequency ? h2o_frequency : ('No h2o_frequency Given')}</h4>
            <p>Watering h2o_frequency</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
