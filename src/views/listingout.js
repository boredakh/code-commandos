import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOut from '../components/nav-bar-out'
import Listingout1 from '../components/listingout1'
import Footer from '../components/footer'
import './listingout.css'

const Listingout = (props) => {
  return (
    <div className="listingout-container">
      <Helmet>
        <title>Listingout - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="Listingout - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarOut
        link1={
          <Fragment>
            <span className="listingout-text10">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="listingout-text11">Link 3</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="listingout-text12">Blogs</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="listingout-text13">Page Three Description</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="listingout-text14">Log in</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="listingout-text15">Page Two Description</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="listingout-text16">Find Opportunities</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="listingout-text17">Page One Description</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="listingout-text18">Page Three</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="listingout-text19">Find Volunteers</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="listingout-text20">Page Four Description</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="listingout-text21">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="listingout-text22">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="listingout-text23">Page Two</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="listingout-text24">Page Four</span>
          </Fragment>
        }
        rootClassName="nav-bar-outroot-class-name11"
      ></NavBarOut>
      <Listingout1
        feature1Title={
          <Fragment>
            <span className="listingout-text25">(Job Title)</span>
          </Fragment>
        }
        text121={
          <Fragment>
            <span className="listingout-text26">(Commitment)</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="listingout-text27">(Organisation)</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="listingout-text28">(Industry)</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="listingout-text29">(Location)</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="listingout-text30">(Description)</span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="listingout-text31">Apply</span>
          </Fragment>
        }
        rootClassName="listingout1root-class-name"
      ></Listingout1>
      <Footer
        termsLink={
          <Fragment>
            <span className="listingout-text32">Terms of Service</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="listingout-text33">Find Opportunities</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="listingout-text34">Privacy Policy</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="listingout-text35">Find Volunteers</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="listingout-text36">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="listingout-text37">Help</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="listingout-text38">Cookies Settings</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="listingout-text39">Terms &amp; Privacy</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="listingout-text40">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="listingout-text41">Blogs</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name27"
      ></Footer>
    </div>
  )
}

export default Listingout
