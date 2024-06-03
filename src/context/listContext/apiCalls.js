import { makeRequest } from "../../axios";
import { 
    addListFailure,
    addListStart,
    addListSuccess,
    deleteListFailure,
    deleteListStart,
    deleteListSuccess,
    getListFailure, 
    getListStart, 
    getListSuccess 
} from "./ListActions"

export const getLists = async (dispatch) => {
    dispatch(getListStart());
    try {
        const res = await makeRequest.get("/lists", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        // console.log(res.data);
        dispatch(getListSuccess(res.data));
    } catch (error) {
        console.log(error);
        dispatch(getListFailure(error));
    }
}

export const deleteList = async (id, dispatch) => {
    deleteListStart();
    try {
        const res = await makeRequest.delete("/lists/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        })
        // console.log(res.data);
        dispatch(deleteListSuccess(id));
    } catch (error) {
        console.log(error);
        dispatch(deleteListFailure(error));
    }
}

export const createList = async (list, dispatch) => {
    dispatch(addListStart());
    try {
        const res = await makeRequest.post("/lists/", list, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(addListSuccess(res.data)); 
    } catch (error) {
        console.log(error);
        dispatch(addListFailure(error));
    }
}