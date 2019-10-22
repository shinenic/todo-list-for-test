import React from 'react'
import { mount } from 'enzyme'
import Root from '../../Root'
import TodoList from '../TodoList'


describe('components', () => {
  let wrapped
  beforeEach(() => {
    wrapped = mount(<Root><TodoList /></Root>)
  })
  afterEach(() => {
    wrapped.unmount()
  })
  describe('switch', () => {
    it('should have three options', () => {
      expect(wrapped.find('.switch-container > div').length).toEqual(3)
    })
    it('should change css style when click each options', () => {
      wrapped.find('.switch-container > div').map((option, index) => {
        option.simulate('click')
        wrapped.update()
        // expect(wrapped.find('.switch-container > div').get(index).props.className).toEqual('switch--active')
        expect(wrapped.find('.switch-container > div').at(index).hasClass('switch--active')).toEqual(true);
      })
    })
  })

  describe('no data hint', () => {
    it('should show no data hint after click each options', () => {
      wrapped.find('.switch-container > div').map((option, index) => {
        option.simulate('click')
        wrapped.update()
        expect(wrapped.find('h4').length).toEqual(1)
      })
    })
  })

  describe('todo', () => {
    const state = { todos: { todoList: [{ content: 'test', id: 0, completed: false }] } }
    let stateWrapped
    beforeEach(() => {
      stateWrapped = mount(<Root initState={state}>
        <TodoList />
      </Root>)
    })
    it('should show todo text', () => {
      expect(stateWrapped.find('[name="todo"]').length).toEqual(1)
    })
    it('should have two control image', () => {
      expect(stateWrapped.find('[name="todo"] img').length).toEqual(3)
    })
  })
})

describe('multiple todo data', () => {
  const state = { todos: { todoList: [{ content: 'test todo', id: 0, completed: false },{ content: 'test completed', id: 1, completed: true }] } }
  let stateWrapped
  beforeEach(() => {
    stateWrapped = mount(<Root initState={state}>
      <TodoList />
    </Root>)
  })
  afterEach(() => {
    stateWrapped.unmount()
  })
  describe('on display mode "TODO"', () => {
    it('should disapper todo when tag todo completed', () => {
      stateWrapped.find('[name="todo"] img[name="check"]').simulate('click')
      stateWrapped.update()
      expect(stateWrapped.find('[name="todo"]').length).toEqual(0)
    })
    it('should disapper todo when remove todo', () => {
      stateWrapped.find('[name="todo"] img[name="remove"]').simulate('click')
      stateWrapped.update()
      expect(stateWrapped.find('[name="todo"]').length).toEqual(0)
    })
    it('should show no data hint when there is no todos',()=>{
      stateWrapped.find('[name="todo"] img[name="remove"]').simulate('click')
      stateWrapped.update()
      expect(stateWrapped.find('h4').length).toEqual(1)
    })
  })
  
  describe('on display mode "COMPLETED"', () => {
    beforeEach(()=>{
      stateWrapped.find('.switch-container > div').at(2).simulate('click')
      stateWrapped.update()
    })
    it('should disapper todo when tag todo uncompleted', () => {
      stateWrapped.find('[name="todo"] img[name="uncheck"]').simulate('click')
      stateWrapped.update()
      expect(stateWrapped.find('[name="todo"]').length).toEqual(0)
    })
    it('should disapper todo when remove todo', () => {
      stateWrapped.find('[name="todo"] img[name="remove"]').simulate('click')
      stateWrapped.update()
      expect(stateWrapped.find('[name="todo"]').length).toEqual(0)
    })
    it('should show no data hint when there is no completed todos',()=>{
      stateWrapped.find('[name="todo"] img[name="remove"]').simulate('click')
      stateWrapped.update()
      expect(stateWrapped.find('h4').length).toEqual(1)
    })
  })

  describe('on display mode "ALL"', () => {
    beforeEach(()=>{
      stateWrapped.find('.switch-container > div').at(1).simulate('click')
      stateWrapped.update()
    })
    it('should tag uncompleted when a completed tag todo uncompleted', () => {
      const completed = stateWrapped.find('[name="todo"].todo--completed').at(0)
      completed.find('img[name="uncheck"]').simulate('click')
      stateWrapped.update()
      expect(stateWrapped.find('[name="todo"].todo--completed').length).toEqual(0)
    })
    it('should tag completed when a uncompleted tag todo completed', () => {
      const completed = stateWrapped.find('[name="todo"].todo--uncompleted').at(0)
      completed.find('img[name="check"]').simulate('click')
      stateWrapped.update()
      expect(stateWrapped.find('[name="todo"].todo--uncompleted').length).toEqual(0)
    })
    it('should disapper todo when remove todo', () => {
      const completed = stateWrapped.find('[name="todo"].todo--uncompleted').at(0)
      completed.find('img[name="remove"]').simulate('click')
      stateWrapped.update()
      expect(stateWrapped.find('[name="todo"]').length).toEqual(1)
    })
    it('should show no data hint when there is no completed todos and uncompleted todos',()=>{
      stateWrapped.find('[name="todo"].todo--uncompleted img[name="remove"]').simulate('click')
      stateWrapped.find('[name="todo"].todo--completed img[name="remove"]').simulate('click')
      stateWrapped.update()
      expect(stateWrapped.find('h4').length).toEqual(1)
    })
  })
})
