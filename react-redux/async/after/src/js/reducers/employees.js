const initialState = {
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                data: [...state.data, action.item]
            }
        case 'REQUEST_GET_EMPLOYEES_SUCCESS':
            return {
                ...state,
                dataLoading: false,
                data: [...action.data]
            }
        case 'REQUEST_GET_EMPLOYEES_STARTED': {
            return {
                ...state,
                dataLoading: true
            }
        }

        default:
            return state
    }
}
