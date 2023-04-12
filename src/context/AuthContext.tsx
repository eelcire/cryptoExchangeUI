import React, { useEffect, useState, createContext } from 'react';
import { auth } from '../config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthUserContext = createContext(undefined);

export const AuthUserContextProvider = ({ children }: any) => {
	const [authUser, setAuthUser] = useState(null as any);

	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user) => {
			if (user) setAuthUser(user)
			else setAuthUser(null);
			console.log(`AuthUser: ${authUser}`)
		});

		return () => {
			//removes listener after component unmounts
			listen();
		}
	}, [])

	const handleSignOut = () => {
		signOut(auth).then(() => {
			console.log('sign out was successful')
		}).catch(error => console.log(error))
	}

	return (
		<AuthUserContext.Provider value={authUser}>
			{authUser ?
				<>
					<p>{`Signed in as ${authUser.email}`}</p>
					<button onClick={handleSignOut}>Sign Out</button>
				</>
				: <p>Signed Out</p>}
			{children}
		</AuthUserContext.Provider>
	)
}