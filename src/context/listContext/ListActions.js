// get List

export const getListStart = () => ({
    type: 'GET_LISTS_START',
});

export const getListSuccess = (lists) => ({
    type: 'GET_LISTS_SUCCESS',
    payload: lists,
});

export const getListFailure = (error) => ({
    type: 'GET_LISTS_FAILURE',
    payload: error,
});

// add List

export const addListStart = () => ({
    type: 'ADD_LIST_START',
});

export const addListSuccess = (list) => ({
    type: 'ADD_LIST_SUCCESS',
    payload: list,
});

export const addListFailure = (error) => ({
    type: 'ADD_LIST_FAILURE',
    payload: error,
});

// Update List

export const updateListStart = () => ({
    type: 'EDIT_LIST_START',
});

export const updateListSuccess = (list) => ({
    type: 'EDIT_LIST_SUCCESS',
    payload: list,
});

export const updateListFailure = (error) => ({
    type: 'EDIT_LIST_FAILURE',
    payload: error,
});

// delete List

export const deleteListStart = () => ({
    type: 'DEL_LIST_START',
});

export const deleteListSuccess = (id) => ({
    type: 'DEL_LIST_SUCCESS',
    payload: id,
});

export const deleteListFailure = (error) => ({
    type: 'DEL_LIST_FAILURE',
    payload: error,
});