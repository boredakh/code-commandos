import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './listingorgin.css'

const Listingorgin = (props) => {
  return (
    <div
      className={`listingorgin-card thq-flex-column thq-card ${props.rootClassName} `}
    >
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="listingorgin-text16">(Job Title)</span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text121 ?? (
          <Fragment>
            <span className="listingorgin-text22">(Commitment)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="listingorgin-text17">(Organisation)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text12 ?? (
          <Fragment>
            <span className="listingorgin-text21">(Industry)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text11 ?? (
          <Fragment>
            <span className="listingorgin-text18">(Location)</span>
          </Fragment>
        )}
      </span>
      <span className="listingorgin-text15 thq-body-small">
        {props.feature1Description ?? (
          <Fragment>
            <span className="listingorgin-text19">(Description)</span>
          </Fragment>
        )}
      </span>
      <div className="listingorgin-actions thq-flex-row">
        <button className="listingorgin-button thq-button-filled">
          <span className="listingorgin-action1 thq-body-small">
            {props.mainAction ?? (
              <Fragment>
                <span className="listingorgin-text20">Edit Listing</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Listingorgin.defaultProps = {
  rootClassName: '',
  feature1Title: undefined,
  text1: undefined,
  text11: undefined,
  feature1Description: undefined,
  mainAction: undefined,
  text12: undefined,
  text121: undefined,
}

Listingorgin.propTypes = {
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  text1: PropTypes.element,
  text11: PropTypes.element,
  feature1Description: PropTypes.element,
  mainAction: PropTypes.element,
  text12: PropTypes.element,
  text121: PropTypes.element,
}

export default Listingorgin
