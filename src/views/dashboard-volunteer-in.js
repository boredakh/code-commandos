import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarIn from '../components/nav-bar-in'
import DashboardBanner from '../components/dashboard-banner'
import DashboardVol from '../components/dashboard-vol'
import Footer from '../components/footer'
import './dashboard-volunteer-in.css'

const DashboardVolunteerIn = (props) => {
  return (
    <div className="dashboard-volunteer-in-container">
      <Helmet>
        <title>DashboardVolunteerIn - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="DashboardVolunteerIn - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarIn
        link1={
          <Fragment>
            <span className="dashboard-volunteer-in-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="dashboard-volunteer-in-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="dashboard-volunteer-in-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="dashboard-volunteer-in-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="dashboard-volunteer-in-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="dashboard-volunteer-in-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="dashboard-volunteer-in-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="dashboard-volunteer-in-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="dashboard-volunteer-in-text18">
              Find Opportunities
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="dashboard-volunteer-in-text19">Log in</span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="dashboard-volunteer-in-text20">Profile</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="dashboard-volunteer-in-text21">
              Find Volunteers
            </span>
          </Fragment>
        }
        rootClassName="nav-bar-inroot-class-name6"
        page1Description={
          <Fragment>
            <span className="dashboard-volunteer-in-text22">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="dashboard-volunteer-in-text23">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="dashboard-volunteer-in-text24">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="dashboard-volunteer-in-text25">
              Page Four Description
            </span>
          </Fragment>
        }
      ></NavBarIn>
      <DashboardBanner
        plan2Price={
          <Fragment>
            <span className="dashboard-volunteer-in-text26">
              <span>Dashboard</span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="dashboard-bannerroot-class-name1"
      ></DashboardBanner>
      <DashboardVol
        button={
          <Fragment>
            <span className="dashboard-volunteer-in-text29">
              View Applications
            </span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="dashboard-volunteer-in-text30">Listings</span>
          </Fragment>
        }
        button2={
          <Fragment>
            <span className="dashboard-volunteer-in-text31">Notifications</span>
          </Fragment>
        }
        rootClassName="dashboard-volroot-class-name"
      ></DashboardVol>
      <Footer
        link1={
          <Fragment>
            <span className="dashboard-volunteer-in-text32">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="dashboard-volunteer-in-text33">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="dashboard-volunteer-in-text34">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="dashboard-volunteer-in-text35">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="dashboard-volunteer-in-text36">
              Terms &amp; Privacy
            </span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="dashboard-volunteer-in-text37">
              Find Opportunities
            </span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="dashboard-volunteer-in-text38">
              Find Volunteers
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="dashboard-volunteer-in-text39">
              Terms of Service
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="dashboard-volunteer-in-text40">
              Cookies Settings
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="dashboard-volunteer-in-text41">
              Privacy Policy
            </span>
          </Fragment>
        }
        rootClassName="footerroot-class-name15"
      ></Footer>
    </div>
  )
}

export default DashboardVolunteerIn
