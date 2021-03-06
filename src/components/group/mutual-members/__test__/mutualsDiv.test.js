import React from 'react'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import mockStore from '../../../../store/mockStore/mockStore'
import { BrowserRouter as Router } from 'react-router-dom'
import MutualMembersDiv from '../mutualsDiv'

describe('MutualMembersDiv Component', () => {

  const comp = (
    <Provider store={mockStore}>
      <Router>
        <MutualMembersDiv
          group={34}
        />
      </Router>
    </Provider>
  )

  it('should match snapshot', () => {
    const tree = create(comp).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
