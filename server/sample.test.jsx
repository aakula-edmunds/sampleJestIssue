import React from 'react';
import { SampleServerOne } from './sample';


describe('server/sample.jsx', () => {
  test('should work', () => {
    const x = shallow(<SampleServerOne />);
    expect(x).toMatchSnapshot();
  });
});
