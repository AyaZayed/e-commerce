import React, { createContext, useReducer } from "react";

export const LanguageContext = createContext();

const initialState = {
    language: "en"
};

const languageReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_LANGUAGE":
            return { ...state, language: action.payload };
        default:
            return state;
    }
}

export const LanguageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(languageReducer, initialState);

    return (
        <LanguageContext.Provider value={{ state, dispatch }}>
            {children}
        </LanguageContext.Provider>
    )
}