export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return [...state, action.item]
        case 'REQUEST_GET_EMPLOYEES_SUCCESS':
            return [...action.data]

        default:
            return state
    }
}
