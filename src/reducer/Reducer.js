import React, { Component, createContext, useReducer } from 'react';

const initialState = {
    display: "0",
};

const reducer = (state, action) => {
    // TODO
    switch (action.type) {
        case 'add':
            return {...state,display: display + action.number};
        default:
            return state;
    }
}

export const CalculateContext = createContext(initialState);

export const CalculateProvider = ({ children }) => {
    // création du reducer et des deux proprietes state et dispatch (logique algo)
    const [state, dispatch] = useReducer(reducer, initialState);

    // Je passe un tableau plus simple à destructurer par la suite
    return (
        <CalculateContext.Provider value={[state, dispatch]}>
            {children}
        </CalculateContext.Provider>
    )
}