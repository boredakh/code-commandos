import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOut from '../components/nav-bar-out'
import SearchBar from '../components/search-bar'
import H2random from '../components/h2random'
import Results from '../components/results'
import Footer from '../components/footer'
import './opportunities-out.css'

const OpportunitiesOut = (props) => {
  return (
    <div className="opportunities-out-container">
      <Helmet>
        <title>OpportunitiesOut - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="OpportunitiesOut - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarOut
        link1={
          <Fragment>
            <span className="opportunities-out-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="opportunities-out-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="opportunities-out-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="opportunities-out-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="opportunities-out-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="opportunities-out-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="opportunities-out-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="opportunities-out-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="opportunities-out-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="opportunities-out-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="opportunities-out-text20">Find Volunteers</span>
          </Fragment>
        }
        rootClassName="nav-bar-outroot-class-name"
        page1Description={
          <Fragment>
            <span className="opportunities-out-text21">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="opportunities-out-text22">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="opportunities-out-text23">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="opportunities-out-text24">
              Page Four Description
            </span>
          </Fragment>
        }
      ></NavBarOut>
      <SearchBar
        text={
          <Fragment>
            <span className="opportunities-out-text25">Search</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="opportunities-out-text26">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="opportunities-out-text27">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="opportunities-out-text28">Enterprise plan</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="opportunities-out-text29">
              <span>Find Opportunities</span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="opportunities-out-text33">$200/yr</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="opportunities-out-text34">$299/yr</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="opportunities-out-text35">$499/yr</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="opportunities-out-text36">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="opportunities-out-text37">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="opportunities-out-text38">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="opportunities-out-text39">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="opportunities-out-text40">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="opportunities-out-text41">or $49 monthly</span>
          </Fragment>
        }
        rootClassName="search-barroot-class-name"
        plan1Feature11={
          <Fragment>
            <span className="opportunities-out-text42">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="opportunities-out-text43">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="opportunities-out-text44">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="opportunities-out-text45">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="opportunities-out-text46">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="opportunities-out-text47">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="opportunities-out-text48">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="opportunities-out-text49">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="opportunities-out-text50">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="opportunities-out-text51">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="opportunities-out-text52">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="opportunities-out-text53">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></SearchBar>
      <H2random
        heading={
          <Fragment>
            <span className="opportunities-out-text54">Results</span>
          </Fragment>
        }
      ></H2random>
      <Results></Results>
      <Footer
        link1={
          <Fragment>
            <span className="opportunities-out-text55">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="opportunities-out-text56">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="opportunities-out-text57">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="opportunities-out-text58">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="opportunities-out-text59">
              Terms &amp; Privacy
            </span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="opportunities-out-text60">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="opportunities-out-text61">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="opportunities-out-text62">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="opportunities-out-text63">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="opportunities-out-text64">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name1"
      ></Footer>
    </div>
  )
}

export default OpportunitiesOut
