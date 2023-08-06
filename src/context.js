import { createContext, useEffect } from "react";
import { useReducer } from "react";

const Context = createContext();

export default Context;

// Path: src\firebase.js
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfKuaKr4HZSsMLCTnFlFd_ZIcqwFg12Es",
    authDomain: "e-commerce-c1211.firebaseapp.com",
    projectId: "e-commerce-c1211",
    storageBucket: "e-commerce-c1211.appspot.com",
    messagingSenderId: "157391016812",
    appId: "1:157391016812:web:1ae26e7cf17b08f43b9949",
    measurementId: "G-NJ1RR0HF6J"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// fake store api data

function authReducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload
            };
        case "LOGOUT":
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
const cart = cartFromLocalStorage.map(product => {
    return {
        ...product,
        inCart: true
    };
});

const initialState = {
    products: [],
    cart
};

function productReducer(state, action) {
    switch (action.type) {
        case "INIT":
            return {
                ...state,
                products: action.payload
            };
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload)
            };
        case "INCREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map(product => {
                    if (product.id === action.payload) {
                        return {
                            ...product,
                            quantity: product.quantity + 1
                        };
                    }
                    return product;
                })
            };
        case "DECREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map(product => {
                    if (product.id === action.payload) {
                        return {
                            ...product,
                            quantity: product.quantity - 1
                        };
                    }
                    return product;
                })
            };
        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            };
        default:
            return state;
    }
}

export function AppProvider(props) {
    const [authState, authDispatch] = useReducer(authReducer, {
        user: null
    });

    const [productState, productDispatch] = useReducer(productReducer, initialState);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async user => {
            if (user) {
                const idTokenResult = await user.getIdTokenResult();
                authDispatch({
                    type: "LOGIN",
                    payload: {
                        email: user.email,
                        token: idTokenResult.token
                    }
                });
            } else {
                authDispatch({
                    type: "LOGOUT"
                });
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const products = await response.json();
            productDispatch({
                type: "INIT",
                payload: products
            });
        };

        fetchProducts();
    }, []);

    return (
        <Context.Provider
            value={{
                authState,
                authDispatch,
                productState,
                productDispatch
            }}
        >
            {props.children}
        </Context.Provider>
    );

}



