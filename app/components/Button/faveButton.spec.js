import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';
import sinon from 'sinon';

import FavoritesBtn from './FaveButton';

describe('<FavoritesBtn', () => {

  it('should render as a <button>', () => {
    const wrapper = shallow(<FavoritesBtn />)
    assert.equal(wrapper.type(), 'button');
  });

  it.skip('should call props.addFavorites on onClick', () => {
    const addFavorites = sinon.spy()
    const wrapper = mount(<FavoritesBtn handleClick={props.addFavorites(props.joke)} />);
    wrapper.simulate('click');
    expect(props.addFavorites.calledOnce).to.equal(true);
  });
})
