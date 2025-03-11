import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './post-ad-out.css'

const PostAdOut = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div
      className={`post-ad-out-pricing23 thq-section-padding ${props.rootClassName} `}
    >
      <div className="post-ad-out-max-width thq-section-max-width">
        <div className="post-ad-out-section-title">
          <div className="post-ad-out-content"></div>
        </div>
        {isMonthly && (
          <div className="post-ad-out-container1">
            <div className="post-ad-out-column1 thq-card">
              <div className="post-ad-out-price1">
                <div className="post-ad-out-price2">
                  <img
                    alt={props.imageAlt}
                    src={props.imageSrc}
                    className="post-ad-out-image"
                  />
                  <h3 className="post-ad-out-text10 thq-heading-3">
                    {props.plan2Price ?? (
                      <Fragment>
                        <span className="post-ad-out-text42">
                          <span>Create Listing</span>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <div className="post-ad-out-buttons">
                    <Link
                      to="/org-sign-up"
                      className="post-ad-out-action1 thq-button-filled thq-button-animated"
                    >
                      <span>
                        {props.text ?? (
                          <Fragment>
                            <span className="post-ad-out-text62">Create</span>
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
          <div className="post-ad-out-container2">
            <div className="post-ad-out-column2 thq-card">
              <div className="post-ad-out-price3">
                <div className="post-ad-out-price4">
                  <span className="post-ad-out-text12 thq-body-large">
                    {props.plan11 ?? (
                      <Fragment>
                        <span className="post-ad-out-text48">Basic plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="post-ad-out-text13 thq-heading-3">
                    {props.plan1Price1 ?? (
                      <Fragment>
                        <span className="post-ad-out-text63">$200/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan1Yearly1 ?? (
                      <Fragment>
                        <span className="post-ad-out-text51">
                          or $20 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="post-ad-out-list1">
                  <div className="post-ad-out-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11 ?? (
                        <Fragment>
                          <span className="post-ad-out-text37">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-out-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21 ?? (
                        <Fragment>
                          <span className="post-ad-out-text55">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-out-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31 ?? (
                        <Fragment>
                          <span className="post-ad-out-text61">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="post-ad-out-button1 thq-button-outline thq-button-animated">
                <span className="thq-body-small">
                  {props.plan1Action1 ?? (
                    <Fragment>
                      <span className="post-ad-out-text38">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="post-ad-out-column3 thq-card">
              <div className="post-ad-out-price5">
                <div className="post-ad-out-price6">
                  <span className="post-ad-out-text19 thq-body-large">
                    {props.plan21 ?? (
                      <Fragment>
                        <span className="post-ad-out-text39">
                          Business plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="post-ad-out-text20 thq-heading-3">
                    {props.plan2Price1 ?? (
                      <Fragment>
                        <span className="post-ad-out-text54">$299/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan2Yearly1 ?? (
                      <Fragment>
                        <span className="post-ad-out-text50">
                          or $29 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="post-ad-out-list2">
                  <div className="post-ad-out-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11 ?? (
                        <Fragment>
                          <span className="post-ad-out-text59">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-out-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21 ?? (
                        <Fragment>
                          <span className="post-ad-out-text49">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-out-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31 ?? (
                        <Fragment>
                          <span className="post-ad-out-text56">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-out-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41 ?? (
                        <Fragment>
                          <span className="post-ad-out-text41">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="post-ad-out-button2 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.plan2Action1 ?? (
                    <Fragment>
                      <span className="post-ad-out-text46">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="post-ad-out-column4 thq-card">
              <div className="post-ad-out-price7">
                <div className="post-ad-out-price8">
                  <span className="post-ad-out-text27 thq-body-large">
                    {props.plan31 ?? (
                      <Fragment>
                        <span className="post-ad-out-text45">
                          Enterprise plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="post-ad-out-text28 thq-heading-3">
                    {props.plan3Price1 ?? (
                      <Fragment>
                        <span className="post-ad-out-text52">$499/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan3Yearly1 ?? (
                      <Fragment>
                        <span className="post-ad-out-text58">
                          or $49 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="post-ad-out-list3">
                  <div className="post-ad-out-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11 ?? (
                        <Fragment>
                          <span className="post-ad-out-text60">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-out-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21 ?? (
                        <Fragment>
                          <span className="post-ad-out-text36">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-out-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31 ?? (
                        <Fragment>
                          <span className="post-ad-out-text40">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-out-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41 ?? (
                        <Fragment>
                          <span className="post-ad-out-text47">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="post-ad-out-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51 ?? (
                        <Fragment>
                          <span className="post-ad-out-text53">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="post-ad-out-button3 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.plan3Action1 ?? (
                    <Fragment>
                      <span className="post-ad-out-text57">Get started</span>
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

PostAdOut.defaultProps = {
  plan3Feature21: undefined,
  rootClassName: '',
  plan1Feature11: undefined,
  plan1Action1: undefined,
  plan21: undefined,
  plan3Feature31: undefined,
  plan2Feature41: undefined,
  imageAlt: 'image',
  imageSrc: '/free-plus-icon-3107-thumb-200h.png',
  plan2Price: undefined,
  plan31: undefined,
  plan2Action1: undefined,
  plan3Feature41: undefined,
  plan11: undefined,
  plan2Feature21: undefined,
  plan2Yearly1: undefined,
  plan1Yearly1: undefined,
  plan3Price1: undefined,
  plan3Feature51: undefined,
  plan2Price1: undefined,
  plan1Feature21: undefined,
  plan2Feature31: undefined,
  plan3Action1: undefined,
  plan3Yearly1: undefined,
  plan2Feature11: undefined,
  plan3Feature11: undefined,
  plan1Feature31: undefined,
  text: undefined,
  plan1Price1: undefined,
}

PostAdOut.propTypes = {
  plan3Feature21: PropTypes.element,
  rootClassName: PropTypes.string,
  plan1Feature11: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan21: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan2Feature41: PropTypes.element,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  plan2Price: PropTypes.element,
  plan31: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan11: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan1Feature31: PropTypes.element,
  text: PropTypes.element,
  plan1Price1: PropTypes.element,
}

export default PostAdOut
