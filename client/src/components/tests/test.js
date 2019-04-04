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

  it("renders party size options when active", () => {
    const wrapper = shallow(<PartySize/>);
    wrapper.setState({ active: true });
    expect(wrapper.find(".option").length).toBe(20);
  });

  it("when simulating a change on party size, select should update its value", () => {
    const wrapper = setupMount();
    wrapper.find('select').simulate('change',{target: { value : 4}});
    expect(wrapper.find('select').props().value).toBe(4);
    });
});

describe('Time', () => {
  let wrapper;

  it('wraps content in a div with .timeSelect class', () => {
    wrapper = shallow(<Time />);
    expect(wrapper.find('.timeSelect').length).toEqual(1);
  });

  it("renders time options when active", () => {
    const wrapper = shallow(<Time/>);
    wrapper.setState({ active: true });
    expect(wrapper.find(".option").length).toBe(20);
  });

  it("when simulating a change on time, select should update its value", () => {
    const wrapper = setupMount();
    wrapper.find('select').simulate('change',{target: { value : 1200 }});
    expect(wrapper.find('select').props().value).toBe(1200);
    });
});

