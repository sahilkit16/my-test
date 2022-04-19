import React, { createContext, useContext, useReducer } from "react";
import reducers from "../reducers";

const initialState = {
  profile: {
    id: 1123123123,
    username: "test123"
  },
  users: [
    {
      id: 1,
      name: "Beniamin",
      lastname: "Rychter",
      email: "aaa@aaa.pl"
    },
    {
      id: 2,
      name: "Test",
      lastname: "Test 2",
      email: "bbb@bbb.pl"
    }
  ],
  groups: []
};

export const StateContext = createContext();

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducers, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
