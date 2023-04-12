import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }: any) => {
	const authUser = JSON.parse(localStorage.getItem('firebaseAuthUser')!);
	console.log(2)
	console.log(authUser)

	return authUser ? children : <Navigate to='/login' replace state={{ path: location.pathname }} />;
}

export default RequireAuth;