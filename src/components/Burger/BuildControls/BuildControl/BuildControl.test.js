import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import BuildControl from './BuildControl'

configure({adapter: new Adapter()})

describe('<BuildControl/>', () => {
  let wrapper

  beforeEach(() => {
  })

  it('should be disabled with right props', () => {
    wrapper = shallow(<BuildControl disabled={true}/>)

    expect(wrapper.find(BuildControl)).toHaveLength(0)
  })
})