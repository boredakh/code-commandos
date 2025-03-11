import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOut from '../components/nav-bar-out'
import Call2AHome from '../components/call2a-home'
import Iconshome from '../components/iconshome'
import BlogPosthome from '../components/blog-posthome'
import Testimonialshome from '../components/testimonialshome'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Which Second Hand Lion</title>
        <meta property="og:title" content="Which Second Hand Lion" />
      </Helmet>
      <NavBarOut
        link1={
          <Fragment>
            <span className="home-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="home-text20">Find Volunteers</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text23">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text24">Page Four Description</span>
          </Fragment>
        }
      ></NavBarOut>
      <Call2AHome
        text={
          <Fragment>
            <span className="home-text25">Find Opportunities</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text26">Find Volunteers</span>
          </Fragment>
        }
      ></Call2AHome>
      <Iconshome
        plan11={
          <Fragment>
            <span className="home-text27">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text28">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text29">Enterprise plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text30">Join</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text31">
              <span>Explore</span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text35">
              <span className="home-text36">Find a match</span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text39">$200/yr</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text40">$299/yr</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text41">$499/yr</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text42">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text43">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text44">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text45">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text46">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text47">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text48">
              Join our community and create a great profile to make the most of
              our service.
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text49">
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
            <span className="home-text53">
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
            <span className="home-text57">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text58">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text59">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text60">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text61">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text62">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text63">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text64">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text65">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text66">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text67">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text68">Feature text goes here</span>
          </Fragment>
        }
      ></Iconshome>
      <BlogPosthome
        category={
          <Fragment>
            <span className="home-text69">Blogs</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="home-text70">By Abdul J.</span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="home-text71">
              How to become a skills-based volunteer
            </span>
          </Fragment>
        }
      ></BlogPosthome>
      <Testimonialshome
        review1={
          <Fragment>
            <span className="home-text72">
              &quot;Theres&apos;s nothing else like it&quot;
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text73">&quot;Would recommend&quot;</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text74">
              &quot;I was really lost  before I found CoSec Reach. There&apos;s
              nothing like it.&quot;
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text75">Lady Jane</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text76">Lorem Ipsum</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text77">Jane Doe</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text78">Trainee Cosec, Diageo</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text79">2nd Year Law Graduate</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text80">Level 6 Foundation CoSec</span>
          </Fragment>
        }
      ></Testimonialshome>
      <Footer
        link1={
          <Fragment>
            <span className="home-text81">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text82">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text83">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text84">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text85">Terms &amp; Privacy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="home-text86">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="home-text87">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text88">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text89">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text90">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name"
      ></Footer>
    </div>
  )
}

export default Home
