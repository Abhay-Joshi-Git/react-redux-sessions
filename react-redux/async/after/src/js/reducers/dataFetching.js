export default (state = {}, action) => {
    switch (action.type) {
        case 'REQUEST_GET_EMPLOYEES_STARTED':
            return {
                ...state,
                employeesDataLoading: true
            };
        case 'REQUEST_GET_EMPLOYEES_SUCCESS':
        return {
            ...state,
            employeesDataLoading: false
        };
        default:
            return state;

    }
}
