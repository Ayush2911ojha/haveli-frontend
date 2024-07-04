import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from './Context/UserContext';

const UserAuth = ({ children }) => {
  const { state } = useUser();
  const { user } = state;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default UserAuth;
