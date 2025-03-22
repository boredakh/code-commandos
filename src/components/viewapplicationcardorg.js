import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import './viewapplicationcardorg.css';

const Viewapplicationcardorg = (props) => {
  const history = useHistory(); // Initialize useHistory

  // Function to handle the "View Application" button click
  const handleViewApplication = () => {
    history.push(`/applicant/${props.applicationId}`); // Redirect to the applicant page
  };

  return (
    <div
      className={`viewapplicationcardorg-card thq-flex-column thq-card ${props.rootClassName}`}
    >
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="viewapplicationcardorg-text6">
              {props.first_name} {props.last_name}
            </span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="viewapplicationcardorg-text8">{props.age_group}</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text11 ?? (
          <Fragment>
            <span className="viewapplicationcardorg-text9">{props.city_county || 'N/A'}</span>
          </Fragment>
        )}
      </span>
      <span className="viewapplicationcardorg-text4 thq-body-small">
        {props.feature1Description ?? (
          <Fragment>
            <span className="viewapplicationcardorg-text5">{props.experience}</span>
          </Fragment>
        )}
      </span>
      <div className="viewapplicationcardorg-actions thq-flex-row">
        <button
          className="viewapplicationcardorg-button thq-button-filled"
          onClick={handleViewApplication} // Add onClick handler
        >
          <span className="viewapplicationcardorg-action1 thq-body-small">
            {props.mainAction ?? (
              <Fragment>
                <span className="viewapplicationcardorg-text7">
                  View Application
                </span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

Viewapplicationcardorg.defaultProps = {
  feature1Description: undefined,
  feature1Title: undefined,
  rootClassName: '',
  mainAction: undefined,
  text1: undefined,
  text11: undefined,
  applicationId: '', // Add applicationId to defaultProps
};

Viewapplicationcardorg.propTypes = {
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
  rootClassName: PropTypes.string,
  mainAction: PropTypes.element,
  text1: PropTypes.element,
  text11: PropTypes.element,
  applicationId: PropTypes.string.isRequired, // Ensure applicationId is required
};

export default Viewapplicationcardorg;