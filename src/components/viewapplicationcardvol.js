import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link
import './viewapplicationcardvol.css';

const Viewapplicationcardvol = (props) => {
  return (
    <div
      className={`viewapplicationcardvol-card thq-flex-column thq-card ${props.rootClassName}`}
    >
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="viewapplicationcardvol-text5">(Job Title)</span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="viewapplicationcardvol-text6">(Organisation)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text11 ?? (
          <Fragment>
            <span className="viewapplicationcardvol-text7">(Location)</span>
          </Fragment>
        )}
      </span>
      <span className="viewapplicationcardvol-text4 thq-body-small">
        {props.feature1Description ?? (
          <Fragment>
            <span className="viewapplicationcardvol-text8">
              (Description mini)
            </span>
          </Fragment>
        )}
      </span>
      <div className="viewapplicationcardvol-actions thq-flex-row">
        <Link to={`/listinginvol/${props.listingId}`}> {/* Link to the role's page */}
          <button className="viewapplicationcardvol-button thq-button-filled">
            <span className="viewapplicationcardvol-action1 thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="viewapplicationcardvol-text9">View Role</span>
                </Fragment>
              )}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

Viewapplicationcardvol.defaultProps = {
  rootClassName: '',
  feature1Title: undefined,
  text1: undefined,
  text11: undefined,
  feature1Description: undefined,
  mainAction: undefined,
  listingId: '', // Add listingId to defaultProps
};

Viewapplicationcardvol.propTypes = {
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  text1: PropTypes.element,
  text11: PropTypes.element,
  feature1Description: PropTypes.element,
  mainAction: PropTypes.element,
  listingId: PropTypes.string.isRequired, // Ensure listingId is required
};

export default Viewapplicationcardvol;