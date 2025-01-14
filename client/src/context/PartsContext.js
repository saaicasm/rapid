import {createContext, useReducer } from 'react';

export const PartsContext = createContext();

const partsReducer = (state, action) => {
    switch(action.type){
        case 'SET_PARTS':
            return{
                parts:action.payload
            }
        case 'ADD_PART':
            return {
                parts: [action.payload, ...state.parts]
            }
        case 'DELETE_PART':
            return {
                parts: state.parts.filter(part => part._id !== action.payload._id)
            }
        default:
            return state;
    }
}

export const PartsContextProvider = ({children}) => {


    const [state, dispatch] = useReducer(partsReducer, {
        parts:null
    });

    return (
        <PartsContext.Provider value={{...state, dispatch}}>
            {children}
        </PartsContext.Provider>
    )
}