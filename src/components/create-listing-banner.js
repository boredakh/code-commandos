import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './create-listing-banner.css'

const CreateListingBanner = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div
      className={`create-listing-banner-pricing23 thq-section-padding ${props.rootClassName} `}
    >
      <div className="create-listing-banner-max-width thq-section-max-width">
        <div className="create-listing-banner-section-title">
          <div className="create-listing-banner-content"></div>
        </div>
        {isMonthly && (
          <div className="create-listing-banner-container1">
            <div className="create-listing-banner-column1 thq-card">
              <div className="create-listing-banner-price1">
                <div className="create-listing-banner-price2">
                  <img
                    alt={props.imageAlt}
                    src={props.imageSrc}
                    className="create-listing-banner-image"
                  />
                  <h3 className="create-listing-banner-text10 thq-heading-3">
                    {props.plan2Price ?? (
                      <Fragment>
                        <span className="create-listing-banner-text40">
                          <span>Create Listing</span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <div className="create-listing-banner-buttons"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="create-listing-banner-container2">
            <div className="create-listing-banner-column2 thq-card">
              <div className="create-listing-banner-price3">
                <div className="create-listing-banner-price4">
                  <span className="create-listing-banner-text11 thq-body-large">
                    {props.plan11 ?? (
                      <Fragment>
                        <span className="create-listing-banner-text37">
                          Basic plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="create-listing-banner-text12 thq-heading-3">
                    {props.plan1Price1 ?? (
                      <Fragment>
                        <span className="create-listing-banner-text55">
                          $200/yr
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan1Yearly1 ?? (
                      <Fragment>
                        <span className="create-listing-banner-text48">
                          or $20 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="create-listing-banner-list1">
                  <div className="create-listing-banner-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11 ?? (
                        <Fragment>
                          <span className="create-listing-banner-text43">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="create-listing-banner-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21 ?? (
                        <Fragment>
                          <span className="create-listing-banner-text61">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="create-listing-banner-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31 ?? (
                        <Fragment>
                          <span className="create-listing-banner-text58">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="create-listing-banner-button1 thq-button-outline thq-button-animated">
                <span className="thq-body-small">
                  {props.plan1Action1 ?? (
                    <Fragment>
                      <span className="create-listing-banner-text44">
                        Get started
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="create-listing-banner-column3 thq-card">
              <div className="create-listing-banner-price5">
                <div className="create-listing-banner-price6">
                  <span className="create-listing-banner-text18 thq-body-large">
                    {props.plan21 ?? (
                      <Fragment>
                        <span className="create-listing-banner-text49">
                          Business plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="create-listing-banner-text19 thq-heading-3">
                    {props.plan2Price1 ?? (
                      <Fragment>
                        <span className="create-listing-banner-text54">
                          $299/yr
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan2Yearly1 ?? (
                      <Fragment>
                        <span className="create-listing-banner-text60">
                          or $29 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="create-listing-banner-list2">
                  <div className="create-listing-banner-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11 ?? (
                        <Fragment>
                          <span className="create-listing-banner-text52">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="create-listing-banner-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21 ?? (
                        <Fragment>
                          <span className="create-listing-banner-text57">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="create-listing-banner-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31 ?? (
                        <Fragment>
                          <span className="create-listing-banner-text45">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="create-listing-banner-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41 ?? (
                        <Fragment>
                          <span className="create-listing-banner-text50">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="create-listing-banner-button2 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.plan2Action1 ?? (
                    <Fragment>
                      <span className="create-listing-banner-text39">
                        Get started
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="create-listing-banner-column4 thq-card">
              <div className="create-listing-banner-price7">
                <div className="create-listing-banner-price8">
                  <span className="create-listing-banner-text26 thq-body-large">
                    {props.plan31 ?? (
                      <Fragment>
                        <span className="create-listing-banner-text56">
                          Enterprise plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="create-listing-banner-text27 thq-heading-3">
                    {props.plan3Price1 ?? (
                      <Fragment>
                        <span className="create-listing-banner-text36">
                          $499/yr
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan3Yearly1 ?? (
                      <Fragment>
                        <span className="create-listing-banner-text51">
                          or $49 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="create-listing-banner-list3">
                  <div className="create-listing-banner-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11 ?? (
                        <Fragment>
                          <span className="create-listing-banner-text53">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="create-listing-banner-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21 ?? (
                        <Fragment>
                          <span className="create-listing-banner-text47">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="create-listing-banner-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31 ?? (
                        <Fragment>
                          <span className="create-listing-banner-text35">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="create-listing-banner-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41 ?? (
                        <Fragment>
                          <span className="create-listing-banner-text59">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="create-listing-banner-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51 ?? (
                        <Fragment>
                          <span className="create-listing-banner-text38">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="create-listing-banner-button3 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.plan3Action1 ?? (
                    <Fragment>
                      <span className="create-listing-banner-text46">
                        Get started
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

CreateListingBanner.defaultProps = {
  imageSrc: '/free-plus-icon-3107-thumb-200h.png',
  plan3Feature31: undefined,
  plan3Price1: undefined,
  plan11: undefined,
  plan3Feature51: undefined,
  plan2Action1: undefined,
  plan2Price: undefined,
  plan1Feature11: undefined,
  plan1Action1: undefined,
  plan2Feature31: undefined,
  rootClassName: '',
  plan3Action1: undefined,
  imageAlt: 'image',
  plan3Feature21: undefined,
  plan1Yearly1: undefined,
  plan21: undefined,
  plan2Feature41: undefined,
  plan3Yearly1: undefined,
  plan2Feature11: undefined,
  plan3Feature11: undefined,
  plan2Price1: undefined,
  plan1Price1: undefined,
  plan31: undefined,
  plan2Feature21: undefined,
  plan1Feature31: undefined,
  plan3Feature41: undefined,
  plan2Yearly1: undefined,
  plan1Feature21: undefined,
}

CreateListingBanner.propTypes = {
  imageSrc: PropTypes.string,
  plan3Feature31: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan11: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan2Price: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan2Feature31: PropTypes.element,
  rootClassName: PropTypes.string,
  plan3Action1: PropTypes.element,
  imageAlt: PropTypes.string,
  plan3Feature21: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan21: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan31: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan1Feature21: PropTypes.element,
}

export default CreateListingBanner
