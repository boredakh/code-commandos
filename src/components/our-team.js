import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './our-team.css'

const OurTeam = (props) => {
  return (
    <div className="our-team-team1 thq-section-padding">
      <div className="our-team-max-width thq-section-max-width">
        <div className="our-team-section-title">
          <span className="thq-body-small our-team-text10">
            {props.content1 ?? (
              <Fragment>
                <span className="our-team-text23">Join Our Team Today!</span>
              </Fragment>
            )}
          </span>
          <div className="our-team-content1">
            <h2 className="thq-heading-2 our-team-text11">
              {props.heading1 ?? (
                <Fragment>
                  <span className="our-team-text28">Meet our team</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large our-team-text12">
              {props.content2 ?? (
                <Fragment>
                  <span className="our-team-text27">
                    The team behind  Reach CoSec
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="our-team-content2">
          <div className="our-team-content3">
            <div className="our-team-row1">
              <div className="our-team-container1">
                <div className="our-team-card1">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="our-team-image1 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="our-team-content4">
                    <div className="our-team-title1">
                      <span className="our-team-text13 thq-body-small">
                        {props.member1 ?? (
                          <Fragment>
                            <span className="our-team-text30">Usman</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="our-team-text14 thq-body-small">
                        {props.member1Job ?? (
                          <Fragment>
                            <span className="our-team-text29">
                              UI/Scrum Master
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="our-team-social-icons1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="our-team-card2">
                  <img
                    alt={props.imageAlt2}
                    src={props.imageSrc2}
                    className="our-team-image2 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="our-team-content5">
                    <div className="our-team-title2">
                      <span className="our-team-text15 thq-body-small">
                        {props.member2 ?? (
                          <Fragment>
                            <span className="our-team-text22">Rajib</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="our-team-text16 thq-body-small">
                        {props.member2Job ?? (
                          <Fragment>
                            <span className="our-team-text25">
                              Legal Advisor/Design
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="our-team-social-icons2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="our-team-row2">
              <div className="our-team-container2">
                <div className="our-team-card3">
                  <img
                    alt={props.imageAlt1}
                    src={props.imageSrc1}
                    className="our-team-image3 thq-img-ratio-1-1 thq-img-round rounf"
                  />
                  <div className="our-team-content6">
                    <div className="our-team-title3">
                      <span className="our-team-text17 thq-body-small">
                        {props.member3 ?? (
                          <Fragment>
                            <span className="our-team-text26">Shahriar</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="our-team-text18 thq-body-small">
                        {props.member3Job ?? (
                          <Fragment>
                            <span className="our-team-text31">
                              Backend engineer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="our-team-social-icons3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                  </div>
                </div>
                <div className="our-team-card4">
                  <img
                    alt={props.imageAlt}
                    src={props.imageSrc}
                    className="our-team-image4 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="our-team-content7">
                    <div className="our-team-title4">
                      <span className="our-team-text19 thq-body-small">
                        {props.member4 ?? (
                          <Fragment>
                            <span className="our-team-text24">Ety</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="our-team-text20 thq-body-small">
                        {props.member4Job ?? (
                          <Fragment>
                            <span className="our-team-text21">
                              Head Designer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="our-team-social-icons4">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="our-team-content8">
            <div className="our-team-content9"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

OurTeam.defaultProps = {
  imageAlt2: 'image',
  member4Job: undefined,
  imageSrc1: '/file%20(1)-500w.png',
  member2: undefined,
  imageSrc: '/file-500w.png',
  imageAlt: 'image',
  content1: undefined,
  imageSrc3: '/file%20(3)-500w.png',
  member4: undefined,
  member2Job: undefined,
  member3: undefined,
  imageSrc2: '/file%20(2)-500w.png',
  content2: undefined,
  heading1: undefined,
  member1Job: undefined,
  member1: undefined,
  member3Job: undefined,
  imageAlt3: 'image',
  imageAlt1: 'image',
}

OurTeam.propTypes = {
  imageAlt2: PropTypes.string,
  member4Job: PropTypes.element,
  imageSrc1: PropTypes.string,
  member2: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  content1: PropTypes.element,
  imageSrc3: PropTypes.string,
  member4: PropTypes.element,
  member2Job: PropTypes.element,
  member3: PropTypes.element,
  imageSrc2: PropTypes.string,
  content2: PropTypes.element,
  heading1: PropTypes.element,
  member1Job: PropTypes.element,
  member1: PropTypes.element,
  member3Job: PropTypes.element,
  imageAlt3: PropTypes.string,
  imageAlt1: PropTypes.string,
}

export default OurTeam
