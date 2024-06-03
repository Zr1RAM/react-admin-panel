const MovieReducer = (state, action) => {
    switch (action.type) {
        case "GET_MOVIES_START": {
            return {
                ...state,
                isFetching: true,
                error: false,
                movies: []
            };
        }
        case "GET_MOVIES_SUCCESS": {
            return {
                ...state,
                movies: action.payload,
                isFetching: false,
                error: false,
            };
        }
        case "GET_MOVIES_FAILURE": {
            return {
                movies: [],
                isFetching: false,
                error: true,
                errorMessage: action.payload
            };
        }
        case "DEL_MOVIES_START": {
            return {
                ...state,
                isFetching: true,
                error: false,
                movies: []
            };
        }
        case "DEL_MOVIES_SUCCESS": {
            return {
                ...state,
                movies: state.movies.filter((movie) => (movie._id !== action.payload)),
                isFetching: false,
                error: false,
            };
        }
        case "DEL_MOVIES_FAILURE": {
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload
            };
        }
        case "ADD_MOVIES_START": {
            return {
                ...state,
                isFetching: true,
                error: false,
                movies: []
            };
        }
        case "ADD_MOVIES_SUCCESS": {
            return {
                ...state,
                movies: [...state.movies, action.payload], // you forgot why we do this. its because states are immutable. we faced this before da dei
                isFetching: false,
                error: false,
            };
        }
        case "ADD_MOVIES_FAILURE": {
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload
            };
        }
        case "EDIT_MOVIES_START": {
            return {
                ...state,
                isFetching: true,
                error: false,
                movies: []
            };
        }
        case "EDIT_MOVIES_SUCCESS": {
            return {
                ...state,
                movies: state.movie.map(
                    (movie) => movie._id === action.payload._id && action.payload
                ), // you forgot why we do this. its because states are immutable. we faced this before da dei
                isFetching: false,
                error: false,
            };
        }
        case "EDIT_MOVIES_FAILURE": {
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload
            };
        }
        default: {
            return {...state};
        }
    }
}

export default MovieReducer;