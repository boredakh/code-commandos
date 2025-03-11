import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './listingout1.css'

const Listingout1 = (props) => {
  return (
    <div
      className={`listingout1-card thq-flex-column thq-card ${props.rootClassName} `}
    >
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="listingout1-text16">(Job Title)</span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text121 ?? (
          <Fragment>
            <span className="listingout1-text17">(Commitment)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="listingout1-text18">(Organisation)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text12 ?? (
          <Fragment>
            <span className="listingout1-text19">(Industry)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text11 ?? (
          <Fragment>
            <span className="listingout1-text20">(Location)</span>
          </Fragment>
        )}
      </span>
      <span className="listingout1-text15 thq-body-small">
        {props.feature1Description ?? (
          <Fragment>
            <span className="listingout1-text21">(Description)</span>
          </Fragment>
        )}
      </span>
      <div className="listingout1-actions thq-flex-row">
        <Link to="/sign-in" className="listingout1-button thq-button-filled">
          <span className="listingout1-action1 thq-body-small">
            {props.mainAction ?? (
              <Fragment>
                <span className="listingout1-text22">Apply</span>
              </Fragment>
            )}
          </span>
        </Link>
      </div>
    </div>
  )
}

Listingout1.defaultProps = {
  rootClassName: '',
  feature1Title: undefined,
  text121: undefined,
  text1: undefined,
  text12: undefined,
  text11: undefined,
  feature1Description: undefined,
  mainAction: undefined,
}

Listingout1.propTypes = {
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  text121: PropTypes.element,
  text1: PropTypes.element,
  text12: PropTypes.element,
  text11: PropTypes.element,
  feature1Description: PropTypes.element,
  mainAction: PropTypes.element,
}

export default Listingout1
