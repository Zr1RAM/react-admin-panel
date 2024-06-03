import { createContext, useEffect, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
    errorMessage: null
}

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user])

    return (
        <AuthContext.Provider 
            value={
                {
                    ...state,
                    dispatch
                }
            }
        >
            {children}
        </AuthContext.Provider>
    ); 
    
}