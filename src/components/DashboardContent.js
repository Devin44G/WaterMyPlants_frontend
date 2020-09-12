import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PlantCard from './PlantCard';
import {PlantAreaIn, PlantAreaOut} from '../styles';


const DashboardContent = ({ data, editUser }) => {
  const { handleSubmit, register } = useForm();

  // STYLE MODAL
  const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
  const classes = useStyles();

  // TO SHOW OR HIDE MODAL
  const [show, setShow] = useState(false);
  const cancelModal = () => {
    setShow(!show);
  };

  console.log('PLANTS ', data);
  return(
    <section>
      <div style={{
        width:'100%',
        display:'flex',
        justifyContent:'flex-end',
        padding:'2rem 1rem'
      }}>
        <p>Welcome {data.userData.username}</p>
        <a href="#add-plant" style={{marginRight:'1rem'}}>Add Plant</a>
        <a style={{cursor:'pointer'}} onClick={() => setShow(true)}>Edit Username</a>
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
        {/* <SunTime/> */}
        <form onSubmit={handleSubmit()} id="add-plant" style={{margin:'0'}}>
          <input
            type="text"
            placeholder=" Plant Nickname"
            name="nickname"
          />
          <input
            type="text"
            placeholder="Species Name"
            name="species"
          />
          <input
            type="text"
            placeholder="Watering h2o_frequency"
            name="h2o_frequency"
          />
          <button type="submit">Add Plant</button>
        </form>
        <Modal open={show} onClose={cancelModal}>
          <div style={{top:'50%', left:'50%', transform:'translate(-50%, -50%)', display:'flex', flexDirection:'column', alignItems:'center'}} className={classes.paper}>
            <h2>Edit Your Username:</h2>
            <form onSubmit={handleSubmit(editUser)} style={{width:'100%', marginLeft:'0'}}>
              <input
                type="text"
                placeholder="Username"
                name="username"
                ref={register({ required: true })}
              />
              <button type="submit">Edit Username</button>
            </form>
          </div>
        </Modal>
      </section>
    </section>
  );
};

export default DashboardContent;
