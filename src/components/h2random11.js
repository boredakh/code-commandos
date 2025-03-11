import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './h2random11.css'

const H2random11 = (props) => {
  return (
    <div className="h2random11-container">
      <h2 className="thq-heading-2">
        {props.heading ?? (
          <Fragment>
            <span className="h2random11-text2">About us</span>
          </Fragment>
        )}
      </h2>
    </div>
  )
}

H2random11.defaultProps = {
  heading: undefined,
  rootClassName: '',
}

H2random11.propTypes = {
  heading: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default H2random11
