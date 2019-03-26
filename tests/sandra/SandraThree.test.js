import React from 'react';
import { shallow, mount } from 'enzyme';
import Review from "../../src/components/reviews/Review"



it('works', () => {
    const wrap = shallow(
      <Review name='Groot' />
    )
  
    expect(wrap.text()).toEqual('Groot')
  })