import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom'


const Community = props => {
  const [users, setUser] = useState([]);
  const[plants, setPlants] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/api/users')
      .then(res => {
        console.log('This is the community: ', res.data);
        setUser(res.data);
      })
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get('/api/plants/all')
      .then(res => {
        console.log('These is the communities plants: ', res.data);
        setPlants(res.data.plants);
      })
  }, []);

  return(
    <>
      <section>
        {users.map(user => {
          return(
            <div key={user.id}>
              <h3>{user.username}</h3>
            </div>
          )
        })}
      </section>
      <section style={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-around'
      }}>
        {plants.map(plant => {
          return(
            <div style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              margin: '.5rem'
            }}
              key={plant.id}>
              <div className="card-img"></div>
              {/* NICKNAME */}
              <div>
                <h3>{plant.nickname ? plant.nickname : ('No Nickname Given')}</h3>
                <p>Nickname</p>
              </div>
              {/* SPECIES */}
              <div>
                <h4>{plant.species ? plant.species : ('No Species Given')}</h4>
                <p>Species</p>
              </div>
              {/* FREQUENCY */}
              <div>
                <h4>Water me: {plant.frequency ? plant.frequency : ('No Frequency Given')}</h4>
                <p>Watering Frequency</p>
              </div>
            </div>
          )
        })}
      </section>
    </>
  );
}

export default Community;
