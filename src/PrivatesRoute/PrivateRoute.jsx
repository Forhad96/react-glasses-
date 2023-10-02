/* eslint-disable react/prop-types */

import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user,isLoading}=useAuth()
    if(isLoading){
        return <h1 className='text-6xl text-center'>Loading....</h1>
    }
    if(user){
        return children;
    }
    return <Navigate to='/'></Navigate>
};

export default PrivateRoute;