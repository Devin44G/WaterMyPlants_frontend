import React, { useReducer, createContext } from 'react';
import { plReducer, initialState } from './reducers/plReducer';

// Creating context
export const PLContext = createContext();

// Creating context provider, within which to wrap the app
export const Provider = props => {
  const [data, dispatch] = useReducer(plReducer, initialState);

  return(
    <PLContext.Provider value={{ data, dispatch }}>
      {props.children}
    </PLContext.Provider>
  );
}
