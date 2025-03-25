import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './nav-bar-out.css'

const NavBarOut = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <header className={`nav-bar-out-container1 ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="nav-bar-out-navbar-interactive">
        <Link to="/" className="nav-bar-out-navlink">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="nav-bar-out-image"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="nav-bar-out-desktop-menu">
          <nav className="nav-bar-out-links1">
            <Link
              to="/about-us-out"
              className="nav-bar-out-link11 thq-link thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span  className="nav-bar-out-text15" style={{ color: '#000000', display: 'inline-block' }}>About Us</span>
                </Fragment>
              )}
            </Link>
            <Link
              to="/blogs-out"
              className="nav-bar-out-link21 thq-link thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="nav-bar-out-text17">Blogs</span>
                </Fragment>
              )}
            </Link>
          </nav>
          <div className="nav-bar-out-buttons1">
            <Link
              to="/opportunities-out"
              className="nav-bar-out-action11 thq-button-filled thq-button-animated"
            >
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="nav-bar-out-text21">
                      Find Opportunities
                    </span>
                  </Fragment>
                )}
              </span>
            </Link>
            <Link
              to="/find-volunteers-out"
              className="nav-bar-out-action12 thq-button-filled thq-button-animated"
            >
              <span>
                {props.action11 ?? (
                  <Fragment>
                    <span className="nav-bar-out-text24">Find Volunteers</span>
                  </Fragment>
                )}
              </span>
            </Link>
            <Link
              to="/orgorvol"
              className="nav-bar-out-action21 thq-button-outline thq-button-animated"
            >
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="nav-bar-out-text19">Log in</span>
                  </Fragment>
                )}
              </span>
            </Link>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="nav-bar-out-burger-menu">
          <svg viewBox="0 0 1024 1024" className="nav-bar-out-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="nav-bar-out-mobile-menu">
          <div className="nav-bar-out-nav">
            <div className="nav-bar-out-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="nav-bar-out-logo"
              />
              <div data-thq="thq-close-menu" className="nav-bar-out-close-menu">
                <svg viewBox="0 0 1024 1024" className="nav-bar-out-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="nav-bar-out-links2">
              <a
                href={props.link1Url}
                className="nav-bar-out-link12 thq-link thq-body-small"
              >
                {props.link1 ?? (
                  <Fragment>
                    <span className="nav-bar-out-text15">About Us</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url} className="thq-link thq-body-small">
                {props.link2 ?? (
                  <Fragment>
                    <span className="nav-bar-out-text17">Blogs</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link3Url}
                className="nav-bar-out-link3 thq-link thq-body-small"
              >
                {props.link3 ?? (
                  <Fragment>
                    <span className="nav-bar-out-text16">Link 3</span>
                  </Fragment>
                )}
              </a>
              <div className="nav-bar-out-link4-accordion">
                <div
                  onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                  className="nav-bar-out-trigger"
                >
                  <span className="thq-link thq-body-small">
                    {props.link4 ?? (
                      <Fragment>
                        <span className="nav-bar-out-text26">Link 4</span>
                      </Fragment>
                    )}
                  </span>
                  <div className="nav-bar-out-icon-container">
                    {link5AccordionOpen && (
                      <div className="nav-bar-out-container2">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="nav-bar-out-icon14"
                        >
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                    )}
                    {!link5AccordionOpen && (
                      <div className="nav-bar-out-container3">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="nav-bar-out-icon16"
                        >
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5AccordionOpen && (
                  <div className="nav-bar-out-container4">
                    <a href={props.linkUrlPage1}>
                      <div className="nav-bar-out-menu-item1">
                        <img
                          alt={props.page1ImageAlt}
                          src={props.page1ImageSrc}
                          className="nav-bar-out-page1-image1"
                        />
                        <div className="nav-bar-out-content1">
                          <span className="nav-bar-out-page11 thq-body-large">
                            {props.page1 ?? (
                              <Fragment>
                                <span className="nav-bar-out-text27">
                                  Page One
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page1Description ?? (
                              <Fragment>
                                <span className="nav-bar-out-text22">
                                  Page One Description
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage2}>
                      <div className="nav-bar-out-menu-item2">
                        <img
                          alt={props.page2ImageAlt}
                          src={props.page2ImageSrc}
                          className="nav-bar-out-page2-image1"
                        />
                        <div className="nav-bar-out-content2">
                          <span className="nav-bar-out-page21 thq-body-large">
                            {props.page2 ?? (
                              <Fragment>
                                <span className="nav-bar-out-text28">
                                  Page Two
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page2Description ?? (
                              <Fragment>
                                <span className="nav-bar-out-text20">
                                  Page Two Description
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage3}>
                      <div className="nav-bar-out-menu-item3">
                        <img
                          alt={props.page3ImageAlt}
                          src={props.page3ImageSrc}
                          className="nav-bar-out-page3-image1"
                        />
                        <div className="nav-bar-out-content3">
                          <span className="nav-bar-out-page31 thq-body-large">
                            {props.page3 ?? (
                              <Fragment>
                                <span className="nav-bar-out-text23">
                                  Page Three
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page3Description ?? (
                              <Fragment>
                                <span className="nav-bar-out-text18">
                                  Page Three Description
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage4}>
                      <div className="nav-bar-out-menu-item4">
                        <img
                          alt={props.page4ImageAlt}
                          src={props.page4ImageSrc}
                          className="nav-bar-out-page4-image1"
                        />
                        <div className="nav-bar-out-content4">
                          <span className="nav-bar-out-page41 thq-body-large">
                            {props.page4 ?? (
                              <Fragment>
                                <span className="nav-bar-out-text29">
                                  Page Four
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page4Description ?? (
                              <Fragment>
                                <span className="nav-bar-out-text25">
                                  Page Four Description
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </nav>
            <div className="nav-bar-out-buttons2">
              <button className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="nav-bar-out-text21">
                        Find Opportunities
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="nav-bar-out-text19">Log in</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="nav-bar-out-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="thq-icon-x-small"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-x-small"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="thq-icon-small"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        {link5DropdownVisible && (
          <div className="nav-bar-out-container5 thq-box-shadow">
            <div className="nav-bar-out-link5-menu-list">
              <a href={props.linkUrlPage1}>
                <div className="nav-bar-out-menu-item5">
                  <img
                    alt={props.page1ImageAlt}
                    src={props.page1ImageSrc}
                    className="nav-bar-out-page1-image2 thq-img-ratio-1-1"
                  />
                  <div className="nav-bar-out-content5">
                    <span className="nav-bar-out-page12 thq-body-large">
                      {props.page1 ?? (
                        <Fragment>
                          <span className="nav-bar-out-text27">Page One</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page1Description ?? (
                        <Fragment>
                          <span className="nav-bar-out-text22">
                            Page One Description
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage2}>
                <div className="nav-bar-out-menu-item6">
                  <img
                    alt={props.page2ImageAlt}
                    src={props.page2ImageSrc}
                    className="nav-bar-out-page2-image2 thq-img-ratio-1-1"
                  />
                  <div className="nav-bar-out-content6">
                    <span className="nav-bar-out-page22 thq-body-large">
                      {props.page2 ?? (
                        <Fragment>
                          <span className="nav-bar-out-text28">Page Two</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page2Description ?? (
                        <Fragment>
                          <span className="nav-bar-out-text20">
                            Page Two Description
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage3}>
                <div className="nav-bar-out-menu-item7">
                  <img
                    alt={props.page3ImageAlt}
                    src={props.page3ImageSrc}
                    className="nav-bar-out-page3-image2 thq-img-ratio-1-1"
                  />
                  <div className="nav-bar-out-content7">
                    <span className="nav-bar-out-page32 thq-body-large">
                      {props.page3 ?? (
                        <Fragment>
                          <span className="nav-bar-out-text23">Page Three</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page3Description ?? (
                        <Fragment>
                          <span className="nav-bar-out-text18">
                            Page Three Description
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage4}>
                <div className="nav-bar-out-menu-item8">
                  <img
                    alt={props.page4ImageAlt}
                    src={props.page4ImageSrc}
                    className="nav-bar-out-page4-image2 thq-img-ratio-1-1"
                  />
                  <div className="nav-bar-out-content8">
                    <span className="nav-bar-out-page42 thq-body-large">
                      {props.page4 ?? (
                        <Fragment>
                          <span className="nav-bar-out-text29">Page Four</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page4Description ?? (
                        <Fragment>
                          <span className="nav-bar-out-text25">
                            Page Four Description
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )}
      </header>
      {link5DropdownVisible && (
        <div
          onClick={() => setLink5DropdownVisible(false)}
          className="nav-bar-out-container6"
        ></div>
      )}
    </header>
  )
}

NavBarOut.defaultProps = {
  link1: undefined,
  rootClassName: '',
  link3: undefined,
  linkUrlPage3: 'https://www.teleporthq.io',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  page1ImageAlt: 'image',
  link2: undefined,
  imageSrc: '/reach-volunteering-logo-200h.png',
  page3Description: undefined,
  action2: undefined,
  page3ImageSrc:
    'https://images.unsplash.com/photo-1524448789231-1bb0771e7d45?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=1400',
  link2Url: 'https://www.teleporthq.io',
  page2Description: undefined,
  linkUrlPage2: 'https://www.teleporthq.io',
  page2ImageSrc:
    'https://images.unsplash.com/photo-1618034100983-e1d78be0dc80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=1400',
  link1Url: 'https://www.teleporthq.io',
  action1: undefined,
  page4ImageSrc:
    'https://images.unsplash.com/photo-1605745141160-8892dc674e94?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=1400',
  linkUrlPage4: 'https://www.teleporthq.io',
  page1Description: undefined,
  page3: undefined,
  action11: undefined,
  imageAlt: 'image',
  linkUrlPage1: 'https://www.teleporthq.io',
  page2ImageAlt: 'image',
  page4ImageAlt: 'image',
  page4Description: undefined,
  link4: undefined,
  page1: undefined,
  page3ImageAlt: 'image',
  link3Url: 'https://www.teleporthq.io',
  logoAlt: 'logo',
  page2: undefined,
  page1ImageSrc:
    'https://images.unsplash.com/photo-1514285490982-4130e9aefedb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=1400',
  page4: undefined,
}

NavBarOut.propTypes = {
  link1: PropTypes.element,
  rootClassName: PropTypes.string,
  link3: PropTypes.element,
  linkUrlPage3: PropTypes.string,
  logoSrc: PropTypes.string,
  page1ImageAlt: PropTypes.string,
  link2: PropTypes.element,
  imageSrc: PropTypes.string,
  page3Description: PropTypes.element,
  action2: PropTypes.element,
  page3ImageSrc: PropTypes.string,
  link2Url: PropTypes.string,
  page2Description: PropTypes.element,
  linkUrlPage2: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  link1Url: PropTypes.string,
  action1: PropTypes.element,
  page4ImageSrc: PropTypes.string,
  linkUrlPage4: PropTypes.string,
  page1Description: PropTypes.element,
  page3: PropTypes.element,
  action11: PropTypes.element,
  imageAlt: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  page4ImageAlt: PropTypes.string,
  page4Description: PropTypes.element,
  link4: PropTypes.element,
  page1: PropTypes.element,
  page3ImageAlt: PropTypes.string,
  link3Url: PropTypes.string,
  logoAlt: PropTypes.string,
  page2: PropTypes.element,
  page1ImageSrc: PropTypes.string,
  page4: PropTypes.element,
}

export default NavBarOut
