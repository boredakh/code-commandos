import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { supabase } from './supabaseclient'; // Import your Supabase client
import './edit-listing.css';

const EditListing = () => {
  const { listingId } = useParams(); // Get the listingId from the URL
  const history = useHistory(); // Initialize useHistory for navigation
  const [formData, setFormData] = useState({
    job_title: '',
    organisation_name: '',
    postcode: '',
    industry: '',
    commitment: 'Part time',
    listing_description: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the listing details when the component mounts
  useEffect(() => {
    const fetchListing = async () => {
      try {
        const { data, error } = await supabase
          .from('listing_details')
          .select('*')
          .eq('id', listingId)
          .single(); // Fetch a single listing

        if (error) {
          setError(error.message);
        } else {
          setFormData(data); // Populate the form with fetched data
        }
      } catch (err) {
        setError('An unexpected error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [listingId]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from('listing_details')
        .update(formData)
        .eq('id', listingId); // Update the listing with the matching ID

      if (error) {
        setError(error.message);
      } else {
        alert('Listing updated successfully!');
        history.push('/find-volunteers-in-org'); // Redirect to the dashboard or another page
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="edit-listing-card thq-flex-column thq-card">
      <h2 className="thq-heading-2">Edit Listing</h2>
      <form className="edit-listing-form thq-flex-column" onSubmit={handleSubmit}>
        <div className="edit-listing-container1">
          <div className="edit-listing-job-title">
            <label htmlFor="job_title" className="thq-body-small">
              Job Title
            </label>
            <input
              type="text"
              id="job_title"
              value={formData.job_title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="edit-listing-organisation-name">
            <label htmlFor="organisation_name" className="thq-body-small">
              Organisation Name
            </label>
            <input
              type="text"
              id="organisation_name"
              value={formData.organisation_name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="edit-listing-container2">
          <div className="edit-listing-postcode">
            <label htmlFor="postcode" className="thq-body-small">
              Postcode
            </label>
            <input
              type="text"
              id="postcode"
              value={formData.postcode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="edit-listing-phone">
            <label htmlFor="industry" className="thq-body-small">
              Industry
            </label>
            <input
              type="text"
              id="industry"
              value={formData.industry}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="edit-listing-container3">
          <div className="edit-listing-input">
            <label htmlFor="commitment" className="thq-body-small">
              Commitment
            </label>
            <select
              id="commitment"
              value={formData.commitment}
              onChange={handleInputChange}
              required
            >
              <option value="Part time">Part time</option>
              <option value="Full time">Full time</option>
            </select>
          </div>
        </div>
        <div className="edit-listing-listing-description">
          <label htmlFor="listing_description" className="thq-body-small">
            Listing description
          </label>
          <textarea
            id="listing_description"
            value={formData.listing_description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="edit-listing-button1 thq-button-filled">
          Submit Changes
        </button>
        <button
          type="button"
          className="edit-listing-button2 thq-button-filled"
          onClick={() => history.push('/find-volunteers-in-org')} // Redirect to dashboard
        >
          Return
        </button>
      </form>
    </div>
  );
};

export default EditListing;