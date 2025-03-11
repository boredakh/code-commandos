import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './notificationcardvol.css';

const Notificationcardvol = (props) => {
  return (
    <div
      className={`notificationcardvol-card thq-flex-column thq-card ${props.rootClassName}`}
    >
      <h2 className="thq-heading-2">
        {props.feature1Title1 ?? (
          <Fragment>
            <span className="notificationcardvol-text4">
              (Notification Type)
            </span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text11 ?? (
          <Fragment>
            <span className="notificationcardvol-text5">
              (Notification number)
            </span>
          </Fragment>
        )}
      </span>
      <span className="notificationcardvol-text3 thq-body-small">
        {props.feature1Description1 ?? (
          <Fragment>
            <span className="notificationcardvol-text6">
              (Notification message)
            </span>
          </Fragment>
        )}
      </span>
      <div className="notificationcardvol-actions thq-flex-row"></div>
    </div>
  );
};

Notificationcardvol.defaultProps = {
  rootClassName: '',
  feature1Title1: undefined,
  text11: undefined,
  feature1Description1: undefined,
};

Notificationcardvol.propTypes = {
  rootClassName: PropTypes.string,
  feature1Title1: PropTypes.element,
  text11: PropTypes.element,
  feature1Description1: PropTypes.element,
};

export default Notificationcardvol;