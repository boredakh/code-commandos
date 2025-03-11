import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './jobrole.css'

const Jobrole = (props) => {
  return (
    <div
      className={`jobrole-layout186 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-flex-column thq-section-max-width">
        <h2 className="jobrole-text10 thq-heading-2">
          {props.feature1Title ?? (
            <Fragment>
              <span className="jobrole-text16">(Job Title)</span>
            </Fragment>
          )}
        </h2>
        <h3 className="jobrole-text11 thq-heading-2">
          {props.feature1Title1 ?? (
            <Fragment>
              <span className="jobrole-text17">(Organisation)</span>
            </Fragment>
          )}
        </h3>
        <p className="jobrole-text12 thq-body-large">
          {props.feature1Description ?? (
            <Fragment>
              <span className="jobrole-text18">(Location)</span>
            </Fragment>
          )}
        </p>
        <p className="jobrole-text13 thq-body-large">
          {props.feature1Description2 ?? (
            <Fragment>
              <span className="jobrole-text19">(Industry)</span>
            </Fragment>
          )}
        </p>
        <p className="jobrole-text14 thq-body-large">
          {props.feature1Description1 ?? (
            <Fragment>
              <span className="jobrole-text20">(Commitment)</span>
            </Fragment>
          )}
        </p>
        <p className="jobrole-text15 thq-body-large">
          {props.feature1Description11 ?? (
            <Fragment>
              <span className="jobrole-text21">(Description)</span>
            </Fragment>
          )}
        </p>
        <div className="jobrole-actions thq-flex-row">
          <button className="thq-button-filled jobrole-button">
            <span className="thq-body-small">Apply</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Jobrole.defaultProps = {
  feature1Title: undefined,
  feature1Title1: undefined,
  feature1Description: undefined,
  feature1Description2: undefined,
  feature1Description1: undefined,
  feature1Description11: undefined,
  rootClassName: '',
}

Jobrole.propTypes = {
  feature1Title: PropTypes.element,
  feature1Title1: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1Description2: PropTypes.element,
  feature1Description1: PropTypes.element,
  feature1Description11: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Jobrole
