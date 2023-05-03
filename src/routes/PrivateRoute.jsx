import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Components/Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
       return <LoadingSpinner></LoadingSpinner>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to= '/login' replace></Navigate>
};

export default PrivateRoute;