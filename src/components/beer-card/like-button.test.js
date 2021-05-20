import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Like from './like-button';

describe('Like Test', () => {
  it('Like component simulates click event', () => {
    let flag = false;
    const onButtonClick = () => {
      flag = true;
    };

    const wrapper = mount((
      <Like liked={false} action={onButtonClick} />
    ));

    wrapper.find('button').simulate('click');
    expect(flag).toBe(true);
  }); 
});