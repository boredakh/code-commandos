import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer
      className={`footer-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer-max-width thq-section-max-width">
        <div className="footer-content">
          <div className="footer-newsletter">
            <Link to="/" className="footer-navlink">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="footer-image"
              />
            </Link>
            <span className="footer-content-title1 thq-body-small">
              Address
            </span>
            <span className="footer-content1 thq-body-small">
              <span>London South Bank University</span>
              <br className="footer-text11"></br>
              <br></br>
              <span>103 Borough Road</span>
              <br className="footer-text14"></br>
              <br></br>
              <span>London SE1 0AA</span>
              <br></br>
            </span>
            <span className="thq-body-small">
              <span className="footer-text18">Contact</span>
              <br className="footer-text19"></br>
              <span>+</span>
              <span className="footer-text21">1234567890</span>
              <br></br>
              <span className="footer-text23">s4303218@lsbu.ac.uk</span>
              <br></br>
            </span>
          </div>
          <div className="footer-links">
            <div className="footer-column1">
              <div className="footer-footer-links1">
                <Link
                  to="/about-us-out"
                  className="footer-link1 thq-body-small"
                >
                  {props.link1 ?? (
                    <Fragment>
                      <span className="footer-text29">About us</span>
                    </Fragment>
                  )}
                </Link>
                <Link
                  to="/about-us-out"
                  className="footer-link2 thq-body-small"
                >
                  {props.link2 ?? (
                    <Fragment>
                      <span className="footer-text30">Help</span>
                    </Fragment>
                  )}
                </Link>
                <Link
                  to="/about-us-out"
                  className="footer-link3 thq-body-small"
                >
                  {props.link3 ?? (
                    <Fragment>
                      <span className="footer-text33">Contact us</span>
                    </Fragment>
                  )}
                </Link>
                <Link to="/blogs-out" className="footer-link4 thq-body-small">
                  {props.link4 ?? (
                    <Fragment>
                      <span className="footer-text34">Blogs</span>
                    </Fragment>
                  )}
                </Link>
                <Link
                  to="/termsand-policies-in"
                  className="footer-link5 thq-body-small"
                >
                  {props.link5 ?? (
                    <Fragment>
                      <span className="footer-text32">Terms &amp; Privacy</span>
                    </Fragment>
                  )}
                </Link>
              </div>
            </div>
            <div className="footer-column2">
              <div className="footer-footer-links2">
                <Link
                  to="/opportunities-out"
                  className="footer-link7 thq-body-small"
                >
                  {props.link7 ?? (
                    <Fragment>
                      <span className="footer-text26">Find Opportunities</span>
                    </Fragment>
                  )}
                </Link>
                <Link
                  to="/find-volunteers-out"
                  className="footer-link8 thq-body-small"
                >
                  {props.link8 ?? (
                    <Fragment>
                      <span className="footer-text28">Find Volunteers</span>
                    </Fragment>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-credits">
          <div className="footer-row">
            <div className="footer-footer-links3">
              <Link
                to="/termsand-policies-in"
                className="footer-link11 thq-body-small"
              >
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer-text27">Privacy Policy</span>
                  </Fragment>
                )}
              </Link>
              <Link
                to="/termsand-policies-in"
                className="footer-link12 thq-body-small"
              >
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer-text25">Terms of Service</span>
                  </Fragment>
                )}
              </Link>
              <Link
                to="/termsand-policies-in"
                className="footer-link13 thq-body-small"
              >
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer-text31">Cookies Settings</span>
                  </Fragment>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  termsLink: undefined,
  rootClassName: '',
  link7: undefined,
  privacyLink: undefined,
  imageAlt1: 'image',
  link8: undefined,
  link1: undefined,
  link2: undefined,
  cookiesLink: undefined,
  link5: undefined,
  link3: undefined,
  imageSrc1: '/reach-volunteering-logo%20(1)-200h.png',
  link4: undefined,
}

Footer.propTypes = {
  termsLink: PropTypes.element,
  rootClassName: PropTypes.string,
  link7: PropTypes.element,
  privacyLink: PropTypes.element,
  imageAlt1: PropTypes.string,
  link8: PropTypes.element,
  link1: PropTypes.element,
  link2: PropTypes.element,
  cookiesLink: PropTypes.element,
  link5: PropTypes.element,
  link3: PropTypes.element,
  imageSrc1: PropTypes.string,
  link4: PropTypes.element,
}

export default Footer
