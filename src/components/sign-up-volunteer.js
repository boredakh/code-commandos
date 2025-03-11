import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { supabase } from './supabaseclient'; // Ensure this path is correct
import './sign-up-volunteer.css';

const SignUpVolunteer = (props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    cityCounty: '',
    experience: 'No experience',
    ageGroup: 'Under 18',
    gender: 'male',
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
            role: 'volunteer', // Add role to app_metadata
          },
        },
      });

      if (authError) {
        console.error('Auth Error:', authError); // Debug: Log auth error
        throw authError;
      }

      console.log('Auth Data:', authData); // Debug: Log auth data

      // Step 2: Insert additional user data into the `users_vol` table
      const { data: userData, error: userError } = await supabase
        .from('users_vol')
        .insert([
          {
            id: authData.user.id, // Use the authenticated user's ID
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            username: formData.username,
            city_county: formData.cityCounty,
            experience: formData.experience,
            age_group: formData.ageGroup,
            gender: formData.gender,
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
    <div className="sign-up-volunteer-container1">
      <div className="sign-up-volunteer-max-width thq-section-max-width">
        <div className="sign-up-volunteer-form-root thq-section-padding">
          <div className="sign-up-volunteer-form1">
            <div className="sign-up-volunteer-title-root">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="sign-up-volunteer-text32">
                      Welcome to ReachCoSec
                    </span>
                  </Fragment>
                )}
              </h2>
              <div className="sign-up-volunteer-have-an-account-login1">
                <Link to="/sign-in" className="sign-up-volunteer-navlink">
                  <p className="sign-up-volunteer-text11 thq-body-large">
                    Already have an account? Sign in
                  </p>
                </Link>
              </div>
            </div>
            <form className="sign-up-volunteer-form2" onSubmit={handleSubmit}>
              <div className="sign-up-volunteer-first-name">
                <label htmlFor="firstName" className="thq-body-large">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="sign-up-volunteer-textinput1 thq-body-large thq-input"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-volunteer-last-name">
                <label htmlFor="lastName" className="thq-body-large">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="sign-up-volunteer-textinput2 thq-body-large thq-input"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-volunteer-email">
                <label htmlFor="email" className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="sign-up-volunteer-textinput3 thq-body-large thq-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-volunteer-username">
                <label htmlFor="username" className="thq-body-large">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  required
                  className="sign-up-volunteer-textinput4 thq-body-large thq-input"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-volunteer-password">
                <div className="sign-up-volunteer-textfield">
                  <div className="sign-up-volunteer-container2">
                    <label htmlFor="password" className="thq-body-large">
                      Password
                    </label>
                    <div className="sign-up-volunteer-hide-password">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="sign-up-volunteer-icon1"
                      >
                        <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                      </svg>
                      <span className="thq-body-small">Hide</span>
                    </div>
                  </div>
                  <input
                    type="password"
                    id="password"
                    required
                    className="sign-up-volunteer-textinput5 thq-body-large thq-input"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="sign-up-volunteer-city-county">
                <label htmlFor="cityCounty" className="thq-body-large">
                  City/County
                </label>
                <input
                  type="text"
                  id="cityCounty"
                  required
                  className="sign-up-volunteer-textinput6 thq-body-large thq-input"
                  value={formData.cityCounty}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-volunteer-experience">
                <div className="sign-up-volunteer-input1">
                  <label htmlFor="experience" className="thq-body-small">
                    Experience
                  </label>
                  <select
                    id="experience"
                    className="thq-select"
                    value={formData.experience}
                    onChange={handleChange}
                  >
                    <option value="No experience">No experience</option>
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1-2 Years">1-2 Years</option>
                    <option value="2-5 Years">2-5 Years</option>
                    <option value="More than 5 years">More than 5 years</option>
                  </select>
                </div>
              </div>
              <div className="sign-up-volunteer-age-group">
                <div className="sign-up-volunteer-input2">
                  <label htmlFor="ageGroup" className="thq-body-small">
                    Age group
                  </label>
                  <select
                    id="ageGroup"
                    className="thq-select"
                    value={formData.ageGroup}
                    onChange={handleChange}
                  >
                    <option value="Under 18">Under 18</option>
                    <option value="18-24">18-24</option>
                    <option value="24-29">24-29</option>
                    <option value="30-39">30-39</option>
                    <option value="40+">40+</option>
                  </select>
                </div>
              </div>
              <div className="sign-up-volunteer-gender">
                <div className="sign-up-volunteer-input3">
                  <label htmlFor="gender" className="thq-body-small">
                    Gender
                  </label>
                  <select
                    id="gender"
                    className="thq-select"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="sign-up-volunteer-container8">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={true}
                  className="thq-checkbox"
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                />
                <label htmlFor="newsletter" className="thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="sign-up-volunteer-text33">
                        I want to receive emails about the product, events, and
                        marketing promotions.
                      </span>
                    </Fragment>
                  )}
                </label>
              </div>
              <div className="sign-up-volunteer-terms-agree">
                <p className="thq-body-large">
                  By creating an account, you agree to the Terms of use and
                  Privacy Policy.
                </p>
              </div>
              <button type="submit" className="sign-up-volunteer-button thq-button-filled" disabled={loading}>
                <span className="sign-up-volunteer-text29 thq-body-small">
                  {loading ? 'Creating account...' : 'Create an account'}
                </span>
              </button>
              {error && (
                <p className="error-message" style={{ color: 'red', marginTop: '10px' }}>
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

SignUpVolunteer.defaultProps = {
  action1: undefined,
  heading1: undefined,
  content1: undefined,
};

SignUpVolunteer.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
};

export default SignUpVolunteer;