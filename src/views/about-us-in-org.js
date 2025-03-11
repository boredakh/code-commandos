import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOrgIn from '../components/nav-bar-org-in'
import AboutUs1 from '../components/about-us1'
import OurTeam from '../components/our-team'
import Aboutus3 from '../components/aboutus3'
import FAQ8 from '../components/faq8'
import Footer from '../components/footer'
import './about-us-in-org.css'

const AboutUsInOrg = (props) => {
  return (
    <div className="about-us-in-org-container">
      <Helmet>
        <title>AboutUsInOrg - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="AboutUsInOrg - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarOrgIn
        link1={
          <Fragment>
            <span className="about-us-in-org-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-us-in-org-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-us-in-org-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-us-in-org-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="about-us-in-org-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="about-us-in-org-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="about-us-in-org-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="about-us-in-org-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-us-in-org-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-us-in-org-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="about-us-in-org-text20">Find Volunteers</span>
          </Fragment>
        }
        button121={
          <Fragment>
            <span className="about-us-in-org-text21">Profile</span>
          </Fragment>
        }
        rootClassName="nav-bar-org-inroot-class-name1"
        page1Description={
          <Fragment>
            <span className="about-us-in-org-text22">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="about-us-in-org-text23">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="about-us-in-org-text24">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="about-us-in-org-text25">
              Page Four Description
            </span>
          </Fragment>
        }
      ></NavBarOrgIn>
      <AboutUs1
        slogan1={
          <Fragment>
            <span className="about-us-in-org-text26">About Us</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-us-in-org-text27">
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
            <span className="about-us-in-org-text28">Reach coSec</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-us-in-org-text29">
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
            <span className="about-us-in-org-text30">Join</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-us-in-org-text31">Find a match</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-us-in-org-text32">
              Search for volunteer opportunities, trustees or volunteers, and
              make contact.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-us-in-org-text33">
              Join our community and create a great profile to make the most of
              our service.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-us-in-org-text34">
              Are you a good fit? Talk it through and find your match.
            </span>
          </Fragment>
        }
      ></AboutUs1>
      <OurTeam
        member1={
          <Fragment>
            <span className="about-us-in-org-text35">Usman</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="about-us-in-org-text36">Rajib</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="about-us-in-org-text37">Shahriar</span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="about-us-in-org-text38">Ety</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-us-in-org-text39">Join Our Team Today!</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-us-in-org-text40">
              The team behind  Reach CoSec
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-us-in-org-text41">Meet our team</span>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="about-us-in-org-text42">UI/Scrum Master</span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="about-us-in-org-text43">Legal Advisor/Design</span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="about-us-in-org-text44">Backend engineer</span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="about-us-in-org-text45">Head Designer</span>
          </Fragment>
        }
      ></OurTeam>
      <Aboutus3
        email1={
          <Fragment>
            <span className="about-us-in-org-text46">s4303218@lsbu.ac.uk</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="about-us-in-org-text47">+1 (555) 000-0000</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="about-us-in-org-text48">
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
            <span className="about-us-in-org-text56">
              Get in touch with us today!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-us-in-org-text57">Contact us</span>
          </Fragment>
        }
      ></Aboutus3>
      <FAQ8
        heading1={
          <Fragment>
            <span className="about-us-in-org-text58">FAQs</span>
          </Fragment>
        }
        faq3Question={
          <Fragment>
            <span className="about-us-in-org-text59">
              How volunteers can help your small charity
            </span>
          </Fragment>
        }
        faq1Question4={
          <Fragment>
            <span className="about-us-in-org-text60">
              Who is this service for?
            </span>
          </Fragment>
        }
        faq2Question1={
          <Fragment>
            <span className="about-us-in-org-text61">
              How to recruit volunteers with skills
            </span>
          </Fragment>
        }
      ></FAQ8>
      <Footer
        link1={
          <Fragment>
            <span className="about-us-in-org-text62">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-us-in-org-text63">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-us-in-org-text64">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-us-in-org-text65">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-us-in-org-text66">Terms &amp; Privacy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="about-us-in-org-text67">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="about-us-in-org-text68">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="about-us-in-org-text69">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about-us-in-org-text70">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about-us-in-org-text71">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name18"
      ></Footer>
    </div>
  )
}

export default AboutUsInOrg
