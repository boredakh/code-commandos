import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './iconshome.css'

const Iconshome = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div
      className={`iconshome-pricing23 thq-section-padding ${props.rootClassName} `}
    >
      <div className="iconshome-max-width thq-section-max-width">
        <div className="iconshome-section-title">
          <div className="iconshome-content"></div>
        </div>
        {isMonthly && (
          <div className="iconshome-container1">
            <div className="iconshome-column1 thq-card">
              <div className="iconshome-price10">
                <div className="iconshome-price11">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="iconshome-image1"
                  />
                  <h3 className="iconshome-text10 thq-heading-3">
                    {props.plan1Price ?? (
                      <Fragment>
                        <span className="iconshome-text76">Join</span>
                      </Fragment>
                    )}
                  </h3>
                </div>
                <div className="iconshome-list1">
                  <div className="iconshome-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1 ?? (
                        <Fragment>
                          <span className="iconshome-text47">
                            Join our community and create a great profile to
                            make the most of our service.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="iconshome-column2 thq-card">
              <div className="iconshome-price12">
                <div className="iconshome-price13">
                  <img
                    alt={props.imageAlt2}
                    src={props.imageSrc2}
                    className="iconshome-image2"
                  />
                  <h3 className="iconshome-text12 thq-heading-3">
                    {props.plan2Price ?? (
                      <Fragment>
                        <span className="iconshome-text61">
                          <span>Explore</span>
                          <br></br>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                </div>
                <div className="iconshome-list2">
                  <div className="iconshome-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1 ?? (
                        <Fragment>
                          <span className="iconshome-text51">
                            <span>
                              Search for volunteer opportunities, trustees or
                              volunteers, and make contact.
                            </span>
                            <br></br>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="iconshome-column3 thq-card">
              <div className="iconshome-price14">
                <div className="iconshome-price15">
                  <img
                    alt={props.imageAlt1}
                    src={props.imageSrc1}
                    className="iconshome-image3"
                  />
                  <h3 className="iconshome-text14 thq-heading-3">
                    {props.plan3Price ?? (
                      <Fragment>
                        <span className="iconshome-text67">
                          <span className="iconshome-text68">Find a match</span>
                          <br></br>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                </div>
                <div className="iconshome-list3">
                  <div className="iconshome-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature1 ?? (
                        <Fragment>
                          <span className="iconshome-text78">
                            <span>
                              Are you a good fit? Talk it through and find your
                              match.
                            </span>
                            <br></br>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="iconshome-container2">
            <div className="iconshome-column4 thq-card">
              <div className="iconshome-price16">
                <div className="iconshome-price17">
                  <span className="iconshome-text16 thq-body-large">
                    {props.plan11 ?? (
                      <Fragment>
                        <span className="iconshome-text59">Basic plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="iconshome-text17 thq-heading-3">
                    {props.plan1Price1 ?? (
                      <Fragment>
                        <span className="iconshome-text65">$200/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan1Yearly1 ?? (
                      <Fragment>
                        <span className="iconshome-text48">or $20 monthly</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="iconshome-list4">
                  <div className="iconshome-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11 ?? (
                        <Fragment>
                          <span className="iconshome-text55">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="iconshome-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21 ?? (
                        <Fragment>
                          <span className="iconshome-text66">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="iconshome-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31 ?? (
                        <Fragment>
                          <span className="iconshome-text40">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="iconshome-button1 thq-button-outline thq-button-animated">
                <span className="thq-body-small">
                  {props.plan1Action1 ?? (
                    <Fragment>
                      <span className="iconshome-text45">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="iconshome-column5 thq-card">
              <div className="iconshome-price18">
                <div className="iconshome-price19">
                  <span className="iconshome-text23 thq-body-large">
                    {props.plan21 ?? (
                      <Fragment>
                        <span className="iconshome-text43">Business plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="iconshome-text24 thq-heading-3">
                    {props.plan2Price1 ?? (
                      <Fragment>
                        <span className="iconshome-text46">$299/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan2Yearly1 ?? (
                      <Fragment>
                        <span className="iconshome-text73">or $29 monthly</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="iconshome-list5">
                  <div className="iconshome-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11 ?? (
                        <Fragment>
                          <span className="iconshome-text71">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="iconshome-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21 ?? (
                        <Fragment>
                          <span className="iconshome-text60">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="iconshome-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31 ?? (
                        <Fragment>
                          <span className="iconshome-text42">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="iconshome-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41 ?? (
                        <Fragment>
                          <span className="iconshome-text72">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="iconshome-button2 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.plan2Action1 ?? (
                    <Fragment>
                      <span className="iconshome-text49">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="iconshome-column6 thq-card">
              <div className="iconshome-price20">
                <div className="iconshome-price21">
                  <span className="iconshome-text31 thq-body-large">
                    {props.plan31 ?? (
                      <Fragment>
                        <span className="iconshome-text77">
                          Enterprise plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="iconshome-text32 thq-heading-3">
                    {props.plan3Price1 ?? (
                      <Fragment>
                        <span className="iconshome-text41">$499/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan3Yearly1 ?? (
                      <Fragment>
                        <span className="iconshome-text44">or $49 monthly</span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="iconshome-list6">
                  <div className="iconshome-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11 ?? (
                        <Fragment>
                          <span className="iconshome-text56">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="iconshome-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21 ?? (
                        <Fragment>
                          <span className="iconshome-text74">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="iconshome-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31 ?? (
                        <Fragment>
                          <span className="iconshome-text75">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="iconshome-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41 ?? (
                        <Fragment>
                          <span className="iconshome-text50">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="iconshome-list-item24">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51 ?? (
                        <Fragment>
                          <span className="iconshome-text58">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="iconshome-button3 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.plan3Action1 ?? (
                    <Fragment>
                      <span className="iconshome-text57">Get started</span>
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

Iconshome.defaultProps = {
  imageSrc2: '/search-icon-2048x2048-cmujl7en-200h.png',
  imageSrc1: '/message.svg',
  imageAlt3: 'image',
  plan1Feature31: undefined,
  plan3Price1: undefined,
  plan2Feature31: undefined,
  plan21: undefined,
  plan3Yearly1: undefined,
  plan1Action1: undefined,
  plan2Price1: undefined,
  plan1Feature1: undefined,
  imageAlt1: 'image',
  plan1Yearly1: undefined,
  plan2Action1: undefined,
  plan3Feature41: undefined,
  plan2Feature1: undefined,
  rootClassName: '',
  plan1Feature11: undefined,
  plan3Feature11: undefined,
  plan3Action1: undefined,
  imageSrc3: '/6522516-200h.png',
  plan3Feature51: undefined,
  plan11: undefined,
  plan2Feature21: undefined,
  plan2Price: undefined,
  plan1Price1: undefined,
  plan1Feature21: undefined,
  imageAlt2: 'image',
  plan3Price: undefined,
  plan2Feature11: undefined,
  plan2Feature41: undefined,
  plan2Yearly1: undefined,
  plan3Feature21: undefined,
  plan3Feature31: undefined,
  plan1Price: undefined,
  plan31: undefined,
  plan3Feature1: undefined,
}

Iconshome.propTypes = {
  imageSrc2: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt3: PropTypes.string,
  plan1Feature31: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan21: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan1Feature1: PropTypes.element,
  imageAlt1: PropTypes.string,
  plan1Yearly1: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan2Feature1: PropTypes.element,
  rootClassName: PropTypes.string,
  plan1Feature11: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan3Action1: PropTypes.element,
  imageSrc3: PropTypes.string,
  plan3Feature51: PropTypes.element,
  plan11: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan2Price: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan1Feature21: PropTypes.element,
  imageAlt2: PropTypes.string,
  plan3Price: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan1Price: PropTypes.element,
  plan31: PropTypes.element,
  plan3Feature1: PropTypes.element,
}

export default Iconshome
