import React from 'react'
import Nothing from '../nothing'
import PropTypes from 'prop-types'
import { cLoading } from '../../../utils/utils'

const ModalMiddle = ({ loading, list }) => {
  let len = list.length

  return (
    <div className={`modal_main ${cLoading(loading)}`}>
      {
        len == 0
          ? <Nothing showMssg={false} />
          : list
      }
    </div>
  )
}

ModalMiddle.propTypes = {
  loading: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.node).isRequired
}

export default ModalMiddle
