import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
// import { shallow, mount, render } from 'enzyme';

import Header from '../../src/components/header/Header';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    const wrapper = shallow(<Header/>)
    expect(wrapper.contains()).toBe(true);
  });

//   it('should be selectable by class "foo"', function() {
//     expect(shallow(<Foo />).is('.foo')).toBe(true);
//   });

//   it('should mount in a full DOM', function() {
//     expect(mount(<Foo />).find('.foo').length).toBe(1);
//   });

//   it('should render to static HTML', function() {
//     expect(render(<Foo />).text()).toEqual('Bar');
//   });
});