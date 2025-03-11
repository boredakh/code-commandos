import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOrgIn from '../components/nav-bar-org-in'
import SearchBar from '../components/search-bar'
import H2random from '../components/h2random'
import Results from '../components/results'
import Footer from '../components/footer'
import './opportunities-inorg.css'

const OpportunitiesInorg = (props) => {
  return (
    <div className="opportunities-inorg-container">
      <Helmet>
        <title>OpportunitiesInorg - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="OpportunitiesInorg - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarOrgIn
        link1={
          <Fragment>
            <span className="opportunities-inorg-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="opportunities-inorg-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="opportunities-inorg-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="opportunities-inorg-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="opportunities-inorg-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="opportunities-inorg-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="opportunities-inorg-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="opportunities-inorg-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="opportunities-inorg-text18">
              Find Opportunities
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="opportunities-inorg-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="opportunities-inorg-text20">Find Volunteers</span>
          </Fragment>
        }
        button121={
          <Fragment>
            <span className="opportunities-inorg-text21">Profile</span>
          </Fragment>
        }
        rootClassName="nav-bar-org-inroot-class-name5"
        page1Description={
          <Fragment>
            <span className="opportunities-inorg-text22">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="opportunities-inorg-text23">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="opportunities-inorg-text24">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="opportunities-inorg-text25">
              Page Four Description
            </span>
          </Fragment>
        }
      ></NavBarOrgIn>
      <SearchBar
        text={
          <Fragment>
            <span className="opportunities-inorg-text26">Search</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="opportunities-inorg-text27">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="opportunities-inorg-text28">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="opportunities-inorg-text29">Enterprise plan</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="opportunities-inorg-text30">
              <span>Find Opportunities</span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="opportunities-inorg-text34">$200/yr</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="opportunities-inorg-text35">$299/yr</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="opportunities-inorg-text36">$499/yr</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="opportunities-inorg-text37">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="opportunities-inorg-text38">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="opportunities-inorg-text39">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="opportunities-inorg-text40">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="opportunities-inorg-text41">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="opportunities-inorg-text42">or $49 monthly</span>
          </Fragment>
        }
        rootClassName="search-barroot-class-name2"
        plan1Feature11={
          <Fragment>
            <span className="opportunities-inorg-text43">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="opportunities-inorg-text44">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="opportunities-inorg-text45">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="opportunities-inorg-text46">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="opportunities-inorg-text47">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="opportunities-inorg-text48">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="opportunities-inorg-text49">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="opportunities-inorg-text50">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="opportunities-inorg-text51">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="opportunities-inorg-text52">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="opportunities-inorg-text53">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="opportunities-inorg-text54">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></SearchBar>
      <H2random
        heading={
          <Fragment>
            <span className="opportunities-inorg-text55">Results</span>
          </Fragment>
        }
      ></H2random>
      <Results></Results>
      <Footer
        link1={
          <Fragment>
            <span className="opportunities-inorg-text56">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="opportunities-inorg-text57">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="opportunities-inorg-text58">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="opportunities-inorg-text59">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="opportunities-inorg-text60">
              Terms &amp; Privacy
            </span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="opportunities-inorg-text61">
              Find Opportunities
            </span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="opportunities-inorg-text62">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="opportunities-inorg-text63">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="opportunities-inorg-text64">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="opportunities-inorg-text65">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name20"
      ></Footer>
    </div>
  )
}

export default OpportunitiesInorg
