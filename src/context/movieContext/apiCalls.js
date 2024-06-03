import { makeRequest } from "../../axios";
import { 
    getMovieStart, 
    getMovieSuccess, 
    getMovieFailure, 
    deleteMovieStart, 
    deleteMovieFailure, 
    deleteMovieSuccess, 
    addMovieStart, 
    addMovieFailure, 
    addMovieSuccess,
    updateMovieStart,
    updateMovieSuccess,
    updateMovieFailure
 } from "./MovieActions";

export const getMovies = async (dispatch) => {
    dispatch(getMovieStart());
    try {
        const res = await makeRequest.get("/movies/", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        // console.log(res.data);
        dispatch(getMovieSuccess(res.data));
    } catch (error) {
        console.log(error);
        dispatch(getMovieFailure(error));
    }
};

export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart);
    try {
        const res = await makeRequest.delete("/movies/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        console.log(res.data);
        dispatch(deleteMovieSuccess(id));
    } catch (error) {
        console.log(error);
        dispatch(deleteMovieFailure(error));
    }
};

export const addMovie = async (movie, dispatch) => {
    dispatch(addMovieStart());
    try {
        const res = await makeRequest.post("/movies/", movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        console.log(res.data);
        dispatch(addMovieSuccess(res.data));
    } catch (error) {
        console.log(error);
        dispatch(addMovieFailure(error));
    }
}

export const updateMovie = async (movie, dispatch) => {
    dispatch(updateMovieStart());
    try {
        const res = await makeRequest.put("/movies/" + movie._id, movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        })
        dispatch(updateMovieSuccess(res.data));
    } catch (error) {
        console.log(error);
        dispatch(updateMovieFailure(error));
    }
}