import React from 'react'
import { Provider } from 'react-redux'
import mockStore from '../../../store/mockStore/mockStore'
import { BrowserRouter as Router } from 'react-router-dom'
import Notifications, { PureNotifications } from '../notifications'
import { create } from 'react-test-renderer'
import Notification from '../../../store/mockStore/mock-reducers/Notification'
import { shallow } from 'enzyme'

describe('Notifications Component', () => {

  const comp = (
    <Provider store={mockStore}>
      <Router>
        <Notifications/>
      </Router>
    </Provider>
  )

  it('should match snapshot', () => {
    const tree = create(comp).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match snapshot when notifications.length == 0', () => {
    Notification.notifications = []
    const tree = create(comp).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should hide spinner when state.loading = false', () => {
    const wrapper = shallow(
      <PureNotifications
        dispatch={jest.fn()}
        notifications={Notification.notifications}
      />
    )
    wrapper.setState({ loading: false })
    expect(wrapper.find('IsLoading').prop('loading')).toBe(false)
  })

})
