import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './notificationcardorg.css';

const Notificationcardorg = (props) => {
  return (
    <div
      className={`notificationcardorg-card thq-flex-column thq-card ${props.rootClassName}`}
    >
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="notificationcardorg-text4">
              (Notification Type)
            </span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="notificationcardorg-text5">
              (Notification number)
            </span>
          </Fragment>
        )}
      </span>
      <span className="notificationcardorg-text3 thq-body-small">
        {props.feature1Description ?? (
          <Fragment>
            <span className="notificationcardorg-text6">
              (Notification message)
            </span>
          </Fragment>
        )}
      </span>
      <div className="notificationcardorg-actions thq-flex-row"></div>
    </div>
  );
};

Notificationcardorg.defaultProps = {
  rootClassName: '',
  feature1Title: undefined,
  text1: undefined,
  feature1Description: undefined,
};

Notificationcardorg.propTypes = {
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  text1: PropTypes.element,
  feature1Description: PropTypes.element,
};

export default Notificationcardorg;