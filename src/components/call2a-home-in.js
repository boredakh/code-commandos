import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './call2a-home-in.css'

const Call2AHomeIn = (props) => {
  return (
    <div className={`call2a-home-in-container ${props.rootClassName} `}>
      <div className="call2a-home-in-buttons">
        <Link
          to="/opportunities-in"
          className="call2a-home-in-action11 thq-button-filled thq-button-animated"
        >
          <span>
            {props.text ?? (
              <Fragment>
                <span className="call2a-home-in-text4">Find Opportunities</span>
              </Fragment>
            )}
          </span>
        </Link>
        <Link
          to="/create-listing"
          className="call2a-home-in-action12 thq-button-filled thq-button-animated"
        >
          <span>
            {props.text1 ?? (
              <Fragment>
                <span className="call2a-home-in-text3">Find Volunteers</span>
              </Fragment>
            )}
          </span>
        </Link>
      </div>
    </div>
  )
}

Call2AHomeIn.defaultProps = {
  text1: undefined,
  text: undefined,
  rootClassName: '',
}

Call2AHomeIn.propTypes = {
  text1: PropTypes.element,
  text: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Call2AHomeIn
