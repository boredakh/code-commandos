import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FeaturedRole from './featured-role';
import ShowmoreResults from './showmore-results';
import './results1.css';

const Results1 = (props) => {
  const { results = [] } = props; // Get the search results from props

  return (
    <div
      className={`results1-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="results1-max-width thq-section-max-width">
        <div className="results1-container1"></div>
        <div className="results1-container2 thq-grid-auto-300">
          {results.map((result) => (
            <FeaturedRole
              key={result.id}
              text1={
                <Fragment>
                  <span className="results1-text10">{result.organisation_name}</span>
                </Fragment>
              }
              text11={
                <Fragment>
                  <span className="results1-text11">{result.postcode}</span>
                </Fragment>
              }
              text111={
                <Fragment>
                  <span className="results1-text12">{result.industry}</span>
                </Fragment>
              }
              text1111={
                <Fragment>
                  <span className="results1-text13">{result.commitment}</span>
                </Fragment>
              }
              mainAction={
                <Fragment>
                  <span className="results1-text14">View Role</span>
                </Fragment>
              }
              feature1Title={
                <Fragment>
                  <span className="results1-text15">{result.job_title}</span>
                </Fragment>
              }
              rootClassName="featured-roleroot-class-name6"
              feature1Description={
                <Fragment>
                  <span className="results1-text16">{result.listing_description}</span>
                </Fragment>
              }
            />
          ))}
          <ShowmoreResults
            mainAction71={
              <Fragment>
                <span className="results1-text24">Show more Results</span>
              </Fragment>
            }
            rootClassName="showmore-resultsroot-class-name3"
          ></ShowmoreResults>
        </div>
      </div>
    </div>
  );
};

Results1.defaultProps = {
  results: [], // Default to an empty array if no results are passed
  rootClassName: '',
};

Results1.propTypes = {
  results: PropTypes.array, // Add prop type for results
  rootClassName: PropTypes.string,
};

export default Results1;