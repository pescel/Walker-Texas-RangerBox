import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Header from './Header';

describe('<Header/>', function () {

  it.skip('should display a single h1 tag', function () {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it.skip('', () => {
    const logStuff = sinon.spy()
    const wrapper = mount(<Button handleClick={logStuff} />);
    wrapper.simulate('click');
    expect(logStuff.calledOnce).to.equal(true);
  });

  it.skip('should have a router Link', function() {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('Link')).to.have.length(1)
  });
});
