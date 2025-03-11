import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './call2a-home.css'

const Call2AHome = (props) => {
  return (
    <div className="call2a-home-container">
      <div className="call2a-home-buttons">
        <Link
          to="/opportunities-out"
          className="call2a-home-action11 thq-button-filled thq-button-animated"
        >
          <span>
            {props.text ?? (
              <Fragment>
                <span className="call2a-home-text3">Find Opportunities</span>
              </Fragment>
            )}
          </span>
        </Link>
        <Link
          to="/org-sign-up"
          className="call2a-home-action12 thq-button-filled thq-button-animated"
        >
          <span>
            {props.text1 ?? (
              <Fragment>
                <span className="call2a-home-text4">Find Volunteers</span>
              </Fragment>
            )}
          </span>
        </Link>
      </div>
    </div>
  )
}

Call2AHome.defaultProps = {
  text: undefined,
  text1: undefined,
}

Call2AHome.propTypes = {
  text: PropTypes.element,
  text1: PropTypes.element,
}

export default Call2AHome
