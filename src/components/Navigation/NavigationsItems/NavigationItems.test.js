import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NavigationItem from './NavigationItem/NavigationItem'
import NavigationItems from './NavigationItems'

configure({adapter: new Adapter()})

describe('<NavigationItems/>', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />)
  })

  it('should render two navigation items if not authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2)
  })
  it('should render three navigation items if authenticated', () => {
    wrapper.setProps({isAuthenticated: true})
    expect(wrapper.find(NavigationItem)).toHaveLength(3)
  })
  it('should render orders navigation item if authenticated', () => {
    wrapper.setProps({isAuthenticated: true})
    expect(wrapper.contains(<NavigationItem link='/'>Orders</NavigationItem>)).toEqual(true)
  })
})