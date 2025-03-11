import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOrgIn from '../components/nav-bar-org-in'
import Call2AHomeInOrg from '../components/call2a-home-in-org'
import Iconshome from '../components/iconshome'
import BlogPosthome from '../components/blog-posthome'
import Testimonialshome from '../components/testimonialshome'
import Footer from '../components/footer'
import './homeinorg.css'

const Homeinorg = (props) => {
  return (
    <div className="homeinorg-container">
      <Helmet>
        <title>Homeinorg - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="Homeinorg - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarOrgIn
        link1={
          <Fragment>
            <span className="homeinorg-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="homeinorg-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="homeinorg-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="homeinorg-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="homeinorg-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="homeinorg-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="homeinorg-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="homeinorg-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="homeinorg-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="homeinorg-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="homeinorg-text20">Find Volunteers</span>
          </Fragment>
        }
        button121={
          <Fragment>
            <span className="homeinorg-text21">Profile</span>
          </Fragment>
        }
        rootClassName="nav-bar-org-inroot-class-name"
        page1Description={
          <Fragment>
            <span className="homeinorg-text22">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="homeinorg-text23">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="homeinorg-text24">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="homeinorg-text25">Page Four Description</span>
          </Fragment>
        }
      ></NavBarOrgIn>
      <Call2AHomeInOrg
        text={
          <Fragment>
            <span className="homeinorg-text26">Find Opportunities</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="homeinorg-text27">Find Volunteers</span>
          </Fragment>
        }
        rootClassName="call2a-home-in-orgroot-class-name"
      ></Call2AHomeInOrg>
      <Iconshome
        plan11={
          <Fragment>
            <span className="homeinorg-text28">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="homeinorg-text29">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="homeinorg-text30">Enterprise plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="homeinorg-text31">Join</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="homeinorg-text32">
              <span>Explore</span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="homeinorg-text36">
              <span className="homeinorg-text37">Find a match</span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="homeinorg-text40">$200/yr</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="homeinorg-text41">$299/yr</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="homeinorg-text42">$499/yr</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="homeinorg-text43">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="homeinorg-text44">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="homeinorg-text45">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="homeinorg-text46">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="homeinorg-text47">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="homeinorg-text48">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="homeinorg-text49">
              Join our community and create a great profile to make the most of
              our service.
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="homeinorg-text50">
              <span>
                Search for volunteer opportunities, trustees or volunteers, and
                make contact.
              </span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="homeinorg-text54">
              <span>
                Are you a good fit? Talk it through and find your match.
              </span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="homeinorg-text58">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="homeinorg-text59">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="homeinorg-text60">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="homeinorg-text61">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="homeinorg-text62">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="homeinorg-text63">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="homeinorg-text64">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="homeinorg-text65">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="homeinorg-text66">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="homeinorg-text67">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="homeinorg-text68">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="homeinorg-text69">Feature text goes here</span>
          </Fragment>
        }
      ></Iconshome>
      <BlogPosthome
        category={
          <Fragment>
            <span className="homeinorg-text70">Blogs</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="homeinorg-text71">By Abdul J.</span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="homeinorg-text72">
              How to become a skills-based volunteer
            </span>
          </Fragment>
        }
      ></BlogPosthome>
      <Testimonialshome
        review1={
          <Fragment>
            <span className="homeinorg-text73">
              &quot;Theres&apos;s nothing else like it&quot;
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="homeinorg-text74">
              &quot;Would recommend&quot;
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="homeinorg-text75">
              &quot;I was really lost  before I found CoSec Reach. There&apos;s
              nothing like it.&quot;
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="homeinorg-text76">Lady Jane</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="homeinorg-text77">Lorem Ipsum</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="homeinorg-text78">Jane Doe</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="homeinorg-text79">Trainee Cosec, Diageo</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="homeinorg-text80">2nd Year Law Graduate</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="homeinorg-text81">Level 6 Foundation CoSec</span>
          </Fragment>
        }
      ></Testimonialshome>
      <Footer
        link1={
          <Fragment>
            <span className="homeinorg-text82">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="homeinorg-text83">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="homeinorg-text84">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="homeinorg-text85">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="homeinorg-text86">Terms &amp; Privacy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="homeinorg-text87">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="homeinorg-text88">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="homeinorg-text89">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="homeinorg-text90">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="homeinorg-text91">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name17"
      ></Footer>
    </div>
  )
}

export default Homeinorg
