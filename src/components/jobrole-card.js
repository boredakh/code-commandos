import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './jobrole-card.css'

const JobroleCard = (props) => {
  return (
    <div className="jobrole-card-layout186 thq-section-padding">
      <div className="thq-flex-column thq-section-max-width">
        <h2 className="jobrole-card-text10 thq-heading-2">
          {props.feature1Title ?? (
            <Fragment>
              <span className="jobrole-card-text21">(Job Title)</span>
            </Fragment>
          )}
        </h2>
        <h3 className="jobrole-card-text11 thq-heading-2">
          {props.feature1Title1 ?? (
            <Fragment>
              <span className="jobrole-card-text18">(Organisation)</span>
            </Fragment>
          )}
        </h3>
        <p className="jobrole-card-text12 thq-body-large">
          {props.feature1Description ?? (
            <Fragment>
              <span className="jobrole-card-text17">(Location)</span>
            </Fragment>
          )}
        </p>
        <p className="jobrole-card-text13 thq-body-large">
          {props.feature1Description2 ?? (
            <Fragment>
              <span className="jobrole-card-text16">(Industry)</span>
            </Fragment>
          )}
        </p>
        <p className="jobrole-card-text14 thq-body-large">
          {props.feature1Description1 ?? (
            <Fragment>
              <span className="jobrole-card-text20">(Commitment)</span>
            </Fragment>
          )}
        </p>
        <p className="jobrole-card-text15 thq-body-large">
          {props.feature1Description11 ?? (
            <Fragment>
              <span className="jobrole-card-text19">(Description Mini)</span>
            </Fragment>
          )}
        </p>
        <div className="jobrole-card-actions thq-flex-row">
          <button className="thq-button-filled jobrole-card-button">
            <span className="thq-body-small">Apply</span>
          </button>
        </div>
      </div>
    </div>
  )
}

JobroleCard.defaultProps = {
  feature1Description2: undefined,
  feature1Description: undefined,
  feature1Title1: undefined,
  feature1Description11: undefined,
  feature1Description1: undefined,
  feature1Title: undefined,
}

JobroleCard.propTypes = {
  feature1Description2: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1Title1: PropTypes.element,
  feature1Description11: PropTypes.element,
  feature1Description1: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default JobroleCard
