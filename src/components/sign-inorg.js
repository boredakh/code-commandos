import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Import useHistory
import PropTypes from 'prop-types';
import { supabase } from './supabaseclient'; // Import Supabase client
import './sign-inorg.css';

const SignInorg = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory(); // Initialize useHistory

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Step 1: Sign in the user with Supabase
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      // Step 2: Fetch the user's profile to check their role
      const { data: userData, error: userError } = await supabase.auth.getUser();

      if (userError) throw userError;

      // Step 3: Check the role in user_metadata
      const role = userData.user?.user_metadata?.role; // Updated to use user_metadata
      console.log('User Role:', role); // Debug: Log the role

      if (role !== 'organisation') {
        throw new Error('You are not authorized to use this form. Please use the correct sign-in form.');
      }

      // Step 4: Redirect to the organisation dashboard
      history.push('/homeinorg'); // Replace with the organisation dashboard route
    } catch (error) {
      console.error('Sign-in error:', error); // Log the full error object
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`sign-inorg-container1 thq-section-padding ${props.rootClassName}`}>
      <div className="sign-inorg-max-width thq-section-max-width">
        <div className="sign-inorg-form-root">
          <div className="sign-inorg-form1">
            <div className="sign-inorg-title-root">
              <h2 className="thq-heading-2">
                {props.heading11 ?? (
                  <Fragment>
                    <span className="sign-inorg-text20">Sign in As Organisation</span>
                  </Fragment>
                )}
              </h2>
              <div className="sign-inorg-have-an-account-login"></div>
            </div>
            <form className="sign-inorg-form2" onSubmit={handleSignIn}>
              <div className="sign-inorg-email">
                <label htmlFor="thq-sign-in-1-email" className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-in-1-email"
                  required
                  placeholder="Email address"
                  className="sign-inorg-textinput1 thq-body-large thq-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="sign-inorg-password">
                <div className="sign-inorg-container2">
                  <label htmlFor="thq-sign-in-1-password" className="thq-body-large">
                    Password
                  </label>
                  <div className="sign-inorg-hide-password">
                    <svg viewBox="0 0 1024 1024" className="sign-inorg-icon1">
                      <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                    </svg>
                    <span className="thq-body-small">Hide</span>
                  </div>
                </div>
                <input
                  type="password"
                  id="thq-sign-in-1-password"
                  required
                  placeholder="Password"
                  className="sign-inorg-textinput2 thq-body-large thq-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="sign-inorg-error">{error}</p>}
              <div className="sign-inorg-container3">
                <div className="sign-inorg-container4">
                  <button
                    type="submit"
                    className="sign-inorg-button1 thq-button-filled"
                    disabled={loading}
                  >
                    <span className="sign-inorg-text14 thq-body-small">
                      {props.action11 ?? (
                        <Fragment>
                          <span className="sign-inorg-text19">
                            {loading ? 'Signing in...' : 'Sign in'}
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <div className="sign-inorg-terms-agree">
                    <p className="thq-body-large">
                      By continuing, you agree to the Terms of use and Privacy Policy.
                    </p>
                  </div>
                </div>
                <div className="sign-inorg-container5">
                  <a
                    href="https://teleporthq.io/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="sign-inorg-link1 thq-body-small"
                  >
                    Issues with Sign in
                  </a>
                  <a
                    href="https://teleporthq.io/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="sign-inorg-link2 thq-body-small"
                  >
                    Forgot password
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="sign-inorg-container6">
          <div className="sign-inorg-divider1">
            <div className="sign-inorg-divider2"></div>
            <span className="thq-body-large">
              {props.content11 ?? (
                <Fragment>
                  <span className="sign-inorg-text21">New to our community</span>
                </Fragment>
              )}
            </span>
            <div className="sign-inorg-divider3"></div>
          </div>
          <Link
            to="/create-account"
            className="sign-inorg-button2 thq-button-outline"
          >
            <span className="sign-inorg-text17 thq-body-small">
              {props.action21 ?? (
                <Fragment>
                  <span className="sign-inorg-text18">Create an account</span>
                </Fragment>
              )}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

SignInorg.defaultProps = {
  action21: undefined,
  action11: undefined,
  heading11: undefined,
  content11: undefined,
  rootClassName: '',
};

SignInorg.propTypes = {
  action21: PropTypes.element,
  action11: PropTypes.element,
  heading11: PropTypes.element,
  content11: PropTypes.element,
  rootClassName: PropTypes.string,
};

export default SignInorg;