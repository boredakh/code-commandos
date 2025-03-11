import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOut from '../components/nav-bar-out'
import Verifyemailbanner from '../components/verifyemailbanner'
import Footer from '../components/footer'
import './verify-email.css'

const VerifyEmail = (props) => {
  return (
    <div className="verify-email-container">
      <Helmet>
        <title>VerifyEmail - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="VerifyEmail - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarOut
        link1={
          <Fragment>
            <span className="verify-email-text10">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="verify-email-text11">Link 3</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="verify-email-text12">Blogs</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="verify-email-text13">Page Three Description</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="verify-email-text14">Log in</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="verify-email-text15">Page Two Description</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="verify-email-text16">Find Opportunities</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="verify-email-text17">Page One Description</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="verify-email-text18">Page Three</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="verify-email-text19">Find Volunteers</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="verify-email-text20">Page Four Description</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="verify-email-text21">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="verify-email-text22">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="verify-email-text23">Page Two</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="verify-email-text24">Page Four</span>
          </Fragment>
        }
        rootClassName="nav-bar-outroot-class-name9"
      ></NavBarOut>
      <Verifyemailbanner
        action1={
          <Fragment>
            <span className="verify-email-text25">Sign In</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="verify-email-text26">
              Verify Email Before Sign In
            </span>
          </Fragment>
        }
        rootClassName="verifyemailbannerroot-class-name"
      ></Verifyemailbanner>
      <Footer
        termsLink={
          <Fragment>
            <span className="verify-email-text27">Terms of Service</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="verify-email-text28">Find Opportunities</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="verify-email-text29">Privacy Policy</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="verify-email-text30">Find Volunteers</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="verify-email-text31">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="verify-email-text32">Help</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="verify-email-text33">Cookies Settings</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="verify-email-text34">Terms &amp; Privacy</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="verify-email-text35">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="verify-email-text36">Blogs</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name23"
      ></Footer>
    </div>
  )
}

export default VerifyEmail
