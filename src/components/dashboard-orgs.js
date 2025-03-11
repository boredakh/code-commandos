import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { supabase } from './supabaseclient'; // Import your Supabase client
import Viewapplicationcardorg from './viewapplicationcardorg';
import Listingcard from './listingcard';
import Notificationcardorg from './notificationcardorg';
import './dashboard-orgs.css';

const DashboardOrgs = (props) => {
  const [isRefundVisible, setIsRefundVisible] = useState(false);
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false);
  const [isTermsVisible, setIsTermsVisible] = useState(true);

  // State for notifications
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // State for listings
  const [listings, setListings] = useState([]);
  const [loadingListings, setLoadingListings] = useState(false);
  const [errorListings, setErrorListings] = useState(null);

  // State for applications
  const [applications, setApplications] = useState([]);
  const [loadingApplications, setLoadingApplications] = useState(false);
  const [errorApplications, setErrorApplications] = useState(null);

  // Fetch notifications when the "Notifications" tab is active
  useEffect(() => {
    if (isRefundVisible) {
      fetchNotifications();
    }
  }, [isRefundVisible]);

  // Fetch listings when the "Listings" tab is active
  useEffect(() => {
    if (isPrivacyVisible) {
      fetchListings();
    }
  }, [isPrivacyVisible]);

  // Fetch applications when the "View Applications" tab is active
  useEffect(() => {
    if (isTermsVisible) {
      fetchApplications();
    }
  }, [isTermsVisible]);

  // Function to fetch notifications from Supabase
  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('Notifications_Org')
        .select('*'); // Fetch all columns from the table

      if (error) {
        setError(error.message);
      } else {
        setNotifications(data);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch listings from Supabase
  const fetchListings = async () => {
    setLoadingListings(true);
    try {
      // Get the current user
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError) {
        setErrorListings(userError.message);
        return;
      }

      if (!user) {
        setErrorListings('User not authenticated.');
        return;
      }

      // Fetch listings created by the current user
      const { data, error } = await supabase
        .from('listing_details')
        .select('*')
        .eq('created_by', user.id); // Assuming `created_by` is the column storing the user ID

      if (error) {
        setErrorListings(error.message);
      } else {
        setListings(data);
      }
    } catch (err) {
      setErrorListings('An unexpected error occurred. Please try again.');
    } finally {
      setLoadingListings(false);
    }
  };

  // Function to fetch applications from Supabase
  const fetchApplications = async () => {
    setLoadingApplications(true);
    try {
      // Fetch all applications
      const { data, error } = await supabase
        .from('applications')
        .select('*'); // Fetch all columns from the table

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

  return (
    <div
      className={`dashboard-orgs-container10 thq-section-padding ${props.rootClassName}`}
    >
      <div className="dashboard-orgs-max-width1 thq-section-max-width">
        <div className="dashboard-orgs-container11 thq-flex-column">
          {/* Buttons for View Applications, Listings, and Notifications */}
          {isTermsVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(false);
                setIsPrivacyVisible(false);
                setIsTermsVisible(true);
              }}
              className="dashboard-orgs-button1 thq-button-filled"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="dashboard-orgs-text42">
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
                    <span className="dashboard-orgs-text42">
                      View Applications
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {!isPrivacyVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(false);
                setIsTermsVisible(false);
                setIsPrivacyVisible(true);
              }}
              className="dashboard-orgs-button3 thq-button-outline"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="dashboard-orgs-text43">Listings</span>
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
                    <span className="dashboard-orgs-text43">Listings</span>
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
              className="dashboard-orgs-button5 thq-button-outline"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="dashboard-orgs-text44">Notifications</span>
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
                    <span className="dashboard-orgs-text44">Notifications</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
        </div>
        <div className="dashboard-orgs-container12 thq-flex-column">
          {isTermsVisible && (
            <div className="dashboard-orgs-container13">
              <div className="dashboard-orgs-max-width2 thq-section-max-width">
                <div className="dashboard-orgs-container14"></div>
                <div className="dashboard-orgs-container15 thq-grid-auto-300">
                  {loadingApplications ? (
                    <div>Loading...</div>
                  ) : errorApplications ? (
                    <div>Error: {errorApplications}</div>
                  ) : applications.length > 0 ? (
                    applications.map((application) => (
                      <Viewapplicationcardorg
                        key={application.id}
                        applicationId={application.id} // Pass the applicationId
                        feature1Title={
                          <Fragment>
                            <span className="dashboard-orgs-text16">
                              {application.first_name} {application.last_name}
                            </span>
                          </Fragment>
                        }
                        text1={
                          <Fragment>
                            <span className="dashboard-orgs-text17">
                              {application.age_group}
                            </span>
                          </Fragment>
                        }
                        text11={
                          <Fragment>
                            <span className="dashboard-orgs-text18">
                              {application.county || 'N/A'} {/* Display county or 'N/A' if not available */}
                            </span>
                          </Fragment>
                        }
                        feature1Description={
                          <Fragment>
                            <span className="dashboard-orgs-text19">
                              {application.experience}
                            </span>
                          </Fragment>
                        }
                        mainAction={
                          <Fragment>
                            <span className="dashboard-orgs-text20">
                              View Application
                            </span>
                          </Fragment>
                        }
                        rootClassName="viewapplicationcardorgroot-class-name"
                      />
                    ))
                  ) : (
                    <div>No applications found.</div>
                  )}
                </div>
              </div>
            </div>
          )}
          {isPrivacyVisible && (
            <div className="dashboard-orgs-container16">
              <div className="dashboard-orgs-max-width3 thq-section-max-width">
                <div className="dashboard-orgs-container17"></div>
                <div className="dashboard-orgs-container18 thq-grid-auto-300">
                  {loadingListings ? (
                    <div>Loading...</div>
                  ) : errorListings ? (
                    <div>Error: {errorListings}</div>
                  ) : listings.length > 0 ? (
                    listings.map((listing) => (
                      <Listingcard
                        key={listing.id}
                        listingId={listing.id} // Pass the listingId
                        text1={
                          <Fragment>
                            <span className="dashboard-orgs-text26">
                              {listing.commitment}
                            </span>
                          </Fragment>
                        }
                        mainAction={
                          <Fragment>
                            <span className="dashboard-orgs-text27">
                              View Listing
                            </span>
                          </Fragment>
                        }
                        mainAction1={
                          <Fragment>
                            <span className="dashboard-orgs-text28">
                              Edit Listing
                            </span>
                          </Fragment>
                        }
                        feature1Title={
                          <Fragment>
                            <span className="dashboard-orgs-text29">
                              {listing.job_title}
                            </span>
                          </Fragment>
                        }
                        rootClassName="listingcardroot-class-name"
                        feature1Description={
                          <Fragment>
                            <span className="dashboard-orgs-text30">
                              {listing.listing_description}
                            </span>
                          </Fragment>
                        }
                      />
                    ))
                  ) : (
                    <div>No listings found.</div>
                  )}
                </div>
              </div>
            </div>
          )}
          {isRefundVisible && (
            <div className="dashboard-orgs-container19">
              <div className="dashboard-orgs-max-width4 thq-section-max-width">
                <div className="dashboard-orgs-container20"></div>
                <div className="dashboard-orgs-container21 thq-grid-auto-300">
                  {/* Render Notificationcardorg components with fetched data */}
                  {loading ? (
                    <div>Loading...</div>
                  ) : error ? (
                    <div>Error: {error}</div>
                  ) : notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                      <Notificationcardorg
                        key={index}
                        text1={
                          <Fragment>
                            <span className="dashboard-orgs-text36">
                              {notification.Notification_Number}
                            </span>
                          </Fragment>
                        }
                        feature1Title={
                          <Fragment>
                            <span className="dashboard-orgs-text37">
                              {notification.Notification_Type}
                            </span>
                          </Fragment>
                        }
                        feature1Description={
                          <Fragment>
                            <span className="dashboard-orgs-text38">
                              {notification.Notification_Message}
                            </span>
                          </Fragment>
                        }
                        rootClassName="notificationcardorgroot-class-name"
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

DashboardOrgs.defaultProps = {
  button: undefined,
  button1: undefined,
  rootClassName: '',
  button2: undefined,
};

DashboardOrgs.propTypes = {
  button: PropTypes.element,
  button1: PropTypes.element,
  rootClassName: PropTypes.string,
  button2: PropTypes.element,
};

export default DashboardOrgs;