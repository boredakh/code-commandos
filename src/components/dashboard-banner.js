import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './dashboard-banner.css'

const DashboardBanner = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div
      className={`dashboard-banner-pricing23 thq-section-padding ${props.rootClassName} `}
    >
      <div className="dashboard-banner-max-width thq-section-max-width">
        <div className="dashboard-banner-section-title">
          <div className="dashboard-banner-content"></div>
        </div>
        {isMonthly && (
          <div className="dashboard-banner-container">
            <div className="dashboard-banner-column thq-card">
              <div className="dashboard-banner-price1">
                <div className="dashboard-banner-price2">
                  <h3 className="dashboard-banner-text1 thq-heading-3">
                    {props.plan2Price ?? (
                      <Fragment>
                        <span className="dashboard-banner-text2">
                          <span>Dashboard</span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

DashboardBanner.defaultProps = {
  plan2Price: undefined,
  rootClassName: '',
}

DashboardBanner.propTypes = {
  plan2Price: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default DashboardBanner
