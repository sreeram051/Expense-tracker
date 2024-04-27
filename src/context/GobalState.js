import { createContext , useReducer } from "react";
import  AppReducer  from "./AppReducer";
import React  from "react";


const initialState = {
    transtions : [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => { 
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTranaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTranaction(transactions) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transactions,
        })
    }

    return (
        <GlobalContext.Provider value={{
            transtions: state.transtions, 
            deleteTranaction,
            addTranaction
        }}>
            {children}
        </GlobalContext.Provider>);
}
