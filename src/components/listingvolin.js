import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { supabase } from './supabaseclient';
import './listingvolin.css';

const Listingvolin = (props) => {
  const { listingId, organisationRating, organisationReviews } = props;

  // Render stars function (unchanged)
  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;
    const numericRating = parseFloat(rating);

    if (isNaN(numericRating)) {
      return <span>{rating}</span>;
    }

    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <span key={i} style={{ color: i <= numericRating ? 'gold' : 'gray' }}>
          ★
        </span>
      );
    }
    return stars;
  };

  // Handle apply function (unchanged)
  const handleApply = async () => {
    // ... (keep your existing handleApply implementation)
  };

  return (
    <div className={`listingvolin-card thq-flex-column thq-card ${props.rootClassName}`}>
      {/* Job Title with label */}
      <div className="listingvolin-field">
        <span className="listingvolin-field-title">Job Title:</span>
        <h2 className="thq-heading-2">
          {props.feature1Title ?? (
            <span className="listingvolin-text16">(Job Title)</span>
          )}
        </h2>
      </div>

      {/* Commitment with label */}
      <div className="listingvolin-field">
        <span className="listingvolin-field-title">Commitment:</span>
        <span className="listingvolin-text17">
          {props.text121 ?? "(Commitment)"}
        </span>
      </div>

      {/* Organisation with label */}
      <div className="listingvolin-field">
        <span className="listingvolin-field-title">Organisation:</span>
        <span className="listingvolin-text18">
          {props.text1 ?? "(Organisation)"}
        </span>
      </div>

      {/* Industry with label */}
      <div className="listingvolin-field">
        <span className="listingvolin-field-title">Industry:</span>
        <span className="listingvolin-text19">
          {props.text12 ?? "(Industry)"}
        </span>
      </div>

      {/* Location with label */}
      <div className="listingvolin-field">
        <span className="listingvolin-field-title">Location:</span>
        <span className="listingvolin-text20">
          {props.text11 ?? "(Location)"}
        </span>
      </div>

      {/* Description with label */}
      <div className="listingvolin-field">
        <span className="listingvolin-field-title">Description:</span>
        <span className="listingvolin-text15 thq-body-small">
          {props.feature1Description ?? (
            <span className="listingvolin-text21">(Description)</span>
          )}
        </span>
      </div>

      {/* Organisation Rating with label */}
      <div className="listingvolin-field">
        <span className="listingvolin-field-title">Organisation Rating:</span>
        <span className="listingvolin-text23">
          {renderStars(organisationRating)}
          {typeof organisationRating === 'number' && (
            <span style={{ marginLeft: '5px' }}>({organisationRating})</span>
          )}
        </span>
      </div>

      {/* Reviews Section with label */}
      <div className="listingvolin-reviews-section">
        <h3 className="listingvolin-reviews-title">Organisation Reviews</h3>
        {organisationReviews?.length > 0 ? (
          organisationReviews.map((review, index) => (
            <div key={index} className="listingvolin-review">
              <div className="listingvolin-review-header">
                <div className="listingvolin-review-rating">
                  <span className="listingvolin-review-rating-label">Rating:</span>
                  {renderStars(review.rating)}
                </div>
                <span className="listingvolin-review-date">
                  {new Date(review.created_at).toLocaleDateString()}
                </span>
              </div>
              {review.comment && (
                <div className="listingvolin-review-comment">
                  <span className="listingvolin-review-comment-label">Comment:</span>
                  "{review.comment}"
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="listingvolin-no-reviews">
            No reviews yet for this organisation
          </div>
        )}
      </div>

      {/* Apply Button */}
      <div className="listingvolin-actions thq-flex-row">
        <button className="listingvolin-button thq-button-filled" onClick={handleApply}>
          <span className="listingvolin-action1 thq-body-small">
            {props.mainAction ?? (
              <span className="listingvolin-text22">Apply</span>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

// ... (keep your existing defaultProps and propTypes)

export default Listingvolin;