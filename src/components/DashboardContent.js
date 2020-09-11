import React from 'react';
import { Link } from 'react-router-dom';
import PlantCard from './PlantCard';
import {PlantAreaIn, PlantAreaOut} from '../styles';


const DashboardContent = ({ data }) => {
  console.log('PLANTS ', data);
  return(
    <section>
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
        {data.plants.map(plant => (
          <PlantAreaIn key={plant.id}>
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
        {/* <SunTime/>
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
            placeholder="Watering h2o_frequency"
            name="h2o_frequency"
            value={addedPlant.h2o_frequency}
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
          <button type="submit">Edit Username</button>
        </form> */}
      </section>
    </section>
  );
};

export default DashboardContent;
