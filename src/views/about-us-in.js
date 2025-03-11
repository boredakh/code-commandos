import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarIn from '../components/nav-bar-in'
import AboutUs1 from '../components/about-us1'
import OurTeam from '../components/our-team'
import Aboutus3 from '../components/aboutus3'
import FAQ8 from '../components/faq8'
import Footer from '../components/footer'
import './about-us-in.css'

const AboutUsIn = (props) => {
  return (
    <div className="about-us-in-container">
      <Helmet>
        <title>AboutUsIn - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="AboutUsIn - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarIn
        link1={
          <Fragment>
            <span className="about-us-in-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-us-in-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-us-in-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-us-in-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="about-us-in-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="about-us-in-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="about-us-in-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="about-us-in-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-us-in-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-us-in-text19">Log in</span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="about-us-in-text20">Profile</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="about-us-in-text21">Find Volunteers</span>
          </Fragment>
        }
        rootClassName="nav-bar-inroot-class-name4"
        page1Description={
          <Fragment>
            <span className="about-us-in-text22">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="about-us-in-text23">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="about-us-in-text24">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="about-us-in-text25">Page Four Description</span>
          </Fragment>
        }
      ></NavBarIn>
      <AboutUs1
        slogan1={
          <Fragment>
            <span className="about-us-in-text26">About Us</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-us-in-text27">
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
            <span className="about-us-in-text28">Reach coSec</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-us-in-text29">
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
            <span className="about-us-in-text30">Join</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-us-in-text31">Find a match</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-us-in-text32">
              Search for volunteer opportunities, trustees or volunteers, and
              make contact.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-us-in-text33">
              Join our community and create a great profile to make the most of
              our service.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-us-in-text34">
              Are you a good fit? Talk it through and find your match.
            </span>
          </Fragment>
        }
      ></AboutUs1>
      <OurTeam
        member1={
          <Fragment>
            <span className="about-us-in-text35">Usman</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="about-us-in-text36">Rajib</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="about-us-in-text37">Shahriar</span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="about-us-in-text38">Ety</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-us-in-text39">Join Our Team Today!</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-us-in-text40">
              The team behind  Reach CoSec
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-us-in-text41">Meet our team</span>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="about-us-in-text42">UI/Scrum Master</span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="about-us-in-text43">Legal Advisor/Design</span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="about-us-in-text44">Backend engineer</span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="about-us-in-text45">Head Designer</span>
          </Fragment>
        }
      ></OurTeam>
      <Aboutus3
        email1={
          <Fragment>
            <span className="about-us-in-text46">s4303218@lsbu.ac.uk</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="about-us-in-text47">+1 (555) 000-0000</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="about-us-in-text48">
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
            <span className="about-us-in-text56">
              Get in touch with us today!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-us-in-text57">Contact us</span>
          </Fragment>
        }
      ></Aboutus3>
      <FAQ8
        heading1={
          <Fragment>
            <span className="about-us-in-text58">FAQs</span>
          </Fragment>
        }
        faq3Question={
          <Fragment>
            <span className="about-us-in-text59">
              How volunteers can help your small charity
            </span>
          </Fragment>
        }
        faq1Question4={
          <Fragment>
            <span className="about-us-in-text60">Who is this service for?</span>
          </Fragment>
        }
        faq2Question1={
          <Fragment>
            <span className="about-us-in-text61">
              How to recruit volunteers with skills
            </span>
          </Fragment>
        }
      ></FAQ8>
      <Footer
        link1={
          <Fragment>
            <span className="about-us-in-text62">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-us-in-text63">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-us-in-text64">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-us-in-text65">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-us-in-text66">Terms &amp; Privacy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="about-us-in-text67">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="about-us-in-text68">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="about-us-in-text69">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about-us-in-text70">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about-us-in-text71">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name12"
      ></Footer>
    </div>
  )
}

export default AboutUsIn
