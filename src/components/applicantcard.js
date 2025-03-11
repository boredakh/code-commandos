import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './applicantcard.css'

const Applicantcard = (props) => {
  return (
    <div
      className={`applicantcard-card thq-flex-column thq-card ${props.rootClassName} `}
    >
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="applicantcard-text17">
              ((first_name)(last_name))
            </span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="applicantcard-text18">(experience)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text13 ?? (
          <Fragment>
            <span className="applicantcard-text22">(age group)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text12 ?? (
          <Fragment>
            <span className="applicantcard-text21">(ciity_county)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text11 ?? (
          <Fragment>
            <span className="applicantcard-text20">(applied_at)</span>
          </Fragment>
        )}
      </span>
      <span className="applicantcard-text15 thq-body-small">
        {props.feature1Description ?? (
          <Fragment>
            <span className="applicantcard-text19">(user_message)</span>
          </Fragment>
        )}
      </span>
      <span className="applicantcard-text16 thq-body-small">
        {props.feature1Description1 ?? (
          <Fragment>
            <span className="applicantcard-text23">(user_email)</span>
          </Fragment>
        )}
      </span>
      <div className="applicantcard-actions thq-flex-row">
        <Link
          to="/find-volunteers-in-org"
          className="applicantcard-button thq-button-filled"
        >
          <span className="applicantcard-action1 thq-body-small">
            {props.mainAction1 ?? (
              <Fragment>
                <span className="applicantcard-text24">Return</span>
              </Fragment>
            )}
          </span>
        </Link>
      </div>
    </div>
  )
}

Applicantcard.defaultProps = {
  rootClassName: '',
  feature1Title: undefined,
  text1: undefined,
  feature1Description: undefined,
  text11: undefined,
  text12: undefined,
  text13: undefined,
  feature1Description1: undefined,
  mainAction1: undefined,
}

Applicantcard.propTypes = {
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  text1: PropTypes.element,
  feature1Description: PropTypes.element,
  text11: PropTypes.element,
  text12: PropTypes.element,
  text13: PropTypes.element,
  feature1Description1: PropTypes.element,
  mainAction1: PropTypes.element,
}

export default Applicantcard
