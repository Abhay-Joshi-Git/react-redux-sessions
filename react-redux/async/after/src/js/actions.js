import * as APIs from './APIs.js';

export const addEmployee = (item) => {
    return async (dispatch) => {
        dispatch({
            type: 'REQUEST_ADD_EMPLOYEE',
            item: item
        });

        try{
            let respose = await APIs.addEmployee(item);
            dispatch({
                type: "ADD_EMPLOYEE",
                item: item
            });
        } catch(error) {
            console.log('capturing error . .. ..', error);
            dispatch({
                type: 'REQUEST_ADD_EMPLOYEE_FAILURE',
                error: error
            })
        }
    }
}

export const getEmployees = () => {
    return async (dispatch) => {
        dispatch({
            type: 'REQUEST_GET_EMPLOYEES_STARTED'
        });

        try {
            let data = await APIs.getEmployees();
            dispatch({
                type: 'REQUEST_GET_EMPLOYEES_SUCCESS',
                data: data
            })
        } catch(error) {
            dispatch({
                type: 'REQUEST_GET_EMPLOYEES_FAILURE',
                error: error
            })
        }
    }
}
