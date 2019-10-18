import React from 'react'
import Root from '../../Root'
import TodoInput from '../TodoInput'
import { mount, shallow } from 'enzyme'

let wrapped
beforeEach(() => {
  wrapped = mount(<Root><TodoInput /></Root>)
})
afterEach(()=>{
  wrapped.unmount()
})
describe('components', () => {
  describe('Input area', () => {
    it('should render Input and Add Button', () => {
      expect(wrapped.find('input').length).toEqual(1)
      expect(wrapped.find('img').length).toEqual(1)
    })

    const testInput = 'something...'
    beforeEach(() => {
      wrapped.find('input').simulate('change', { target: { value: testInput } })
      wrapped.update()
    })
    it('should be able to enter text into the Input', () => {
      expect(wrapped.find('input').prop('value')).toEqual(testInput)
    })

    it('should clean input value after clicked add Button', () => {
      expect(wrapped.find('input').prop('value')).toEqual(testInput)
      wrapped.find('img').simulate('click')
      expect(wrapped.find('input').prop('value')).toEqual('')
    })

    it('should clean input value after press "ENTER"', () => {
      expect(wrapped.find('input').prop('value')).toEqual(testInput)
      wrapped.find('input').simulate('keydown', { key: 'Enter' })
      expect(wrapped.find('input').prop('value')).toEqual('')
    })
  })
})