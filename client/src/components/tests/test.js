import React from 'react';
import { shallow, mount } from 'enzyme';

import FindATable from '../FindATable';
import PartySize from '../PartySize';
import Slots from '../Slots';
import Time from '../Time';

describe('PartySize', () => {
  let wrapper;

  it('wraps content in a div with .partySizeSelect class', () => {
    wrapper = shallow(<PartySize />);
    expect(wrapper.find('.partySizeSelect').length).toEqual(1);
  });
});

describe('Time', () => {
  let wrapper;

  it('wraps content in a div with .timeSelect class', () => {
    wrapper = shallow(<Time />);
    expect(wrapper.find('.timeSelect').length).toEqual(1);
  });
});

