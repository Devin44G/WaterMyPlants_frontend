import React, { useReducer, createContext } from 'react';
import { plReducer } from './reducers/plReducer';


export const PLContext = createContext();

export const Provider = props => {
  const [data, dispatch] = useReducer(plReducer);

  return(
    <PLContext.Provider value={{ data, dispatch }}>
      {props.children}
    </PLContext.Provider>
  );
}
