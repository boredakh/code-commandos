import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOrgIn from '../components/nav-bar-org-in'
import Listingorgin from '../components/listingorgin'
import Footer from '../components/footer'
import './listingin-org.css'

const ListinginOrg = (props) => {
  return (
    <div className="listingin-org-container">
      <Helmet>
        <title>ListinginOrg - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="ListinginOrg - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarOrgIn
        link4={
          <Fragment>
            <span className="listingin-org-text10">Link 4</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="listingin-org-text11">Page Two</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="listingin-org-text12">Page One</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="listingin-org-text13">Log in</span>
          </Fragment>
        }
        button121={
          <Fragment>
            <span className="listingin-org-text14">Profile</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="listingin-org-text15">Find Volunteers</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="listingin-org-text16">Page One Description</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="listingin-org-text17">Page Four</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="listingin-org-text18">Page Three Description</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="listingin-org-text19">About Us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="listingin-org-text20">Page Three</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="listingin-org-text21">Page Two Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="listingin-org-text22">Page Four Description</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="listingin-org-text23">Link 3</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="listingin-org-text24">Find Opportunities</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="listingin-org-text25">Blogs</span>
          </Fragment>
        }
        rootClassName="nav-bar-org-inroot-class-name4"
      ></NavBarOrgIn>
      <Listingorgin
        feature1Title={
          <Fragment>
            <span className="listingin-org-text26">(Job Title)</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="listingin-org-text27">(Organisation)</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="listingin-org-text28">(Location)</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="listingin-org-text29">(Description)</span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="listingin-org-text30">Edit Listing</span>
          </Fragment>
        }
        rootClassName="listingorginroot-class-name"
        text12={
          <Fragment>
            <span className="listingin-org-text31">(Industry)</span>
          </Fragment>
        }
        text121={
          <Fragment>
            <span className="listingin-org-text32">(Commitment)</span>
          </Fragment>
        }
      ></Listingorgin>
      <Footer
        termsLink={
          <Fragment>
            <span className="listingin-org-text33">Terms of Service</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="listingin-org-text34">Find Opportunities</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="listingin-org-text35">Privacy Policy</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="listingin-org-text36">Find Volunteers</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="listingin-org-text37">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="listingin-org-text38">Help</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="listingin-org-text39">Cookies Settings</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="listingin-org-text40">Terms &amp; Privacy</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="listingin-org-text41">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="listingin-org-text42">Blogs</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name25"
      ></Footer>
    </div>
  )
}

export default ListinginOrg
