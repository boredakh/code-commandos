import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { supabase } from './supabaseclient'; // Import Supabase client
import './listingvolin.css';

const Listingvolin = (props) => {
  const { listingId } = props; // Access the listingId prop
  console.log('Listing ID:', listingId); // Debug: Log the listingId

  const handleApply = async () => {
    try {
      // Check if listingId is valid
      if (!listingId || typeof listingId !== 'string') {
        console.error('Invalid listing ID:', listingId);
        alert('Invalid listing ID. Please try again.');
        return;
      }
  
      // Get the current user
      const { data: { user }, error: userError } = await supabase.auth.getUser();
  
      if (userError) {
        console.error('Error fetching user:', userError);
        alert('You must be signed in to apply.');
        return;
      }
  
      if (!user) {
        alert('You must be signed in to apply.');
        return;
      }
  
      console.log('User:', user); // Debug: Log the user object
  
      // Step 1: Fetch the user's details from the `users_vol` table
      const { data: userDetails, error: userDetailsError } = await supabase
        .from('users_vol')
        .select('first_name, last_name, age_group, experience')
        .eq('id', user.id)
        .single();
  
      if (userDetailsError) {
        console.error('Error fetching user details:', userDetailsError);
        console.error('Error Details:', userDetailsError.details); // Debug: Log error details
        throw userDetailsError;
      }
  
      console.log('User Details:', userDetails); // Debug: Log user details
  
      // Step 2: Insert the application data into the `applications` table
      const { data, error } = await supabase
        .from('applications')
        .insert([
          {
            listing_id: listingId, // Ensure this matches the column type in Supabase
            user_id: user.id,
            first_name: userDetails.first_name, // Store first name
            last_name: userDetails.last_name, // Store last name
            user_email: user.email,
            age_group: userDetails.age_group, // Include age group
            experience: userDetails.experience, // Include experience
            applied_at: new Date().toISOString(),
          },
        ]);
  
      if (error) {
        console.error('Insert Error:', error);
        console.error('Error Details:', error.details);
        throw error;
      }
  
      console.log('Application submitted successfully:', data);
      alert('Your application has been submitted!');
    } catch (error) {
      console.error('Sign-up error:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className={`listingvolin-card thq-flex-column thq-card ${props.rootClassName}`}>
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="listingvolin-text16">(Job Title)</span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text121 ?? (
          <Fragment>
            <span className="listingvolin-text17">(Commitment)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="listingvolin-text18">(Organisation)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text12 ?? (
          <Fragment>
            <span className="listingvolin-text19">(Industry)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text11 ?? (
          <Fragment>
            <span className="listingvolin-text20">(Location)</span>
          </Fragment>
        )}
      </span>
      <span className="listingvolin-text15 thq-body-small">
        {props.feature1Description ?? (
          <Fragment>
            <span className="listingvolin-text21">(Description)</span>
          </Fragment>
        )}
      </span>
      <div className="listingvolin-actions thq-flex-row">
        <button className="listingvolin-button thq-button-filled" onClick={handleApply}>
          <span className="listingvolin-action1 thq-body-small">
            {props.mainAction ?? (
              <Fragment>
                <span className="listingvolin-text22">Apply</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

Listingvolin.defaultProps = {
  rootClassName: '',
  feature1Title: undefined,
  text121: undefined,
  text1: undefined,
  text12: undefined,
  text11: undefined,
  feature1Description: undefined,
  mainAction: undefined,
  listingId: '', // Default to an empty string
};

Listingvolin.propTypes = {
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  text121: PropTypes.element,
  text1: PropTypes.element,
  text12: PropTypes.element,
  text11: PropTypes.element,
  feature1Description: PropTypes.element,
  mainAction: PropTypes.element,
  listingId: PropTypes.string.isRequired, // Expect a string
};

export default Listingvolin;