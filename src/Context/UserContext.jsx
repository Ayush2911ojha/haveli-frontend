// UserContext.js

import React, { createContext, useReducer, useContext } from 'react';

// Initial state for user context
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Actions to update user context state
const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, loading: false, error: null };
    case 'LOGIN_ERROR':
      return { ...state, error: action.error, loading: false };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

// Create context and export Provider and custom hook
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
