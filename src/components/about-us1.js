import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './about-us1.css'

const AboutUs1 = (props) => {
  return (
    <div className="about-us1-layout300 thq-section-padding">
      <div className="about-us1-max-width thq-section-max-width">
        <div className="about-us1-section-title">
          <span className="about-us1-text10 thq-body-small">
            {props.slogan1 ?? (
              <Fragment>
                <span className="about-us1-text21">Reach CoSec</span>
              </Fragment>
            )}
          </span>
          <div className="about-us1-content1">
            <h2 className="about-us1-text11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="about-us1-text20">About Us</span>
                </Fragment>
              )}
            </h2>
            <span className="about-us1-text12 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="about-us1-text15">
                    We help aspiring Company Secretaries whether they have law
                    related experience or not to gain real world experience in
                    organisations that need company secretarial and governance
                    experience. We facilitate meaningful connections between
                    organisations and willing volunteers.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="about-us1-content2">
          <div className="about-us1-row thq-flex-row">
            <div className="about-us1-feature1">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="about-us1-image1 thq-img-ratio-4-3"
              />
              <div className="about-us1-content3">
                <h3 className="about-us1-feature1-title thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="about-us1-text13">
                        Explore
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="about-us1-text19">
                        Search for volunteer opportunities, trustees or
                        volunteers, and make contact.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="about-us1-feature2">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="about-us1-image2 thq-img-ratio-4-3"
              />
              <div className="about-us1-content4">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="about-us1-text14">Join</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="about-us1-text18">
                        Join our community and create a great profile to make
                        the most of our service.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="about-us1-feature3">
              <img
                alt={props.imageAlt2}
                src={props.imageSrc2}
                className="about-us1-image3 thq-img-ratio-4-3"
              />
              <div className="about-us1-content5">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="about-us1-text17">Find a match</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="about-us1-text16">
                        Are you a good fit? Talk it through and find your match.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AboutUs1.defaultProps = {
  imageSrc1: '/1653709-micheal-hefferman-wtml-1400w.jpg',
  imageAlt2: 'image',
  imageSrc2: '/images-1400w.png',
  feature1Title: undefined,
  feature2Title: undefined,
  imageSrc:
    '/nutshell-boats-explore-writing-near-travel-stuff_23-2147793489-1400w.png',
  imageAlt: 'image',
  content1: undefined,
  feature3Description: undefined,
  feature3Title: undefined,
  feature2Description: undefined,
  feature1Description: undefined,
  heading1: undefined,
  slogan1: undefined,
  imageAlt1: 'image',
}

AboutUs1.propTypes = {
  imageSrc1: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc2: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2Title: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  content1: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1Description: PropTypes.element,
  heading1: PropTypes.element,
  slogan1: PropTypes.element,
  imageAlt1: PropTypes.string,
}

export default AboutUs1
