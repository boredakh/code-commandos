import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOut from '../components/nav-bar-out'
import OrgOrVolBanner1 from '../components/org-or-vol-banner1'
import Footer from '../components/footer'
import './orgorvol.css'

const Orgorvol = (props) => {
  return (
    <div className="orgorvol-container">
      <Helmet>
        <title>orgorvol - Which Second Hand Lion</title>
        <meta property="og:title" content="orgorvol - Which Second Hand Lion" />
      </Helmet>
      <NavBarOut
        link1={
          <Fragment>
            <span className="orgorvol-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="orgorvol-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="orgorvol-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="orgorvol-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="orgorvol-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="orgorvol-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="orgorvol-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="orgorvol-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="orgorvol-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="orgorvol-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="orgorvol-text20">Find Volunteers</span>
          </Fragment>
        }
        rootClassName="nav-bar-outroot-class-name13"
        page1Description={
          <Fragment>
            <span className="orgorvol-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="orgorvol-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="orgorvol-text23">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="orgorvol-text24">Page Four Description</span>
          </Fragment>
        }
      ></NavBarOut>
      <h1 className="orgorvol-text25">Sign In</h1>
      <OrgOrVolBanner1
        text={
          <Fragment>
            <span className="orgorvol-text26">Organisation</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="orgorvol-text27">Volunteer</span>
          </Fragment>
        }
        rootClassName="org-or-vol-banner1root-class-name"
      ></OrgOrVolBanner1>
      <Footer
        link1={
          <Fragment>
            <span className="orgorvol-text28">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="orgorvol-text29">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="orgorvol-text30">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="orgorvol-text31">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="orgorvol-text32">Terms &amp; Privacy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="orgorvol-text33">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="orgorvol-text34">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="orgorvol-text35">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="orgorvol-text36">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="orgorvol-text37">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name31"
      ></Footer>
    </div>
  )
}

export default Orgorvol
