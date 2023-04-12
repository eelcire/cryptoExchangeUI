import React, { useContext } from 'react';

import { AuthUserContext } from '../molecules/Header';

const Homepage = () => {
	const authUser = JSON.parse(localStorage.getItem('firebaseAuthUser')!);
	console.log(1)
	console.log(authUser)

	return (
		<div>Homepage</div>
	);
}

export default Homepage;