import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../components/useAuth';

const PrivateRoute = (Component) => {

    const {user} = useAuth();

    return user ? <Outlet {...Component} /> : <Navigate to="/" />;
}

export default PrivateRoute;

