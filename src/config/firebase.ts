// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD2kbOv70j0Y7axhHNJnBdZTSh8KKmFkWI",
	authDomain: "cryptoexchange-6b31b.firebaseapp.com",
	projectId: "cryptoexchange-6b31b",
	storageBucket: "cryptoexchange-6b31b.appspot.com",
	messagingSenderId: "146056562716",
	appId: "1:146056562716:web:5ea47c5a96b1e5b6c737d9",
	measurementId: "G-7TCVKP5NYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);