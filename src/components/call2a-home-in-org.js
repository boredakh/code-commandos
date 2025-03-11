import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './call2a-home-in-org.css'

const Call2AHomeInOrg = (props) => {
  return (
    <div className={`call2a-home-in-org-container ${props.rootClassName} `}>
      <div className="call2a-home-in-org-buttons">
        <Link
          to="/opportunities-inorg"
          className="call2a-home-in-org-action11 thq-button-filled thq-button-animated"
        >
          <span>
            {props.text ?? (
              <Fragment>
                <span className="call2a-home-in-org-text3">
                  Find Opportunities
                </span>
              </Fragment>
            )}
          </span>
        </Link>
        <Link
          to="/find-volunteers-in-org"
          className="call2a-home-in-org-action12 thq-button-filled thq-button-animated"
        >
          <span>
            {props.text1 ?? (
              <Fragment>
                <span className="call2a-home-in-org-text4">
                  Find Volunteers
                </span>
              </Fragment>
            )}
          </span>
        </Link>
      </div>
    </div>
  )
}

Call2AHomeInOrg.defaultProps = {
  text: undefined,
  rootClassName: '',
  text1: undefined,
}

Call2AHomeInOrg.propTypes = {
  text: PropTypes.element,
  rootClassName: PropTypes.string,
  text1: PropTypes.element,
}

export default Call2AHomeInOrg
