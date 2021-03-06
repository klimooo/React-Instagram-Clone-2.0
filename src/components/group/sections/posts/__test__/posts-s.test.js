import React from 'react'
import MockDataElement from '../../../../../utils/__test__/mock-dataElement'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import mockStore from '../../../../../store/mockStore/mockStore'
import { BrowserRouter as Router } from 'react-router-dom'
import GroupPosts from '../posts-s'
import Group from '../../../../../store/mockStore/mock-reducers/Group'

describe('GroupPosts Component', () => {
  MockDataElement()

  const comp = (
    <Provider store={mockStore}>
      <Router>
        <GroupPosts/>
      </Router>
    </Provider>
  )

  it('should match snapshot', () => {
    const tree = create(comp).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match snapshot and hide postItTeaser when joined == false', () => {
    Group.joined = false
    const tree = create(comp).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
