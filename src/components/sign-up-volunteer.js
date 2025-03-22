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
    telephone: '',
    volunteerInterest: '',
    previousVolunteer: 'No',
    previousWorkDetails: '',
    skillsExperience: '',
    availabilityDays: [],
    availabilityDuration: '3 months',
    languages: '',
    refereeName: '',
    refereeEmail: '',
    refereeRelationship: '',
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

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: checked ? 'Yes' : 'No',
    }));
  };

  const handleAvailabilityDaysChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const availabilityDays = checked
        ? [...prevState.availabilityDays, value]
        : prevState.availabilityDays.filter((day) => day !== value);
      return {
        ...prevState,
        availabilityDays,
      };
    });
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
            telephone: formData.telephone,
            volunteer_interest: formData.volunteerInterest,
            previous_volunteer: formData.previousVolunteer,
            previous_work_details: formData.previousWorkDetails,
            skills_experience: formData.skillsExperience,
            availability_days: formData.availabilityDays.join(', '),
            availability_duration: formData.availabilityDuration,
            languages: formData.languages,
            referee_name: formData.refereeName,
            referee_email: formData.refereeEmail,
            referee_relationship: formData.refereeRelationship,
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
                <br />
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
                <br />
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
                <br />
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
                <br />
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
                <label htmlFor="password" className="thq-body-large">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  id="password"
                  required
                  className="sign-up-volunteer-textinput5 thq-body-large thq-input"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-volunteer-city-county">
                <label htmlFor="cityCounty" className="thq-body-large">
                  City/County
                </label>
                <br />
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
                <label htmlFor="experience" className="thq-body-large">
                  Experience
                </label>
                <br />
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
              <div className="sign-up-volunteer-age-group">
                <label htmlFor="ageGroup" className="thq-body-large">
                  Age group
                </label>
                <br />
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
              <div className="sign-up-volunteer-gender">
                <label htmlFor="gender" className="thq-body-large">
                  Gender
                </label>
                <br />
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
              <div className="sign-up-volunteer-telephone">
                <label htmlFor="telephone" className="thq-body-large">
                  Telephone
                </label>
                <br />
                <input
                  type="tel"
                  id="telephone"
                  required
                  className="sign-up-volunteer-textinput7 thq-body-large thq-input"
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-volunteer-volunteer-interest">
                <label htmlFor="volunteerInterest" className="thq-body-large">
                  Volunteer Interest
                </label>
                <br />
                <input
                  type="text"
                  id="volunteerInterest"
                  required
                  className="sign-up-volunteer-textinput8 thq-body-large thq-input"
                  value={formData.volunteerInterest}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-volunteer-previous-volunteer">
                <label htmlFor="previousVolunteer" className="thq-body-large">
                  Have you done voluntary work before?
                </label>
                <br />
                <div>
                  <label>
                    <input
                      type="checkbox"
                      id="previousVolunteer"
                      checked={formData.previousVolunteer === 'Yes'}
                      onChange={handleCheckboxChange}
                    />
                    Yes
                  </label>
                </div>
              </div>
              <div className="sign-up-volunteer-previous-work-details">
                <label htmlFor="previousWorkDetails" className="thq-body-large">
                  If yes, please give details
                </label>
                <br />
                <textarea
                  id="previousWorkDetails"
                  className="sign-up-volunteer-textarea1 thq-body-large thq-input"
                  value={formData.previousWorkDetails}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-volunteer-skills-experience">
                <label htmlFor="skillsExperience" className="thq-body-large">
                  Skills and Experience
                </label>
                <br />
                <textarea
                  id="skillsExperience"
                  className="sign-up-volunteer-textarea2 thq-body-large thq-input"
                  value={formData.skillsExperience}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-volunteer-availability-days">
                <label className="thq-body-large">
                  Availability Days
                </label>
                <br />
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day}>
                    <label>
                      <input
                        type="checkbox"
                        value={day}
                        checked={formData.availabilityDays.includes(day)}
                        onChange={handleAvailabilityDaysChange}
                      />
                      {day}
                    </label>
                  </div>
                ))}
              </div>
              <div className="sign-up-volunteer-availability-duration">
                <label htmlFor="availabilityDuration" className="thq-body-large">
                  How long will you be available as a volunteer?
                </label>
                <br />
                <select
                  id="availabilityDuration"
                  className="thq-select"
                  value={formData.availabilityDuration}
                  onChange={handleChange}
                >
                  <option value="3 months">3 months</option>
                  <option value="6 months">6 months</option>
                  <option value="9 months">9 months</option>
                  <option value="12 months or longer">12 months or longer</option>
                </select>
              </div>
              <div className="sign-up-volunteer-languages">
                <label htmlFor="languages" className="thq-body-large">
                  Do you speak other languages?
                </label>
                <br />
                <input
                  type="text"
                  id="languages"
                  className="sign-up-volunteer-textinput9 thq-body-large thq-input"
                  value={formData.languages}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-volunteer-referee-name">
                <label htmlFor="refereeName" className="thq-body-large">
                  Referee Name
                </label>
                <br />
                <input
                  type="text"
                  id="refereeName"
                  className="sign-up-volunteer-textinput10 thq-body-large thq-input"
                  value={formData.refereeName}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-volunteer-referee-email">
                <label htmlFor="refereeEmail" className="thq-body-large">
                  Referee Email
                </label>
                <br />
                <input
                  type="email"
                  id="refereeEmail"
                  className="sign-up-volunteer-textinput11 thq-body-large thq-input"
                  value={formData.refereeEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="sign-up-volunteer-referee-relationship">
                <label htmlFor="refereeRelationship" className="thq-body-large">
                  Referee Relationship
                </label>
                <br />
                <input
                  type="text"
                  id="refereeRelationship"
                  className="sign-up-volunteer-textinput12 thq-body-large thq-input"
                  value={formData.refereeRelationship}
                  onChange={handleChange}
                />
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