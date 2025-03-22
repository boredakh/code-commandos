import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './applicantcard.css';

const Applicantcard = (props) => {
  return (
    <div className={`applicantcard-card thq-flex-column thq-card ${props.rootClassName}`}>
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="applicantcard-text17">
              {props.first_name} {props.last_name}
            </span>
          </Fragment>
        )}
      </h2>

      {/* Experience */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Experience:</span>
        <span className="applicantcard-text18">{props.text1}</span>
      </div>

      {/* Age Group */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Age Group:</span>
        <span className="applicantcard-text22">{props.text13}</span>
      </div>

      {/* City/County */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">City/County:</span>
        <span className="applicantcard-text21">{props.text12}</span>
      </div>

      {/* Applied At */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Applied At:</span>
        <span className="applicantcard-text20">{props.text11}</span>
      </div>

      {/* User Message */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Message:</span>
        <span className="applicantcard-text19">{props.feature1Description}</span>
      </div>

      {/* User Email */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Email:</span>
        <span className="applicantcard-text23">{props.feature1Description1}</span>
      </div>

      {/* Gender */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Gender:</span>
        <span className="applicantcard-text24">{props.text14}</span>
      </div>

      {/* Telephone */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Telephone:</span>
        <span className="applicantcard-text25">{props.text15}</span>
      </div>

      {/* Volunteer Interest */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Volunteer Interest:</span>
        <span className="applicantcard-text26">{props.text16}</span>
      </div>

      {/* Previous Volunteer */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Previous Volunteer:</span>
        <span className="applicantcard-text27">
          {props.text17}
        </span>
      </div>

      {/* Previous Work Details */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Previous Work Details:</span>
        <span className="applicantcard-text28">{props.text18}</span>
      </div>

      {/* Skills and Experience */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Skills and Experience:</span>
        <span className="applicantcard-text29">{props.text19}</span>
      </div>

      {/* Availability Days */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Availability Days:</span>
        <span className="applicantcard-text30">{props.text20}</span>
      </div>

      {/* Availability Duration */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Availability Duration:</span>
        <span className="applicantcard-text31">{props.text21}</span>
      </div>

      {/* Languages */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Languages:</span>
        <span className="applicantcard-text32">{props.text22}</span>
      </div>

      {/* Referee Name */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Referee Name:</span>
        <span className="applicantcard-text33">{props.text23}</span>
      </div>

      {/* Referee Email */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Referee Email:</span>
        <span className="applicantcard-text34">{props.text24}</span>
      </div>

      {/* Referee Relationship */}
      <div className="applicantcard-field">
        <span className="applicantcard-field-title">Referee Relationship:</span>
        <span className="applicantcard-text35">{props.text25}</span>
      </div>

      {/* Return Button */}
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
  // Default props for additional fields
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
};

Applicantcard.propTypes = {
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  text1: PropTypes.element,
  feature1Description: PropTypes.element,
  text11: PropTypes.element,
  text12: PropTypes.element,
  text13: PropTypes.element,
  feature1Description1: PropTypes.element,
  mainAction1: PropTypes.element,
  // PropTypes for additional fields
  text14: PropTypes.element,
  text15: PropTypes.element,
  text16: PropTypes.element,
  text17: PropTypes.element,
  text18: PropTypes.element,
  text19: PropTypes.element,
  text20: PropTypes.element,
  text21: PropTypes.element,
  text22: PropTypes.element,
  text23: PropTypes.element,
  text24: PropTypes.element,
  text25: PropTypes.element,
};

export default Applicantcard;