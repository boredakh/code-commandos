import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { supabase } from './supabaseclient'; // Ensure this path is correct
import './sign-up-org.css';

const SignUpOrg = (props) => {
  const [formData, setFormData] = useState({
    organisationName: '',
    industry: '',
    email: '',
    username: '',
    password: '',
    cityCounty: '',
    postcode: '',
    address: '',
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log('Form Data:', formData); // Debug: Log form data

      // Step 1: Sign up the user with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            role: 'organisation', // Add role to app_metadata
          },
        },
      });

      if (authError) {
        console.error('Auth Error:', authError); // Debug: Log auth error
        throw authError;
      }

      console.log('Auth Data:', authData); // Debug: Log auth data

      // Step 2: Insert additional user data into the `users_org` table
      const { data: userData, error: userError } = await supabase
        .from('users_org')
        .insert([
          {
            id: authData.user.id, // Use the authenticated user's ID
            email: formData.email, // Include the email field
            organisation_name: formData.organisationName,
            industry: formData.industry,
            username: formData.username,
            city_county: formData.cityCounty,
            postcode: formData.postcode,
            address: formData.address,
          },
        ]);

      if (userError) {
        console.error('User Data Error:', userError); // Debug: Log user data error
        console.error('Error Details:', userError.details); // Debug: Log error details
        throw userError;
      }

      console.log('User Data:', userData); // Debug: Log user data

      // Step 3: Redirect to the verify-email page after successful sign-up
      history.push('/verify-email');
    } catch (error) {
      console.error('Sign-up error:', error); // Debug: Log the full error object
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`sign-up-org-container1 ${props.rootClassName}`}>
      <div className="sign-up-org-max-width thq-section-max-width">
        <div className="sign-up-org-form-root thq-section-padding">
          <div className="sign-up-org-form1">
            <div className="sign-up-org-title-root">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="sign-up-org-text30">
                      Welcome to ReachCoSec
                    </span>
                  </Fragment>
                )}
              </h2>
              <div className="sign-up-org-have-an-account-login1">
                <Link to="/sign-in" className="sign-up-org-navlink1">
                  <p className="sign-up-org-text11 thq-body-large">
                    Already have an account? Sign in
                  </p>
                </Link>
              </div>
            </div>
            <form className="sign-up-org-form2" onSubmit={handleSubmit}>
              <div className="sign-up-org-organisationname">
                <label htmlFor="organisationName" className="thq-body-large">
                  Organisation Name
                </label>
                <input
                  type="text"
                  id="organisationName"
                  required={true}
                  className="sign-up-org-textinput1 thq-body-large thq-input"
                  value={formData.organisationName}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-org-industry">
                <label htmlFor="industry" className="thq-body-large">
                  Industry
                </label>
                <input
                  type="text"
                  id="industry"
                  required={true}
                  className="sign-up-org-textinput2 thq-body-large thq-input"
                  value={formData.industry}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-org-email">
                <label htmlFor="email" className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required={true}
                  className="sign-up-org-textinput3 thq-body-large thq-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-org-username">
                <label htmlFor="username" className="thq-body-large">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  required={true}
                  className="sign-up-org-textinput4 thq-body-large thq-input"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-org-password">
                <label htmlFor="password" className="thq-body-large">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required={true}
                  className="sign-up-org-textinput5 thq-body-large thq-input"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-org-city-county">
                <label htmlFor="cityCounty" className="thq-body-large">
                  City/County
                </label>
                <input
                  type="text"
                  id="cityCounty"
                  required={true}
                  className="sign-up-org-textinput6 thq-body-large thq-input"
                  value={formData.cityCounty}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-org-postcode">
                <label htmlFor="postcode" className="thq-body-large">
                  Postcode
                </label>
                <input
                  type="text"
                  id="postcode"
                  required={true}
                  className="sign-up-org-textinput7 thq-body-large thq-input"
                  value={formData.postcode}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-org-address">
                <label htmlFor="address" className="thq-body-large">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  required={true}
                  className="sign-up-org-textinput8 thq-body-large thq-input"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="sign-up-org-button thq-button-filled"
                disabled={loading}
              >
                <span className="sign-up-org-text28 thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="sign-up-org-text31">
                        {loading ? 'Creating account...' : 'Create an account'}
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              {error && <p className="error-message">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

SignUpOrg.defaultProps = {
  rootClassName: '',
  heading1: undefined,
  action1: undefined,
  content1: undefined,
};

SignUpOrg.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
};

export default SignUpOrg;