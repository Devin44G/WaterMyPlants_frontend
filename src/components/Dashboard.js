import React, { useState, useEffect, useContext } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { PLContext } from '../state/PLContext';
import { GET_USER, GET_PLANTS } from '../state/reducers/plReducer';
import DashboardContent from './DashboardContent';
import axios from "axios";
import { Motion, spring } from 'react-motion';

const Dashboard = props => {
  const { data, dispatch } = useContext(PLContext);
  const user = JSON.parse(localStorage.getItem('user'));
  // const [plants, setPlants] = useState([]);
  // const [sun, setSun] = useState([]);
  // const [addedPlant, setAddedPlant] = useState({
  //   nickname: '',
  //   species: '',
  //   h2o_frequency: ''
  // });

  useEffect(() => {
    if(user) {
      // USER DETAILS
      dispatch({ type: GET_USER, payload: user });

      // PLANT DETAILS
      axiosWithAuth()
        .get('/api/plants/mine')
        .then( res => {
          dispatch({ type: GET_PLANTS, payload: res.data });
        })
        .catch(err => `Error getting plants. Error: ${err}`);
    }
  }, []);

  // const editUser = e => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .put(`/api/users/${id}`, {
  //       username: user.username
  //     })
  //     .then(() => {
  //       console.log('Edit successfull');
  //     });
  // }
  //
  // const changeHandler = e => {
  //   setUser({
  //       ...user,
  //       [e.target.name]: e.target.value
  //     });
  // }


  // useEffect(() => {
  //   axios
  //   .get(`https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400
  //   `)
  //   .then(response => {
  //     var test = response.data.results.sunrise;
  //     //var keyArray = test.map(function(item) { return item["name"]; });
  //     setSun(test);
  //   //  console.log("dave" + test);
  //   },[]);
  //   axiosWithAuth()
  //     .get('/api/plants')
  //     .then(res2 => {
  //       setPlants(res2.data);
  //     })
  //     .catch(err => `Error of type: ${err} has been thrown`);
  //   }, [setPlants]);

  // const addPlant = e => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .post('/api/plants/', {
  //       nickname: addedPlant.nickname,
  //       species: addedPlant.species,
  //       h2o_frequency: addedPlant.h2o_frequency
  //     })
  //     .then(res => {
  //       console.log('Plant added');
  //       axiosWithAuth()
  //       .get('/api/plants')
  //       .then(res2 => {
  //         setPlants(res2.data);
  //         console.log('Data from plant: ', res2.data);
  //       })
  //       .catch(err => `Error of type: ${err} has been thrown`);
  //     })
  // };
  //
  // const plantChangeHandler = e => {
  //   setAddedPlant({
  //     ...addedPlant,
  //     [e.target.name]: e.target.value
  //   });
  // }
  //
  // const SunTime = () => {
  //   return (
  //     <Motion defaultStyle={{ left: -100 }} style={{ left: spring(10) }}>
  //       {val => <h1 style={{ position: 'relative', ...val }}>Sunrise {sun}{' '}
  //       </h1>}
  //     </Motion>
  //   );
  // };
  const token = window.localStorage.getItem('token');

  return(
    <div className="dashboard">
      {!token ? 'You should log in' :
      <DashboardContent data={data} />
      }
    </div>
  );
  }

      export default Dashboard;
