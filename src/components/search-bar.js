import React, { useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom'; // For redirecting to the results page
import PropTypes from 'prop-types';
import { supabase } from './supabaseclient'; // Import the Supabase client
import './search-bar.css';

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState('');
  const [postcode, setPostcode] = useState('');
  const history = useHistory(); // For redirecting to the results page

  const handleSearch = async () => {
    try {
      let query = supabase.from('listing_details').select('*');

      // Add keyword search if keyword is provided
      if (keyword) {
        query = query.or(`job_title.ilike.%${keyword}%,listing_description.ilike.%${keyword}%`);
      }

      // Add postcode filter if postcode is provided
      if (postcode) {
        query = query.eq('postcode', postcode);
      }

      const { data, error } = await query;

      if (error) throw error;

      console.log('Search results:', data); // Log the search results

      // Redirect to the results page with the search results
      history.push({
        pathname: '/results',
        state: { results: data }, // Pass the search results to the results page
      });
    } catch (error) {
      console.error('Error searching:', error.message);
    }
  };

  return (
    <div
      className={`search-bar-pricing23 thq-section-padding ${props.rootClassName} `}
    >
      <div className="search-bar-max-width thq-section-max-width">
        <div className="search-bar-section-title">
          <div className="search-bar-content"></div>
        </div>
        <div className="search-bar-container1">
          <div className="search-bar-column1 thq-card">
            <div className="search-bar-price1">
              <div className="search-bar-price2">
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  className="search-bar-image"
                />
                <h3 className="search-bar-text10 thq-heading-3">
                  {props.plan2Price ?? (
                    <Fragment>
                      <span className="search-bar-text49">
                        <span>Find Opportunities</span>
                        <br></br>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <form
                  className="search-bar-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                  }}
                >
                  <div className="search-bar-email">
                    <input
                      type="text"
                      id="thq-sign-in-1-email"
                      placeholder="Keyword"
                      className="search-bar-textinput1 thq-body-large thq-input"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                  </div>
                  <div className="search-bar-password">
                    <input
                      type="text"
                      id="thq-sign-in-1-password"
                      placeholder="Postcode"
                      className="search-bar-textinput2 thq-body-large thq-input"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                    />
                  </div>
                  <div className="search-bar-buttons">
                    <button
                      type="submit"
                      className="search-bar-action1 thq-button-filled thq-button-animated"
                    >
                      <span>
                        {props.text ?? (
                          <Fragment>
                            <span className="search-bar-text41">Search</span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchBar.defaultProps = {
  plan2Price: undefined,
  imageSrc2: '/search-icon-2048x2048-cmujl7en-200h.png',
  imageAlt2: 'image',
  text: undefined,
  rootClassName: '',
};

SearchBar.propTypes = {
  plan2Price: PropTypes.element,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  text: PropTypes.element,
  rootClassName: PropTypes.string,
};

export default SearchBar;