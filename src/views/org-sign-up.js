import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOut from '../components/nav-bar-out'
import SignUpOrg from '../components/sign-up-org'
import Footer from '../components/footer'
import './org-sign-up.css'

const OrgSignUp = (props) => {
  return (
    <div className="org-sign-up-container">
      <Helmet>
        <title>OrgSignUp - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="OrgSignUp - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarOut
        link1={
          <Fragment>
            <span className="org-sign-up-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="org-sign-up-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="org-sign-up-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="org-sign-up-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="org-sign-up-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="org-sign-up-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="org-sign-up-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="org-sign-up-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="org-sign-up-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="org-sign-up-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="org-sign-up-text20">Find Volunteers</span>
          </Fragment>
        }
        rootClassName="nav-bar-outroot-class-name5"
        page1Description={
          <Fragment>
            <span className="org-sign-up-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="org-sign-up-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="org-sign-up-text23">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="org-sign-up-text24">Page Four Description</span>
          </Fragment>
        }
      ></NavBarOut>
      <SignUpOrg
        action1={
          <Fragment>
            <span className="org-sign-up-text25">Create an account</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="org-sign-up-text26">
              I want to receive emails about the product, events, and marketing
              promotions.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="org-sign-up-text27">Welcome to ReachCoSec</span>
          </Fragment>
        }
        rootClassName="sign-up-orgroot-class-name"
      ></SignUpOrg>
      <Footer
        link1={
          <Fragment>
            <span className="org-sign-up-text28">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="org-sign-up-text29">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="org-sign-up-text30">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="org-sign-up-text31">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="org-sign-up-text32">Terms &amp; Privacy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="org-sign-up-text33">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="org-sign-up-text34">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="org-sign-up-text35">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="org-sign-up-text36">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="org-sign-up-text37">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name8"
      ></Footer>
    </div>
  )
}

export default OrgSignUp
