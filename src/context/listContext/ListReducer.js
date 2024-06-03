const ListReducer = (state, action) => {
    switch (action.type) {
        case "GET_LISTS_START": {
            return {
                ...state,
                isFetching: true,
                error: false,
                lists: []
            };
        }
        case "GET_LISTS_SUCCESS": {
            return {
                ...state,
                lists: action.payload,
                isFetching: false,
                error: false,
            };
        }
        case "GET_LISTS_FAILURE": {
            return {
                lists: [],
                isFetching: false,
                error: true,
                errorMessage: action.payload
            };
        }
        case "DEL_LIST_START": {
            return {
                ...state,
                isFetching: true,
                error: false,
                lists: []
            };
        }
        case "DEL_LIST_SUCCESS": {
            return {
                ...state,
                lists: state.lists.filter((list) => (list._id !== action.payload)),
                isFetching: false,
                error: false,
            };
        }
        case "DEL_LIST_FAILURE": {
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload
            };
        }
        case "ADD_LIST_START": {
            return {
                ...state,
                isFetching: true,
                error: false,
                Lists: []
            };
        }
        case "ADD_LIST_SUCCESS": {
            return {
                ...state,
                lists: [...state.lists, action.payload], // you forgot why we do this. its because states are immutable. we faced this before da dei
                isFetching: false,
                error: false,
            };
        }
        case "ADD_LIST_FAILURE": {
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload
            };
        }
        case "EDIT_LIST_START": {
            return {
                ...state,
                isFetching: true,
                error: false,
                lists: []
            };
        }
        case "EDIT_LIST_SUCCESS": {
            return {
                ...state,
                lists: state.list.map(
                    (listItem) => listItem._id === action.payload._id && action.payload
                ), // you forgot why we do this. its because states are immutable. we faced this before da dei
                isFetching: false,
                error: false,
            };
        }
        case "EDIT_LIST_FAILURE": {
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

export default ListReducer;