import React, { Fragment, useEffect, useState } from 'react';
import { supabase } from './supabaseclient'; // Import your Supabase client
import FeaturedRole from './featured-role';
import ShowmoreResults from './showmore-results';
import './results.css';

// Utility function to truncate text to a specified number of words
const truncateText = (text, maxWords) => {
  const words = text.split(' '); // Split the text into an array of words
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...'; // Join the first 20 words and add ellipsis
  }
  return text; // Return the original text if it has 20 words or fewer
};

const Results = (props) => {
  // State to store the fetched listings
  const [listings, setListings] = useState([]);
  // State to handle loading state
  const [loading, setLoading] = useState(true);
  // State to handle errors
  const [error, setError] = useState(null);
  // State to track the current page
  const [page, setPage] = useState(1);
  // State to track if there are more results to load
  const [hasMore, setHasMore] = useState(true);

  // Fetch data from Supabase when the component mounts or the page changes
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const { data, error } = await supabase
          .from('listing_details')
          .select('*')
          .range((page - 1) * 9, page * 9 - 1); // Fetch 9 results per page

        if (error) {
          setError(error.message); // Set error state if there's an error
        } else {
          if (data.length > 0) {
            setListings((prev) => [...prev, ...data]); // Append new data to existing listings
          } else {
            setHasMore(false); // No more results to load
          }
        }
      } catch (err) {
        setError('An unexpected error occurred. Please try again.'); // Handle unexpected errors
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchListings(); // Call the fetch function
  }, [page]);

  // Function to load more results
  const handleShowMore = () => {
    setPage((prev) => prev + 1); // Increment the page to fetch the next set of results
  };

  // Display a loading message while fetching data
  if (loading && page === 1) {
    return <div>Loading...</div>;
  }

  // Display an error message if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display a message if no listings are found
  if (listings.length === 0 && !loading) {
    return <div>No listings found.</div>;
  }

  return (
    <div className="results-layout349 thq-section-padding">
      <div className="results-max-width thq-section-max-width">
        <div className="results-container1"></div>
        <div className="results-container2 thq-grid-auto-300">
          {/* Map through the listings and render a FeaturedRole component for each */}
          {listings.map((listing) => (
            <FeaturedRole
              key={listing.id} // Use listing.id as the key
              mainAction={
                <Fragment>
                  <span className="results-text10">View Role</span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="results-text11">{listing.organisation_name}</span>
                </Fragment>
              }
              feature1Title={
                <Fragment>
                  <span className="results-text12">{listing.job_title}</span>
                </Fragment>
              }
              feature1Description={
                <Fragment>
                  <span className="results-text13">
                    {truncateText(listing.listing_description, 20)} {/* Truncate to 20 words */}
                  </span>
                </Fragment>
              }
              text11={
                <Fragment>
                  <span className="results-text14">{listing.postcode}</span>
                </Fragment>
              }
              text111={
                <Fragment>
                  <span className="results-text15">{listing.industry}</span>
                </Fragment>
              }
              text1111={
                <Fragment>
                  <span className="results-text16">{listing.commitment}</span>
                </Fragment>
              }
              listingId={listing.id} // Pass the listing.id as a prop
              rootClassName="featured-roleroot-class-name"
            />
          ))}
          {/* Render the ShowmoreResults component if there are more results to load */}
          {hasMore && (
            <ShowmoreResults
              mainAction71={
                <Fragment>
                  <span className="results-text24" onClick={handleShowMore}>
                    Show more Results
                  </span>
                </Fragment>
              }
              rootClassName="showmore-resultsroot-class-name"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;