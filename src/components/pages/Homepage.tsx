import React, { useContext } from 'react';

import { AuthUserContext } from '../../context/AuthContext';

const Homepage = () => {
	const authUser = useContext(AuthUserContext)
	console.log(authUser)

	return (
		<div>Homepage</div>
	);
}

export default Homepage;