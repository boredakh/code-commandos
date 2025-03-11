import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './aboutus3.css'

const Aboutus3 = (props) => {
  return (
    <div className="aboutus3-contact20 thq-section-padding">
      <div className="aboutus3-max-width thq-section-max-width">
        <div className="aboutus3-section-title">
          <span className="thq-body-small">
            {props.content2 ?? (
              <Fragment>
                <span className="aboutus3-text16">
                  Get in touch with us today!
                </span>
              </Fragment>
            )}
          </span>
          <div className="aboutus3-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="aboutus3-text17">Contact us</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="aboutus3-row">
          <div className="aboutus3-content2">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="aboutus3-contact-info1">
              <div className="aboutus3-content3">
                <h3 className="aboutus3-text12 thq-heading-3">Email</h3>
              </div>
              <span className="aboutus3-email thq-body-small">
                {props.email1 ?? (
                  <Fragment>
                    <span className="aboutus3-text15">s4303218@lsbu.ac.uk</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="aboutus3-content4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="aboutus3-contact-info2">
              <div className="aboutus3-content5">
                <h3 className="aboutus3-text13 thq-heading-3">Phone</h3>
              </div>
              <span className="aboutus3-phone thq-body-small">
                {props.phone1 ?? (
                  <Fragment>
                    <span className="aboutus3-text18">+1 (555) 000-0000</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="aboutus3-content6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="aboutus3-contact-info3">
              <div className="aboutus3-content7">
                <h3 className="aboutus3-text14 thq-heading-3">Office</h3>
              </div>
              <span className="aboutus3-address thq-body-small">
                {props.address1 ?? (
                  <Fragment>
                    <span className="aboutus3-text19">
                      <span>Southwark Campus Library - LSBU Hub</span>
                      <br></br>
                      <span>100-116 London Road</span>
                      <br></br>
                      <span>London</span>
                      <br></br>
                      <span>SE1 6LN</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Aboutus3.defaultProps = {
  email1: undefined,
  content2: undefined,
  heading1: undefined,
  phone1: undefined,
  address1: undefined,
}

Aboutus3.propTypes = {
  email1: PropTypes.element,
  content2: PropTypes.element,
  heading1: PropTypes.element,
  phone1: PropTypes.element,
  address1: PropTypes.element,
}

export default Aboutus3
