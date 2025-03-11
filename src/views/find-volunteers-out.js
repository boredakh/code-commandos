import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOut from '../components/nav-bar-out'
import PostAdOut from '../components/post-ad-out'
import Footer from '../components/footer'
import './find-volunteers-out.css'

const FindVolunteersOut = (props) => {
  return (
    <div className="find-volunteers-out-container">
      <Helmet>
        <title>FindVolunteersOut - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="FindVolunteersOut - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarOut
        link1={
          <Fragment>
            <span className="find-volunteers-out-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="find-volunteers-out-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="find-volunteers-out-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="find-volunteers-out-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="find-volunteers-out-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="find-volunteers-out-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="find-volunteers-out-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="find-volunteers-out-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="find-volunteers-out-text18">
              Find Opportunities
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="find-volunteers-out-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="find-volunteers-out-text20">Find Volunteers</span>
          </Fragment>
        }
        rootClassName="nav-bar-outroot-class-name1"
        page1Description={
          <Fragment>
            <span className="find-volunteers-out-text21">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="find-volunteers-out-text22">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="find-volunteers-out-text23">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="find-volunteers-out-text24">
              Page Four Description
            </span>
          </Fragment>
        }
      ></NavBarOut>
      <PostAdOut
        text={
          <Fragment>
            <span className="find-volunteers-out-text25">Create</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="find-volunteers-out-text26">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="find-volunteers-out-text27">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="find-volunteers-out-text28">Enterprise plan</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="find-volunteers-out-text29">
              <span>Create Listing</span>
              <br></br>
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="find-volunteers-out-text32">$200/yr</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="find-volunteers-out-text33">$299/yr</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="find-volunteers-out-text34">$499/yr</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="find-volunteers-out-text35">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="find-volunteers-out-text36">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="find-volunteers-out-text37">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="find-volunteers-out-text38">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="find-volunteers-out-text39">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="find-volunteers-out-text40">or $49 monthly</span>
          </Fragment>
        }
        rootClassName="post-ad-outroot-class-name"
        plan1Feature11={
          <Fragment>
            <span className="find-volunteers-out-text41">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="find-volunteers-out-text42">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="find-volunteers-out-text43">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="find-volunteers-out-text44">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="find-volunteers-out-text45">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="find-volunteers-out-text46">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="find-volunteers-out-text47">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="find-volunteers-out-text48">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="find-volunteers-out-text49">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="find-volunteers-out-text50">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="find-volunteers-out-text51">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="find-volunteers-out-text52">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></PostAdOut>
      <Footer
        link1={
          <Fragment>
            <span className="find-volunteers-out-text53">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="find-volunteers-out-text54">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="find-volunteers-out-text55">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="find-volunteers-out-text56">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="find-volunteers-out-text57">
              Terms &amp; Privacy
            </span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="find-volunteers-out-text58">
              Find Opportunities
            </span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="find-volunteers-out-text59">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="find-volunteers-out-text60">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="find-volunteers-out-text61">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="find-volunteers-out-text62">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name4"
      ></Footer>
    </div>
  )
}

export default FindVolunteersOut
