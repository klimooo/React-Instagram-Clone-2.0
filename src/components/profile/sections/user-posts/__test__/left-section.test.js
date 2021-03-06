import React from 'react'
import MockDataElement from '../../../../../utils/__test__/mock-dataElement'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import mockStore from '../../../../../store/mockStore/mockStore'
import UserPostsLeftSection from '../left-section'
import { BrowserRouter as Router } from 'react-router-dom'
import User from '../../../../../store/mockStore/mock-reducers/User'

describe('UserPostsLeftSection Component', () => {
  MockDataElement()

  const comp = (username='takkar') => (
    <Provider store={mockStore}>
      <Router>
        <UserPostsLeftSection
          username={username}
        />
      </Router>
    </Provider>
  )

  it('should match snapshot when profile is mine', () => {
    const tree = create(comp()).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match snapshot when profile is not mine', () => {
    User.user_details.id = 7
    const tree = create(comp('ghalib')).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
