import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonialshome.css'

const Testimonialshome = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonialshome-max-width thq-section-max-width">
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          data-autoplay-delay="5000"
          className="testimonialshome-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="testimonialshome-slider-slide1 swiper-slide"
            >
              <div className="testimonialshome-container2">
                <div className="testimonialshome-stars1">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <p className="thq-body-large">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonialshome-text23">
                        &quot;Theres&apos;s nothing else like it&quot;
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="testimonialshome-avatar1 thq-flex-row">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonialshome-avatar-image1 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonialshome-avatar-content1">
                    <span className="testimonialshome-text11 thq-body-small">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonialshome-text22">
                            Lady Jane
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonialshome-text25">
                            Trainee Cosec, Diageo
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonialshome-slider-slide2 swiper-slide"
            >
              <div className="testimonialshome-container3">
                <div className="testimonialshome-stars2">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <p className="thq-body-large">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonialshome-text20">
                        &quot;Would recommend&quot;
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="testimonialshome-avatar2 thq-flex-row">
                  <img
                    src="/dexter_guinn-819x1024-200w.webp"
                    className="testimonialshome-avatar-image2 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonialshome-avatar-content2">
                    <span className="testimonialshome-text14 thq-body-small">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonialshome-text27">
                            Lorem Ipsum
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonialshome-text19">
                            2nd Year Law Graduate
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonialshome-slider-slide3 swiper-slide"
            >
              <div className="testimonialshome-container4">
                <div className="testimonialshome-stars3">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                  </svg>
                </div>
                <p className="thq-body-large">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonialshome-text26">
                        &quot;I was really lost  before I found CoSec Reach.
                        There&apos;s nothing like it.&quot;
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="testimonialshome-avatar3 thq-flex-row">
                  <img
                    alt={props.author3Alt}
                    src="/img_2458-200w.jpg"
                    className="testimonialshome-avatar-image3 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonialshome-avatar-content3">
                    <span className="testimonialshome-text17 thq-body-small">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonialshome-text24">
                            Jane Doe
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonialshome-text21">
                            Level 6 Foundation CoSec
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="testimonialshome-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="testimonialshome-slider-button-prev swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="testimonialshome-slider-button-next swiper-button-next"
          ></div>
        </div>
      </div>
    </div>
  )
}

Testimonialshome.defaultProps = {
  author2Position: undefined,
  author1Alt: 'Author Avatar',
  review2: undefined,
  author3Position: undefined,
  author1Name: undefined,
  review1: undefined,
  author3Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=200',
  author1Position: undefined,
  review3: undefined,
  author2Name: undefined,
  author3Alt: 'Author Avatar',
}

Testimonialshome.propTypes = {
  author2Position: PropTypes.element,
  author1Alt: PropTypes.string,
  review2: PropTypes.element,
  author3Position: PropTypes.element,
  author1Name: PropTypes.element,
  review1: PropTypes.element,
  author3Name: PropTypes.element,
  author1Src: PropTypes.string,
  author1Position: PropTypes.element,
  review3: PropTypes.element,
  author2Name: PropTypes.element,
  author3Alt: PropTypes.string,
}

export default Testimonialshome
