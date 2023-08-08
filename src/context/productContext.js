import React, { useEffect, useReducer, createContext } from 'react';

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;

export const ProductContext = createContext();

const cart = window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : [];

const initialState = {
    products: [],
    loading: true,
    error: null,
    cart,
    featuredProducts: [],
};

const productReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return { ...state, products: action.payload, loading: false, error: null };
        case 'FETCH_PRODUCTS_ERROR':
            return { ...state, products: [], loading: false, error: action.payload };
        case 'ADD_TO_CART':
            return { ...state, cart: action.payload };
        case 'REMOVE_FROM_CART':
            return { ...state, cart: action.payload };
        case 'EMPTY_CART':
            return { ...state, cart: [] };
        case 'INCREASE_QUANTITY':
            return { ...state, cart: action.payload };
        case 'DECREASE_QUANTITY':
            return { ...state, cart: action.payload };
        default:
            return state;
    }
}

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: json }))
            .catch(err => dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: err.message }));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    useEffect(() => {
        const uploadImage = async () => {
            const products = [...state.products];
            const promises = products.map(async (product) => {
                // have the public id match the product id
                const publicId = product.id;
                const res = await fetch(product.image);
                const blob = await res.blob();
                const formData = new FormData();
                formData.append('file', blob);
                formData.append('upload_preset', 'commerce');
                formData.append('public_id', publicId);
                const res2 = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                    method: 'POST',
                    body: formData
                });
                const json = await res2.json();
                return { ...product, image: json.secure_url };
            });
            const productsWithImages = await Promise.all(promises);
            dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: productsWithImages });
        }
        uploadImage();
        console.log(state.products);
    }, [state.products])


    const addToCart = (product) => {
        const cart = [...state.cart];
        const index = cart.findIndex(item => item.id === product.id);
        if (index === -1) {
            cart.push({ ...product, quantity: 1 });
        } else {
            cart[index].quantity++;
        }
        dispatch({ type: 'ADD_TO_CART', payload: cart });
    }

    const removeFromCart = (product) => {
        const cart = [...state.cart];
        const index = cart.findIndex(item => item.id === product.id);
        if (index === -1) {
            return;
        } else {
            cart.splice(index, 1);
        }
        dispatch({ type: 'REMOVE_FROM_CART', payload: cart });
    }

    const emptyCart = () => {
        dispatch({ type: 'EMPTY_CART', payload: [] });
    }

    const increaseQuantity = (product) => {
        const cart = [...state.cart];
        const index = cart.findIndex(item => item.id === product.id);
        if (index === -1) {
            return;
        } else {
            cart[index].quantity++;
        }
        dispatch({ type: 'INCREASE_QUANTITY', payload: cart });
    }

    const decreaseQuantity = (product) => {
        const cart = [...state.cart];
        const index = cart.findIndex(item => item.id === product.id);
        if (index === -1) {
            return;
        } else {
            cart[index].quantity--;
            if (cart[index].quantity === 0) {
                cart.splice(index, 1);
            }
        }
        dispatch({ type: 'DECREASE_QUANTITY', payload: cart });
    }

    return (
        <ProductContext.Provider value={{ state, addToCart, removeFromCart, emptyCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </ProductContext.Provider>
    );
}