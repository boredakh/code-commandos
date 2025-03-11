import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOrgIn from '../components/nav-bar-org-in'
import CreateListingBanner from '../components/create-listing-banner'
import Listingform from '../components/listingform'
import Footer from '../components/footer'
import './create-listing.css'

const CreateListing = (props) => {
  return (
    <div className="create-listing-container">
      <Helmet>
        <title>CreateListing - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="CreateListing - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarOrgIn
        link1={
          <Fragment>
            <span className="create-listing-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="create-listing-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="create-listing-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="create-listing-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="create-listing-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="create-listing-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="create-listing-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="create-listing-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="create-listing-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="create-listing-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="create-listing-text20">Find Volunteers</span>
          </Fragment>
        }
        button121={
          <Fragment>
            <span className="create-listing-text21">Profile</span>
          </Fragment>
        }
        rootClassName="nav-bar-org-inroot-class-name3"
        page1Description={
          <Fragment>
            <span className="create-listing-text22">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="create-listing-text23">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="create-listing-text24">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="create-listing-text25">Page Four Description</span>
          </Fragment>
        }
      ></NavBarOrgIn>
      <CreateListingBanner
        plan11={
          <Fragment>
            <span className="create-listing-text26">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="create-listing-text27">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="create-listing-text28">Enterprise plan</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="create-listing-text29">
              <span>Create Listing</span>
              <br></br>
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="create-listing-text32">$200/yr</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="create-listing-text33">$299/yr</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="create-listing-text34">$499/yr</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="create-listing-text35">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="create-listing-text36">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="create-listing-text37">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="create-listing-text38">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="create-listing-text39">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="create-listing-text40">or $49 monthly</span>
          </Fragment>
        }
        rootClassName="create-listing-bannerroot-class-name"
        plan1Feature11={
          <Fragment>
            <span className="create-listing-text41">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="create-listing-text42">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="create-listing-text43">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="create-listing-text44">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="create-listing-text45">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="create-listing-text46">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="create-listing-text47">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="create-listing-text48">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="create-listing-text49">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="create-listing-text50">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="create-listing-text51">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="create-listing-text52">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></CreateListingBanner>
      <Listingform
        action={
          <Fragment>
            <span className="create-listing-text53">Submit</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="create-listing-text54">Listing Details</span>
          </Fragment>
        }
      ></Listingform>
      <Footer
        link1={
          <Fragment>
            <span className="create-listing-text55">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="create-listing-text56">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="create-listing-text57">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="create-listing-text58">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="create-listing-text59">Terms &amp; Privacy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="create-listing-text60">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="create-listing-text61">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="create-listing-text62">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="create-listing-text63">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="create-listing-text64">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name3"
      ></Footer>
    </div>
  )
}

export default CreateListing
