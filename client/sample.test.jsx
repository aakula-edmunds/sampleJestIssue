import React from 'react';
import { SampleOne } from './sample';


describe('client/sample.jsx', () => {
  test('should work', () => {
    const x = shallow(<SampleOne />);
    expect(x).toMatchSnapshot();
  });
});
