import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './applicantcard.css';

const Applicantcard = (props) => {
  const renderStars = (rating) => {
    if (typeof rating !== 'number') return rating;
    
    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} style={{ color: 'gold' }}>★</span>
      );
    }
  
    if (hasHalfStar) {
      stars.push(
        <span key="half" style={{ color: 'gold', position: 'relative' }}>
          ★
          <span style={{
            position: 'absolute',
            left: '50%',
            width: '50%',
            overflow: 'hidden',
            color: 'gray',
          }}>★</span>
        </span>
      );
    }
  
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} style={{ color: 'gray' }}>☆</span>
      );
    }
  
    return stars;
  };

  return (
    <div className={`applicantcard-card thq-flex-column thq-card ${props.rootClassName}`}>
      {/* Applicant Header - UNCHANGED */}
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="applicantcard-text17">
              {props.first_name} {props.last_name}
            </span>
          </Fragment>
        )}
      </h2>

      {/* Average Rating - UNCHANGED */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title"></span>
        <span className="applicantcard-text18">
          {renderStars(props.averageRating)}
        </span>
      </div>

      {/* Leave Review Button - UNCHANGED */}
      <div className="applicantcard-actions thq-flex-row">
        <Link
          to={`/applicant/${props.applicationId}/review`}
          className="applicantcard-button thq-button-filled"
        >
          <span className="applicantcard-action1 thq-body-small">
            Leave a Review
          </span>
        </Link>
      </div>

      {/* ALL ORIGINAL FIELDS - COMPLETELY UNCHANGED */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Experience:</span>
        <span className="applicantcard-text18">{props.text1}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Age Group:</span>
        <span className="applicantcard-text22">{props.text13}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">City/County:</span>
        <span className="applicantcard-text21">{props.text12}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Applied At:</span>
        <span className="applicantcard-text20">{props.text11}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Message:</span>
        <span className="applicantcard-text19">{props.feature1Description}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Email:</span>
        <span className="applicantcard-text23">{props.feature1Description1}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Gender:</span>
        <span className="applicantcard-text24">{props.text14}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Telephone:</span>
        <span className="applicantcard-text25">{props.text15}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Volunteer Interest:</span>
        <span className="applicantcard-text26">{props.text16}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Previous Volunteer:</span>
        <span className="applicantcard-text27">{props.text17}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Previous Work Details:</span>
        <span className="applicantcard-text28">{props.text18}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Skills and Experience:</span>
        <span className="applicantcard-text29">{props.text19}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Availability Days:</span>
        <span className="applicantcard-text30">{props.text20}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Availability Duration:</span>
        <span className="applicantcard-text31">{props.text21}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Languages:</span>
        <span className="applicantcard-text32">{props.text22}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Referee Name:</span>
        <span className="applicantcard-text33">{props.text23}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Referee Email:</span>
        <span className="applicantcard-text34">{props.text24}</span>
      </div>
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Referee Relationship:</span>
        <span className="applicantcard-text35">{props.text25}</span>
      </div>

      {/* NEW REVIEWS SECTION - ONLY ADDITION */}
      <div className="applicantcard-reviews-section">
        <h3>Reviews</h3>
        {props.reviews?.length > 0 ? (
          props.reviews.map((review, index) => (
            <div key={index} className="applicantcard-review">
              <div className="applicantcard-review-rating">
                {renderStars(review.rating)}
                <span className="applicantcard-review-date">
                  {new Date(review.created_at).toLocaleDateString()}
                </span>
              </div>
              {review.comment && (
                <div className="applicantcard-review-comment">
                  "{review.comment}"
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="applicantcard-no-reviews">
            No reviews yet
          </div>
        )}
      </div>

      {/* Return Button - UNCHANGED */}
      <div className="applicantcard-actions thq-flex-row">
        <Link
          to="/find-volunteers-in-org"
          className="applicantcard-button thq-button-filled"
        >
          <span className="applicantcard-action1 thq-body-small">
            {props.mainAction1 ?? (
              <Fragment>
                <span className="applicantcard-text36">Return</span>
              </Fragment>
            )}
          </span>
        </Link>
      </div>
    </div>
  );
};

// DEFAULT PROPS - WITH NEW REVIEWS PROP ADDED
Applicantcard.defaultProps = {
  rootClassName: '',
  feature1Title: undefined,
  text1: undefined,
  feature1Description: undefined,
  text11: undefined,
  text12: undefined,
  text13: undefined,
  feature1Description1: undefined,
  mainAction1: undefined,
  text14: undefined,
  text15: undefined,
  text16: undefined,
  text17: undefined,
  text18: undefined,
  text19: undefined,
  text20: undefined,
  text21: undefined,
  text22: undefined,
  text23: undefined,
  text24: undefined,
  text25: undefined,
  averageRating: 'No reviews yet',
  applicationId: '',
  reviews: [], // NEW DEFAULT PROP
};

// PROPTYPES - WITH NEW REVIEWS PROP ADDED
Applicantcard.propTypes = {
  // ... all existing propTypes remain exactly the same ...
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string,
      created_at: PropTypes.string.isRequired
    })
  ),
};

export default Applicantcard;