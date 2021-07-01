import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API,
	authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT,
	storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER,
	appID: process.env.REACT_APP_FIREBASE_APP,
});

const AuthContext = createContext();

export const db = firebase.firestore();
export default firebase;


// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
	return useContext(AuthContext);
};

// Provider hook that creates auth object and handles state
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isAuthenticating, setIsAuthenticating] = useState(true);

	// Wrap any Firebase methods we want to use making sure ...
	// ... to save the user to state.
	const login = (email, password) => {
		return firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((response) => {
				setUser(response.user);
				return response.user;
			});
	};

	const signup = (email, password) => {
		return firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((response) => {
				setUser(response.user);
				return response.user;
			});
	};

	const logout = () => {
		return firebase
			.auth()
			.signOut()
			.then(() => {
				setUser(false);
			});
	};

	const sendPasswordResetEmail = (email) => {
		return firebase
			.auth()
			.sendPasswordResetEmail(email)
			.then(() => {
				return true;
			});
	};

	const confirmPasswordReset = (code, password) => {
		return firebase
			.auth()
			.confirmPasswordReset(code, password)
			.then(() => {
				return true;
			});
	};

	// Subscribe to user on mount
	// Because this sets state in the callback it will cause any ...
	// ... component that utilizes this hook to re-render with the ...
	// ... latest auth object.
	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			setUser(user);
			setIsAuthenticating(false);
		});

		// Cleanup subscription on unmount
		return () => unsubscribe();
	}, []);

	// The user object and auth methods
	const values = {
		user,
		isAuthenticating,
		login,
		signup,
		logout,
		sendPasswordResetEmail,
		confirmPasswordReset,
	};

	// Provider component that wraps your app and makes auth object
	// ... available to any child component that calls useAuth().
	return (
		<AuthContext.Provider value={values}>
			{!isAuthenticating && children}
		</AuthContext.Provider>
	);
};
