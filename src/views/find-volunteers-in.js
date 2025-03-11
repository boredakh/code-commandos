import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarIn from '../components/nav-bar-in'
import PostAd from '../components/post-ad'
import DashboardBanner from '../components/dashboard-banner'
import DashboardOrgs from '../components/dashboard-orgs'
import Footer from '../components/footer'
import './find-volunteers-in.css'

const FindVolunteersIn = (props) => {
  return (
    <div className="find-volunteers-in-container">
      <Helmet>
        <title>FindVolunteersIn - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="FindVolunteersIn - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarIn
        link1={
          <Fragment>
            <span className="find-volunteers-in-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="find-volunteers-in-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="find-volunteers-in-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="find-volunteers-in-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="find-volunteers-in-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="find-volunteers-in-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="find-volunteers-in-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="find-volunteers-in-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="find-volunteers-in-text18">
              Find Opportunities
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="find-volunteers-in-text19">Log in</span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="find-volunteers-in-text20">Profile</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="find-volunteers-in-text21">Find Volunteers</span>
          </Fragment>
        }
        rootClassName="nav-bar-inroot-class-name"
        page1Description={
          <Fragment>
            <span className="find-volunteers-in-text22">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="find-volunteers-in-text23">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="find-volunteers-in-text24">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="find-volunteers-in-text25">
              Page Four Description
            </span>
          </Fragment>
        }
      ></NavBarIn>
      <PostAd
        text={
          <Fragment>
            <span className="find-volunteers-in-text26">Create</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="find-volunteers-in-text27">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="find-volunteers-in-text28">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="find-volunteers-in-text29">Enterprise plan</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="find-volunteers-in-text30">
              <span>Create Listing</span>
              <br></br>
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="find-volunteers-in-text33">$200/yr</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="find-volunteers-in-text34">$299/yr</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="find-volunteers-in-text35">$499/yr</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="find-volunteers-in-text36">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="find-volunteers-in-text37">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="find-volunteers-in-text38">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="find-volunteers-in-text39">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="find-volunteers-in-text40">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="find-volunteers-in-text41">or $49 monthly</span>
          </Fragment>
        }
        rootClassName="post-adroot-class-name"
        plan1Feature11={
          <Fragment>
            <span className="find-volunteers-in-text42">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="find-volunteers-in-text43">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="find-volunteers-in-text44">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="find-volunteers-in-text45">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="find-volunteers-in-text46">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="find-volunteers-in-text47">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="find-volunteers-in-text48">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="find-volunteers-in-text49">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="find-volunteers-in-text50">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="find-volunteers-in-text51">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="find-volunteers-in-text52">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="find-volunteers-in-text53">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></PostAd>
      <DashboardBanner
        plan2Price={
          <Fragment>
            <span className="find-volunteers-in-text54">
              <span>Dashboard</span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="dashboard-bannerroot-class-name"
      ></DashboardBanner>
      <DashboardOrgs
        button={
          <Fragment>
            <span className="find-volunteers-in-text57">View Applications</span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="find-volunteers-in-text58">Listings</span>
          </Fragment>
        }
        button2={
          <Fragment>
            <span className="find-volunteers-in-text59">Notifications</span>
          </Fragment>
        }
        rootClassName="dashboard-orgsroot-class-name"
      ></DashboardOrgs>
      <Footer
        link1={
          <Fragment>
            <span className="find-volunteers-in-text60">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="find-volunteers-in-text61">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="find-volunteers-in-text62">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="find-volunteers-in-text63">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="find-volunteers-in-text64">
              Terms &amp; Privacy
            </span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="find-volunteers-in-text65">
              Find Opportunities
            </span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="find-volunteers-in-text66">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="find-volunteers-in-text67">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="find-volunteers-in-text68">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="find-volunteers-in-text69">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name2"
      ></Footer>
    </div>
  )
}

export default FindVolunteersIn
