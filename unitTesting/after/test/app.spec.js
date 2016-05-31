import React from 'react';
import App from '../src/js/components/app.js';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJsx from 'expect-jsx';

expect.extend(expectJsx);

describe('testing app component', function() {

    it('should return proper UI', () => {
        var renderer = TestUtils.createRenderer();
        renderer.render(< App text='abc'/>);
        var actual = renderer.getRenderOutput();
        console.log(actual);
        var expected = (
            <div>
                Let's experiment and react!!abc
            </div>
        );
        expect(actual).toEqualJSX(expected);
    })
})
