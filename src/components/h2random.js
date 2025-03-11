import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './h2random.css'

const H2random = (props) => {
  return (
    <div className="h2random-container">
      <h2 className="thq-heading-2">
        {props.heading ?? (
          <Fragment>
            <span className="h2random-text2">Results</span>
          </Fragment>
        )}
      </h2>
    </div>
  )
}

H2random.defaultProps = {
  heading: undefined,
}

H2random.propTypes = {
  heading: PropTypes.element,
}

export default H2random
