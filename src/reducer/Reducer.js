import React, { Component, createContext, useReducer } from 'react';

const initialState = {
    display: "0",
};

const reducer = (state, action) => {
    // TODO
    switch (action.type) {
        case 'add':
            return {...state,total: parseFloat(state.number1) + parseFloat(state.number2)};
        case 'multiply':
            return {...state,total: parseFloat(state.number1) * parseFloat(state.number2)};
        case 'number1':
            return {...state,number1: action.number}
        case 'number2':
            return {...state,number2: action.number}
        case 'reset':
            return {...initialState}
        default:
            return state;
    }
}

export const CalculateContext = createContext(initialState);

export class CalculateProvider extends Component {
    // création du reducer et des deux proprietes state et dispatch (logique algo)
    constructor(props){
        super(props)
        [this.state, this.dispatch] = useReducer(reducer, initialState);
    }

    // Je passe un tableau plus simple à destructurer par la suite
    render(){
        return (
            <CalculateContext.Provider value={[this.state, this.dispatch]}>
                {children}
            </CalculateContext.Provider>
        )
    }
}