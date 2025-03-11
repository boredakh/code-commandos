import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './post-ad.css'

const PostAd = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div
      className={`post-ad-pricing23 thq-section-padding ${props.rootClassName} `}
    >
      <div className="post-ad-max-width thq-section-max-width">
        <div className="post-ad-section-title">
          <div className="post-ad-content"></div>
        </div>
        {isMonthly && (
          <div className="post-ad-container1">
            <div className="post-ad-column1 thq-card">
              <div className="post-ad-price1">
                <div className="post-ad-price2">
                  <img
                    alt={props.imageAlt}
                    src={props.imageSrc}
                    className="post-ad-image"
                  />
                  <h3 className="post-ad-text10 thq-heading-3">
                    {props.plan2Price ?? (
                      <Fragment>
                        <span className="post-ad-text36">
                          <span>Create Listing</span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <div className="post-ad-buttons">
                    <Link
                      to="/create-listing"
                      className="post-ad-action1 thq-button-filled thq-button-animated"
                    >
                      <span>
                        {props.text ?? (
                          <Fragment>
                            <span className="post-ad-text45">Create</span>
                          </Fragment>
                        )}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="post-ad-container2">
            <div className="post-ad-column2 thq-card">
              <div className="post-ad-price3">
                <div className="post-ad-price4">
                  <span className="post-ad-text12 thq-body-large">
                    {props.plan11 ?? (
                      <Fragment>
                        <span className="post-ad-text48">Basic plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="post-ad-text13 thq-heading-3">
                    {props.plan1Price1 ?? (
                      <Fragment>
                        <span className="post-ad-text53">$200/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan1Yearly1 ?? (
                      <Fragment>
                        <span className="post-ad-text40">or $20 monthly</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="post-ad-list1">
                  <div className="post-ad-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11 ?? (
                        <Fragment>
                          <span className="post-ad-text47">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21 ?? (
                        <Fragment>
                          <span className="post-ad-text41">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31 ?? (
                        <Fragment>
                          <span className="post-ad-text59">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="post-ad-button1 thq-button-outline thq-button-animated">
                <span className="thq-body-small">
                  {props.plan1Action1 ?? (
                    <Fragment>
                      <span className="post-ad-text52">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="post-ad-column3 thq-card">
              <div className="post-ad-price5">
                <div className="post-ad-price6">
                  <span className="post-ad-text19 thq-body-large">
                    {props.plan21 ?? (
                      <Fragment>
                        <span className="post-ad-text62">Business plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="post-ad-text20 thq-heading-3">
                    {props.plan2Price1 ?? (
                      <Fragment>
                        <span className="post-ad-text44">$299/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan2Yearly1 ?? (
                      <Fragment>
                        <span className="post-ad-text42">or $29 monthly</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="post-ad-list2">
                  <div className="post-ad-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11 ?? (
                        <Fragment>
                          <span className="post-ad-text39">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21 ?? (
                        <Fragment>
                          <span className="post-ad-text49">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31 ?? (
                        <Fragment>
                          <span className="post-ad-text55">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41 ?? (
                        <Fragment>
                          <span className="post-ad-text51">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="post-ad-button2 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.plan2Action1 ?? (
                    <Fragment>
                      <span className="post-ad-text60">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="post-ad-column4 thq-card">
              <div className="post-ad-price7">
                <div className="post-ad-price8">
                  <span className="post-ad-text27 thq-body-large">
                    {props.plan31 ?? (
                      <Fragment>
                        <span className="post-ad-text58">Enterprise plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="post-ad-text28 thq-heading-3">
                    {props.plan3Price1 ?? (
                      <Fragment>
                        <span className="post-ad-text61">$499/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan3Yearly1 ?? (
                      <Fragment>
                        <span className="post-ad-text50">or $49 monthly</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="post-ad-list3">
                  <div className="post-ad-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11 ?? (
                        <Fragment>
                          <span className="post-ad-text57">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21 ?? (
                        <Fragment>
                          <span className="post-ad-text43">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31 ?? (
                        <Fragment>
                          <span className="post-ad-text46">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41 ?? (
                        <Fragment>
                          <span className="post-ad-text54">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51 ?? (
                        <Fragment>
                          <span className="post-ad-text56">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="post-ad-button3 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.plan3Action1 ?? (
                    <Fragment>
                      <span className="post-ad-text63">Get started</span>
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

PostAd.defaultProps = {
  rootClassName: '',
  plan2Price: undefined,
  plan2Feature11: undefined,
  plan1Yearly1: undefined,
  plan1Feature21: undefined,
  plan2Yearly1: undefined,
  plan3Feature21: undefined,
  plan2Price1: undefined,
  text: undefined,
  plan3Feature31: undefined,
  imageSrc: '/free-plus-icon-3107-thumb-200h.png',
  plan1Feature11: undefined,
  plan11: undefined,
  plan2Feature21: undefined,
  plan3Yearly1: undefined,
  plan2Feature41: undefined,
  plan1Action1: undefined,
  plan1Price1: undefined,
  imageAlt: 'image',
  plan3Feature41: undefined,
  plan2Feature31: undefined,
  plan3Feature51: undefined,
  plan3Feature11: undefined,
  plan31: undefined,
  plan1Feature31: undefined,
  plan2Action1: undefined,
  plan3Price1: undefined,
  plan21: undefined,
  plan3Action1: undefined,
}

PostAd.propTypes = {
  rootClassName: PropTypes.string,
  plan2Price: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan2Price1: PropTypes.element,
  text: PropTypes.element,
  plan3Feature31: PropTypes.element,
  imageSrc: PropTypes.string,
  plan1Feature11: PropTypes.element,
  plan11: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan1Price1: PropTypes.element,
  imageAlt: PropTypes.string,
  plan3Feature41: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan31: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan21: PropTypes.element,
  plan3Action1: PropTypes.element,
}

export default PostAd
