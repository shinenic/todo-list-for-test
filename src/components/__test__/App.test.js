import App from '../App'
import Root from '../../Root'
import React from 'react'
import { mount } from 'enzyme'

it('renders App without crashing', () => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  wrapped.unmount();
})