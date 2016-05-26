import * as APIs from './APIs.js';

export const addEmployee = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'REQUEST_ADD_EMPLOYEE',
            item: item
        });

        APIs.addEmployee(item).then((response) => {
            dispatch({
                type: "ADD_EMPLOYEE",
                item: item
            });
        }).catch((error) => {
            console.log('capturing error . .. ..', error);
            dispatch({
                type: 'REQUEST_ADD_EMPLOYEE_FAILURE',
                error: error
            })
        })
    }
}

export const getEmployees = () => {
    return (dispatch) => {
        dispatch({
            type: 'REQUEST_GET_EMPLOYEES_STARTED'
        });

        APIs.getEmployees().then((data) => {
            dispatch({
                type: 'REQUEST_GET_EMPLOYEES_SUCCESS',
                data: data
            })
        }).catch((error) => {
            dispatch({
                type: 'REQUEST_GET_EMPLOYEES_FAILURE',
                error: error
            })
        })
    }
}
