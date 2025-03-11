import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { supabase } from './supabaseclient'; // Import your Supabase client
import Viewapplicationcardvol from './viewapplicationcardvol';
import Notificationcardvol from './notificationcardvol';
import './dashboard-vol.css';

const DashboardVol = (props) => {
  const [isRefundVisible, setIsRefundVisible] = useState(false);
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false);
  const [isTermsVisible, setIsTermsVisible] = useState(true);
  const [notifications, setNotifications] = useState([]); // State to store notifications
  const [applications, setApplications] = useState([]); // State to store applications
  const [listings, setListings] = useState([]); // State to store listing details
  const [loading, setLoading] = useState(false); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors
  const [loadingApplications, setLoadingApplications] = useState(false); // State to handle loading for applications
  const [errorApplications, setErrorApplications] = useState(null); // State to handle errors for applications

  // Fetch notifications when the "Notifications" tab is active
  useEffect(() => {
    if (isRefundVisible) {
      fetchNotifications();
    }
  }, [isRefundVisible]);

  // Fetch applications when the "View Applications" tab is active
  useEffect(() => {
    if (isTermsVisible) {
      fetchApplications();
    }
  }, [isTermsVisible]);

  // Fetch listing details for each application
  useEffect(() => {
    if (applications.length > 0) {
      fetchListingDetails();
    }
  }, [applications]);

  // Function to fetch notifications from Supabase
  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('Notifications_Vol')
        .select('*'); // Fetch all columns from the table

      if (error) {
        setError(error.message); // Set error state if there's an error
      } else {
        setNotifications(data); // Set the fetched data to the notifications state
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.'); // Handle unexpected errors
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Function to fetch applications from Supabase
  const fetchApplications = async () => {
    setLoadingApplications(true);
    try {
      // Get the current user
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError) {
        setErrorApplications(userError.message);
        return;
      }

      if (!user) {
        setErrorApplications('User not authenticated.');
        return;
      }

      // Fetch applications for the current user
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        setErrorApplications(error.message);
      } else {
        setApplications(data);
      }
    } catch (err) {
      setErrorApplications('An unexpected error occurred. Please try again.');
    } finally {
      setLoadingApplications(false);
    }
  };

  // Function to fetch listing details
  const fetchListingDetails = async () => {
    setLoadingApplications(true);
    try {
      // Extract listing IDs from applications
      const listingIds = applications.map((app) => app.listing_id);

      // Fetch listing details for the extracted IDs
      const { data, error } = await supabase
        .from('listing_details')
        .select('*')
        .in('id', listingIds);

      if (error) {
        setErrorApplications(error.message);
      } else {
        setListings(data);
      }
    } catch (err) {
      setErrorApplications('An unexpected error occurred. Please try again.');
    } finally {
      setLoadingApplications(false);
    }
  };

  return (
    <div
      className={`dashboard-vol-container1 thq-section-padding ${props.rootClassName}`}
    >
      <div className="dashboard-vol-max-width1 thq-section-max-width">
        <div className="dashboard-vol-container2 thq-flex-column">
          {/* Buttons for View Applications and Notifications */}
          {isTermsVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(false);
                setIsPrivacyVisible(false);
                setIsTermsVisible(true);
              }}
              className="dashboard-vol-button1 thq-button-filled"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="dashboard-vol-text32">
                      View Applications
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {!isTermsVisible && (
            <button
              onClick={() => {
                setIsTermsVisible(true);
                setIsRefundVisible(false);
                setIsPrivacyVisible(false);
              }}
              className="thq-button-outline"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="dashboard-vol-text32">
                      View Applications
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isPrivacyVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(false);
                setIsTermsVisible(false);
                setIsPrivacyVisible(true);
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="dashboard-vol-text31">Listings</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {!isRefundVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(true);
                setIsTermsVisible(false);
                setIsPrivacyVisible(false);
              }}
              className="dashboard-vol-button4 thq-button-outline"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="dashboard-vol-text33">Notifications</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isRefundVisible && (
            <button
              onClick={() => {
                setIsTermsVisible(false);
                setIsRefundVisible(true);
                setIsPrivacyVisible(false);
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="dashboard-vol-text33">Notifications</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
        </div>
        <div className="dashboard-vol-container3 thq-flex-column">
          {isTermsVisible && (
            <div className="dashboard-vol-container4">
              <div className="dashboard-vol-max-width2 thq-section-max-width">
                <div className="dashboard-vol-container5"></div>
                <div className="dashboard-vol-container6 thq-grid-auto-300">
                  {loadingApplications ? (
                    <div>Loading...</div>
                  ) : errorApplications ? (
                    <div>Error: {errorApplications}</div>
                  ) : listings.length > 0 ? (
                    listings.map((listing) => (
                      <Viewapplicationcardvol
                        key={listing.id}
                        listingId={listing.id} // Pass the listingId
                        feature1Title={
                          <Fragment>
                            <span className="dashboard-vol-text15">
                              {listing.job_title}
                            </span>
                          </Fragment>
                        }
                        text1={
                          <Fragment>
                            <span className="dashboard-vol-text16">
                              {listing.organisation_name}
                            </span>
                          </Fragment>
                        }
                        text11={
                          <Fragment>
                            <span className="dashboard-vol-text17">
                              {listing.postcode}
                            </span>
                          </Fragment>
                        }
                        feature1Description={
                          <Fragment>
                            <span className="dashboard-vol-text18">
                              {listing.listing_description}
                            </span>
                          </Fragment>
                        }
                        mainAction={
                          <Fragment>
                            <span className="dashboard-vol-text19">View Role</span>
                          </Fragment>
                        }
                        rootClassName="viewapplicationcardvolroot-class-name"
                      />
                    ))
                  ) : (
                    <div>No applications found.</div>
                  )}
                </div>
              </div>
            </div>
          )}
          {isRefundVisible && (
            <div className="dashboard-vol-container7">
              <div className="dashboard-vol-max-width3 thq-section-max-width">
                <div className="dashboard-vol-container8"></div>
                <div className="dashboard-vol-container9 thq-grid-auto-300">
                  {/* Render Notificationcardvol components with fetched data */}
                  {loading ? (
                    <div>Loading...</div>
                  ) : error ? (
                    <div>Error: {error}</div>
                  ) : notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                      <Notificationcardvol
                        key={index}
                        feature1Title1={
                          <Fragment>
                            <span className="dashboard-vol-text25">
                              {notification.Notification_Type}
                            </span>
                          </Fragment>
                        }
                        text11={
                          <Fragment>
                            <span className="dashboard-vol-text26">
                              {notification.Notification_Number}
                            </span>
                          </Fragment>
                        }
                        feature1Description1={
                          <Fragment>
                            <span className="dashboard-vol-text27">
                              {notification.Notification_Message}
                            </span>
                          </Fragment>
                        }
                        rootClassName="notificationcardvolroot-class-name"
                      />
                    ))
                  ) : (
                    <div>No notifications found.</div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

DashboardVol.defaultProps = {
  button1: undefined,
  button: undefined,
  button2: undefined,
  rootClassName: '',
};

DashboardVol.propTypes = {
  button1: PropTypes.element,
  button: PropTypes.element,
  button2: PropTypes.element,
  rootClassName: PropTypes.string,
};

export default DashboardVol;