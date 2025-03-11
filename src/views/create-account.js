import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOut from '../components/nav-bar-out'
import H2random1 from '../components/h2random1'
import OrgOrVolBanner from '../components/org-or-vol-banner'
import Footer from '../components/footer'
import './create-account.css'

const CreateAccount = (props) => {
  return (
    <div className="create-account-container">
      <Helmet>
        <title>CreateAccount - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="CreateAccount - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarOut
        link1={
          <Fragment>
            <span className="create-account-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="create-account-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="create-account-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="create-account-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="create-account-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="create-account-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="create-account-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="create-account-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="create-account-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="create-account-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="create-account-text20">Find Volunteers</span>
          </Fragment>
        }
        rootClassName="nav-bar-outroot-class-name3"
        page1Description={
          <Fragment>
            <span className="create-account-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="create-account-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="create-account-text23">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="create-account-text24">Page Four Description</span>
          </Fragment>
        }
      ></NavBarOut>
      <H2random1
        heading={
          <Fragment>
            <span className="create-account-text25">Sign Up</span>
          </Fragment>
        }
        rootClassName="h2random1root-class-name"
      ></H2random1>
      <OrgOrVolBanner
        text={
          <Fragment>
            <span className="create-account-text26">Organisation</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="create-account-text27">Volunteer</span>
          </Fragment>
        }
        rootClassName="org-or-vol-bannerroot-class-name"
      ></OrgOrVolBanner>
      <Footer
        link1={
          <Fragment>
            <span className="create-account-text28">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="create-account-text29">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="create-account-text30">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="create-account-text31">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="create-account-text32">Terms &amp; Privacy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="create-account-text33">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="create-account-text34">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="create-account-text35">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="create-account-text36">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="create-account-text37">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name6"
      ></Footer>
    </div>
  )
}

export default CreateAccount
