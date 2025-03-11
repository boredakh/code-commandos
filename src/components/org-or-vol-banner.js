import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './org-or-vol-banner.css'

const OrgOrVolBanner = (props) => {
  return (
    <div className={`org-or-vol-banner-container ${props.rootClassName} `}>
      <div className="org-or-vol-banner-buttons">
        <Link
          to="/org-sign-up"
          className="org-or-vol-banner-action11 thq-button-filled thq-button-animated"
        >
          <span>
            {props.text ?? (
              <Fragment>
                <span className="org-or-vol-banner-text4">Organisation</span>
              </Fragment>
            )}
          </span>
        </Link>
        <Link
          to="/volunteer-sign-up"
          className="org-or-vol-banner-action12 thq-button-filled thq-button-animated"
        >
          <span>
            {props.text1 ?? (
              <Fragment>
                <span className="org-or-vol-banner-text3">Volunteer</span>
              </Fragment>
            )}
          </span>
        </Link>
      </div>
    </div>
  )
}

OrgOrVolBanner.defaultProps = {
  text1: undefined,
  text: undefined,
  rootClassName: '',
}

OrgOrVolBanner.propTypes = {
  text1: PropTypes.element,
  text: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default OrgOrVolBanner
