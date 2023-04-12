import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './components/pages/Homepage';
import Auth from './components/pages/Auth';
import { AuthUserContextProvider } from './context/AuthContext';
import RequireAuth from './components/atoms/RequireAuth';

export default function App() {
	return (
		<AuthUserContextProvider>
			<Router>
				<Routes>
					<Route path="/" element={<RequireAuth><Homepage /></RequireAuth>} />

					<Route path="/login" element={<Auth />} />
					<Route path="/signup" element={<Auth />} />
				</Routes>
			</Router>
		</AuthUserContextProvider>
	);
}
