import React, { useState, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Import useHistory
import { supabase } from './supabaseclient'; // Import Supabase client
import PropTypes from 'prop-types';
import './nav-bar-in.css';

const NavBarIn = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false);
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false);
  const history = useHistory(); // Initialize useHistory

  // Function to handle sign-out
  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut(); // Sign out using Supabase
      if (error) {
        throw error;
      }
      // Redirect to the home page after signing out
      history.push('/');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <header className={`nav-bar-in-container1 ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="nav-bar-in-navbar-interactive">
        <Link to="/homein" className="nav-bar-in-navlink1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="nav-bar-in-image1"
          />
        </Link>
        <div data-thq="thq-navbar-nav" className="nav-bar-in-desktop-menu">
          <nav className="nav-bar-in-links1">
            <Link
              to="/about-us-in"
              className="nav-bar-in-link11 thq-link thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="nav-bar-in-text30">About Us</span>
                </Fragment>
              )}
            </Link>
            <Link
              to="/blogs-in"
              className="nav-bar-in-link21 thq-link thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="nav-bar-in-text21">Blogs</span>
                </Fragment>
              )}
            </Link>
          </nav>
          <div className="nav-bar-in-buttons1">
            <Link
              to="/opportunities-in"
              className="nav-bar-in-action11 thq-button-filled thq-button-animated"
            >
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="nav-bar-in-text18">
                      Find Opportunities
                    </span>
                  </Fragment>
                )}
              </span>
            </Link>
            <Link
              to="/find-volunteers-out"
              className="nav-bar-in-action12 thq-button-filled thq-button-animated"
            >
              <span>
                {props.action11 ?? (
                  <Fragment>
                    <span className="nav-bar-in-text19">Find Volunteers</span>
                  </Fragment>
                )}
              </span>
            </Link>
            <div
              data-thq="thq-dropdown"
              className="nav-bar-in-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="nav-bar-in-dropdown-toggle1"
              >
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  className="nav-bar-in-image2"
                />
                <div
                  data-thq="thq-dropdown-arrow"
                  className="nav-bar-in-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="nav-bar-in-icon10">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="nav-bar-in-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-in-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-bar-in-dropdown-toggle2"
                  >
                    <button type="button" className="nav-bar-in-button button">
                      <Link
                        to="/dashboard-volunteer-in"
                        className="nav-bar-in-navlink2"
                      >
                        {props.button1 ?? (
                          <Fragment>
                            <span className="nav-bar-in-text28">Profile</span>
                          </Fragment>
                        )}
                      </Link>
                    </button>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="nav-bar-in-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="nav-bar-in-dropdown-toggle3"
                  >
                    <button onClick={handleSignOut} className="nav-bar-in-navlink3 button">
                      <span>Sign Out</span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="nav-bar-in-burger-menu">
          <svg viewBox="0 0 1024 1024" className="nav-bar-in-icon12">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="nav-bar-in-mobile-menu">
          <div className="nav-bar-in-nav">
            <div className="nav-bar-in-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="nav-bar-in-logo"
              />
              <div data-thq="thq-close-menu" className="nav-bar-in-close-menu">
                <svg viewBox="0 0 1024 1024" className="nav-bar-in-icon14">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="nav-bar-in-links2">
              <a
                href={props.link1Url}
                className="nav-bar-in-link12 thq-link thq-body-small"
              >
                {props.link1 ?? (
                  <Fragment>
                    <span className="nav-bar-in-text30">About Us</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url} className="thq-link thq-body-small">
                {props.link2 ?? (
                  <Fragment>
                    <span className="nav-bar-in-text21">Blogs</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link3Url}
                className="nav-bar-in-link3 thq-link thq-body-small"
              >
                {props.link3 ?? (
                  <Fragment>
                    <span className="nav-bar-in-text16">Link 3</span>
                  </Fragment>
                )}
              </a>
              <div className="nav-bar-in-link4-accordion">
                <div
                  onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                  className="nav-bar-in-trigger"
                >
                  <span className="thq-link thq-body-small">
                    {props.link4 ?? (
                      <Fragment>
                        <span className="nav-bar-in-text23">Link 4</span>
                      </Fragment>
                    )}
                  </span>
                  <div className="nav-bar-in-icon-container">
                    {link5AccordionOpen && (
                      <div className="nav-bar-in-container2">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="nav-bar-in-icon16"
                        >
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                    )}
                    {!link5AccordionOpen && (
                      <div className="nav-bar-in-container3">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="nav-bar-in-icon18"
                        >
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5AccordionOpen && (
                  <div className="nav-bar-in-container4">
                    <a href={props.linkUrlPage1}>
                      <div className="nav-bar-in-menu-item1">
                        <img
                          alt={props.page1ImageAlt}
                          src={props.page1ImageSrc}
                          className="nav-bar-in-page1-image1"
                        />
                        <div className="nav-bar-in-content1">
                          <span className="nav-bar-in-page11 thq-body-large">
                            {props.page1 ?? (
                              <Fragment>
                                <span className="nav-bar-in-text27">
                                  Page One
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page1Description ?? (
                              <Fragment>
                                <span className="nav-bar-in-text25">
                                  Page One Description
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage2}>
                      <div className="nav-bar-in-menu-item2">
                        <img
                          alt={props.page2ImageAlt}
                          src={props.page2ImageSrc}
                          className="nav-bar-in-page2-image1"
                        />
                        <div className="nav-bar-in-content2">
                          <span className="nav-bar-in-page21 thq-body-large">
                            {props.page2 ?? (
                              <Fragment>
                                <span className="nav-bar-in-text17">
                                  Page Two
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page2Description ?? (
                              <Fragment>
                                <span className="nav-bar-in-text26">
                                  Page Two Description
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage3}>
                      <div className="nav-bar-in-menu-item3">
                        <img
                          alt={props.page3ImageAlt}
                          src={props.page3ImageSrc}
                          className="nav-bar-in-page3-image1"
                        />
                        <div className="nav-bar-in-content3">
                          <span className="nav-bar-in-page31 thq-body-large">
                            {props.page3 ?? (
                              <Fragment>
                                <span className="nav-bar-in-text20">
                                  Page Three
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page3Description ?? (
                              <Fragment>
                                <span className="nav-bar-in-text15">
                                  Page Three Description
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage4}>
                      <div className="nav-bar-in-menu-item4">
                        <img
                          alt={props.page4ImageAlt}
                          src={props.page4ImageSrc}
                          className="nav-bar-in-page4-image1"
                        />
                        <div className="nav-bar-in-content4">
                          <span className="nav-bar-in-page41 thq-body-large">
                            {props.page4 ?? (
                              <Fragment>
                                <span className="nav-bar-in-text22">
                                  Page Four
                                </span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page4Description ?? (
                              <Fragment>
                                <span className="nav-bar-in-text24">
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
            <div className="nav-bar-in-buttons2">
              <button className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="nav-bar-in-text18">
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
                      <span className="nav-bar-in-text29">Log in</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="nav-bar-in-icon-group">
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
          <div className="nav-bar-in-container5 thq-box-shadow">
            <div className="nav-bar-in-link5-menu-list">
              <a href={props.linkUrlPage1}>
                <div className="nav-bar-in-menu-item5">
                  <img
                    alt={props.page1ImageAlt}
                    src={props.page1ImageSrc}
                    className="nav-bar-in-page1-image2 thq-img-ratio-1-1"
                  />
                  <div className="nav-bar-in-content5">
                    <span className="nav-bar-in-page12 thq-body-large">
                      {props.page1 ?? (
                        <Fragment>
                          <span className="nav-bar-in-text27">Page One</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page1Description ?? (
                        <Fragment>
                          <span className="nav-bar-in-text25">
                            Page One Description
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage2}>
                <div className="nav-bar-in-menu-item6">
                  <img
                    alt={props.page2ImageAlt}
                    src={props.page2ImageSrc}
                    className="nav-bar-in-page2-image2 thq-img-ratio-1-1"
                  />
                  <div className="nav-bar-in-content6">
                    <span className="nav-bar-in-page22 thq-body-large">
                      {props.page2 ?? (
                        <Fragment>
                          <span className="nav-bar-in-text17">Page Two</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page2Description ?? (
                        <Fragment>
                          <span className="nav-bar-in-text26">
                            Page Two Description
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage3}>
                <div className="nav-bar-in-menu-item7">
                  <img
                    alt={props.page3ImageAlt}
                    src={props.page3ImageSrc}
                    className="nav-bar-in-page3-image2 thq-img-ratio-1-1"
                  />
                  <div className="nav-bar-in-content7">
                    <span className="nav-bar-in-page32 thq-body-large">
                      {props.page3 ?? (
                        <Fragment>
                          <span className="nav-bar-in-text20">Page Three</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page3Description ?? (
                        <Fragment>
                          <span className="nav-bar-in-text15">
                            Page Three Description
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage4}>
                <div className="nav-bar-in-menu-item8">
                  <img
                    alt={props.page4ImageAlt}
                    src={props.page4ImageSrc}
                    className="nav-bar-in-page4-image2 thq-img-ratio-1-1"
                  />
                  <div className="nav-bar-in-content8">
                    <span className="nav-bar-in-page42 thq-body-large">
                      {props.page4 ?? (
                        <Fragment>
                          <span className="nav-bar-in-text22">Page Four</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page4Description ?? (
                        <Fragment>
                          <span className="nav-bar-in-text24">
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
          className="nav-bar-in-container6"
        ></div>
      )}
    </header>
  );
};

NavBarIn.defaultProps = {
  linkUrlPage4: 'https://www.teleporthq.io',
  imageSrc2: '/6522516-200h.png',
  page3Description: undefined,
  link3: undefined,
  page2: undefined,
  action1: undefined,
  link2Url: 'https://www.teleporthq.io',
  action11: undefined,
  page3: undefined,
  page1ImageAlt: 'image',
  page4ImageSrc:
    'https://images.unsplash.com/photo-1605745141160-8892dc674e94?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=1400',
  rootClassName: '',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link2: undefined,
  linkUrlPage2: 'https://www.teleporthq.io',
  linkUrlPage3: 'https://www.teleporthq.io',
  page2ImageSrc:
    'https://images.unsplash.com/photo-1618034100983-e1d78be0dc80?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxyb3VuZHxlbnwwfHx8fDE3MTYzOTkzNDR8MA&ixlib=rb-4.0.3&w=1400',
  page4ImageAlt: 'image',
  page2ImageAlt: 'image',
  page4: undefined,
  link3Url: 'https://www.teleporthq.io',
  link4: undefined,
  page4Description: undefined,
  page1Description: undefined,
  logoAlt: 'logo',
  page2Description: undefined,
  imageAlt2: 'image',
  imageSrc: '/reach-volunteering-logo-200h.png',
  linkUrlPage1: 'https://www.teleporthq.io',
  page1: undefined,
  button1: undefined,
  action2: undefined,
  link1: undefined,
  page1ImageSrc:
    'https://images.unsplash.com/photo-1514285490982-4130e9aefedb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=1400',
  imageAlt: 'image',
  page3ImageAlt: 'image',
  link1Url: 'https://www.teleporthq.io',
  page3ImageSrc:
    'https://images.unsplash.com/photo-1524448789231-1bb0771e7d45?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHJvdW5kfGVufDB8fHx8MTcxNjM5OTM0NHww&ixlib=rb-4.0.3&w=1400',
};

NavBarIn.propTypes = {
  linkUrlPage4: PropTypes.string,
  imageSrc2: PropTypes.string,
  page3Description: PropTypes.element,
  link3: PropTypes.element,
  page2: PropTypes.element,
  action1: PropTypes.element,
  link2Url: PropTypes.string,
  action11: PropTypes.element,
  page3: PropTypes.element,
  page1ImageAlt: PropTypes.string,
  page4ImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  logoSrc: PropTypes.string,
  link2: PropTypes.element,
  linkUrlPage2: PropTypes.string,
  linkUrlPage3: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  page4ImageAlt: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  page4: PropTypes.element,
  link3Url: PropTypes.string,
  link4: PropTypes.element,
  page4Description: PropTypes.element,
  page1Description: PropTypes.element,
  logoAlt: PropTypes.string,
  page2Description: PropTypes.element,
  imageAlt2: PropTypes.string,
  imageSrc: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  page1: PropTypes.element,
  button1: PropTypes.element,
  action2: PropTypes.element,
  link1: PropTypes.element,
  page1ImageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  page3ImageAlt: PropTypes.string,
  link1Url: PropTypes.string,
  page3ImageSrc: PropTypes.string,
};

export default NavBarIn;