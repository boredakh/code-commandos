import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOut from '../components/nav-bar-out'
import AboutUs1 from '../components/about-us1'
import OurTeam from '../components/our-team'
import Aboutus3 from '../components/aboutus3'
import FAQ8 from '../components/faq8'
import Footer from '../components/footer'
import './about-us-out.css'

const AboutUsOut = (props) => {
  return (
    <div className="about-us-out-container">
      <Helmet>
        <title>AboutUsOut - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="AboutUsOut - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarOut
        link1={
          <Fragment>
            <span className="about-us-out-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-us-out-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-us-out-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-us-out-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="about-us-out-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="about-us-out-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="about-us-out-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="about-us-out-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-us-out-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-us-out-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="about-us-out-text20">Find Volunteers</span>
          </Fragment>
        }
        rootClassName="nav-bar-outroot-class-name6"
        page1Description={
          <Fragment>
            <span className="about-us-out-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="about-us-out-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="about-us-out-text23">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="about-us-out-text24">Page Four Description</span>
          </Fragment>
        }
      ></NavBarOut>
      <AboutUs1
        slogan1={
          <Fragment>
            <span className="about-us-out-text25">About Us</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-us-out-text26">
              We help aspiring Company Secretaries whether they have law related
              experience or not to gain real world experience in organisations
              that need company secretarial and governance experience. We
              facilitate meaningful connections between organisations and
              willing volunteers.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-us-out-text27">Reach coSec</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-us-out-text28">
              Explore
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-us-out-text29">Join</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-us-out-text30">Find a match</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-us-out-text31">
              Search for volunteer opportunities, trustees or volunteers, and
              make contact.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-us-out-text32">
              Join our community and create a great profile to make the most of
              our service.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-us-out-text33">
              Are you a good fit? Talk it through and find your match.
            </span>
          </Fragment>
        }
      ></AboutUs1>
      <OurTeam
        member1={
          <Fragment>
            <span className="about-us-out-text34">Usman</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="about-us-out-text35">Rajib</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="about-us-out-text36">Shahriar</span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="about-us-out-text37">Ety</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-us-out-text38">Join Our Team Today!</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-us-out-text39">
              The team behind  Reach CoSec
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-us-out-text40">Meet our team</span>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="about-us-out-text41">UI/Scrum Master</span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="about-us-out-text42">Legal Advisor/Design</span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="about-us-out-text43">Backend engineer</span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="about-us-out-text44">Head Designer</span>
          </Fragment>
        }
      ></OurTeam>
      <Aboutus3
        email1={
          <Fragment>
            <span className="about-us-out-text45">s4303218@lsbu.ac.uk</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="about-us-out-text46">+1 (555) 000-0000</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="about-us-out-text47">
              <span>Southwark Campus Library - LSBU Hub</span>
              <br></br>
              <span>100-116 London Road</span>
              <br></br>
              <span>London</span>
              <br></br>
              <span>SE1 6LN</span>
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-us-out-text55">
              Get in touch with us today!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-us-out-text56">Contact us</span>
          </Fragment>
        }
      ></Aboutus3>
      <FAQ8
        heading1={
          <Fragment>
            <span className="about-us-out-text57">FAQs</span>
          </Fragment>
        }
        faq3Question={
          <Fragment>
            <span className="about-us-out-text58">
              How volunteers can help your small charity
            </span>
          </Fragment>
        }
        faq1Question4={
          <Fragment>
            <span className="about-us-out-text59">
              Who is this service for?
            </span>
          </Fragment>
        }
        faq2Question1={
          <Fragment>
            <span className="about-us-out-text60">
              How to recruit volunteers with skills
            </span>
          </Fragment>
        }
      ></FAQ8>
      <Footer
        link1={
          <Fragment>
            <span className="about-us-out-text61">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-us-out-text62">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-us-out-text63">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-us-out-text64">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-us-out-text65">Terms &amp; Privacy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="about-us-out-text66">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="about-us-out-text67">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="about-us-out-text68">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about-us-out-text69">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about-us-out-text70">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name11"
      ></Footer>
    </div>
  )
}

export default AboutUsOut
