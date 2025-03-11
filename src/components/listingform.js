import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom'; // Use useHistory instead of useNavigate
import { supabase } from './supabaseclient'; // Import your Supabase client
import PropTypes from 'prop-types';
import './listingform.css';

const Listingform = (props) => {
  const [formData, setFormData] = useState({
    job_title: '',
    organisation_name: '',
    postcode: '',
    industry: '',
    commitment: 'Part time',
    listing_description: '',
    created_by: '', // Add created_by to the formData state
  });

  const history = useHistory(); // Initialize useHistory

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form data being submitted:', formData); // Debugging

    try {
      // Get the current authenticated user
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError) {
        console.error('Error fetching user:', userError);
        alert('Failed to fetch user details. Please try again.');
        return;
      }

      if (!user) {
        alert('User not authenticated. Please log in.');
        return;
      }

      // Add the user's ID to the formData
      const updatedFormData = {
        ...formData,
        created_by: user.id, // Add the user's ID to the formData
      };

      console.log('Updated form data with created_by:', updatedFormData); // Debugging

      // Insert the updated form data into the listing_details table
      const { data, error } = await supabase
        .from('listing_details')
        .insert([updatedFormData]);

      if (error) {
        console.error('Error inserting data:', error);
        alert(`Failed to submit the form. Error: ${error.message}`);
      } else {
        console.log('Data inserted successfully:', data);
        alert('Form submitted successfully!');
        setFormData({
          job_title: '',
          organisation_name: '',
          postcode: '',
          industry: '',
          commitment: 'Part time',
          listing_description: '',
          created_by: '', // Reset created_by
        });

        // Redirect to /find-volunteers-in after successful submission
        history.push('/find-volunteers-in');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="listingform-contact1 thq-section-padding">
      <div className="thq-flex-column thq-section-max-width">
        <div className="listingform-section-title thq-flex-column">
          <div className="listingform-content">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="listingform-text18">Listing Details</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <form className="listingform-form thq-flex-column" onSubmit={handleSubmit}>
          <div className="listingform-container1">
            <div className="listingform-job-title">
              <label htmlFor="job_title" className="thq-body-small">
                Job Title
              </label>
              <input
                type="text"
                id="job_title"
                className="thq-input"
                value={formData.job_title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="listingform-organisation-name">
              <label htmlFor="organisation_name" className="thq-body-small">
                Organisation Name
              </label>
              <input
                type="text"
                id="organisation_name"
                className="thq-input"
                value={formData.organisation_name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="listingform-container2">
            <div className="listingform-postcode">
              <label htmlFor="postcode" className="thq-body-small">
                Postcode
              </label>
              <input
                type="text"
                id="postcode"
                className="thq-input"
                value={formData.postcode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="listingform-phone">
              <label htmlFor="industry" className="thq-body-small">
                Industry
              </label>
              <input
                type="text"
                id="industry"
                className="thq-input"
                value={formData.industry}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="listingform-container3">
            <div className="listingform-input">
              <label htmlFor="commitment" className="thq-body-small">
                Commitment
              </label>
              <select
                id="commitment"
                className="thq-select"
                value={formData.commitment}
                onChange={handleInputChange}
                required
              >
                <option value="Part time">Part time</option>
                <option value="Full time">Full time</option>
              </select>
            </div>
          </div>
          <div className="listingform-listing-description">
            <label htmlFor="listing_description" className="thq-body-small">
              Listing description
            </label>
            <textarea
              id="listing_description"
              rows="3"
              placeholder="Enter your message"
              className="thq-input listingform-textarea"
              value={formData.listing_description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="listingform-checkbox1">
            <input
              type="checkbox"
              id="contact-form-5-check"
              checked={true}
              required
              className="thq-checkbox"
            />
            <label htmlFor="contact-form-5-check" className="thq-body-small">
              I accept the Terms
            </label>
          </div>
          <button type="submit" className="listingform-button thq-button-filled">
            <span className="thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span className="listingform-text19">Submit</span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

Listingform.defaultProps = {
  heading1: undefined,
  action: undefined,
};

Listingform.propTypes = {
  heading1: PropTypes.element,
  action: PropTypes.element,
};

export default Listingform;