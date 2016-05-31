import expect from 'expect';
import employeeReducer from '../src/js/reducers/employees.js';

var state = [];
var action = {
    type: 'ADD_EMPLOYEE',
    item: {
        name: 'Alpha',
        department: 'manufacturing'
    }
}

describe('testing employee reducer', function() {


    it('should add item on ADD_EMPLOYEE action', () => {
        var actual = employeeReducer(state, action);
        var expected = [{
            name: 'Alpha',
            department: 'manufacturing'
        }];
        expect(actual).toEqual(expected);
    })

});
