import React from 'react';

const Homepage = () => {
	const authUser = JSON.parse(localStorage.getItem('firebaseAuthUser')!);
	console.log(authUser)

	return (
		<div>Homepage</div>
	);
}

export default Homepage;