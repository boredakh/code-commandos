import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOut from '../components/nav-bar-out'
import SignInorg from '../components/sign-inorg'
import Footer from '../components/footer'
import './sign-in1.css'

const SignIn1 = (props) => {
  return (
    <div className="sign-in1-container">
      <Helmet>
        <title>SignIn1 - Which Second Hand Lion</title>
        <meta property="og:title" content="SignIn1 - Which Second Hand Lion" />
      </Helmet>
      <NavBarOut
        link1={
          <Fragment>
            <span className="sign-in1-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="sign-in1-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="sign-in1-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="sign-in1-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="sign-in1-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="sign-in1-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="sign-in1-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="sign-in1-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="sign-in1-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="sign-in1-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="sign-in1-text20">Find Volunteers</span>
          </Fragment>
        }
        rootClassName="nav-bar-outroot-class-name12"
        page1Description={
          <Fragment>
            <span className="sign-in1-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="sign-in1-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="sign-in1-text23">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="sign-in1-text24">Page Four Description</span>
          </Fragment>
        }
      ></NavBarOut>
      <SignInorg
        action11={
          <Fragment>
            <span className="sign-in1-text25">Sign in</span>
          </Fragment>
        }
        action21={
          <Fragment>
            <span className="sign-in1-text26">Create an account</span>
          </Fragment>
        }
        content11={
          <Fragment>
            <span className="sign-in1-text27">New to our community</span>
          </Fragment>
        }
        heading11={
          <Fragment>
            <span className="sign-in1-text28">Sign in As Organisation</span>
          </Fragment>
        }
        rootClassName="sign-inorgroot-class-name1"
      ></SignInorg>
      <Footer
        link1={
          <Fragment>
            <span className="sign-in1-text29">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="sign-in1-text30">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="sign-in1-text31">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="sign-in1-text32">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="sign-in1-text33">Terms &amp; Privacy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="sign-in1-text34">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="sign-in1-text35">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="sign-in1-text36">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="sign-in1-text37">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="sign-in1-text38">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name30"
      ></Footer>
    </div>
  )
}

export default SignIn1
