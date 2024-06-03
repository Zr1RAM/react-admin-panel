// get movie

export const getMovieStart = () => ({
    type: 'GET_MOVIES_START',
});

export const getMovieSuccess = (movies) => ({
    type: 'GET_MOVIES_SUCCESS',
    payload: movies,
});

export const getMovieFailure = (error) => ({
    type: 'GET_MOVIES_FAILURE',
    payload: error,
});

// add movie

export const addMovieStart = () => ({
    type: 'ADD_MOVIES_START',
});

export const addMovieSuccess = (movie) => ({
    type: 'ADD_MOVIES_SUCCESS',
    payload: movie,
});

export const addMovieFailure = (error) => ({
    type: 'ADD_MOVIES_FAILURE',
    payload: error,
});

// Update movie

export const updateMovieStart = () => ({
    type: 'EDIT_MOVIES_START',
});

export const updateMovieSuccess = (movie) => ({
    type: 'EDIT_MOVIES_SUCCESS',
    payload: movie,
});

export const updateMovieFailure = (error) => ({
    type: 'EDIT_MOVIES_FAILURE',
    payload: error,
});

// delete movie

export const deleteMovieStart = () => ({
    type: 'DEL_MOVIES_START',
});

export const deleteMovieSuccess = (id) => ({
    type: 'DEL_MOVIES_SUCCESS',
    payload: id,
});

export const deleteMovieFailure = (error) => ({
    type: 'DEL_MOVIES_FAILURE',
    payload: error,
});