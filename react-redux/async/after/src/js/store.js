import * as Redux from 'redux';
import employeeReducer from './reducers/employees.js';
import dataFetching from './reducers/dataFetching.js';
import thunk from 'redux-thunk';


var initialState = [];
var reduer = Redux.combineReducers({
    employees: employeeReducer,
    dataFetching
})

var store = Redux.createStore(
    reduer,
    Redux.applyMiddleware(thunk)
);

export default store;
