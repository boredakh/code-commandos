import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import './listingcard.css';

const Listingcard = (props) => {
  const history = useHistory(); // Initialize useHistory

  // Function to handle the "View Listing" button click
  const handleViewListing = () => {
    history.push(`/listinginvol/${props.listingId}`); // Redirect to the view listing page
  };

  // Function to handle the "Edit Listing" button click
  const handleEditListing = () => {
    history.push(`/editlisting/${props.listingId}`); // Redirect to the edit listing page
  };

  return (
    <div
      className={`listingcard-card thq-flex-column thq-card ${props.rootClassName}`}
    >
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="listingcard-text8">(Job title)</span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="listingcard-text4">(commitment)</span>
          </Fragment>
        )}
      </span>
      <span className="listingcard-text3 thq-body-small">
        {props.feature1Description ?? (
          <Fragment>
            <span className="listingcard-text6">(Description mini)</span>
          </Fragment>
        )}
      </span>
      <div className="listingcard-actions thq-flex-row">
        <button
          className="listingcard-button1 thq-button-filled"
          onClick={handleViewListing} // Add onClick handler
        >
          <span className="listingcard-action11 thq-body-small">
            {props.mainAction ?? (
              <Fragment>
                <span className="listingcard-text7">View Listing</span>
              </Fragment>
            )}
          </span>
        </button>
        <button
          className="listingcard-button2 thq-button-filled"
          onClick={handleEditListing} // Add onClick handler
        >
          <span className="listingcard-action12 thq-body-small">
            {props.mainAction1 ?? (
              <Fragment>
                <span className="listingcard-text5">Edit Listing</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

Listingcard.defaultProps = {
  rootClassName: '',
  text1: undefined,
  mainAction1: undefined,
  feature1Description: undefined,
  mainAction: undefined,
  feature1Title: undefined,
  listingId: '', // Add listingId to defaultProps
};

Listingcard.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.element,
  mainAction1: PropTypes.element,
  feature1Description: PropTypes.element,
  mainAction: PropTypes.element,
  feature1Title: PropTypes.element,
  listingId: PropTypes.string.isRequired, // Ensure listingId is required
};

export default Listingcard;