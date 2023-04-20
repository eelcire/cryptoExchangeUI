import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import Homepage from './components/pages/Homepage';
import Auth from './components/pages/Auth';
import { Header } from './components/molecules/Header';
import RequireAuth from './components/atoms/RequireAuth';

const App = () => {
	const [authUser, setAuthUser] = useState(null as any);

	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user) => {
			if (user) {
				localStorage.setItem('firebaseAuthUser', JSON.stringify(user));
				setAuthUser(user);
			}
			else {
				localStorage.removeItem('firebaseAuthUser');
				setAuthUser(null);
			}
		});

		return () => {
			//removes listener after component unmounts
			listen;
		}
	}, [])

	console.log(`AuthUser: ${authUser}`)

	return (
		<Router>
			<Header authUser={authUser} />
			<Routes>
				<Route path="/" element={
					<RequireAuth authUser={authUser}>
						<Homepage />
					</RequireAuth>}
				/>

				<Route path="/login" element={authUser ? <Navigate to="/" /> : <Auth />} />
				<Route path="/signup" element={authUser ? <Navigate to="/" /> : <Auth />} />
			</Routes>
		</Router>
	);
}

export default App;