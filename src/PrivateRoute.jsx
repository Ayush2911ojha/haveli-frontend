import React from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
import { useUser } from './Context/UserContext';
import Login from './features/auth/components/Login';


const PrivateRoute = ({ path, element }) => {
 
    return <Route path={'/login'} element={<Login/>} />;
  };
  
  export default PrivateRoute;
