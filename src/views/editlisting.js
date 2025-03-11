import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOrgIn from '../components/nav-bar-org-in'
import EditListing from '../components/edit-listing'
import Footer from '../components/footer'
import './editlisting.css'

const Editlisting = (props) => {
  return (
    <div className="editlisting-container">
      <Helmet>
        <title>Editlisting - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="Editlisting - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarOrgIn
        link4={
          <Fragment>
            <span className="editlisting-text10">Link 4</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="editlisting-text11">Page Two</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="editlisting-text12">Page One</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="editlisting-text13">Log in</span>
          </Fragment>
        }
        button121={
          <Fragment>
            <span className="editlisting-text14">Profile</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="editlisting-text15">Find Volunteers</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="editlisting-text16">Page One Description</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="editlisting-text17">Page Four</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="editlisting-text18">Page Three Description</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="editlisting-text19">About Us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="editlisting-text20">Page Three</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="editlisting-text21">Page Two Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="editlisting-text22">Page Four Description</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="editlisting-text23">Link 3</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="editlisting-text24">Find Opportunities</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="editlisting-text25">Blogs</span>
          </Fragment>
        }
        rootClassName="nav-bar-org-inroot-class-name6"
      ></NavBarOrgIn>
      <EditListing
        feature1Title={
          <Fragment>
            <span className="editlisting-text26">(Job Title)</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="editlisting-text27">(Organisation)</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="editlisting-text28">(Industry)</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="editlisting-text29">(Location)</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="editlisting-text30">(Description)</span>
          </Fragment>
        }
        heading11={
          <Fragment>
            <span className="editlisting-text31">Edit Listing</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="editlisting-text32">Submit Changes</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="editlisting-text33">Return</span>
          </Fragment>
        }
        rootClassName="edit-listingroot-class-name"
      ></EditListing>
      <Footer
        termsLink={
          <Fragment>
            <span className="editlisting-text34">Terms of Service</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="editlisting-text35">Find Opportunities</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="editlisting-text36">Privacy Policy</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="editlisting-text37">Find Volunteers</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="editlisting-text38">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="editlisting-text39">Help</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="editlisting-text40">Cookies Settings</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="editlisting-text41">Terms &amp; Privacy</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="editlisting-text42">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="editlisting-text43">Blogs</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name28"
      ></Footer>
    </div>
  )
}

export default Editlisting
