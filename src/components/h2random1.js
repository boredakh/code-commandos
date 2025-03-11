import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './h2random1.css'

const H2random1 = (props) => {
  return (
    <div className={`h2random1-container ${props.rootClassName} `}>
      <h2 className="thq-heading-2">
        {props.heading ?? (
          <Fragment>
            <span className="h2random1-text2">Sign Up</span>
          </Fragment>
        )}
      </h2>
    </div>
  )
}

H2random1.defaultProps = {
  rootClassName: '',
  heading: undefined,
}

H2random1.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.element,
}

export default H2random1
