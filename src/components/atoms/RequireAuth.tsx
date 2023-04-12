import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom'

import { AuthUserContext } from '../../context/AuthContext';

const RequireAuth = ({ children }: any) => {
	const authUser = useContext(AuthUserContext)

	return authUser ? children : <Navigate to='/login' replace />;
}

export default RequireAuth;