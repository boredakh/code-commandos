import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOrgIn from '../components/nav-bar-org-in'
import PostAd from '../components/post-ad'
import DashboardBanner from '../components/dashboard-banner'
import DashboardOrgs from '../components/dashboard-orgs'
import Footer from '../components/footer'
import './find-volunteers-in-org.css'

const FindVolunteersInOrg = (props) => {
  return (
    <div className="find-volunteers-in-org-container">
      <Helmet>
        <title>FindVolunteersInOrg - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="FindVolunteersInOrg - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarOrgIn
        link1={
          <Fragment>
            <span className="find-volunteers-in-org-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="find-volunteers-in-org-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="find-volunteers-in-org-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="find-volunteers-in-org-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="find-volunteers-in-org-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="find-volunteers-in-org-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="find-volunteers-in-org-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="find-volunteers-in-org-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="find-volunteers-in-org-text18">
              Find Opportunities
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="find-volunteers-in-org-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="find-volunteers-in-org-text20">
              Find Volunteers
            </span>
          </Fragment>
        }
        button121={
          <Fragment>
            <span className="find-volunteers-in-org-text21">Profile</span>
          </Fragment>
        }
        rootClassName="nav-bar-org-inroot-class-name7"
        page1Description={
          <Fragment>
            <span className="find-volunteers-in-org-text22">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="find-volunteers-in-org-text23">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="find-volunteers-in-org-text24">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="find-volunteers-in-org-text25">
              Page Four Description
            </span>
          </Fragment>
        }
      ></NavBarOrgIn>
      <PostAd
        text={
          <Fragment>
            <span className="find-volunteers-in-org-text26">Create</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="find-volunteers-in-org-text27">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="find-volunteers-in-org-text28">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="find-volunteers-in-org-text29">
              Enterprise plan
            </span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="find-volunteers-in-org-text30">
              <span>Create Listing</span>
              <br></br>
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="find-volunteers-in-org-text33">$200/yr</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="find-volunteers-in-org-text34">$299/yr</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="find-volunteers-in-org-text35">$499/yr</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="find-volunteers-in-org-text36">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="find-volunteers-in-org-text37">
              or $20 monthly
            </span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="find-volunteers-in-org-text38">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="find-volunteers-in-org-text39">
              or $29 monthly
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="find-volunteers-in-org-text40">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="find-volunteers-in-org-text41">
              or $49 monthly
            </span>
          </Fragment>
        }
        rootClassName="post-adroot-class-name1"
        plan1Feature11={
          <Fragment>
            <span className="find-volunteers-in-org-text42">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="find-volunteers-in-org-text43">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="find-volunteers-in-org-text44">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="find-volunteers-in-org-text45">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="find-volunteers-in-org-text46">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="find-volunteers-in-org-text47">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="find-volunteers-in-org-text48">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="find-volunteers-in-org-text49">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="find-volunteers-in-org-text50">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="find-volunteers-in-org-text51">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="find-volunteers-in-org-text52">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="find-volunteers-in-org-text53">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></PostAd>
      <DashboardBanner
        plan2Price={
          <Fragment>
            <span className="find-volunteers-in-org-text54">
              <span>Dashboard</span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="dashboard-bannerroot-class-name2"
      ></DashboardBanner>
      <DashboardOrgs
        button={
          <Fragment>
            <span className="find-volunteers-in-org-text57">
              View Applications
            </span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="find-volunteers-in-org-text58">Listings</span>
          </Fragment>
        }
        button2={
          <Fragment>
            <span className="find-volunteers-in-org-text59">Notifications</span>
          </Fragment>
        }
        rootClassName="dashboard-orgsroot-class-name1"
      ></DashboardOrgs>
      <Footer
        link1={
          <Fragment>
            <span className="find-volunteers-in-org-text60">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="find-volunteers-in-org-text61">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="find-volunteers-in-org-text62">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="find-volunteers-in-org-text63">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="find-volunteers-in-org-text64">
              Terms &amp; Privacy
            </span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="find-volunteers-in-org-text65">
              Find Opportunities
            </span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="find-volunteers-in-org-text66">
              Find Volunteers
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="find-volunteers-in-org-text67">
              Terms of Service
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="find-volunteers-in-org-text68">
              Cookies Settings
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="find-volunteers-in-org-text69">
              Privacy Policy
            </span>
          </Fragment>
        }
        rootClassName="footerroot-class-name21"
      ></Footer>
    </div>
  )
}

export default FindVolunteersInOrg
