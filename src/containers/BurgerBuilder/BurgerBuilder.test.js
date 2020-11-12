import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { BurgerBuilder } from './BurgerBuilder'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

configure({adapter: new Adapter()})

describe('BurgerBuilder component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder />)
  })

  it('should not render BuildControls when no ingredients are added', () => {
    expect(wrapper.find(BuildControls)).toHaveLength(0)
  })
})
