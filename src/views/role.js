import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOut from '../components/nav-bar-out'
import Jobrole from '../components/jobrole'
import Footer from '../components/footer'
import './role.css'

const Role = (props) => {
  return (
    <div className="role-container">
      <Helmet>
        <title>Role - Which Second Hand Lion</title>
        <meta property="og:title" content="Role - Which Second Hand Lion" />
      </Helmet>
      <NavBarOut
        link1={
          <Fragment>
            <span className="role-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="role-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="role-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="role-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="role-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="role-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="role-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="role-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="role-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="role-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="role-text20">Find Volunteers</span>
          </Fragment>
        }
        rootClassName="nav-bar-outroot-class-name8"
        page1Description={
          <Fragment>
            <span className="role-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="role-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="role-text23">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="role-text24">Page Four Description</span>
          </Fragment>
        }
      ></NavBarOut>
      <Jobrole
        feature1Title={
          <Fragment>
            <span className="role-text25">(Job Title)</span>
          </Fragment>
        }
        feature1Title1={
          <Fragment>
            <span className="role-text26">(Organisation)</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="role-text27">(Location)</span>
          </Fragment>
        }
        feature1Description2={
          <Fragment>
            <span className="role-text28">(Industry)</span>
          </Fragment>
        }
        feature1Description1={
          <Fragment>
            <span className="role-text29">(Commitment)</span>
          </Fragment>
        }
        feature1Description11={
          <Fragment>
            <span className="role-text30">(Description)</span>
          </Fragment>
        }
        rootClassName="jobroleroot-class-name"
      ></Jobrole>
      <Footer
        link1={
          <Fragment>
            <span className="role-text31">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="role-text32">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="role-text33">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="role-text34">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="role-text35">Terms &amp; Privacy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="role-text36">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="role-text37">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="role-text38">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="role-text39">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="role-text40">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name22"
      ></Footer>
    </div>
  )
}

export default Role
