import { createContext, useReducer } from "react";
import MovieReducer from "./MovieReducer";


const initialState = {
    movies: [],
    isFetching: false,
    error: false,
    errorMessage: null
}

export const MoviesContext = createContext(initialState);

export const MoviesContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(MovieReducer, initialState);

    return (
        <MoviesContext.Provider
            value={
                {
                    ...state,
                    dispatch
                }
            }
        >
            {children}
        </MoviesContext.Provider>
    );
};