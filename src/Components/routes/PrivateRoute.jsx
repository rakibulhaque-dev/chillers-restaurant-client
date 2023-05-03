import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    
    if (loading) {
        return <div className='text-center md:mt-44 lg:mt-44'>
            <progress className="w-56 progress"></progress>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;