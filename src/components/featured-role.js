import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link
import './featured-role.css';

const FeaturedRole = (props) => {
  return (
    <div className={`featured-role-card thq-flex-column thq-card ${props.rootClassName}`}>
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="featured-role-text18">(Job Title)</span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="featured-role-text17">(Organisation Name)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text11 ?? (
          <Fragment>
            <span className="featured-role-text20">(Postcode)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text111 ?? (
          <Fragment>
            <span className="featured-role-text21">(Industry)</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text1111 ?? (
          <Fragment>
            <span className="featured-role-text22">(Commitment)</span>
          </Fragment>
        )}
      </span>
      <span className="featured-role-text15 thq-body-small">
        {props.feature1Description ?? (
          <Fragment>
            <span className="featured-role-text19">(Description Mini)</span>
          </Fragment>
        )}
      </span>
      <div className="featured-role-actions thq-flex-row">
        {/* Use Link to navigate to the Listingvolin page */}
        <Link to={`/listinginvol/${props.listingId}`} className="featured-role-button thq-button-filled">
          <span className="featured-role-action1 thq-body-small">
            {props.mainAction ?? (
              <Fragment>
                <span className="featured-role-text16">View Role</span>
              </Fragment>
            )}
          </span>
        </Link>
      </div>
    </div>
  );
};

FeaturedRole.defaultProps = {
  mainAction: undefined,
  text1: undefined,
  feature1Title: undefined,
  rootClassName: '',
  feature1Description: undefined,
  text11: undefined,
  text111: undefined,
  text1111: undefined,
  listingId: '', // Add listingId to defaultProps
};

FeaturedRole.propTypes = {
  mainAction: PropTypes.element,
  text1: PropTypes.element,
  feature1Title: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1Description: PropTypes.element,
  text11: PropTypes.element,
  text111: PropTypes.element,
  text1111: PropTypes.element,
  listingId: PropTypes.string, // Add listingId to propTypes
};

export default FeaturedRole;