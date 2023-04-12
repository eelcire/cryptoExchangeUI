import React, { createContext } from 'react';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';

export const AuthUserContext = createContext(undefined);

export const Header = ({ authUser }: any) => {
	const handleSignOut = () => {
		signOut(auth).then(() => {
			console.log('sign out was successful')
		}).catch(error => console.log(error))
	}

	return (
		<>
			{authUser ?
				<>
					<p>{`Signed in as ${authUser.email}`}</p>
					<button onClick={handleSignOut}>Sign Out</button>
				</>
				: <p>Signed Out</p>}
		</>
	)
}