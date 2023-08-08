import React, { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = process.env.REACT_APP_FIREBASE_CONFIG;

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const initialState = {
    user: null
};

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGGED_IN_USER":
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const idTokenResult = await user.getIdTokenResult();
                dispatch({
                    type: "LOGGED_IN_USER",
                    payload: { email: user.email, token: idTokenResult.token }
                });
            } else {
                dispatch({
                    type: "LOGGED_IN_USER",
                    payload: null
                });
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}


