import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { handleSignIn, handleSignUp } from "../../utils/authentication";
import { AUTHENTICATION_ERROR, AUTHENTICATION_ERROR_MESSAGE } from "../../constants/firebaseConstants";

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLogin, setIsLogin] = useState(true);
	const [infoText, setInfoText] = useState("");
	const [error, setError] = useState("");

	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === '/login') {
			setIsLogin(true);
			setInfoText('Login');
		} else {
			setIsLogin(false);
			setInfoText('Sign Up')
		}
	}, [location])

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isLogin) {
			await handleSignIn(email, password)
				.then((userCredential) => {
					// User is signed in
					const user = userCredential.user;
					console.log(user);
					navigate('/');
				})
				.catch((error) => {
					if (error.code === AUTHENTICATION_ERROR) {
						setError(AUTHENTICATION_ERROR_MESSAGE);
					}
				});
		} else {
			await handleSignUp(email, password)
				.then((userCredential) => {
					// User is signed in
					const user = userCredential.user;
					console.log(user);
					navigate('/');
				})
				.catch((error) => {
					if (error.code === AUTHENTICATION_ERROR) {
						setError(AUTHENTICATION_ERROR_MESSAGE);
					}
				});
		}
	};

	const handleRouteChange = () => {
		if (isLogin) navigate('/signup')
		else navigate('/login');
	}

	return (
		<>
			<button onClick={handleRouteChange}>{`Click here to ${infoText === 'Login' ? 'Sign Up' : 'Login'}`}</button>
			<form onSubmit={handleSubmit}>
				<input type="email" value={email} onChange={handleEmailChange} />
				<input type="password" value={password} onChange={handlePasswordChange} />
				<button type="submit">{infoText}</button>
			</form>
			{error && <p>{error}</p>}
		</>
	);
};

export default Auth;