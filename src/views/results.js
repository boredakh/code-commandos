import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom'; // To access the search results
import NavBarOut from '../components/nav-bar-out';
import Results1 from '../components/results1';
import Footer from '../components/footer';
import './results.css';

const Results = (props) => {
  const location = useLocation();
  const searchResults = location.state?.results || []; // Get the search results from the state

  return (
    <div className="results-container">
      <Helmet>
        <title>results - Which Second Hand Lion</title>
        <meta property="og:title" content="results - Which Second Hand Lion" />
      </Helmet>
      <NavBarOut
        link1={
          <Fragment>
            <span className="results-text10">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="results-text11">Link 3</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="results-text12">Blogs</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="results-text13">Page Three Description</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="results-text14">Log in</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="results-text15">Page Two Description</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="results-text16">Find Opportunities</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="results-text17">Page One Description</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="results-text18">Page Three</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="results-text19">Find Volunteers</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="results-text20">Page Four Description</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="results-text21">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="results-text22">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="results-text23">Page Two</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="results-text24">Page Four</span>
          </Fragment>
        }
        rootClassName="nav-bar-outroot-class-name14"
      ></NavBarOut>
      <Results1 results={searchResults} rootClassName="results1root-class-name"></Results1>
      <Footer
        termsLink={
          <Fragment>
            <span className="results-text25">Terms of Service</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="results-text26">Find Opportunities</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="results-text27">Privacy Policy</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="results-text28">Find Volunteers</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="results-text29">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="results-text30">Help</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="results-text31">Cookies Settings</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="results-text32">Terms &amp; Privacy</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="results-text33">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="results-text34">Blogs</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name32"
      ></Footer>
    </div>
  );
};

export default Results;