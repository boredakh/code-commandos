import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './verifyemailbanner.css'

const Verifyemailbanner = (props) => {
  return (
    <div
      className={`verifyemailbanner-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="verifyemailbanner-max-width thq-section-max-width">
        <div className="verifyemailbanner-container2">
          <h2 className="verifyemailbanner-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="verifyemailbanner-text3">
                  Verify Email Before Sign In
                </span>
              </Fragment>
            )}
          </h2>
        </div>
        <Link
          to="/sign-in"
          className="verifyemailbanner-navlink thq-button-filled"
        >
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="verifyemailbanner-text2">Sign In</span>
              </Fragment>
            )}
          </span>
        </Link>
      </div>
    </div>
  )
}

Verifyemailbanner.defaultProps = {
  action1: undefined,
  heading1: undefined,
  rootClassName: '',
}

Verifyemailbanner.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Verifyemailbanner
